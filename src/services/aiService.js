import { apiClient } from "./apiClient";

export const aiService = {
  /**
   * Gửi tin nhắn đến AI theo định dạng { "message": "nội dung" }
   */
  sendMessage: async (userMessage) => {
    try {
      const responseText = await apiClient("/ai/chat", {
        method: "POST",
        body: JSON.stringify({ message: userMessage }), 
      });

      // Vì apiClient trả về .text(), chúng ta cần xử lý chuỗi này
      try {
        const data = JSON.parse(responseText);
        // Nếu API trả về object kiểu { "reply": "..." } hoặc { "message": "..." }
        return data.reply || data.message || responseText;
      } catch (e) {
        // Nếu response là văn bản thuần túy (không phải JSON)
        return responseText;
      }
    } catch (error) {
      console.error("AI Service Error:", error);
      throw error;
    }
  },
};