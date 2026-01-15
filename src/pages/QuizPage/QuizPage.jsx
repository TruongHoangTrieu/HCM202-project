import React, { useState } from "react";
import { MessageCircle, ChevronRight, RotateCcw, Award } from "lucide-react";
import "./QuizPage.css";

const QuizPage = () => {
  // ===== DATA MẪU (bạn thêm sau) =====
  const questions = [
    {
      id: 1,
      question:
        "Câu nói 'Không có gì quý hơn độc lập, tự do' được Bác Hồ nói trong hoàn cảnh nào?",
      options: [
        { id: "A", text: "Đọc Tuyên ngôn Độc lập năm 1945" },
        { id: "B", text: "Kháng chiến chống Pháp năm 1946" },
        { id: "C", text: "Kháng chiến chống Mỹ năm 1965" },
        { id: "D", text: "Hội nghị Genève năm 1954" },
      ],
      correct: "C",
      explanation:
        "Câu nói này được Bác Hồ nói năm 1965, trong kháng chiến chống Mỹ. Đây là chân lý vĩ đại thể hiện khát vọng cao cả nhất của dân tộc Việt Nam.",
    },
    {
      id: 2,
      question:
        "Năm 1919, Nguyễn Ái Quốc gửi bản yêu sách của nhân dân An Nam tới hội nghị nào?",
      options: [
        { id: "A", text: "Hội nghị Giơnevơ" },
        { id: "B", text: "Hội nghị Vécxây" },
        { id: "C", text: "Hội nghị Paris" },
        { id: "D", text: "Hội nghị Bandung" },
      ],
      correct: "B",
      explanation:
        "Năm 1919, Nguyễn Ái Quốc đã gửi bản Yêu sách của nhân dân An Nam tới Hội nghị Vécxây (Pháp), đòi quyền bình đẳng về pháp lý và các quyền tự do, dân chủ.",
    },
    {
      id: 3,
      question:
        "Theo Hồ Chí Minh, một quốc gia phải có bao nhiêu tiêu chí cốt lõi để được coi là độc lập thực sự?",
      options: [
        { id: "A", text: "2 tiêu chí: Quân sự và Kinh tế" },
        { id: "B", text: "3 tiêu chí: Ngoại giao, Quân sự và Kinh tế" },
        {
          id: "C",
          text: "4 tiêu chí: Chính trị, Ngoại giao, Quân sự và Kinh tế",
        },
        {
          id: "D",
          text: "5 tiêu chí: Chính trị, Ngoại giao, Quân sự, Kinh tế và Văn hóa",
        },
      ],
      correct: "B",
      explanation:
        "Theo Hồ Chí Minh, 3 tiêu chí cốt lõi: Ngoại giao (quyền tự quyết về đối ngoại), Quân sự (có quân đội riêng), Kinh tế (có nền tài chính riêng).",
    },
    {
      id: 4,
      question:
        "Sau Cách mạng Tháng Tám 1945, Bác yêu cầu thực hiện ngay mấy điều?",
      options: [
        { id: "A", text: "2 điều: Có ăn và có mặc" },
        { id: "B", text: "3 điều: Có ăn, có mặc và có chỗ ở" },
        { id: "C", text: "4 điều: Có ăn, có mặc, có chỗ ở và có học hành" },
        {
          id: "D",
          text: "5 điều: Có ăn, có mặc, có chỗ ở, có học hành và có thuốc chữa bệnh",
        },
      ],
      correct: "C",
      explanation:
        "Bác yêu cầu thực hiện ngay 4 điều: 1. Làm cho dân có ăn. 2. Làm cho dân có mặc. 3. Làm cho dân có chỗ ở. 4. Làm cho dân có học hành.",
    },
    {
      id: 5,
      question:
        "Năm 1920, Nguyễn Ái Quốc tìm thấy con đường cứu nước khi đọc tác phẩm nào của Lênin?",
      options: [
        {
          id: "A",
          text: "Chủ nghĩa đế quốc, giai đoạn tột cùng của chủ nghĩa tư bản",
        },
        { id: "B", text: "Nhà nước và cách mạng" },
        { id: "C", text: "Sơ thảo luận cương về vấn đề dân tộc và thuộc địa" },
        { id: "D", text: "Làm gì?" },
      ],
      correct: "C",
      explanation:
        "Năm 1920, sau khi đọc bản Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của V.I. Lênin, Hồ Chí Minh đã tìm thấy con đường giải phóng cho dân tộc.",
    },
    {
      id: 6,
      question: "Theo Hồ Chí Minh, ai là 'gốc' của cách mạng?",
      options: [
        { id: "A", text: "Trí thức và tiểu tư sản" },
        { id: "B", text: "Công nhân và nông dân" },
        { id: "C", text: "Tư sản dân tộc" },
        { id: "D", text: "Đảng Cộng sản" },
      ],
      correct: "B",
      explanation:
        "Hồ Chí Minh khẳng định: 'Công nông là người chủ cách mệnh... là gốc cách mệnh' vì họ là hai giai cấp đông đảo nhất, bị áp bức nặng nề nhất, có ý chí cách mạng bền bỉ nhất.",
    },
    {
      id: 7,
      question: "Hồ Chí Minh so sánh chủ nghĩa tư bản với con vật gì?",
      options: [
        { id: "A", text: "Con rắn độc" },
        { id: "B", text: "Con cọp dữ" },
        { id: "C", text: "Con đỉa có hai vòi" },
        { id: "D", text: "Con sói đói" },
      ],
      correct: "C",
      explanation:
        "Hồ Chí Minh viết: 'Chủ nghĩa tư bản là một con đỉa có một cái vòi bám vào giai cấp vô sản ở chính quốc và một cái vòi khác bám vào giai cấp vô sản ở thuộc địa.'",
    },
    {
      id: 8,
      question:
        "Hồ Chí Minh vận dụng sáng tạo thứ tự giải phóng ở Việt Nam theo trình tự nào?",
      options: [
        { id: "A", text: "Giải phóng giai cấp → dân tộc → xã hội → con người" },
        { id: "B", text: "Giải phóng dân tộc → xã hội → giai cấp → con người" },
        { id: "C", text: "Giải phóng xã hội → dân tộc → giai cấp → con người" },
        { id: "D", text: "Giải phóng con người → dân tộc → xã hội → giai cấp" },
      ],
      correct: "B",
      explanation:
        "Khác với mô hình châu Âu, Hồ Chí Minh đặt giải phóng dân tộc lên hàng đầu: Giải phóng dân tộc → giải phóng xã hội → giải phóng giai cấp → giải phóng con người.",
    },
    {
      id: 9,
      category: "Chủ nghĩa xã hội",
      question: "Theo Hồ Chí Minh, chủ nghĩa xã hội trước hết là gì?",
      options: [
        { id: "A", text: "Là công nghiệp hóa, hiện đại hóa đất nước" },
        {
          id: "B",
          text: "Là làm cho nhân dân lao động thoát nạn bần cùng, được ấm no và hạnh phúc",
        },
        { id: "C", text: "Là xóa bỏ tư hữu về tư liệu sản xuất" },
        { id: "D", text: "Là đấu tranh giai cấp quyết liệt" },
      ],
      correct: "B",
      explanation:
        "Hồ Chí Minh quan niệm CNXH trước hết là làm cho nhân dân lao động thoát nạn bần cùng, mọi người có công ăn việc làm, được ấm no và sống đời hạnh phúc.",
    },
    {
      id: 10,
      category: "Chủ nghĩa xã hội",
      question:
        "Động lực mạnh mẽ nhất của chủ nghĩa xã hội theo Hồ Chí Minh là gì?",
      options: [
        { id: "A", text: "Lợi ích cá nhân" },
        { id: "B", text: "Khoa học kỹ thuật" },
        { id: "C", text: "Sức mạnh đoàn kết toàn dân" },
        { id: "D", text: "Kinh tế thị trường" },
      ],
      correct: "C",
      explanation:
        "Theo Hồ Chí Minh, sức mạnh đoàn kết toàn dân là lực lượng mạnh nhất trong tất cả các lực lượng, là động lực mạnh mẽ nhất của CNXH.",
    },
    {
      id: 11,
      category: "Chủ nghĩa xã hội",
      question:
        "Đặc điểm lớn nhất của thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam là gì?",
      options: [
        { id: "A", text: "Có sự giúp đỡ của Liên Xô" },
        {
          id: "B",
          text: "Tiến thẳng lên CNXH từ nước nông nghiệp lạc hậu, bỏ qua giai đoạn tư bản chủ nghĩa",
        },
        { id: "C", text: "Đấu tranh chống đế quốc" },
        { id: "D", text: "Phát triển công nghiệp nặng" },
      ],
      correct: "B",
      explanation:
        "Việt Nam tiến thẳng lên CNXH từ một nước nông nghiệp lạc hậu, bỏ qua giai đoạn phát triển tư bản chủ nghĩa.",
    },
    {
      id: 12,
      category: "Chủ nghĩa xã hội",
      question:
        "Trong bốn nguyên tắc xây dựng CNXH, nguyên tắc nào yêu cầu 'Xây phải đi đôi với chống'?",
      options: [
        { id: "A", text: "Nguyên tắc thứ nhất" },
        { id: "B", text: "Nguyên tắc thứ hai" },
        { id: "C", text: "Nguyên tắc thứ ba" },
        { id: "D", text: "Nguyên tắc thứ tư" },
      ],
      correct: "D",
      explanation:
        "Nguyên tắc thứ tư nhấn mạnh yêu cầu xây dựng CNXH phải đi đôi với đấu tranh chống các biểu hiện tiêu cực.",
    },
    {
      id: 13,
      category: "Vận dụng hiện nay",
      question:
        "Có bao nhiêu điều kiện để bảo đảm độc lập dân tộc gắn liền với chủ nghĩa xã hội?",
      options: [
        { id: "A", text: "2 điều kiện" },
        { id: "B", text: "3 điều kiện" },
        { id: "C", text: "4 điều kiện" },
        { id: "D", text: "5 điều kiện" },
      ],
      correct: "B",
      explanation:
        "Ba điều kiện: Vai trò lãnh đạo của Đảng; củng cố đại đoàn kết dân tộc; đoàn kết với cách mạng thế giới.",
    },
    {
      id: 14,
      category: "Vận dụng hiện nay",
      question:
        "Phương châm phát huy sức mạnh dân chủ xã hội chủ nghĩa hiện nay là gì?",
      options: [
        {
          id: "A",
          text: "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh",
        },
        {
          id: "B",
          text: "Dân biết, dân bàn, dân làm, dân kiểm tra",
        },
        { id: "C", text: "Đoàn kết, đoàn kết, đại đoàn kết" },
        { id: "D", text: "Tất cả vì nhân dân phục vụ" },
      ],
      correct: "B",
      explanation:
        "Phương châm bảo đảm quyền làm chủ của nhân dân trong xây dựng và quản lý nhà nước.",
    },
    {
      id: 15,
      category: "Vận dụng hiện nay",
      question: "Đặc điểm của hệ thống chính trị ở Việt Nam hiện nay là gì?",
      options: [
        { id: "A", text: "Đa nguyên chính trị" },
        { id: "B", text: "Tam quyền phân lập" },
        {
          id: "C",
          text: "Tính nhất nguyên và tính thống nhất",
        },
        { id: "D", text: "Nhà nước liên bang" },
      ],
      correct: "C",
      explanation:
        "Hệ thống chính trị Việt Nam thống nhất dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.",
    },
    {
      id: 16,
      category: "Kiến thức tổng hợp",
      question: "Tác phẩm 'Đường Kách mệnh' được viết vào năm nào?",
      options: [
        { id: "A", text: "1925" },
        { id: "B", text: "1927" },
        { id: "C", text: "1930" },
        { id: "D", text: "1945" },
      ],
      correct: "B",
      explanation:
        "Tác phẩm được Nguyễn Ái Quốc viết năm 1927, là tài liệu lý luận cách mạng quan trọng.",
    },
    {
      id: 17,
      category: "Kiến thức tổng hợp",
      question:
        "Lời kêu gọi toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh được phát đi vào năm nào?",
      options: [
        { id: "A", text: "1945" },
        { id: "B", text: "1946" },
        { id: "C", text: "1954" },
        { id: "D", text: "1965" },
      ],
      correct: "B",
      explanation:
        "Lời kêu gọi được phát đi ngày 19/12/1946, mở đầu cuộc kháng chiến chống Pháp.",
    },
    {
      id: 18,
      category: "Kiến thức tổng hợp",
      question: "Chánh cương vắn tắt của Đảng được thông qua vào năm nào?",
      options: [
        { id: "A", text: "1925" },
        { id: "B", text: "1927" },
        { id: "C", text: "1930" },
        { id: "D", text: "1945" },
      ],
      correct: "C",
      explanation:
        "Được thông qua năm 1930 tại Hội nghị thành lập Đảng Cộng sản Việt Nam.",
    },
    {
      id: 19,
      category: "Độc lập dân tộc",
      question:
        "Hồ Chí Minh đã kế thừa giá trị quốc tế từ những tuyên ngôn nào?",
      options: [
        {
          id: "A",
          text: "Tuyên ngôn Cộng sản và Tuyên ngôn Nhân quyền",
        },
        {
          id: "B",
          text: "Tuyên ngôn Độc lập của Mỹ (1776) và Tuyên ngôn Nhân quyền và Dân quyền của Pháp (1791)",
        },
        {
          id: "C",
          text: "Tuyên ngôn Độc lập của Mỹ và Tuyên ngôn Cộng sản",
        },
        {
          id: "D",
          text: "Hiến chương Liên Hợp Quốc và Tuyên ngôn Nhân quyền",
        },
      ],
      correct: "B",
      explanation:
        "Hồ Chí Minh trích dẫn các tuyên ngôn này để khẳng định quyền độc lập của dân tộc Việt Nam.",
    },
    {
      id: 20,
      category: "Cách mạng giải phóng dân tộc",
      question:
        "Theo Hồ Chí Minh, bạo lực cách mạng bao gồm những lực lượng nào?",
      options: [
        { id: "A", text: "Chỉ có lực lượng quân sự" },
        {
          id: "B",
          text: "Lực lượng chính trị và lực lượng quân sự",
        },
        {
          id: "C",
          text: "Lực lượng kinh tế và lực lượng văn hóa",
        },
        {
          id: "D",
          text: "Lực lượng ngoại giao và lực lượng quân sự",
        },
      ],
      correct: "B",
      explanation:
        "Bạo lực cách mạng gồm lực lượng chính trị và lực lượng quân sự, kết hợp đấu tranh chính trị và đấu tranh vũ trang.",
    },
  ];

  // ===== STATE =====
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const current = questions[currentQuestion];

  // ===== HANDLERS =====
  const handleSelect = (id) => {
    if (!showExplanation) setSelectedOption(id);
  };

  const handleNext = () => {
    // Lần 1: chấm điểm + hiện giải thích
    if (!showExplanation) {
      if (selectedOption === current.correct) {
        setScore((prev) => prev + 10);
      }
      setShowExplanation(true);
      return;
    }

    // Lần 2: sang câu tiếp
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setIsFinished(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // ===== RENDER =====
  return (
    <div className="quiz-page">
      <header className="quiz-header">
        <h1>
          <span className="highlight">Quiz</span> Kiểm tra
        </h1>
        <p>Kiểm tra kiến thức về tư tưởng Hồ Chí Minh</p>
      </header>

      {!isFinished ? (
        <div className="quiz-container">
          {/* Progress */}
          <div className="quiz-stats">
            <span>
              Câu {currentQuestion + 1} / {questions.length}
            </span>
            <span>Điểm: {score}</span>
          </div>

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>

          {/* Question */}
          <div className="question-card">
            <h2 className="question-text">{current.question}</h2>

            <div className="options-list">
              {current.options.map((opt) => {
                const isCorrect = showExplanation && opt.id === current.correct;
                const isWrong =
                  showExplanation &&
                  opt.id === selectedOption &&
                  opt.id !== current.correct;

                return (
                  <button
                    key={opt.id}
                    className={`option-item
                      ${selectedOption === opt.id ? "active" : ""}
                      ${isCorrect ? "correct" : ""}
                      ${isWrong ? "wrong" : ""}
                    `}
                    onClick={() => handleSelect(opt.id)}
                    disabled={showExplanation}
                  >
                    <span className="option-letter">{opt.id}</span>
                    <span className="option-text">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {showExplanation && (
              <div className="explanation-box">
                <strong>Giải thích:</strong>
                <p>{current.explanation}</p>
              </div>
            )}

            <button
              className="next-btn"
              disabled={!selectedOption}
              onClick={handleNext}
            >
              {!showExplanation
                ? "Xem giải thích"
                : currentQuestion + 1 === questions.length
                ? "Hoàn thành"
                : "Câu tiếp theo"}
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      ) : (
        <div className="result-card">
          <Award size={60} className="result-icon" />
          <h2 className="result-content">Hoàn thành bài kiểm tra!</h2>
          <p className="final-score">
            Số điểm của bạn: <span>{score}</span>
          </p>
          <button className="reset-btn" onClick={resetQuiz}>
            <RotateCcw size={18} /> Làm lại
          </button>
        </div>
      )}

      {/* Floating Chat */}
      <div className="floating-chat">
        <MessageCircle size={28} />
      </div>
    </div>
  );
};

export default QuizPage;
