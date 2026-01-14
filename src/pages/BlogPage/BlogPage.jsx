import React from 'react';
import { Calendar, Clock, Eye, Play, ChevronRight, MessageCircle } from 'lucide-react';
import './BlogPage.css';

const BlogPage = () => {
  // Dữ liệu mẫu cho Bài viết
  const articles = [
    {
      id: 1,
      title: "5 bài học về đạo đức từ Chủ tịch Hồ Chí Minh",
      category: "Đạo đức",
      date: "15/12/2024",
      time: "5 phút",
      views: 1234,
      desc: "Những giá trị đạo đức cốt lõi mà Bác Hồ để lại cho thế hệ trẻ Việt Nam...",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      title: "Phong cách làm việc của Hồ Chí Minh",
      category: "Phong cách",
      date: "10/12/2024",
      time: "7 phút",
      views: 892,
      desc: "Học hỏi phương pháp làm việc khoa học và hiệu quả từ Người...",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 3,
      title: "Tư tưởng về độc lập dân tộc",
      category: "Tư tưởng",
      date: "05/12/2024",
      time: "10 phút",
      views: 2156,
      desc: "Phân tích sâu về khát vọng độc lập, tự do trong tư tưởng Hồ Chí Minh...",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400"
    }
  ];

  // Dữ liệu mẫu cho Video
  const videos = [
    { id: 1, title: "Cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh", views: "5.632", duration: "15:45", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=400" },
    { id: 2, title: "Những câu chuyện về Bác Hồ với thiếu nhi", views: "3.421", duration: "10:20", image: "https://images.unsplash.com/photo-1491843384429-17e73d35f98c?auto=format&fit=crop&q=80&w=400" },
    { id: 3, title: "Di chúc của Bác - Lời dặn dò cuối cùng", views: "7.890", duration: "12:15", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=400" },
    { id: 4, title: "Học tập và làm theo tấm gương Bác Hồ", views: "2.345", duration: "08:30", image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <div className="blog-page">
      {/* Tiêu đề trang */}
      <header className="blog-header">
        <h1>Blog & <span className="highlight">Video</span></h1>
        <p>Bài viết chuyên sâu và video sinh động về tư tưởng Hồ Chí Minh</p>
      </header>

      {/* Phần Bài viết mới nhất */}
      <section className="blog-section">
        <div className="section-header">
          <h2>Bài viết mới nhất</h2>
          <a href="/all-blogs" className="view-all">Xem tất cả <ChevronRight size={16} /></a>
        </div>
        <div className="article-grid">
          {articles.map(art => (
            <div key={art.id} className="article-card">
              <div className="article-image">
                <img src={art.image} alt={art.title} />
                <span className="article-tag">{art.category}</span>
              </div>
              <div className="article-content">
                <div className="article-meta">
                  <span><Calendar size={14} /> {art.date}</span>
                  <span><Clock size={14} /> {art.time}</span>
                  
                </div>
                <h3>{art.title}</h3>
                <p>{art.desc}</p>
                <button className="read-more">Đọc thêm</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Phần Video nổi bật */}
      <section className="blog-section">
        <div className="section-header">
          <h2>Video nổi bật</h2>
          <a href="/all-videos" className="view-all">Xem tất cả <ChevronRight size={16} /></a>
        </div>
        <div className="video-grid">
          {videos.map(vid => (
            <div key={vid.id} className="video-card">
              <div className="video-thumbnail">
                <img src={vid.image} alt={vid.title} />
                <div className="play-overlay">
                  <div className="play-btn"><Play fill="currentColor" size={20} /></div>
                </div>
                <span className="video-duration">{vid.duration}</span>
              </div>
              <div className="video-info">
                <h4>{vid.title}</h4>
                
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nút Chat nổi */}
      <div className="floating-chat">
        <MessageCircle size={28} />
      </div>
    </div>
  );
};

export default BlogPage;