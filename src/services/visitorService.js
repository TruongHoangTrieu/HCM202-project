// src/services/visitorService.js
import { apiClient } from "./apiClient";

export const visitorService = {
  // 1. Ghi nhận lượt truy cập (POST)
  trackVisitor: () => {
    return apiClient("/visitor/track", { 
      method: "POST", 
      body: "" 
    });
  },

  // 2. Lấy danh sách chi tiết (GET)
  getVisitorList: async () => {
    try {
      // apiClient mặc định là GET nên không cần truyền method
      const data = await apiClient("/visitor/list"); 
      
      // Nếu apiClient của bạn trả về .text(), chúng ta cần parse JSON tại đây
      return JSON.parse(data); 
    } catch (error) {
      console.error("Lỗi lấy danh sách:", error);
      return [];
    }
  },

  // 3. Lấy tổng số lượng (GET)
  getVisitorCount: async () => {
    try {
      const data = await apiClient("/visitor/count");
      
      // Chuyển đổi chuỗi nhận được thành số nguyên
      return parseInt(data) || 0;
    } catch (error) {
      console.error("Lỗi lấy số lượng:", error);
      return 0;
    }
  }
};