import React, { useState } from "react";
import { Plus, Minus, X, ZoomIn } from "lucide-react";

const SectionFour = ({ activeItem, setActiveItem }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const subItems = [
    {
      id: "5.1",
      title:
        "1. Kiên định mục tiêu và con đường cách mạng mà hồ chí minh đã xác định",
      content: [
        "Là mục tiêu cao cả, đúng đắn, là sợi chỉ đỏ xuyên suốt trong quá trình xây dựng đất nước của toàn Đảng, toàn dân, phù hợp với khát vọng của nhân dân Việt Nam.",
        "Giữ vững con đường độc lập dân tộc gắn liền với chủ nghĩa xã hội. ",
        "Xây dựng chủ nghĩa xã hội làm cho đất nước phát triển mạnh mẽ, sẽ tạo nền tảng vững chắc để bảo vệ nền độc lập dân tộc, sẽ là một tấm gương cho các quốc gia trên thế giới.",
      ],
      quote: {
        text: "",
        source: "",
      },
      images: [
        {
          url: "/21.jpg",
          caption: "",
          source:
            "https://tuyenquang.dcs.vn/DetailView/25662/38/Kien-dinh-muc-tieu-doc-lap-dan-toc-va-chu-nghia-xa-hoi-trong-tinh-hinh-moi.html",
        },
      ],
      // Đã xóa caption/source thừa ở đây
    },
    {
      id: "5.2",
      title: "2. Phát huy sức mạnh dân chủ xã hội chủ nghĩa",
      content: [
        "Phát huy sức mạnh dân chủ xã hội chủ nghĩa là phát huy sức mạnh bản chất ưu việt của chế độ xã hội xã hội chủ nghĩa",
        "Đảm bảo các quyền lực nhà nước thuộc về nhân dân theo phương châm “dân biết, dân bàn, dân làm, dân kiểm tra”.",
        " Phát huy sức mạnh dân chủ xã hội chủ nghĩa không tách rời quá trình hoàn thiện hệ thống pháp luật.",
        "Phát huy sức mạnh dân chủ xã hội chủ nghĩa gắn với tăng cường pháp chế",
      ],
      quote: {
        text: "",
        source: "",
      },
      images: [
        {
          url: "/21.jpg",
          caption: "",
          source:
            "https://tuyenquang.dcs.vn/DetailView/25662/38/Kien-dinh-muc-tieu-doc-lap-dan-toc-va-chu-nghia-xa-hoi-trong-tinh-hinh-moi.html",
        },
      ],
    },
    {
      id: "5.3",
      title:
        " 3.Củng cố, kiện toàn, phát huy sức mạnh và hiệu quả hoạt động của toàn bộ hệ thống chính trị",
      content: [
        "Đặc điểm của hệ thống chính trị ở Việt Nam là tính nhất nguyên và tính thống nhất: ",
        "+  Nhất nguyên về chính trị, về tổ chức, về tư tưởng",
        "+  Thống nhất dưới sự lãnh đạo của Đảng Cộng sản Việt Nam, thống nhất về mục tiêu chính trị.",
        "Xây dựng và củng cố bộ máy nhà nước thành 1 thể thống nhất có sự liên kết chặt chẽ, đảm bảo dân chủ trên các lĩnh vực khác nhau.",
        "Đảm bảo quyền làm chủ của nhân dân được phát huy đầy đủ, thể hiện qua các hình thức dân chủ trực tiếp và dân chủ đại diện."
      ],
      quote: { text: "", source: "" },
      images: [
        {
          url: "/21.jpg",
          caption: "",
          source:
            "https://tuyenquang.dcs.vn/DetailView/25662/38/Kien-dinh-muc-tieu-doc-lap-dan-toc-va-chu-nghia-xa-hoi-trong-tinh-hinh-moi.html",
        },
      ],
    },
    {
      id: "5.4",
      title: "4. Đấu tranh chống những biểu hiện suy thoái về tư tưởng, chính trị, đạo đức, lối sống và “tự diễn biến”, “tự chuyển hóa” trong nội bộ.",
      content: [
        "Sự xuất hiện của tình trạng suy thoái về tư tưởng chính trị, đạo đức, lối sống của một số bộ phận không nhỏ của cán bộ, đảng viên. ",
        "Cần phải có kế hoạch ngăn chặn kịp thời trước khi xảy ra các vấn đề nghiêm trọng ảnh hưởng đến Đảng và đất nước.",
        'Thực hiện có hiệu quả các nghị quyết của Đảng',
        'Tăng cường xây dựng, chỉnh đốn Đảng; ngăn chặn, đẩy lùi sự suy thoái về tư tưởng chính trị, đạo đức, lối sống, "tự diễn biến", "tự chuyển hóa" trong nội bộ.',
      ],
      quote: { text: "", source: "" },
      images: [
        {
          url: "/21.jpg",
          caption: "",
          source:
            "https://tuyenquang.dcs.vn/DetailView/25662/38/Kien-dinh-muc-tieu-doc-lap-dan-toc-va-chu-nghia-xa-hoi-trong-tinh-hinh-moi.html",
        },
      ],
    },
  ];

  const currentActiveData = subItems.find((item) => item.id === activeItem);

  return (
    <div className="section-one-part-1">
      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedImage(null)}
        >
          {/* <button className="lightbox-close-fixed" onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button> */}
          <div className="lightbox-content">
            <img src={selectedImage} alt="Phóng to" className="fade-in" />
          </div>
        </div>
      )}

      <div className="section-banner-center">
        <div className="badge-circle">IV</div>
        <div className="banner-box">
          <h2>
            VẬN DỤNG TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐỘC LẬP DÂN TỘC GẮN LIỀN VỚI CHỦ
            NGHĨA XÃ HỘI TRONG SỰ NGHIỆP CÁCH MẠNG VIỆT NAM GIAI ĐOẠN HIỆN NAY{" "}
          </h2>
        </div>
      </div>

      <div className="content-row">
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
                          className={
                            point.trim().startsWith("+") ? "indent-list" : ""
                          }
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                    {item.quote && item.quote.text && (
                      <div className="quote-box-ceremonial">
                        <p className="quote-texts">"{item.quote.text}"</p>
                        <span className="quote-authors">
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
                      <span>Phóng to</span>
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

export default SectionFour;
