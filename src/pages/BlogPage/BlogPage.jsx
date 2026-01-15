import React, { useState } from "react";
import {
  X,
  Calendar,
  Clock,
  Eye,
  Play,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import "./BlogPage.css";

const BlogPage = () => {
  // Dữ liệu mẫu cho Bài viết
  const [playingVideo, setPlayingVideo] = useState(null);
  const articles = [
    {
      id: 1,
      title: "Tuyên ngôn độc lập và Nhà nước pháp quyền",
      category: "",
      date: "15/12/2024",
      time: "5 phút",
      views: 1234,
      desc: "Những giá trị đạo đức cốt lõi mà Bác Hồ để lại cho thế hệ trẻ Việt Nam...",
      image: "/2.jpg",
      url: "https://baochinhphu.vn/tuyen-ngon-doc-lap-va-nha-nuoc-phap-quyen-102299509.htm",
    },
    {
      id: 2,
      title: "“Độc lập, Tự do, Hạnh phúc” – Chủ nghĩa Tam Dân của Tôn Dật Tiên",
      category: "",
      date: "10/12/2024",
      time: "7 phút",
      views: 892,
      desc: "Học hỏi phương pháp làm việc khoa học và hiệu quả từ Người...",
      image: "/6.jpg",
      url: "https://trithucvn2.net/van-hoa/doc-lap-tu-do-hanh-phuc-va-nguon-goc-chu-nghia-tam-dan-cua-ton-dat-tien.html",
    },
    {
      id: 3,
      title: " Tuyên ngôn Nhân quyền và Dân quyền của Cách mạng Pháp năm 1791",
      category: "Tư tưởng",
      date: "05/12/2024",
      time: "10 phút",
      views: 2156,
      desc: "Phân tích sâu về khát vọng độc lập, tự do trong tư tưởng Hồ Chí Minh...",
      image: "/7.jpg",
      url: "https://sachhiem.net/print.php?id=7543",
    },
  ];

  // Dữ liệu mẫu cho Video
  const videos = [
    {
      id: 1,
      title:
        "Độc lập dân tộc gắn liền với chủ nghĩa xã hội là lựa chọn tất yếu của Cách mạng Việt Nam",
      views: "5.632",
      duration: "9:49",
      image:
        "	https://i.ytimg.com/vi/aOnzYuN76oo/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLC9puIcjRbRAS2i_HB8wDhHD1kMBg",
      videoUrl: "https://www.youtube.com/embed/aOnzYuN76oo?si=3UFd0U_zAAhVmcyo",
    },
    {
      id: 2,
      title: "Những câu chuyện về Bác Hồ với thiếu nhi",
      views: "3.421",
      duration: "10:20",
      image:
        "https://images.unsplash.com/photo-1491843384429-17e73d35f98c?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      title: "Di chúc của Bác - Lời dặn dò cuối cùng",
      views: "7.890",
      duration: "12:15",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 4,
      title: "Học tập và làm theo tấm gương Bác Hồ",
      views: "2.345",
      duration: "08:30",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <div className="blog-page">
      {/* Tiêu đề trang */}
      {playingVideo && (
        <div className="video-overlay" onClick={() => setPlayingVideo(null)}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-video"
              onClick={() => setPlayingVideo(null)}
            >
              <X size={32} />
            </button>
            <div className="iframe-wrapper">
              <iframe
                src={`${playingVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
      <header className="blog-header">
        <h1>
          Blog & <span className="highlight">Video</span>
        </h1>
        <p>Bài viết chuyên sâu và video sinh động về tư tưởng Hồ Chí Minh</p>
      </header>

      {/* Phần Bài viết mới nhất */}
      <section className="blog-section">
        <div className="section-header">
          <h2>Bài viết mới nhất</h2>
          <a href="/tai-lieu" className="view-all">
            Xem tất cả <ChevronRight size={16} />
          </a>
        </div>
        <div className="article-grid">
          {articles.map((art) => (
            <div key={art.id} className="article-card">
              <div className="article-image">
                <img src={art.image} alt={art.title} />
              </div>
              <div className="article-content">
                <div className="article-meta">
                  <span>
                    <Calendar size={14} /> {art.date}
                  </span>
                  <span>
                    <Clock size={14} /> {art.time}
                  </span>
                </div>
                <h3>{art.title}</h3>
                <p>{art.desc}</p>
                <a
                  href={art.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-more"
                >
                  Đọc thêm
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Phần Video nổi bật */}
      <section className="blog-section">
        <div className="section-header">
          <h2>Video nổi bật</h2>
        </div>
        <div className="video-grid">
          {videos.map((vid) => (
            <div
              key={vid.id}
              className="video-card"
              onClick={() => setPlayingVideo(vid.videoUrl)} // Click để phát
            >
              <div className="video-thumbnail">
                <img src={vid.image} alt={vid.title} />
                <div className="play-overlay">
                  <div className="play-btn">
                    <Play fill="currentColor" size={20} />
                  </div>
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
    </div>
  );
};

export default BlogPage;
