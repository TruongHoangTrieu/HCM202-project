import React from 'react';
import { Plus, Minus } from 'lucide-react';
import './SectionOnePart1.css';

const SectionOnePart1 = ({ activeItem, setActiveItem }) => {
  const subItems = [
    {
      id: "1.1",
      title: "1.1 Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm của tất cả các dân tộc",
      content: [
        "Xuất phát từ lịch sử dựng nước và giữ nước của dân tộc Việt Nam từ ngàn xưa đến nay gắn liền với truyền thống yêu nước, đấu tranh chống ngoại xâm.",
        "Độc lập, tự do không chỉ là mục tiêu chính trị mà còn là khát khao lớn nhất, là giá trị tinh thần bất hủ.",
        "Khi nền độc lập bị đe dọa, ý chí của người trở thành lời hiệu triệu toàn dân tộc sẵn sàng hy sinh để bảo vệ chủ quyền."
      ],
      quote: "Cái mà tôi cần nhất trên đời là đồng bào tôi được tự do, tổ quốc tôi được độc lập"
    },
    { id: "1.2", title: "1.2 Độc lập dân tộc phải gắn liền với tự do, hạnh phúc của nhân dân" },
    { id: "1.3", title: "1.3 Độc lập dân tộc phải là nền độc lập thực sự, hoàn toàn và triệt để" },
    { id: "1.4", title: "1.4 Độc lập dân tộc gắn liền với thống nhất và toàn vẹn lãnh thổ" }
  ];

  return (
    <div className="section-one-part-1">
      {/* Banner tiêu đề Phần I với thiết kế Badge đè Banner */}
      <div className="section-banner-center">
        <div className="badge-circle">I</div>
        <div className="banner-box">
          <h2>TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐỘC LẬP DÂN TỘC</h2>
        </div>
      </div>

      <div className="content-row">
        {/* Cột trái: Hệ thống Accordion */}
        <div className="content-col text-side">
          <div className="sub-title-box">1. VẤN ĐỀ ĐỘC LẬP DÂN TỘC</div>
          
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
                    <ul className="details-list">
                      {item.content.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                    <div className="quote-box-ceremonial">
                      "{item.quote}"
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Cột phải: Hình ảnh tư liệu */}
        <div className="content-col img-side">
          <div className="image-frame-decor">
            <img 
              src="https://images.hcmcpv.org.vn//Uploads/Image/02022022AC1CA2D/02-02-2022Chanhcuong.jpg" 
              alt="Chánh cương vắn tắt của Đảng" 
            />
          </div>
          <div className="image-caption-container">
            <p className="img-caption-main">Chánh cương vắn tắt của Đảng</p>
            <p className="img-source">Nguồn: https://www.hcmcpv.org.vn/tin-tuc/chanh-cuong-van-tat-va-thanh-tuu-cua-dang-qua-hon-9-thap-nien-phat-trien-1491890502</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOnePart1;