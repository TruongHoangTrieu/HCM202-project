import React from "react";
import {
  CheckCircle,
  Sparkles,
  ShieldCheck,
  BookOpen,
} from "lucide-react";
import "./AiUsage.css";

function AiUsage() {
  return (
    <div className="ai-usage-page">
      {/* Header */}
      <div className="ai-header">
        <span className="ai-badge">AI Usage Report</span>
        <h1>A.I USAGE</h1>
        <p>Báo cáo về việc sử dụng công cụ AI trong quá trình học tập</p>
      </div>

      {/* Card 1 */}
      <div className="ai-card">
        <h3>
          <Sparkles size={18} /> Công cụ sử dụng
        </h3>
        <ul>
          <li>
            <CheckCircle size={16} /> ChatGPT
          </li>
          <li>
            <CheckCircle size={16} /> Gemini
          </li>
        </ul>
      </div>

      {/* Card 2 */}
      <div className="ai-card">
        <h3>
          <BookOpen size={18} /> Mục đích sử dụng
        </h3>
        <ul>
          <li>
            <CheckCircle size={16} /> Tóm tắt nội dung Chương 3 trong Giáo trình
            Tư tưởng Hồ Chí Minh.
          </li>
          <li>
            <CheckCircle size={16} /> Hỗ trợ hình thành ý chính và cấu trúc nội
            dung bài học.
          </li>
          <li>
            <CheckCircle size={16} /> Gợi ý trình bày nội dung rõ ràng, dễ hiểu.
          </li>
        </ul>
      </div>

      {/* Card 3 */}
      <div className="ai-card">
        <h3>
          <ShieldCheck size={18} /> Phần chỉnh sửa & kiểm chứng
        </h3>
        <ul>
          <li>
            <CheckCircle size={16} /> Nội dung được nhóm đọc lại, chọn lọc và
            chỉnh sửa.
          </li>
          <li>
            <CheckCircle size={16} /> Đối chiếu thông tin với giáo trình chính
            thức.
          </li>
          <li>
            <CheckCircle size={16} /> Đảm bảo tính chính xác và phù hợp học
            thuật.
          </li>
        </ul>
      </div>

      {/* Card cam kết */}
      <div className="ai-card ai-commit">
        <h3>Cam kết về tính trung thực và liêm chính học thuật</h3>
        <p>
          AI chỉ được sử dụng như công cụ hỗ trợ. Toàn bộ nội dung phân tích,
          chỉnh sửa và kết luận đều do thành viên trong nhóm thực hiện dựa trên
          tài liệu học tập chính thống.
        </p>
      </div>

      {/* Reference */}
      <div className="ai-card">
        <h3>Nguồn tham khảo</h3>
        <p>
          Bộ Giáo dục và Đào tạo (2021). <i>Giáo trình Tư tưởng Hồ Chí Minh</i>.
          NXB Chính trị Quốc gia Sự thật, Hà Nội.
        </p>
      </div>
    </div>
  );
}

export default AiUsage;
