import React, { useState, useRef } from "react";
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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
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
  desc: "Phân tích giá trị pháp lý và tư tưởng của Tuyên ngôn Độc lập năm 1945 trong việc đặt nền móng cho Nhà nước pháp quyền Việt Nam.",
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
  desc: "Làm rõ nguồn gốc và ý nghĩa của khẩu hiệu “Độc lập, Tự do, Hạnh phúc” trong mối liên hệ với Chủ nghĩa Tam Dân của Tôn Dật Tiên.",
  image: "/6.jpg",
  url: "https://trithucvn2.net/van-hoa/doc-lap-tu-do-hanh-phuc-va-nguon-goc-chu-nghia-tam-dan-cua-ton-dat-tien.html",
},
{
  id: 3,
  title: "Tuyên ngôn Nhân quyền và Dân quyền của Cách mạng Pháp năm 1791",
  category: "Tư tưởng",
  date: "05/12/2024",
  time: "10 phút",
  views: 2156,
  desc: "Giới thiệu nội dung cốt lõi của Tuyên ngôn Nhân quyền và Dân quyền, nền tảng tư tưởng về quyền con người trong xã hội hiện đại.",
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
      image:"https://i.ytimg.com/vi/aOnzYuN76oo/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLC9puIcjRbRAS2i_HB8wDhHD1kMBg",
      videoUrl: "https://www.youtube.com/embed/aOnzYuN76oo?si=3UFd0U_zAAhVmcyo",
    },
    {
      id: 2,
      title: "Độc lập dân tộc gắn liền với Chủ Nghĩa Xã Hội",
      views: "3.421",
      duration: "10:20",
      image:"https://i.ytimg.com/vi/pFIcXGL02L0/hqdefault.jpg?s…BACGAY4AUAB&rs=AOn4CLCly00s4tKp1LNCD0KxB-BVuXVtaw",
      videoUrl: "https://www.youtube.com/embed/pFIcXGL02L0?si=pMjv-DBKoX_jlXAx",
    },
    {
      id: 3,
      title: "Xây dựng con người và tư tưởng xã hội chủ nghĩa",
      views: "7.890",
      duration: "12:15",
      image:
        "	https://i.ytimg.com/vi/kk0FTECgWJs/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLC9zYTqqdEbwis_C614mxljv920KQ",
        videoUrl: "https://www.youtube.com/embed/kk0FTECgWJs?si=pvfOGYdRZPg_nMfN",
    },
    {
      id: 4,
      title: "Học Bác mỗi ngày. Tư tưởng Hồ Chí Minh về xây dựng con người Việt Nam - VNEWS",
      views: "2.345",
      duration: "08:30",
      image:
        "https://i.ytimg.com/vi/PS1rvFLjyzU/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLBzc90C4P6z12dQ-VVz1l7g6mYKHg",
        videoUrl: "https://www.youtube.com/embed/PS1rvFLjyzU?si=auzKrKWeqzaKDzze",
    },
    {
      id: 5,
      title: "Góc nhìn sự thật: Tư tưởng Hồ Chí Minh, sự vận dụng sáng tạo chủ nghĩa Mác-Lênin",
      views: "2.345",
      duration: "08:30",
      image:
        "https://i.ytimg.com/vi/efyXtz7NZAU/hqdefault.jpg?s…BACGAY4AUAB&rs=AOn4CLDbKxBa3uhcdYCKF0N5QW6XPFA0CQ",
        videoUrl: "https://www.youtube.com/embed/efyXtz7NZAU?si=7XpZa0yA6ZzxWKxq",

    },
    {
      id: 6,
      title: "Độc lập dân tộc gắn liền với Chủ nghĩa xã hội | Bảo vệ nền tảng tư tưởng của Đảng | Đảng với Dân",
      views: "2.345",
      duration: "08:30",
      image:
        "https://i.ytimg.com/vi/GvNpvJldjz4/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLDSRmPxWwT9q1MBUBGm_lJTsJqjDQ",
        videoUrl: "https://www.youtube.com/embed/GvNpvJldjz4?si=JvjrD6MqlIWrT2dn",

    },
    
  ];
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
        <div className="section-header video-header">
          <h2>Video nổi bật</h2>

          <div className="video-nav">
            <button ref={prevRef} className="video-prev">
              ‹
            </button>
            <button ref={nextRef} className="video-next">
              ›
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onInit={(swiper) => {
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {videos.map((vid) => (
            <SwiperSlide key={vid.id}>
              <div
                className="video-card"
                onClick={() => setPlayingVideo(vid.videoUrl)}
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
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default BlogPage;
