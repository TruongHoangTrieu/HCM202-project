// src/pages/ContentPage/ContentPage.jsx
import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import "./ContentPage.css"; // Import file CSS dùng chung

// Import 2 component con vừa tạo
import SectionOnePart1 from "./components/SectionOnePart1/SectionOnePart1";
import SectionOnePart2 from "./components/SectionOnePart2/SectionOnePart2";
// import SectionTwo from "./components/SectionTwo/SectionTwo";
// import SectionThree from "./components/SectionThree/SectionThree";
// import SectionFour from "./components/SectionFour/SectionFour";

const ContentPage = () => {
  // State quản lý mục nào đang được mở trên toàn trang
  // Mặc định mở mục "1.1"
  const [activeItem, setActiveItem] = useState("1.1");

  return (
    <div className="content-page-wrapper">
      {/* Header chính của trang */}
      <header className="main-header">
        <div className="chapter-label">——————————Chương 3——————————</div>
        <h1>
          TƯ TƯỞNG HỒ CHÍ MINH <br /> VỀ ĐỘC LẬP DÂN TỘC VÀ CHỦ NGHĨA XÃ HỘI
        </h1>
      </header>

      <div className="timeline-container">
        {/* Đường kẻ dọc chạy xuyên suốt */}
        <div className="main-vertical-line"></div>

        {/* --- KHỐI PHẦN I --- */}
        <section className="section-block">
          {/* Gọi Component Ảnh 1 và truyền props cần thiết */}
          <SectionOnePart1
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />

          {/* Gọi Component Ảnh 2 vài truyền props cần thiết */}
          <SectionOnePart2
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          {/* <SectionTwo activeItem={activeItem} setActiveItem={setActiveItem} />
          <SectionThree activeItem={activeItem} setActiveItem={setActiveItem} />
          <SectionFour activeItem={activeItem} setActiveItem={setActiveItem} /> */}
        </section>

        {/* --- CÁC PHẦN KHÁC (II, III, IV) --- */}
        {/* Sau này bạn cũng có thể tách các phần này ra tương tự */}
      </div>


      
    </div>
  );
};

export default ContentPage;
