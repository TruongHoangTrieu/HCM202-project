import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import { BookOpen, Leaf, Users } from "lucide-react";
// Bước 1: Import visitorService từ đường dẫn file của bạn
import { visitorService } from "../../services/visitorService"; 

const HeroSection = () => {
  // Bước 2: Tạo state để lưu trữ số lượt truy cập
  const [visitorCount, setVisitorCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Bước 3: Gọi API khi component được render lần đầu
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const count = await visitorService.getVisitorCount();
        setVisitorCount(count);
      } catch (error) {
        console.error("Không thể lấy số lượt truy cập:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCount();
  }, []);

  return (
    <section className="hero">
      {/* floating decorations */}
      <span className="float-dot dot-1" />
      <span className="float-dot dot-2" />
      <span className="float-dot dot-3" />

      <div className="hero-container">
        {/* pill */}
        <div className="hero-pill">
          <Leaf size={14} />
          <span>Nền tảng học tập tư tưởng Hồ Chí Minh</span>
        </div>

        {/* title */}
        <h1 className="hero-title">
          Khám Phá <span>Tư Tưởng</span>
          <br />
          <span>Hồ Chí Minh</span>
        </h1>

        {/* description */}
        <p className="hero-desc">
          Tra cứu tài liệu, học tập qua flashcard, quiz và chatbot thông minh.
          <br />
          Hiểu sâu về di sản tư tưởng vĩ đại của dân tộc.
        </p>

        {/* search */}
        <div className="hero-search">
          <input
            type="text"
            placeholder="Tìm kiếm tài liệu, bài viết, chủ đề..."
          />
          <button>Tìm kiếm</button>
        </div>

        {/* stats */}
        <div className="hero-stats">
          <div className="stat-card">
            <BookOpen />
            <div>
              <strong>100+</strong>
              <span>Tài liệu</span>
            </div>
          </div>

          <div className="stat-card">
            <Leaf />
            <div>
              <strong>50+</strong>
              <span>Flashcard</span>
            </div>
          </div>

          <div className="stat-card">
            <Users />
            <div>
              {/* Bước 4: Thay thế số 1.248 bằng dữ liệu từ state */}
              <strong>{isLoading ? "..." : visitorCount.toLocaleString()}</strong>
              <span> Lượt truy cập</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;