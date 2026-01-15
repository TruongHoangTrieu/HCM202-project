import React, { useState, useEffect, useRef } from "react"; // Thêm useEffect và useRef
import { MessageCircle, X, Send, Bot } from "lucide-react";
import "./AIChatbot.css";
import { aiService } from "../../services/aiService";

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Xin chào! Tôi có thể giúp gì cho bạn về tư tưởng Hồ Chí Minh?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  
  // LỖI CŨ: Bạn cần thêm dòng này để quản lý trạng thái đang gửi tin
  const [isTyping, setIsTyping] = useState(false);

  // Thêm useRef để tự động cuộn xuống cuối khi có tin nhắn mới
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]); // Cuộn mỗi khi danh sách tin nhắn hoặc trạng thái typing thay đổi

  const handleSend = async () => {
    if (input.trim() === "" || isTyping) return;

    const userText = input;
    setInput("");
    
    // 1. Hiển thị tin nhắn người dùng ngay lập tức
    const newMessages = [...messages, { text: userText, sender: "user" }];
    setMessages(newMessages);
    
    setIsTyping(true); // Bắt đầu trạng thái đang xử lý

    try {
      // 2. Gọi API thông qua Service
      const botReply = await aiService.sendMessage(userText);
      
      // 3. Hiển thị câu trả lời từ AI
      setMessages([...newMessages, { text: botReply, sender: "bot" }]);
    } catch (error) {
      // Xử lý lỗi khi API không phản hồi
      setMessages([...newMessages, { 
        text: "Hệ thống đang bận một chút, bạn thử lại câu hỏi này nhé!", 
        sender: "bot" 
      }]);
    } finally {
      setIsTyping(false); // Tắt trạng thái xử lý
    }
  };

  return (
    <div className="chatbot-wrapper">
      <button 
        className={`chatbot-toggle ${isOpen ? "active" : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="header-info">
              <div className="bot-avatar">
                <Bot size={20} />
              </div>
              <div>
                <h3>Trợ lý ảo</h3>
                {/* Cập nhật trạng thái hiển thị */}
                <span>{isTyping ? "Đang suy nghĩ..." : "Đang trực tuyến"}</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message-item ${msg.sender}`}>
                <div className="message-bubble">
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Hiển thị hiệu ứng chờ khi AI đang xử lý */}
            {isTyping && (
              <div className="message-item bot">
                <div className="message-bubble typing">
                  AI đang trả lời...
                </div>
              </div>
            )}
            
            {/* Điểm neo để tự động cuộn xuống */}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input">
            <input 
              type="text" 
              placeholder="Nhập câu hỏi của bạn..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              disabled={isTyping} // Khóa input khi đang chờ trả lời
            />
            <button onClick={handleSend} disabled={isTyping || !input.trim()}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatbot;