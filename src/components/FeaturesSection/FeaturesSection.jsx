import React from "react";
import {
  MessageCircle,
  Video,
  BookOpen,
  HelpCircle,
} from "lucide-react";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  const features = [
    {
      icon: <MessageCircle size={20} />,
      title: "Chatbot thông minh",
      desc: "Hỏi đáp trực tiếp với AI về mọi vấn đề liên quan đến tư tưởng HCM",
    },
    {
      icon: <Video size={20} />,
      title: "Blog & Video",
      desc: "Bài viết chuyên sâu và video sinh động giúp hiểu rõ hơn",
    },
    {
      icon: <BookOpen size={20} />,
      title: "Tra cứu tài liệu",
      desc: "Kho tài liệu phong phú về tư tưởng, đạo đức, phong cách Hồ Chí Minh",
    },
    {
      icon: <HelpCircle size={20} />,
      title: "Quiz kiểm tra",
      desc: "Đánh giá kiến thức qua các bài quiz đa dạng và thú vị",
    },
  ];

  return (
    <section className="features">
      <div className="features-container">
        {/* Header */}
        <div className="features-header">
          <h2>Tính năng nổi bật</h2>
          <p>
            Khám phá các công cụ học tập hiện đại giúp bạn hiểu sâu về tư tưởng
            Hồ Chí Minh
          </p>
        </div>

        {/* Grid */}
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
