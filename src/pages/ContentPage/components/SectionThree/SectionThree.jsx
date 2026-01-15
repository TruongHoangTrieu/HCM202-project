import React, { useState } from "react";
import { Plus, Minus, X, ZoomIn } from "lucide-react";

const SectionOnePart2 = ({ activeItem, setActiveItem }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const subItems = [
    {
      id: "4.1",
      title: "1.Độc lập dân tộc là cơ sở, tiền đề để tiến lên chủ nghĩa xã hội",
      content: [
        "Giải phóng dân tộc, giành độc lập dân tộc sẽ là mục tiêu đầu tiên của cách mạng, là cơ sở, tiền đề cho mục tiêu tiếp theo – chủ nghĩa xã hội và chủ nghĩa cộng sån. ",
        "Độc lập phải gắn liền với thống nhất, chủ quyền và toàn vẹn lãnh thổ và hơn nữa Độc lập dân tộc cũng phải gắn liền với tự do, cơm no, áo ấm, hạnh phúc cho nhân dân.",
        "Độc lập dân tộc không những là tiền đề mà còn là nguồn sức mạnh to lớn cho cách mạng xã hội chủ nghĩa.",
      ],
      quote: {
        text: "",
        source: "",
      },
      images: [
        {
          url: "/20.jpg",
          caption: "",
          source:
            "https://tuyenquang.dcs.vn/DetailView/24668/22/Tu-tuong-Ho-Chi-Minh-vedoc-lap-dan-toc-gan-lien-voi-chu-nghia-xa-hoi.html",
        },
      ],
    },
    {
      id: "4.2",
      title:
        "2.Chủ nghĩa xã hội là điều kiện để bảo đảm nền độc lập dân tộc vững chắc",
      content: [
        "Chủ nghĩa xã hội là xu thế tất yếu của thời đại và phù hợp với lợi ích của nhân dân Việt Nam.",
        "Chủ nghĩa xã hội là một xã hội bình đẳng, công bằng và hợp lý, không còn chế độ áp bức bóc lột.",
        "Xây dựng chủ nghĩa xã hội là xây dựng cơ sở cho phát triển của đất nước trên tất cả các lĩnh vực.",
      ],
      quote: {
        text: "",
        source: "",
      },
      images: [
        {
          url: "/20.jpg",
          caption: "",
          source:
            "https://tuyenquang.dcs.vn/DetailView/24668/22/Tu-tuong-Ho-Chi-Minh-vedoc-lap-dan-toc-gan-lien-voi-chu-nghia-xa-hoi.html",
        },
      ],
    },
    {
      id: "4.3",
      title:
        "3.Điều kiện để bảo đảm độc lập dân tộc gắn liền với chủ nghĩa xã hội",
      content: [
        "Một là, phải bảo đảm vai trò lãnh đạo tuyệt đối của đảng cộng sản trong suốt tiến trình cách mạng.",
        "Hai là, phải củng cố và tăng cường khối đại đoàn kết dân tộc mà nền tảng là khối liên minh công - nông",
        "Ba là, phải đoàn kết, gắn bó chặt chẽ với cách mạng thế giới.",
      ],
      quote: {
        text: "",
        source: "",
      },
      images: [
        {
          url: "/20.jpg",
          caption: "",
          source:
            "https://tuyenquang.dcs.vn/DetailView/24668/22/Tu-tuong-Ho-Chi-Minh-vedoc-lap-dan-toc-gan-lien-voi-chu-nghia-xa-hoi.html",
        },
      ],
    },
  ];

  const currentActiveData = subItems.find((item) => item.id === activeItem);

  return (
    <div className="section-one-part-2">
      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div className="lightbox-content">
            {/* <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              <X size={32} />
            </button> */}
            <img src={selectedImage} alt="Phóng to" />
          </div>
        </div>
      )}
      <div className="section-banner-center">
        <div className="badge-circle">III</div>
        <div className="banner-box">
          <h2>
            TƯ TƯỞNG HỒ CHÍ MINH VỀ MỐI QUAN HỆ GIỮA ĐỘC LẬP DÂN TỘC VÀ CHỦ
            NGHĨA XÃ HỘI
          </h2>
        </div>
      </div>
      <div className="content-row reverse">
        {/* Cột trái: Hình ảnh tư liệu (Bên trái ở Part 2) */}

        {/* Cột phải: Hệ thống Accordion */}
        <div className="content-col text-side">
          <div className="accordion-list">
            {subItems.map((item) => (
              <div
                key={item.id}
                className={`accordion-card ${
                  activeItem === item.id ? "active" : ""
                }`}
              >
                <div
                  className="accordion-header"
                  onClick={() =>
                    setActiveItem(activeItem === item.id ? null : item.id)
                  }
                >
                  <span className="item-title">{item.title}</span>
                  <div className="toggle-icon-circle">
                    {activeItem === item.id ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </div>
                </div>

                {activeItem === item.id && (
                  <div className="accordion-body-wrapper">
                    <ul className="details-list">
                      {item.content.map((point, index) => (
                        <li
                          key={index}
                          className={point.startsWith("+") ? "indent-list" : ""}
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                    {item.quote && item.quote.text && (
                      <div className="quote-box-ceremonial">
                        <p className="quote-texts">"{item.quote.text}"</p>
                        <span className="quote-author">
                          &mdash; {item.quote.source}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="content-col img-side">
          {currentActiveData && currentActiveData.images ? (
            <div className="images-stack">
              {currentActiveData.images.map((img, index) => (
                <div className="active-image-container" key={index}>
                  <div
                    className="image-frame-decor clickable-image"
                    onClick={() => setSelectedImage(img.url)}
                  >
                    <img src={img.url} alt={img.caption} className="fade-in" />
                    <div className="image-overlay-hint">
                      <ZoomIn size={24} />
                      <span>Click để phóng to</span>
                    </div>
                  </div>
                  <div className="image-caption-container">
                    <p className="img-caption-main">{img.caption}</p>
                    <p className="img-source">Nguồn: {img.source}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state-image"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionOnePart2;
