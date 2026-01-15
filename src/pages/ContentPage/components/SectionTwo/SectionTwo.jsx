import React, { useState } from "react";
import { Plus, Minus, X, ZoomIn } from "lucide-react";

const SectionTwo = ({ activeItem, setActiveItem }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const subItems = [
    {
      id: "3.1",
      title: "1. Quan niệm và Bản chất của Chủ nghĩa xã hội",
      content: [
        "Định nghĩa cốt lõi: Hồ Chí Minh quan niệm CNXH trước hết là làm cho nhân dân lao động thoát nạn bần cùng, mọi người có công ăn việc làm, được ấm no và sống đời hạnh phúc.",
        "Vị trí lịch sử: CNXH là giai đoạn đầu của chủ nghĩa cộng sản, là xã hội không còn áp bức, bóc lột.",
        "Bản chất: Là xã hội do nhân dân lao động làm chủ, trong đó quyền lợi cá nhân và tập thể thống nhất, gắn bó chặt chẽ với nhau.",
        "Tính tất yếu: Tiến lên CNXH là một quy luật khách quan của lịch sử, phù hợp với xu thế thời đại và nguyện vọng của nhân dân Việt Nam.",
      ],
      quote: {
        text: "",
        source: "",
      },
      images: [
        {
          url: "/16.jpg",
          caption: "",
          source:
            "https://thuvienphapluat.vn/phap-luat/ho-tro-phap-luat/chuc-nang-cua-nha-nuoc-xa-hoi-chu-nghia-la-gi-ban-chat-cua-nha-nuoc-xa-hoi-chu-nghia-nhu-the-nao-178536-128731.html",
        },
      ],
      // Đã xóa caption/source thừa ở đây
    },
    {
      id: "3.2",
      title: "2.Các Đặc trưng cơ bản của xã hội xã hội chủ nghĩa",
      content: [
        "Chính trị: Là xã hội do nhân dân làm chủ.",
        " Kinh tế: Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu.",
        " Văn hoá - Đạo đức: Có trình độ phát triển cao về văn hoá và đạo đức, bảo đảm sự công bằng và hợp lý trong các quan hệ xã hội.",
        "Chủ thể xây dựng: Là công trình tập thể của nhân dân dưới sự lãnh đạo của Đảng Cộng sản.",
      ],
      quote: {
        text: "",
        source: "",
      },
      images: [
        {
          url: "/17.jpg",
          caption: "",
          source:
            "https://luatminhkhue.vn/dan-chu-la-gi-dac-diem-cua-nen-dan-chu-xa-hoi-chu-nghia.aspx",
        },
      ],
    },
    {
      id: "3.3",
      title: "3.Mục tiêu và Động lực xây dựng CNXH",
      content: [
        "Mục tiêu:",
        "+ Chính trị: Phải xây dựng được chế độ dân chủ, Nhà nước có hai chức năng: dân chủ với dân và chuyên chính với kẻ thù.",
        "+ Kinh tế: Phải xây dựng được nền kinh tế phát triển cao gắn bó mật thiết với mục tiêu về chính trị. Công - nông nghiệp hiện đại, khoa học kỹ thuật tiên tiến, cải thiện đời sống nhân dân.",
        "+ Văn hoá: Phải xây dựng được nền văn hóa mang tính dân tộc, khoa học, đại chúng và tiếp thu tinh hoa văn hóa của nhân loại.",
        "+ Quan hệ xã hội: Phải bảo đảm dân chủ, công bằng văn minh.",
        "Động lực:",
        "+ Lợi ích của dân: “Việc gì có lợi cho dân phải hết sức làm, việc gì có hại cho dân phải hết sức tránh.”",
        "+ Dân chủ: Là dân chủ của nhân dân, là của quý báu nhất của nhân dân.",
        "+ Sức mạnh đoàn kết toàn dân: Là lực lượng mạnh nhất trong tất cả các lực lượng, là động lực mạnh mẽ nhất của CNXH.",
        "+ Hoạt động của những tổ chức: sự lãnh đạo của Đảng Cộng sản giữ vai trò quyết định, Nhà nước là tổ chức đại diện cho ý chí và quyền lực của nhân dân, Các tổ chức chính trị-xã hội đều nhất quán về chính trị và tư tưởng.",
        "+ Con người Việt Nam: Đấy là những con người của chủ nghĩa xã hội.",
      ],
      quote: { text: "", source: "" },
      images: [
        {
          url: "/18.jpg",
          caption: "",
          source:
            "https://www.qdnd.vn/phong-chong-dien-bien-hoa-binh/dan-chu-xhcn-vua-la-muc-tieu-vua-la-dong-luc-cua-su-phat-trien-dat-nuoc-448168",
        },
      ],
    },
    {
      id: "3.4",
      title: "4.Thời kỳ quá độ lên chủ nghĩa xã hội tại Việt Nam",
      content: [
        "Đặc điểm lớn nhất: Việt Nam tiến thẳng lên CNXH từ một nước nông nghiệp lạc hậu, bỏ qua giai đoạn phát triển tư bản chủ nghĩa.",
        "Tính chất: Đây là thời kỳ cải biến sâu sắc nhất nhưng cũng phức tạp, lâu dài, khó khăn và gian khổ nhất.",
        "Nhiệm vụ trọng tâm:",
        "+ Chính trị: Xây dựng chế độ dân chủ vì đây là bản chất của CNXH.",
        "+ Kinh tế: Cải tạo nền kinh tế cũ, xây dựng kinh tế mới với công - nông nghiệp hiện đại.",
        "+ Văn hoá: Tẩy trừ di tích thực dân và văn hoá nô dịch, phát triển truyền thống tốt đẹp của dân tộc và tiếp thu văn hoá tiến bộ thế giới.",
        "+ Xã hội: Thay đổi triệt để những thói quen cũ trong lối sống, xây dựng xã hội dân chủ, công bằng, văn minh.",
      ],
      quote: { text: "", source: "" },
      images: [
        {
          url: "/19.jpg",
          caption: "",
          source:
            "https://luatminhkhue.vn/khai-niem-ve-thoi-ky-qua-do-tinh-tat-yeu-khach-quan-cua-thoi-ky-qua-do-len-chu-nghia-xa-hoi-o-viet-nam.aspx",
        },
      ],
    },
    {
      id: "3.5",
      title:
        "5. Một số nguyên tắc xây dựng chủ nghĩa xã hội trong thời kỳ quá độ",
      content: [
        "Xây dựng chủ nghĩa xã hội là quá trình sâu sắc nhưng phức tạp, lâu dài, khó khăn, gian khổ, đòi hỏi tính năng động, sáng tạo",
        "+ Thứ nhất: mọi tư tưởng, hành động phải được thực hiện trên nền tảng chủ nghĩa Mác - Lênin.",
        "+ Thứ hai: phải giữ vũng độc lập dân tộc.",
        "+ Thứ ba: phải đoàn kết, học tập kinh nghiệm của các nước anh em.",
        "+ Thứ tư: xây phải đi đôi với chống.",
      ],
      quote: { text: "", source: "" },
      images: [
        {
          url: "/19.jpg",
          caption: "",
          source:
            "https://luatminhkhue.vn/khai-niem-ve-thoi-ky-qua-do-tinh-tat-yeu-khach-quan-cua-thoi-ky-qua-do-len-chu-nghia-xa-hoi-o-viet-nam.aspx",
        },
      ],
    },
    {
      id: "3.6",
      title:
        "6. Vận dụng trong giai đoạn hiện nay",
      content: [
        "Kiên định mục tiêu độc lập dân tộc gắn liền với CNXH.",
        "Phát huy sức mạnh dân chủ xã hội chủ nghĩa và hoàn thiện hệ thống pháp luật.",
        "Củng cố hệ thống chính trị, xây dựng Đảng vững mạnh - coi đây là nhiệm vụ then chốt.",
        "Đấu tranh chống suy thoái tư tưởng, đạo đức và các biểu hiện “tự diễn biến”, “tự chuyển hoá”.",


        
      ],
      quote: { text: "", source: "" },
      images: [
        {
          url: "/19.jpg",
          caption: "",
          source:
            "https://luatminhkhue.vn/khai-niem-ve-thoi-ky-qua-do-tinh-tat-yeu-khach-quan-cua-thoi-ky-qua-do-len-chu-nghia-xa-hoi-o-viet-nam.aspx",
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
        <div className="badge-circle">II</div>
        <div className="banner-box">
          <h2>
            TƯ TƯỞNG HỒ CHÍ MINH VỀ CHỦ NGHĨA XÃ HỘI VÀ XÂY DỰNG CHỦ NGHĨA XÃ
            HỘI Ở VIỆT NAM
          </h2>
        </div>
      </div>

      <div className="content-row">
        <div className="content-col text-side">
          {/* <div className="sub-title-box">1. Quan niệm và Bản chất của Chủ nghĩa xã hội</div> */}
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

export default SectionTwo;
