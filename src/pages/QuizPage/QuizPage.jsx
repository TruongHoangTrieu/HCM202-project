import React, { useState } from 'react';
import { MessageCircle, ChevronRight, RotateCcw, Award } from 'lucide-react';
import './QuizPage.css';

const QuizPage = () => {
  // Dữ liệu câu hỏi mẫu
  const questions = [
    {
      id: 1,
      question: "Câu nói 'Không có gì quý hơn độc lập, tự do' được Bác Hồ nói trong hoàn cảnh nào?",
      options: [
        { id: 'A', text: "Đọc Tuyên ngôn Độc lập năm 1945" },
        { id: 'B', text: "Kháng chiến chống Pháp năm 1946" },
        { id: 'C', text: "Kháng chiến chống Mỹ năm 1966" },
        { id: 'D', text: "Hội nghị Genève năm 1954" }
      ],
      correct: 'C'
    },
    // Bạn có thể thêm các câu hỏi khác vào đây
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 10);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="quiz-page">
      <header className="quiz-header">
        <h1><span className="highlight">Quiz</span> Kiểm tra</h1>
        <p>Kiểm tra kiến thức về tư tưởng Hồ Chí Minh</p>
      </header>

      {!isFinished ? (
        <div className="quiz-container">
          {/* Thông tin tiến trình */}
          <div className="quiz-stats">
            <span>Câu hỏi {currentQuestion + 1} / {questions.length}</span>
            <span>Điểm: {score}</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>

          {/* Nội dung câu hỏi */}
          <div className="question-card">
            <h2 className="question-text">
              {questions[currentQuestion].question}
            </h2>

            <div className="options-list">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option.id}
                  className={`option-item ${selectedOption === option.id ? 'active' : ''}`}
                  onClick={() => handleOptionClick(option.id)}
                >
                  <span className="option-letter">{option.id}</span>
                  <span className="option-text">{option.text}</span>
                </button>
              ))}
            </div>

            <button 
              className="next-btn" 
              disabled={!selectedOption}
              onClick={handleNext}
            >
              {currentQuestion + 1 === questions.length ? "Hoàn thành" : "Câu tiếp theo"} 
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      ) : (
        <div className="result-card">
          <Award size={60} className="result-icon" />
          <h2>Chúc mừng bạn đã hoàn thành!</h2>
          <p className="final-score">Số điểm của bạn: <span>{score}</span></p>
          <button className="reset-btn" onClick={resetQuiz}>
            <RotateCcw size={18} /> Làm lại bài thi
          </button>
        </div>
      )}

      {/* Nút Chat nổi */}
      <div className="floating-chat">
        <MessageCircle size={28} />
      </div>
    </div>
  );
};

export default QuizPage;