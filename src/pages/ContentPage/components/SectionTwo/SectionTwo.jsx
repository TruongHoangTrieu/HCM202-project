import React from 'react';
import { Plus, Minus } from 'lucide-react';
import './SectionTwo.css';

const SectionTwo = ({ activeItem, setActiveItem }) => {
  const subItems = [
    {
      id: "II.1",
      title: "1. Quan niệm và bản chất của chủ nghĩa xã hội",
      content: [
        { label: "Định nghĩa cốt lõi", text: "Hồ Chí Minh quan niệm cnxh trước hết là làm cho nhân dân lao động thoát nạn bần cùng, mọi người có công ăn việc làm, được ấm no và sống đời hạnh phúc." },
        { label: "Vị trí lịch sử", text: "cnxh là giai đoạn đầu của chủ nghĩa cộng sản, mặc dù còn tồn tại tàn dư của xã hội cũ, nhưng đây là xã hội không còn áp bức, bóc lột." },
        { label: "Bản chất", text: "là xã hội do nhân dân lao động làm chủ, trong đó quyền lợi cá nhân và tập thể thống nhất, gắn bó chặt chẽ với nhau." },
        { label: "Tính tất yếu", text: "tiến lên cnxh là một quy luật khách quan của lịch sử, phù hợp với xu thế thời đại và nguyện vọng của nhân dân Việt Nam." }
      ]
    },
    { id: "II.2", title: "2. Các đặc trưng cơ bản của xã hội xã hội chủ nghĩa" },
    { id: "II.3", title: "3. Mục tiêu và động lực xây dựng chủ nghĩa xã hội" },
    { id: "II.4", title: "4. Thời kỳ quá độ lên chủ nghĩa xã hội tại Việt Nam" },
    { id: "II.5", title: "5. Một số nguyên tắc xây dựng chủ nghĩa xã hội trong thời kỳ quá độ" },
    { id: "II.6", title: "6. Vận dụng trong giai đoạn hiện nay" }
  ];

  return (
    <div className="section-two">
      {/* Watermark số II lớn mờ ở nền */}
      <div className="watermark-bg">II</div>

      {/* Banner tiêu đề trung tâm Phần II */}
      <div className="section-banner-center">
        <div className="badge-circle">II</div>
        <div className="banner-box">
          <h2>TƯ TƯỞNG HỒ CHÍ MINH VỀ CHỦ NGHĨA XÃ HỘI VÀ XÂY DỰNG CHỦ NGHĨA XÃ HỘI Ở VIỆT NAM</h2>
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
                    <ul className="socialism-details">
                      {item.content.map((point, index) => (
                        <li key={index}>
                          <span className="detail-label">• {point.label}:</span> {point.text}
                        </li>
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

export default SectionTwo;