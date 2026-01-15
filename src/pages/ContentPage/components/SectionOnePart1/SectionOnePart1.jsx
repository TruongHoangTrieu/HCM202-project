import React, { useState } from "react";
import { Plus, Minus, X, ZoomIn } from "lucide-react";

const SectionOnePart1 = ({ activeItem, setActiveItem }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const subItems = [
    {
      id: "1.1",
      title: "1.1 Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm",
      content: [
        "Xuất phát từ lịch sử dựng nước và giữ nước của dân tộc Việt Nam từ ngàn xưa đến nay gắn liền với truyền thống yêu nước, đấu tranh chống ngoại xâm.",
        "Độc lập, tự do không chỉ là mục tiêu chính trị mà còn là khát khao lớn nhất, là giá trị tinh thần bất hủ.",
        "Khi nền độc lập bị đe dọa, ý chí của Người trở thành lời hiệu triệu toàn dân tộc sẵn sàng hy sinh để bảo vệ chủ quyền.",
      ],
      quote: {
        text: "Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng, dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do... Đó là những lẽ phải không ai chối cãi được",
        source: "Bản Tuyên ngôn Độc lập",
      },
      images: [
        {
          url: "/2.jpg",
          caption: "Bản tuyên ngôn độc lập được Chủ tịch Hồ Chí Minh long trọng công bố ngày 2/9/1945.",
          source: "https://baochinhphu.vn/tuyen-ngon-doc-lap-va-nha-nuoc-phap-quyen-102299509.htm",
        },
      ],
      // Đã xóa caption/source thừa ở đây
    },
    {
      id: "1.2",
      title: "1.2 Độc lập dân tộc phải gắn liền với tự do, hạnh phúc của nhân dân",
      content: [
        "Theo Hồ Chí Minh, độc lập dân tộc phải gắn với tự do của nhân dân.",
        ' Người đánh giá cao các nội dung về độc lập, tự do và hạnh phúc trong Học thuyết "Tam dân" của Tôn Trung Sơn.',
        " Người viện dẫn chân lý về tự do và bình đẳng về quyền lợi trong Tuyên ngôn Nhân quyền và Dân quyền của Cách mạng Pháp (1791) để khẳng định dân tộc Việt Nam đương nhiên cũng phải có các quyền này.",
        "Đối với Người độc lập phải gắn liền với cơm no, áo ấm và hạnh phúc của nhân dân.",
        ' Ngay sau thắng lợi CMT8 1945, trong hoàn cảnh dân tộc đối mặt với đói rét và mù chữ, Người yêu cầu :"Chúng ta phải thực hiện ngay":',
        "+ Làm cho dân có ăn.",
        "+ Làm cho dân có mặc.",
        "+ Làm cho dân có chỗ ở.",
        "+ Làm cho dân có học hành.",
      ],
      quote: {
        text: "Người ta sinh ra tự do và bình đẳng về quyền lợi, và phải luôn luôn được tự do và bình đẳng về quyền lợi",
        source: "Tuyên ngôn Nhân quyền và Dân quyền của Cách mạng Pháp (1791)",
      },
      images: [
        {
          url: "/6.jpg",
          caption: "Tôn Trung Sơn - Người sáng tạo ra Học thuyết Tam dân",
          source: "https://trithucvn2.net/van-hoa/doc-lap-tu-do-hanh-phuc-va-nguon-goc-chu-nghia-tam-dan-cua-ton-dat-tien.html",
        },
        {
          url: "/7.jpg",
          caption: "Tuyên ngôn Nhân quyền và Dân quyền của Cách mạng Pháp năm 1791",
          source: "https://sachhiem.net/print.php?id=7543",
        },
      ],
    },
    {
      id: "1.3",
      title: "1.3 Độc lập dân tộc phải là nền độc lập thực sự, hoàn toàn và triệt để",
      content: [
        "Hồ Chí Minh đã vạch trần bản chất của các thế lực xâm lược khi chúng sử dụng các chiêu bài chính trị để lừa dối nhân dân.",
        ' Theo Người, độc lập không chỉ là danh xưng mà Độc lập phải là "thật sự, hoàn toàn và triệt để" trên tất cả các lĩnh vực.',
        "+  Ngoại giao: Phải có quyền tự quyết về đối ngoại.",
        "+  Quân sự: Phải có quân đội riêng.",
        "+  Kinh tế: Phải có nền tài chính riêng.",
      ],
      quote: { text: "", source: "" },
      images: [
        {
          url: "/8.jpg",
          caption: "Người thay mặt Chính phủ ký với đại diện Chính phủ Pháp Hiệp định Sơ bộ ngày 6-3-1946",
          source: "https://hcmcpv.org.vn/tin-tuc/hiep-dinh-so-bo-viet-nam-phap-6-3-1946-ky-tich-khoi-dau-lich-su-dau-tranh-ngoai-giao-cua-nuoc-viet-1454411071",
        },
      ],
    },
    {
      id: "1.4",
      title: "1.4 Độc lập dân tộc gắn liền với thống nhất và toàn vẹn lãnh thổ",
      content: [
        "Lịch sử Việt Nam luôn phải đối mặt với âm mưu xâm lược và chia cắt từ các thế lực ngoại bang.",
        "Trong mọi giai đoạn, Hồ Chí Minh luôn khẳng định sự thống nhất của Việt Nam là một chân lý bất di dịch.",
        "+ \"Đồng bào Nam Bộ là dân nước Việt Nam. Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi\" (Trích Thư gửi đồng bào Nam Bộ, 1946).",
        "+ \"Nước Việt Nam là một, dân tộc Việt Nam là một\" (Khẳng định tháng 2/1958).",
        "+ Trong bản Di chúc, Người đã thể hiện ý chí sắt đá và niềm tin vào tương lai thống nhất của nước nhà: “Dù khó khăn gian khổ, nhân dân ta nhất định sẽ hoàn toàn thắng lợi. Đế quốc Mỹ phải rút khỏi nước ta. Tổ quốc ta nhất định sẽ thống nhất. Đồng bào Nam, Bắc nhất định sẽ sum họp một nhà”.",
      ],
      quote: { text: "", source: "" },
      images: [
        {
          url: "/9.jpg",
          caption: "Thư gửi đồng bào Nam Bộ, 1946",
          source: "https://nghiencuutttphcm.blogspot.com/2018/07/thu-cua-chu-tich-ho-chi-minh-gui-ong.html",
        },
      ],
    },
  ];

  const currentActiveData = subItems.find((item) => item.id === activeItem);

  return (
    <div className="section-one-part-1">
      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          {/* <button className="lightbox-close-fixed" onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button> */}
          <div className="lightbox-content">
            <img src={selectedImage} alt="Phóng to" className="fade-in" />
          </div>
        </div>
      )}

      <div className="section-banner-center">
        <div className="badge-circle">I</div>
        <div className="banner-box">
          <h2>TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐỘC LẬP DÂN TỘC</h2>
        </div>
      </div>

      <div className="content-row">
        <div className="content-col text-side">
          <div className="sub-title-box">1. VẤN ĐỀ ĐỘC LẬP DÂN TỘC</div>
          <div className="accordion-list">
            {subItems.map((item) => (
              <div key={item.id} className={`accordion-card ${activeItem === item.id ? "active" : ""}`}>
                <div className="accordion-header" onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}>
                  <span className="item-title">{item.title}</span>
                  <div className="toggle-icon-circle">
                    {activeItem === item.id ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </div>

                {activeItem === item.id && (
                  <div className="accordion-body-wrapper">
                    <ul className="details-list">
                      {item.content.map((point, index) => (
                        <li key={index} className={point.trim().startsWith('+') ? "indent-list" : ""}>
                          {point}
                        </li>
                      ))}
                    </ul>
                    {item.quote && item.quote.text && (
                      <div className="quote-box-ceremonial">
                        <p className="quote-texts">"{item.quote.text}"</p>
                        <span className="quote-author">&mdash; {item.quote.source}</span>
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
                  <div className="image-frame-decor clickable-image" onClick={() => setSelectedImage(img.url)}>
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

export default SectionOnePart1;