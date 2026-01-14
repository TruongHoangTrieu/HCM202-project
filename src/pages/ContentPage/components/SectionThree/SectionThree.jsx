import React from 'react';
import { Plus, Minus } from 'lucide-react';
import './SectionThree.css';

const SectionThree = ({ activeItem, setActiveItem }) => {
  const subItems = [
    {
      id: "III.1",
      title: "1. Độc lập dân tộc là cơ sở, tiền đề để tiến lên chủ nghĩa xã hội",
      content: [
        "Giải phóng dân tộc, giành độc lập dân tộc sẽ là mục tiêu đầu tiên của cách mạng, là cơ sở, tiền đề cho mục tiêu tiếp theo – chủ nghĩa xã hội và chủ nghĩa cộng sản.",
        "Độc lập phải gắn liền với thống nhất, chủ quyền và toàn vẹn lãnh thổ và hơn nữa độc lập dân tộc cũng phải gắn liền với tự do, cơm no, áo ấm, hạnh phúc cho nhân dân.",
        "Độc lập dân tộc không những là tiền đề mà còn là nguồn sức mạnh to lớn cho cách mạng xã hội chủ nghĩa."
      ],
      quote: "Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản"
    },
    { id: "III.2", title: "2. Chủ nghĩa xã hội là điều kiện để bảo đảm nền độc lập dân tộc vững chắc" },
    { id: "III.3", title: "3. Điều kiện để bảo đảm độc lập dân tộc gắn liền với chủ nghĩa xã hội" }
  ];

  return (
    <div className="section-three">
      {/* Watermark số III lớn mờ ở nền */}
      <div className="watermark-bg-three">III</div>

      {/* Banner tiêu đề trung tâm Phần III */}
      <div className="section-banner-center">
        <div className="badge-circle">III</div>
        <div className="banner-box">
          <h2>VẬN DỤNG TƯ TƯỞNG HỒ CHÍ MINH VỀ MỐI QUAN HỆ GIỮA ĐỘC LẬP DÂN TỘC VÀ CHỦ NGHĨA XÃ HỘI</h2>
        </div>
      </div>

      <div className="timeline-layout">
        {/* Khoảng trống bên trái đường timeline */}
        <div className="content-side-empty"></div>

        {/* Nội dung lệch phải so với đường kẻ dọc */}
        <div className="content-side-right">
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
                    {item.quote && (
                      <div className="quote-box-ceremonial-three">
                        "{item.quote}"
                      </div>
                    )}
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

export default SectionThree;