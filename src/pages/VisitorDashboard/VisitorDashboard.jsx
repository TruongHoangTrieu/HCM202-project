import React, { useState, useEffect } from "react";
import { visitorService } from "../../services/visitorService";
import { 
  Users, ShieldCheck, Activity, Calendar, ArrowLeft, 
  RefreshCcw, Monitor, Smartphone, Globe, Clock, Hash,
  ChevronLeft, ChevronRight
} from "lucide-react";
import "./VisitorDashboard.css";

const VisitorDashboard = () => {
  const [visitors, setVisitors] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // --- States cho Phân trang ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7; // Số lượng dòng mỗi trang

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [list, count] = await Promise.all([
        visitorService.getVisitorList(),
        visitorService.getVisitorCount()
      ]);
      setVisitors(list);
      setTotalCount(count);
      // Reset về trang 1 khi load lại dữ liệu
      setCurrentPage(1);
    } catch (error) {
      console.error("Lỗi:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // --- Logic Phân trang ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = visitors.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(visitors.length / itemsPerPage);

  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const getDeviceIcon = (ua) => {
    if (!ua) return <Globe size={18} className="icon-gray" />;
    if (ua.includes("iPhone") || ua.includes("Android")) return <Smartphone size={18} className="icon-blue" />;
    return <Monitor size={18} className="icon-purple" />;
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        
        {/* --- Header --- */}
        <header className="dashboard-header">
          <div className="header-left">
            <button className="btn-back" onClick={() => window.history.back()}>
              <ArrowLeft size={16} /> Quay lại trang chủ
            </button>
            <h1 className="page-title">
              Thống kê <span className="text-highlight">Truy cập</span>
            </h1>
            <p className="page-subtitle">Theo dõi lưu lượng người dùng và thiết bị.</p>
          </div>

          <div className="header-right">
            <div className="status-badge">
              <ShieldCheck size={14} /> Hệ thống ổn định
            </div>
            <button 
              className={`btn-refresh ${isLoading ? "spinning" : ""}`} 
              onClick={loadData}
              disabled={isLoading}
              title="Làm mới"
            >
              <RefreshCcw size={20} />
            </button>
          </div>
        </header>

        {/* --- Stats Cards --- */}
        <div className="stats-grid">
          <div className="stat-card card-blue">
            <div className="stat-info">
              <p className="stat-label">Tổng lượt truy cập</p>
              <h3 className="stat-value">
                {isLoading ? "..." : totalCount.toLocaleString()}
              </h3>
            </div>
            <div className="stat-icon-box">
              <Users size={24} />
            </div>
          </div>

          <div className="stat-card card-green">
            <div className="stat-info">
              <p className="stat-label">Trạng thái máy chủ</p>
              <h3 className="stat-value text-success">Tốt</h3>
            </div>
            <div className="stat-icon-box">
              <Activity size={24} />
            </div>
          </div>
        </div>

        {/* --- Table Section --- */}
        <div className="table-card">
          <div className="table-header">
            <div className="table-title">
              <Activity size={20} className="icon-blue" />
              <h2>Hoạt động gần đây</h2>
            </div>
            <div className="table-meta">
              Trang {currentPage} / {totalPages > 0 ? totalPages : 1}
            </div>
          </div>

          <div className="table-responsive">
            <table className="modern-table">
              <thead>
                <tr>
                  <th width="80"><Hash size={14} /> ID</th>
                  <th width="150"><Globe size={14} /> IP Address</th>
                  <th><Monitor size={14} /> Thiết bị</th>
                  <th width="180" className="text-right"><Clock size={14} /> Thời gian</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                   // Loading Skeleton
                   [...Array(5)].map((_, i) => (
                    <tr key={i} className="loading-row">
                      <td colSpan="4"><div className="skeleton-bar"></div></td>
                    </tr>
                  ))
                ) : currentItems.length > 0 ? (
                  currentItems.map((v) => (
                    <tr key={v.id}>
                      <td className="id-col">#{v.id}</td>
                      <td><span className="ip-badge">{v.ipAddress}</span></td>
                      <td>
                        <div className="device-info">
                          <div className="device-icon">{getDeviceIcon(v.userAgent)}</div>
                          <span className="device-name" title={v.userAgent}>{v.userAgent}</span>
                        </div>
                      </td>
                      <td className="text-right">
                        <div className="time-badge">
                          <Calendar size={13} /> {v.visitDate}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="empty-state">
                      Chưa có dữ liệu truy cập nào.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* --- Pagination Footer --- */}
          {!isLoading && visitors.length > 0 && (
            <div className="pagination-footer">
              <span className="pagination-info">
                Hiển thị <strong>{indexOfFirstItem + 1}</strong> - <strong>{Math.min(indexOfLastItem, visitors.length)}</strong> trong số <strong>{visitors.length}</strong> kết quả
              </span>
              <div className="pagination-controls">
                <button 
                  className="btn-page" 
                  disabled={currentPage === 1}
                  onClick={() => changePage(currentPage - 1)}
                >
                  <ChevronLeft size={16} />
                </button>
                
                {/* Hiển thị số trang đơn giản */}
                {[...Array(totalPages)].map((_, index) => {
                  const pageNum = index + 1;
                  // Chỉ hiển thị trang đầu, cuối, và trang xung quanh trang hiện tại để đỡ dài
                  if (
                    pageNum === 1 || 
                    pageNum === totalPages || 
                    (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={pageNum}
                        className={`btn-page-number ${currentPage === pageNum ? "active" : ""}`}
                        onClick={() => changePage(pageNum)}
                      >
                        {pageNum}
                      </button>
                    );
                  } else if (
                    pageNum === currentPage - 2 || 
                    pageNum === currentPage + 2
                  ) {
                    return <span key={pageNum} className="pagination-dots">...</span>;
                  }
                  return null;
                })}

                <button 
                  className="btn-page" 
                  disabled={currentPage === totalPages}
                  onClick={() => changePage(currentPage + 1)}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default VisitorDashboard;