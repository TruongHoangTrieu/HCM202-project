import React, { useState } from "react";
import { Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import Home from "./pages/HomePage/HomePage";
import VisitorDashboard from "./pages/VisitorDashboard/VisitorDashboard";

// Import các trang mới bạn vừa tạo
import DocumentPage from "./pages/DocumentPage/DocumentPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import ContentPage from "./pages/ContentPage/ContentPage";
import QuizPage from "./pages/QuizPage/QuizPage";
import FooterSection from "./components/FooterSection/FooterSection";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingPage onFinished={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tai-lieu" element={<DocumentPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/noi-dung" element={<ContentPage />} />
            <Route path="/quiz" element={<QuizPage />} />

            {/* Trang Admin của bạn */}
            <Route path="/admin-dashboard" element={<VisitorDashboard />} />

            {/* Trang 404 */}
            <Route
              path="*"
              element={
                <div
                  style={{
                    color: "white",
                    textAlign: "center",
                    padding: "150px",
                  }}
                >
                  <h2>404</h2>
                  <p>Không tìm thấy trang.</p>
                </div>
              }
            />
          </Routes>
          <FooterSection />
        </>
      )}
    </div>
  );
}

export default App;
