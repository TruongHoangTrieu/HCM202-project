import React, { useState } from "react";
import { Search, FileText, Eye, Download, BookOpen } from "lucide-react";
import "./DocumentPage.css";

// 1. Dữ liệu mẫu (Data)
const documentsData = [
  {
    id: 1,
    title: "Tuyên ngôn độc lập và Nhà nước pháp quyền",
    category: "Lịch sử",
    desc: "Làm rõ ý nghĩa lịch sử và giá trị pháp lý của Tuyên ngôn Độc lập năm 1945 trong quá trình hình thành Nhà nước pháp quyền Việt Nam.",
    views: 2341,
    year: 1945,
    image: "/2.jpg",
    link: "https://baochinhphu.vn/tuyen-ngon-doc-lap-va-nha-nuoc-phap-quyen-102299509.htm",
  },
  {
    id: 2,
    title: "Tuyên ngôn Nhân quyền và Dân quyền của Cách mạng Pháp năm 1791",
    category: "Lý luận",
    desc: "Trình bày những tư tưởng nền tảng về quyền con người và quyền công dân, đặt cơ sở lý luận cho các giá trị dân chủ hiện đại.",
    views: 892,
    year: 1791,
    image: "/7.jpg",
    link: "https://sachhiem.net/print.php?id=7543",
  },
  {
    id: 3,
    title: "“Độc lập, Tự do, Hạnh phúc” – Chủ nghĩa Tam Dân của Tôn Dật Tiên",
    category: "Lý luận",
    desc: "Phân tích nội hàm tư tưởng của Chủ nghĩa Tam Dân và ảnh hưởng của nó đến khẩu hiệu chính trị về độc lập và hạnh phúc của nhân dân.",
    views: 1523,
    year: 1924,
    image: "/6.jpg",
    link: "https://trithucvn2.net/van-hoa/doc-lap-tu-do-hanh-phuc-va-nguon-goc-chu-nghia-tam-dan-cua-ton-dat-tien.html",
  },
  {
    id: 4,
    title:
      "Tư tưởng Hồ Chí Minh về độc lập dân tộc gắn liền với chủ nghĩa xã hội",
    category: "Lý luận",
    desc: "Khẳng định quan điểm xuyên suốt của Hồ Chí Minh về con đường giải phóng dân tộc gắn liền với mục tiêu xây dựng chủ nghĩa xã hội.",
    views: 756,
    year: 1958,
    image: "/20.jpg",
    link: "https://tuyenquang.dcs.vn/DetailView/24668/22/Tu-tuong-Ho-Chi-Minh-vedoc-lap-dan-toc-gan-lien-voi-chu-nghia-xa-hoi.html",
  },
  {
    id: 5,
    title:
      "Kiên định mục tiêu độc lập dân tộc và chủ nghĩa xã hội trong tình hình mới",
    category: "Di sản",
    desc: "Nhấn mạnh giá trị bền vững trong tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội trước những biến đổi của thời đại.",
    views: 634,
    year: 1969,
    image: "/21.jpg",
    link: "https://tuyenquang.dcs.vn/DetailView/25662/38/Kien-dinh-muc-tieu-doc-lap-dan-toc-va-chu-nghia-xa-hoi-trong-tinh-hinh-moi.html",
  },
  {
    id: 6,
    title: "Một thế kỷ ‘Lệ Bác Hồ rơi trên chữ Lenin’",
    category: "Phong cách",
    desc: "Tái hiện chiều sâu cảm xúc và phong cách tư duy của Hồ Chí Minh khi tiếp cận chủ nghĩa Mác – Lênin và con đường cách mạng vô sản.",
    views: 445,
    year: 1947,
    image: "/10.jpg",
    link: "https://baochinhphu.vn/mot-the-ky-le-bac-ho-roi-tren-chu-lenin-102275597.htm",
  },
];

const categories = [
  "Tất cả",
  "Di sản",
  "Lý luận",
  "Lịch sử",
  "Đạo đức",
  "Chống thực dân",
  "Phong cách",
];

// 2. Component con: DocumentCard
const DocumentCard = ({ doc, onView }) => (
  <div className="doc-card">
    <div className="doc-thumb">
      <img src={doc.image || "/images/default-doc.jpg"} alt={doc.title} />
      <span className="tag-category">{doc.category}</span>
    </div>
    <br></br>
  
    <div className="doc-body">
      <h3 className="doc-title">{doc.title}</h3>
      <p className="doc-desc">{doc.desc}</p>

      <div className="card-actions">
        {doc.image && (
          <button className="btn-view" onClick={() => onView(doc.image)}>
            <Eye size={16} /> Xem
          </button>
        )}

        {doc.link && (
          <a
            href={doc.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-download"
          >
            <BookOpen size={16} /> Đọc thêm
          </a>
        )}
      </div>
    </div>
  </div>
);

// 3. Trang chính: DocumentPage
const DocumentPage = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [activeTab, setActiveTab] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");

  // Logic lọc dữ liệu
  const filteredDocs = documentsData.filter((doc) => {
    const matchesTab = activeTab === "Tất cả" || doc.category === activeTab;
    const matchesSearch = doc.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="document-page">
      {/* Header tìm kiếm */}
      <header className="doc-hero">
        <h1>
          Kho <span className="highlight">Tài liệu</span>
        </h1>
        <p className="sub-title">
          Tìm kiếm và tra cứu các tài liệu về tư tưởng, đạo đức, phong cách Hồ
          Chí Minh
        </p>

        <div className="search-box">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Tìm kiếm tài liệu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      {/* Thanh lọc (Filter) */}
      <div className="filter-container">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-pill ${activeTab === cat ? "active" : ""}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Lưới hiển thị Card */}
      <div className="doc-grid">
        {filteredDocs.length > 0 ? (
          filteredDocs.map((doc) => (
            <DocumentCard key={doc.id} doc={doc} onView={setPreviewImage} />
          ))
        ) : (
          <p className="no-results">Không tìm thấy tài liệu phù hợp.</p>
        )}
      </div>
      {previewImage && (
        <div className="image-overlay" onClick={() => setPreviewImage(null)}>
          <div className="image-modal" onClick={(e) => e.stopPropagation()}>
            <img src={previewImage} alt="Preview" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentPage;
