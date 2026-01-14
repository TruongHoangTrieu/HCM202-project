import React from "react";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Cột 1 */}
        <div className="footer-col">
          <div className="footer-brand">
            <div className="brand-icon">🍃</div>
            <span className="brand-name">Tư Tưởng HCM</span>
          </div>
          <p className="footer-desc">
            Nền tảng học tập và tra cứu về tư tưởng Hồ Chí Minh – 
            Di sản vô giá của dân tộc Việt Nam.
          </p>
        </div>

        {/* Cột 2 */}
        <div className="footer-col">
          <h4 className="footer-title">Liên kết nhanh</h4>
          <ul className="footer-list">
            <li>Trang chủ</li>
            <li>Tài liệu</li>
            <li>Blog & Video</li>
            <li>Quiz</li>
          </ul>
        </div>

        {/* Cột 3 */}
        <div className="footer-col">
          <h4 className="footer-title">Tài nguyên</h4>
          <ul className="footer-list">
            <li>Nội dung</li>
            <li>Chatbot hỗ trợ</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        © 2026 Tư Tưởng HCM. Được phát triển với mục đích giáo dục.
      </div>
    </footer>
  );
};

export default FooterSection;
