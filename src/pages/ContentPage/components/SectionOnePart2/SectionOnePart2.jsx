import React from 'react';
import { Plus, Minus } from 'lucide-react';
import './SectionOnePart2.css';

const SectionOnePart2 = ({ activeItem, setActiveItem }) => {
  const subItems = [
    {
      id: "2.1",
      title: "2.1 Cách mạng giải phóng dân tộc muốn thắng lợi phải đi theo con đường cách mạng vô sản",
      content: [
        "Trước sự thất bại của các phong trào yêu nước cuối thế kỷ XIX - đầu thế kỷ XX, người đã có những nhận định quan trọng:",
        "+ Phê phán cách mạng tư sản",
        "+ Hướng về cách mạng tháng mười Nga (1917)",
        "Năm 1920, sau khi đọc bản sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của v.i. lênin, Hồ Chí Minh đã tìm thấy con đường giải phóng hoàn toàn cho dân tộc.",
        "+ Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản.",
        "+ Giải phóng dân tộc gắn với giải phóng giai cấp, trong đó giải phóng dân tộc là trước hết, trên hết.",
        "+ Gắn liền độc lập dân tộc với chủ nghĩa xã hội."
      ]
    },
    { id: "1.2", title: "1.2 Cách mạng giải phóng dân tộc, trong điều kiện của Việt Nam, muốn thắng lợi phải do đảng cộng sản lãnh đạo" },
    { id: "1.3", title: "1.3 Cách mạng giải phóng dân tộc phải dựa trên lực lượng đại đoàn kết toàn dân tộc, lấy liên minh công-nông làm nền tảng" },
    { id: "1.4", title: "1.4 Cách mạng giải phóng dân tộc cần chủ động, sáng tạo, có khả năng giành thắng lợi trước cách mạng vô sản ở chính quốc" }
  ];

  return (
    <div className="section-one-part-2">
      <div className="content-row reverse">
        {/* Cột trái: Hình ảnh tư liệu (Đường Kách Mệnh) */}
        <div className="content-col img-side">
          <div className="image-frame-decor">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Duongkachmenh.jpg/330px-Duongkachmenh.jpg" 
              alt="Tác phẩm Đường Kách Mệnh" 
            />
          </div>
          <div className="image-caption-container">
            <p className="img-caption-main">Tác phẩm Đường Kách Mệnh</p>
            <p className="img-source">
              Nguồn: https://bvhttdl.gov.vn/bao-tang-lich-su-quoc-gia-trung-bay-ban-goc-tac-pham-duong-kach-menh-818787.htm
            </p>
          </div>
        </div>

        {/* Cột phải: Hệ thống Accordion */}
        <div className="content-col text-side">
          <div className="sub-title-box">2. VỀ CÁCH MẠNG GIẢI PHÓNG DÂN TỘC</div>
          
          <div className="accordion-list">
            {subItems.map((item) => (
              <div 
                key={item.id} 
                className={`accordion-card ${activeItem === item.id ? 'active' : ''}`}
              >
                <div 
                  className="accordion-header" 
                  onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
                >
                  <span className="item-title">{item.title}</span>
                  <div className="toggle-icon-circle">
                    {activeItem === item.id ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </div>
                
                {activeItem === item.id && item.content && (
                  <div className="accordion-body-wrapper">
                    <div className="details-content">
                      {item.content.map((line, index) => (
                        <p key={index} className={line.startsWith('+') ? 'bullet-sub' : 'main-para'}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOnePart2;