import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import Home from "./pages/HomePage/HomePage";
import VisitorDashboard from "./pages/VisitorDashboard/VisitorDashboard"; // Trang bạn vừa làm

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingPage onFinished={() => setIsLoading(false)} />
      ) : (
        <Routes>
          {/* Trang chủ với đầy đủ các section cinematic */}
          <Route path="/" element={<Home />} />
          
          {/* Trang thống kê truy cập GET/POST của bạn */}
          <Route path="/admin-dashboard" element={<VisitorDashboard />} />
          
          {/* Bạn có thể thêm trang 404 nếu người dùng nhập sai URL */}
          <Route path="*" element={<div style={{color: 'white', textAlign: 'center', padding: '100px'}}>404 - Không tìm thấy tư liệu</div>} />
        </Routes>
      )}
    </div>
  );
}

export default App;