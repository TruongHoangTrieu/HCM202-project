import React from 'react';
import { Plus, Minus } from 'lucide-react';


const SectionFour = ({ activeItem, setActiveItem }) => {
  const subItems = [
    {
      id: "IV.1",
      title: "1. Kiên định mục tiêu và con đường cách mạng mà Hồ Chí Minh đã xác định",
      content: [
        "Là mục tiêu cao cả, đúng đắn, là sợi chỉ đỏ xuyên suốt trong quá trình xây dựng đất nước của toàn đảng, toàn dân, phù hợp với khát vọng của nhân dân Việt Nam.",
        "Giữ vững con đường độc lập dân tộc gắn liền với chủ nghĩa xã hội.",
        "Xây dựng chủ nghĩa xã hội làm cho đất nước phát triển mạnh mẽ, sẽ tạo nền tảng vững chắc để bảo vệ nền độc lập dân tộc, sẽ là một tấm gương cho các quốc gia trên thế giới."
      ]
    },
    { id: "IV.2", title: "2. Phát huy sức mạnh dân chủ xã hội chủ nghĩa" },
    { id: "IV.3", title: "3. Củng cố, kiện toàn, phát huy sức mạnh và hiệu quả hoạt động của toàn bộ hệ thống chính trị" },
    { id: "IV.4", title: "4. Đấu tranh chống những biểu hiện suy thoái về tư tưởng, chính trị, đạo đức, lối sống và 'tự diễn biến', 'tự chuyển hóa' trong nội bộ." }
  ];

  return (
    <div className="section-four">
      {/* Watermark số IV lớn mờ ở nền */}
      <div className="watermark-bg-four">IV</div>

      {/* Banner tiêu đề trung tâm Phần IV */}
      <div className="section-banner-center">
        <div className="badge-circle">IV</div>
        <div className="banner-box">
          <h2>VẬN DỤNG TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐỘC LẬP DÂN TỘC GẮN LIỀN VỚI CHỦ NGHĨA XÃ HỘI TRONG SỰ NGHIỆP CÁCH MẠNG VIỆT NAM GIAI ĐOẠN HIỆN NAY</h2>
        </div>
      </div>

      <div className="timeline-layout">
        {/* Nội dung lệch trái so với đường kẻ dọc */}
        <div className="content-side-left">
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
                    <ul className="current-era-details">
                      {item.content.map((point, index) => (
                        <li key={index}>• {point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Khoảng trống bên phải đường timeline */}
        <div className="content-side-empty"></div>
      </div>
    </div>
  );
};

export default SectionFour;