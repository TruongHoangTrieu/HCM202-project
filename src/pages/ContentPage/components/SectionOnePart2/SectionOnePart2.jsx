import React, { useState } from "react";
import { Plus, Minus, X, ZoomIn } from "lucide-react";

const SectionOnePart2 = ({ activeItem, setActiveItem }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const subItems = [
    {
      id: "2.1",
      title:
        "2.1 Cách mạng giải phóng dân tộc muốn thắng lợi phải đi theo con đường cách mạng vô sản",
      content: [
        "Trước sự thất bại của các phong trào yêu nước cuối thế kỷ XIX - đầu thế kỷ XX, Người đã có những nhận định quan trọng:",
        "+ Phê phán cách mạng tư sản",
        "+ Hướng về Cách mạng Tháng Mười Nga (1917)",
        "Năm 1920, sau khi đọc bản Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của V.I. Lênin, Hồ Chí Minh đã tìm thấy con đường giải phóng hoàn toàn cho dân tộc.",
        "Khẳng định con đường duy nhất",
        '+ "Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản." ',
        "+ Giải phóng dân tộc gắn với giải phóng giai cấp, trong đó giải phóng dân tộc là trước hết, trên hết.",
        "+ Gắn liền độc lập dân tộc với chủ nghĩa xã hội",
      ],
      quote: {
        text: "",
        source: "",
      },
      images: [
        {
          url: "/10.jpg",
          caption:
            "Báo Nhân đạo đăng toàn văn Sơ thảo lần thứ nhất những Luận cương về vấn đề dân tộc và vấn đề thuộc địa của Lenin",
          source:
            "https://baochinhphu.vn/mot-the-ky-le-bac-ho-roi-tren-chu-lenin-102275597.htm",
        },
        {
          url: "/11.png",
          caption: "Sự khác biệt giữa mô hình giải phóng ở Châu Âu và Việt Nam",
          source: "Ảnh được tạo bởi AI",
        },
      ],
    },
    {
      id: "2.2",
      title:
        "2.2 Cách mạng giải phóng dân tộc, trong điều kiện của Việt Nam, muốn thắng lợi phải do Đảng Cộng sản lãnh đạo",
      content: [
        "Theo Chủ nghĩa Mác-Lênin Đảng cộng sản là nhân tố chủ quan để giai cấp công nhân hoàn thành sứ mệnh lịch sử của mình.",
        "Người cho rằng: Đảng Cộng sản vừa là đội tiên phong của giai cấp công nhân vừa là đội tiên phong của nhân dân lao động kiên quyết nhất, hăng hái nhất, trong sạch nhất, tận tâm tận lực phụng sự Tổ quốc.",
      ],
      quote: {
        text: "",
        source: "",
      },
      images: [
        {
          url: "/13.jpg",
          caption: "Bác đọc báo cáo chính trị tại Đại hội II của Đảng (1951)",
          source:
            "https://www.qdnd.vn/chinh-tri/cac-van-de/cac-ky-dai-hoi-cua-dang-va-nhung-dau-an-lich-su-dai-hoi-lan-thu-ii-hoan-chinh-duong-loi-cach-mang-dan-toc-dan-chu-nhan-dan-813515",
        },
      ],
    },
    {
      id: "2.3",
      title:
        "2.3 Cách mạng giải phóng dân tộc phải dựa trên lực lượng đại đoàn kết toàn dân tộc, lấy liên minh công-nông làm nền tảng",
      content: [
        "Các nhà lý luận kinh điển của chủ nghĩa Mác-Lênin khẳng định rằng: cách mạng là sự nghiệp của quần chúng của nhân dân.",
        "Hồ Chí Minh kế thừa tư tưởng trên và quan niệm rằng “có dân là có tất cả, trên đời này không gì quý bằng dân, được lòng dân thì được tất cả, mất lòng dân thì mất tất cả.”",
        "Trong các văn kiện và thực tiễn lãnh đạo, Hồ Chí Minh xác định lực lượng cách mạng bao gồm:",
        "+ Lực lượng nòng cốt: Giai cấp công nhân và nông dân (trong đó đặc biệt dựa vào dân cày nghèo).",
        "+ Lực lượng đồng minh: Lôi kéo tiểu tư sản, trí thức, trung nông về phía vô sản.",
        "+ Đối với các tầng lớp khác: Tranh thủ hoặc trung lập hóa phú nông, trung, tiểu địa chủ và tư sản Việt Nam chưa rõ mặt phản cách mạng.",
        "+ Tinh thần đoàn kết không biên giới: Không phân biệt giai tầng, dân tộc, tôn giáo hay đảng phái.",
        'Hồ Chí Minh đặc biệt nhấn mạnh công nhân và nông dân là "gốc" của cách mạng',
        "+ Là hai giai cấp đông đảo nhất và bị áp bức, bóc lột nặng nề nhất.",
        "+ Có ý chí cách mạng bền bỉ và quyết tâm cao nhất.",
      ],
      quote: {
        text: "Bất kỳ đàn ông, đàn bà, bất kỳ người già, người trẻ, không chia tôn giáo, đảng phái, dân tộc. Hễ là người Việt Nam thì phải đứng lên đánh thực dân Pháp để cứu Tổ quốc” - Lời kêu gọi toàn quốc kháng chiến (12-1946)",
        source: "",
      },
      images: [
        {
          url: "/5.jpg",
          caption:
            "Bút tích Lời kêu gọi toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh",
          source:
            "https://baolaichau.vn/chinh-tri/ky-niem-74-nam-ngay-toan-quoc-khang-chien-19121946-19122020",
        },
      ],
    },
    // Bạn có thể thêm 2.3 và 2.4 tương tự ở đây
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

      <div className="content-row reverse">
        {/* Cột trái: Hình ảnh tư liệu (Bên trái ở Part 2) */}

        {/* Cột phải: Hệ thống Accordion */}
        <div className="content-col text-side">
          <div className="sub-title-box">
            2. VỀ CÁCH MẠNG GIẢI PHÓNG DÂN TỘC
          </div>
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
