import React, { useState } from 'react';
import { Search, FileText, Eye, Download } from 'lucide-react';
import './DocumentPage.css';

// 1. Dữ liệu mẫu (Data)
const documentsData = [
  { id: 1, title: "Di chúc của Chủ tịch Hồ Chí Minh", category: "Di sản", desc: "Văn kiện lịch sử quan trọng thể hiện tầm nhìn và tâm nguyện của Người", views: 1523, year: 1969 },
  { id: 2, title: "Đường Kách mệnh", category: "Lý luận", desc: "Tác phẩm quan trọng về con đường cách mạng Việt Nam", views: 892, year: 1927 },
  { id: 3, title: "Tuyên ngôn Độc lập", category: "Lịch sử", desc: "Văn kiện khai sinh nước Việt Nam Dân chủ Cộng hòa", views: 2341, year: 1945 },
  { id: 4, title: "Nâng cao đạo đức cách mạng", category: "Đạo đức", desc: "Những bài học về phẩm chất đạo đức của người cách mạng", views: 756, year: 1958 },
  { id: 5, title: "Bản án chế độ thực dân Pháp", category: "Chống thực dân", desc: "Tố cáo tội ác của chế độ thực dân Pháp ở các thuộc địa", views: 634, year: 1925 },
  { id: 6, title: "Sửa đổi lối làm việc", category: "Phong cách", desc: "Phương pháp làm việc khoa học và hiệu quả", views: 445, year: 1947 },
];

const categories = ["Tất cả", "Di sản", "Lý luận", "Lịch sử", "Đạo đức", "Chống thực dân", "Phong cách"];

// 2. Component con: DocumentCard
const DocumentCard = ({ doc }) => (
  <div className="doc-card">
    <div className="card-header">
      <div className="doc-icon"><FileText size={24} /></div>
      <span className="tag-category">{doc.category}</span>
    </div>
    <h3 className="doc-title">{doc.title}</h3>
    <p className="doc-desc">{doc.desc}</p>
    
    <div className="card-actions">
      <button className="btn-view"><Eye size={16} /> Xem</button>
      <button className="btn-download"><Download size={16} /> Tải về</button>
    </div>
  </div>
);

// 3. Trang chính: DocumentPage
const DocumentPage = () => {
  const [activeTab, setActiveTab] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");

  // Logic lọc dữ liệu
  const filteredDocs = documentsData.filter(doc => {
    const matchesTab = activeTab === "Tất cả" || doc.category === activeTab;
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="document-page">
      {/* Header tìm kiếm */}
      <header className="doc-hero">
        <h1>Kho <span className="highlight">Tài liệu</span></h1>
        <p className="sub-title">Tìm kiếm và tra cứu các tài liệu về tư tưởng, đạo đức, phong cách Hồ Chí Minh</p>
        
        <div className="search-box">
          <Search className="search-icon" size={20} />
          <input 
            type="text" 
            placeholder="Tìm kiếm tài liệu..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      {/* Thanh lọc (Filter) */}
      <div className="filter-container">
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`filter-pill ${activeTab === cat ? 'active' : ''}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Lưới hiển thị Card */}
      <div className="doc-grid">
        {filteredDocs.length > 0 ? (
          filteredDocs.map(doc => <DocumentCard key={doc.id} doc={doc} />)
        ) : (
          <p className="no-results">Không tìm thấy tài liệu phù hợp.</p>
        )}
      </div>
    </div>
  );
};

export default DocumentPage;