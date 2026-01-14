import React from "react";
import { Quote } from "lucide-react";
import "./QuoteSection.css";

const QuoteSection = () => {
  const quotes = [
    "Không có gì quý hơn độc lập, tự do.",
    "Học để làm việc, làm người, làm cán bộ. Học để phụng sự đoàn thể, giai cấp và nhân dân, Tổ quốc và nhân loại.",
    "Muốn xây dựng chủ nghĩa xã hội, trước hết cần có những con người xã hội chủ nghĩa.",
  ];

  return (
    <section className="quote-section">
      <div className="quote-container">
        <div className="quote-icon">
          <Quote size={22} />
        </div>

        {quotes.map((text, index) => (
          <div key={index} className="quote-item">
            <p className="quote-text">“{text}”</p>
            <span className="quote-author">— Hồ Chí Minh —</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuoteSection;
