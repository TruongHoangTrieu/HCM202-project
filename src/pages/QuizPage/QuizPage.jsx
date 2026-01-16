import React, { useState, useEffect } from "react"; // Thêm useEffect
import { MessageCircle, ChevronRight, RotateCcw, Award } from "lucide-react";
import "./QuizPage.css";
const ALL_QUESTIONS = [
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
    {
    id: 21,
    category: "Con đường cứu nước",
    question: "Nguyễn Ái Quốc rời bến cảng Nhà Rồng ra đi tìm đường cứu nước vào ngày tháng năm nào?",
    options: [
      { id: "A", text: "05/06/1911" },
      { id: "B", text: "19/05/1911" },
      { id: "C", text: "02/09/1911" },
      { id: "D", text: "03/02/1911" },
    ],
    correct: "A",
    explanation: "Ngày 05/06/1911, từ bến cảng Nhà Rồng, người thanh niên Nguyễn Tất Thành đã lên con tàu Amiral Latouche-Tréville ra đi tìm đường cứu nước.",
  },
  {
    id: 22,
    category: "Độc lập dân tộc",
    question: "Theo Hồ Chí Minh, muốn cứu nước và giải phóng dân tộc không có con đường nào khác ngoài con đường nào?",
    options: [
      { id: "A", text: "Cách mạng tư sản" },
      { id: "B", text: "Cách mạng vô sản" },
      { id: "C", text: "Cải cách văn hóa" },
      { id: "D", text: "Ngoại giao hòa bình" },
    ],
    correct: "B",
    explanation: "Hồ Chí Minh khẳng định: 'Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản'.",
  },
  {
    id: 23,
    category: "Đạo đức cách mạng",
    question: "Bốn đức tính cần thiết của một con người theo tư tưởng Hồ Chí Minh là gì?",
    options: [
      { id: "A", text: "Cần, kiệm, liêm, chính" },
      { id: "B", text: "Nhân, nghĩa, lễ, trí" },
      { id: "C", text: "Tự tin, tự trọng, trung hậu, đảm đang" },
      { id: "D", text: "Cần cù, sáng tạo, dũng cảm, trung thành" },
    ],
    correct: "A",
    explanation: "Bác ví: 'Trời có bốn mùa... Đất có bốn phương... Người có bốn đức: Cần, Kiệm, Liêm, Chính. Thiếu một đức thì không thành người'.",
  },
  {
    id: 24,
    category: "Xây dựng Đảng",
    question: "Nguyên tắc tổ chức cơ bản nhất của Đảng Cộng sản Việt Nam là gì?",
    options: [
      { id: "A", text: "Tự phê bình và phê bình" },
      { id: "B", text: "Đoàn kết thống nhất" },
      { id: "C", text: "Tập trung dân chủ" },
      { id: "D", text: "Kỷ luật tự giác" },
    ],
    correct: "C",
    explanation: "Tập trung dân chủ là nguyên tắc tổ chức cơ bản nhất, đảm bảo Đảng là một khối thống nhất về ý chí và hành động.",
  },
  {
    id: 25,
    category: "Chủ nghĩa xã hội",
    question: "Theo Hồ Chí Minh, mục tiêu cao nhất của chủ nghĩa xã hội là gì?",
    options: [
      { id: "A", text: "Phát triển công nghiệp nặng" },
      { id: "B", text: "Nâng cao đời sống vật chất và tinh thần của nhân dân" },
      { id: "C", text: "Thắng lợi trong các cuộc chiến tranh" },
      { id: "D", text: "Mở rộng lãnh thổ" },
    ],
    correct: "B",
    explanation: "Mục đích của CNXH là không ngừng nâng cao đời sống vật chất và tinh thần của nhân dân, trước hết là nhân dân lao động.",
  },
  {
    id: 26,
    category: "Văn hóa",
    question: "Hồ Chí Minh định nghĩa: 'Văn hóa soi đường cho...'?",
    options: [
      { id: "A", text: "Kinh tế phát triển" },
      { id: "B", text: "Chính trị đi theo" },
      { id: "C", text: "Quốc dân đi" },
      { id: "D", text: "Xã hội văn minh" },
    ],
    correct: "C",
    explanation: "Tại Hội nghị Văn hóa toàn quốc năm 1946, Bác khẳng định: 'Văn hóa soi đường cho quốc dân đi'.",
  },
  {
    id: 27,
    category: "Đoàn kết",
    question: "Hoàn thiện câu nói: 'Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, ...'?",
    options: [
      { id: "A", text: "Mỹ mãn thành công" },
      { id: "B", text: "Đại thành công" },
      { id: "C", text: "Thắng lợi thành công" },
      { id: "D", text: "Rực rỡ thành công" },
    ],
    correct: "B",
    explanation: "Câu nói đầy đủ là: 'Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công'.",
  },
  {
    id: 28,
    category: "Đạo đức cách mạng",
    question: "Trong tư tưởng Hồ Chí Minh, phẩm chất đạo đức quan trọng nhất, bao trùm nhất là gì?",
    options: [
      { id: "A", text: "Cần, Kiệm, Liêm, Chính" },
      { id: "B", text: "Trung với nước, hiếu với dân" },
      { id: "C", text: "Yêu thương con người" },
      { id: "D", text: "Tinh thần quốc tế trong sáng" },
    ],
    correct: "B",
    explanation: "'Trung với nước, hiếu với dân' là phẩm chất quan trọng nhất, là trục chính xuyên suốt đạo đức cách mạng Hồ Chí Minh.",
  },
  {
    id: 29,
    category: "Con người",
    question: "Câu nói: 'Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người' được trích từ đâu?",
    options: [
      { id: "A", text: "Bài phát biểu tại lớp học chính trị giáo viên năm 1958" },
      { id: "B", text: "Bản Di chúc năm 1969" },
      { id: "C", text: "Sửa đổi lối làm việc" },
      { id: "D", text: "Đường Kách mệnh" },
    ],
    correct: "A",
    explanation: "Bác nói câu này tại lớp học chính trị của giáo viên miền Bắc tháng 9 năm 1958, nhấn mạnh chiến lược đào tạo con người.",
  },
  {
    id: 30,
    category: "Hệ thống chính trị",
    question: "Dân chủ trong tư tưởng Hồ Chí Minh được hiểu ngắn gọn là gì?",
    options: [
      { id: "A", text: "Dân là chủ và dân làm chủ" },
      { id: "B", text: "Dân được tự do làm mọi việc" },
      { id: "C", text: "Dân đi bầu cử" },
      { id: "D", text: "Dân được phê bình cán bộ" },
    ],
    correct: "A",
    explanation: "Bác giải thích: Dân là chủ (vị thế của dân) và dân làm chủ (quyền và trách nhiệm của dân).",
  },
  {
    id: 31,
    category: "Chiến lược quân sự",
    question: "Hồ Chí Minh xác định phương châm của cuộc kháng chiến chống Pháp là gì?",
    options: [
      { id: "A", text: "Đánh nhanh thắng nhanh" },
      { id: "B", text: "Kháng chiến toàn dân, toàn diện, trường kỳ và tự lực cánh sinh" },
      { id: "C", text: "Vừa đánh vừa đàm" },
      { id: "D", text: "Tổng tấn công và nổi dậy" },
    ],
    correct: "B",
    explanation: "Đường lối kháng chiến là toàn dân, toàn diện, trường kỳ và dựa vào sức mình là chính.",
  },
  {
    id: 32,
    category: "Xây dựng Đảng",
    question: "Theo Bác, vũ khí sắc bén để làm cho Đảng luôn trong sạch, vững mạnh là gì?",
    options: [
      { id: "A", text: "Kỷ luật nghiêm minh" },
      { id: "B", text: "Học tập lý luận" },
      { id: "C", text: "Tự phê bình và phê bình" },
      { id: "D", text: "Phát triển đảng viên mới" },
    ],
    correct: "C",
    explanation: "Bác coi tự phê bình và phê bình là 'thang thuốc' hay nhất để chữa mọi bệnh tật trong Đảng.",
  },
  {
    id: 33,
    category: "Quốc tế",
    question: "Hồ Chí Minh là người đã tham gia sáng lập Đảng nào sau đây vào năm 1920?",
    options: [
      { id: "A", text: "Đảng Cộng sản Trung Quốc" },
      { id: "B", text: "Đảng Cộng sản Pháp" },
      { id: "C", text: "Đảng Cộng sản Liên Xô" },
      { id: "D", text: "Đảng Cộng sản Đông Dương" },
    ],
    correct: "B",
    explanation: "Tại Đại hội Tour (12/1920), Người đã bỏ phiếu tán thành gia nhập Quốc tế III và tham gia sáng lập Đảng Cộng sản Pháp.",
  },
  {
    id: 34,
    category: "Dân vận",
    question: "Theo Hồ Chí Minh, 'Dân vận kém thì việc gì cũng kém. Dân vận khéo thì việc gì cũng...'?",
    options: [
      { id: "A", text: "Xong" },
      { id: "B", text: "Thành công" },
      { id: "C", text: "Suôn sẻ" },
      { id: "D", text: "Đạt kết quả" },
    ],
    correct: "B",
    explanation: "Trong bài báo 'Dân vận' (1949), Bác kết luận: 'Dân vận khéo thì việc gì cũng thành công'.",
  },
  {
    id: 35,
    category: "Lịch sử",
    question: "Nguyễn Ái Quốc về nước trực tiếp lãnh đạo cách mạng Việt Nam vào năm nào?",
    options: [
      { id: "A", text: "1930" },
      { id: "B", text: "1941" },
      { id: "C", text: "1945" },
      { id: "D", text: "1946" },
    ],
    correct: "B",
    explanation: "Ngày 28/01/1941, sau 30 năm bôn ba, Nguyễn Ái Quốc vượt cột mốc 108 về tới Pác Bó, Cao Bằng.",
  },
  {
    id: 36,
    category: "Chủ nghĩa xã hội",
    question: "Trong thời kỳ quá độ, thành phần kinh tế nào đóng vai trò chủ đạo theo quan điểm hiện nay vận dụng tư tưởng Hồ Chí Minh?",
    options: [
      { id: "A", text: "Kinh tế tư nhân" },
      { id: "B", text: "Kinh tế nhà nước" },
      { id: "C", text: "Kinh tế tập thể" },
      { id: "D", text: "Kinh tế có vốn đầu tư nước ngoài" },
    ],
    correct: "B",
    explanation: "Kinh tế nhà nước đóng vai trò chủ đạo, là công cụ để điều tiết và định hướng phát triển CNXH.",
  },
  {
    id: 37,
    category: "Đạo đức cách mạng",
    question: "Bác Hồ nhắc nhở cán bộ: 'Việc gì có lợi cho dân, ta phải hết sức làm. Việc gì có hại cho dân, ta phải hết sức...'",
    options: [
      { id: "A", text: "Tránh" },
      { id: "B", text: "Bỏ" },
      { id: "C", text: "Sửa" },
      { id: "D", text: "Chống" },
    ],
    correct: "A",
    explanation: "Trích thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng năm 1945: 'Việc gì có lợi cho dân, ta phải hết sức làm. Việc gì có hại cho dân, ta phải hết sức tránh'.",
  },
  {
    id: 38,
    category: "Dân quân",
    question: "Ai là người trực tiếp chỉ đạo thành lập Đội Việt Nam Tuyên truyền Giải phóng quân?",
    options: [
      { id: "A", text: "Võ Nguyên Giáp" },
      { id: "B", text: "Hồ Chí Minh" },
      { id: "C", text: "Trường Chinh" },
      { id: "D", text: "Phạm Văn Đồng" },
    ],
    correct: "B",
    explanation: "Tháng 12/1944, Hồ Chí Minh ra chỉ thị thành lập Đội Việt Nam Tuyên truyền Giải phóng quân và giao cho đồng chí Võ Nguyên Giáp phụ trách.",
  },
  {
    id: 39,
    category: "Di chúc",
    question: "Trong bản Di chúc, Bác căn dặn điều đầu tiên là nói về vấn đề gì?",
    options: [
      { id: "A", text: "Về nhân dân lao động" },
      { id: "B", text: "Về Đảng" },
      { id: "C", text: "Về đoàn viên và thanh niên" },
      { id: "D", text: "Về phong trào cộng sản thế giới" },
    ],
    correct: "B",
    explanation: "Trong Di chúc, Bác viết: 'Trước hết nói về Đảng', nhấn mạnh sự đoàn kết và đạo đức trong Đảng.",
  },
  {
    id: 40,
    category: "Độc lập dân tộc",
    question: "Chủ quyền cao nhất của một quốc gia độc lập theo Hồ Chí Minh nằm ở đâu?",
    options: [
      { id: "A", text: "Trong tay quân đội" },
      { id: "B", text: "Trong tay nhân dân" },
      { id: "C", text: "Trong tay Chính phủ" },
      { id: "D", text: "Trong tay Đảng" },
    ],
    correct: "B",
    explanation: "Độc lập dân tộc thực sự phải gắn liền với quyền làm chủ của nhân dân. Quyền lực nhà nước thuộc về nhân dân.",
  },
  {
    id: 41,
    category: "Thanh niên",
    question: "Bác Hồ gọi thanh niên là 'người chủ...' của nước nhà?",
    options: [
      { id: "A", text: "Tương lai" },
      { id: "B", text: "Hậu duệ" },
      { id: "C", text: "Kế tục" },
      { id: "D", text: "Vĩ đại" },
    ],
    correct: "A",
    explanation: "Bác viết: 'Thanh niên là người chủ tương lai của nước nhà... Nước nhà thịnh hay suy, yếu hay mạnh một phần lớn là do các thanh niên'.",
  },
  {
    id: 42,
    category: "Kinh tế",
    question: "Theo Hồ Chí Minh, thực chất của quá trình công nghiệp hóa là gì?",
    options: [
      { id: "A", text: "Mở thật nhiều nhà máy" },
      { id: "B", text: "Thay lao động thủ công bằng lao động máy móc" },
      { id: "C", text: "Mua công nghệ nước ngoài" },
      { id: "D", text: "Phát triển mạnh nông nghiệp" },
    ],
    correct: "B",
    explanation: "Thực chất công nghiệp hóa là cải biến lao động thủ công lạc hậu thành lao động cơ khí, máy móc hiện đại.",
  },
  {
    id: 43,
    category: "Đối ngoại",
    question: "Phương châm ngoại giao nào của Bác thường được nhắc đến trong giai đoạn 1945-1946?",
    options: [
      { id: "A", text: "Cứng rắn về nguyên tắc" },
      { id: "B", text: "Mềm dẻo về phương pháp" },
      { id: "C", text: "Dĩ bất biến ứng vạn biến" },
      { id: "D", text: "Vừa đánh vừa đàm" },
    ],
    correct: "C",
    explanation: "'Dĩ bất biến ứng vạn biến' - Lấy cái không thay đổi (độc lập dân tộc) để ứng phó với muôn vàn sự thay đổi.",
  },
  {
    id: 44,
    category: "Lý luận",
    question: "Hồ Chí Minh khẳng định: 'Đảng muốn vững thì phải có chủ nghĩa làm cốt'. Chủ nghĩa đó là gì?",
    options: [
      { id: "A", text: "Chủ nghĩa dân tộc" },
      { id: "B", text: "Chủ nghĩa tam dân" },
      { id: "C", text: "Chủ nghĩa Mác - Lênin" },
      { id: "D", text: "Chủ nghĩa xã hội khoa học" },
    ],
    correct: "C",
    explanation: "Trong Đường Kách mệnh, Bác khẳng định: 'Đảng muốn vững thì phải có chủ nghĩa làm cốt... Chủ nghĩa ấy là chủ nghĩa Mác - Lênin'.",
  },
  {
    id: 45,
    category: "Xã hội",
    question: "Căn bệnh nào bị Bác Hồ coi là 'giặc nội xâm'?",
    options: [
      { id: "A", text: "Tham ô, lãng phí, quan liêu" },
      { id: "B", text: "Kiêu ngạo, tự phụ" },
      { id: "C", text: "Lười biếng" },
      { id: "D", text: "Chia rẽ bè phái" },
    ],
    correct: "A",
    explanation: "Bác gọi tham ô, lãng phí, quan liêu là giặc nội xâm vì nó phá hoại cách mạng từ bên trong.",
  },
  {
    id: 46,
    category: "Phụ nữ",
    question: "Tại Đại hội phụ nữ toàn quốc lần thứ III, Bác đã tặng phụ nữ Việt Nam 8 chữ vàng nào?",
    options: [
      { id: "A", text: "Anh hùng, bất khuất, trung hậu, đảm đang" },
      { id: "B", text: "Đoàn kết, kỷ luật, cần kiệm, sáng tạo" },
      { id: "C", text: "Giỏi việc nước, đảm việc nhà" },
      { id: "D", text: "Trung thành, sáng tạo, đảm đang, dũng cảm" },
    ],
    correct: "A",
    explanation: "Tám chữ vàng Bác tặng phụ nữ miền Nam và phụ nữ Việt Nam nói chung: Anh hùng, Bất khuất, Trung hậu, Đảm đang.",
  },
  {
    id: 47,
    category: "Đảng",
    question: "Đảng Cộng sản Việt Nam mang bản chất của giai cấp nào?",
    options: [
      { id: "A", text: "Giai cấp nông dân" },
      { id: "B", text: "Giai cấp công nhân" },
      { id: "C", text: "Tầng lớp trí thức" },
      { id: "D", text: "Toàn thể dân tộc" },
    ],
    correct: "B",
    explanation: "Đảng Cộng sản Việt Nam là đội tiên phong của giai cấp công nhân, đại biểu trung thành lợi ích của giai cấp công nhân và nhân dân lao động.",
  },
  {
    id: 48,
    category: "Dân quân",
    question: "Theo Bác, lực lượng nào là 'bức tường sắt' của nước nhà?",
    options: [
      { id: "A", text: "Quân đội chủ lực" },
      { id: "B", text: "Dân quân tự vệ" },
      { id: "C", text: "Công an nhân dân" },
      { id: "D", text: "Thanh niên xung phong" },
    ],
    correct: "B",
    explanation: "Bác nói: 'Dân quân tự vệ là lực lượng của toàn dân tộc, là một lực lượng vô địch, là một bức tường sắt của nước nhà'.",
  },
  {
    id: 49,
    category: "Cán bộ",
    question: "Hồ Chí Minh quan niệm cán bộ là 'người đầy tớ...' của nhân dân?",
    options: [
      { id: "A", text: "Trung thành" },
      { id: "B", text: "Tận tụy" },
      { id: "C", text: "Thật thà" },
      { id: "D", text: "Cần mẫn" },
    ],
    correct: "A",
    explanation: "Bác luôn căn dặn cán bộ Đảng và Nhà nước phải là 'người lãnh đạo, người đầy tớ thật trung thành của nhân dân'.",
  },
  {
    id: 50,
    category: "Vận dụng hiện nay",
    question: "Giá trị cốt lõi nhất của Tư tưởng Hồ Chí Minh đối với cách mạng Việt Nam là gì?",
    options: [
      { id: "A", text: "Độc lập dân tộc gắn liền với Chủ nghĩa xã hội" },
      { id: "B", text: "Cải cách kinh tế" },
      { id: "C", text: "Mở rộng quan hệ quốc tế" },
      { id: "D", text: "Xây dựng nền văn hóa mới" },
    ],
    correct: "A",
    explanation: "Sợi chỉ đỏ xuyên suốt tư tưởng Hồ Chí Minh và đường lối cách mạng Việt Nam là 'Độc lập dân tộc gắn liền với Chủ nghĩa xã hội'.",
  },
  {
    id: 51,
    category: "Tiểu sử",
    question: "Tên khai sinh của Chủ tịch Hồ Chí Minh là gì?",
    options: [
      { id: "A", text: "Nguyễn Tất Thành" },
      { id: "B", text: "Nguyễn Ái Quốc" },
      { id: "C", text: "Nguyễn Sinh Cung" },
      { id: "D", text: "Hồ Quang" },
    ],
    correct: "C",
    explanation: "Chủ tịch Hồ Chí Minh sinh ngày 19/5/1890 với tên khai sinh là Nguyễn Sinh Cung.",
  },
  {
    id: 52,
    category: "Xây dựng Nhà nước",
    question: "Bản Hiến pháp đầu tiên của nước Việt Nam Dân chủ Cộng hòa được thông qua vào năm nào?",
    options: [
      { id: "A", text: "1945" },
      { id: "B", text: "1946" },
      { id: "C", text: "1954" },
      { id: "D", text: "1959" },
    ],
    correct: "B",
    explanation: "Bản Hiến pháp đầu tiên được Quốc hội khóa I thông qua vào ngày 09/11/1946.",
  },
  {
    id: 53,
    category: "Đạo đức cách mạng",
    question: "Trong tư tưởng Hồ Chí Minh, 'Liêm' có nghĩa là gì?",
    options: [
      { id: "A", text: "Luôn luôn cầu tiến thân" },
      { id: "B", text: "Trong sạch, không tham lam" },
      { id: "C", text: "Thẳng thắn, đứng đắn" },
      { id: "D", text: "Tiết kiệm thời gian" },
    ],
    correct: "B",
    explanation: "'Liêm' là luôn tôn trọng giữ gìn của công và của dân; không xâm phạm một đồng xu, hạt thóc của Nhà nước và của nhân dân.",
  },
  {
    id: 54,
    category: "Đối ngoại",
    question: "Chính sách đối ngoại của nước ta theo tư tưởng Hồ Chí Minh là: 'Làm bạn với tất cả mọi nước dân chủ và không...?'",
    options: [
      { id: "A", text: "Gây chiến với ai" },
      { id: "B", text: "Liên minh với ai" },
      { id: "C", text: "Gây thù chuốc oán với một ai" },
      { id: "D", text: "Phụ thuộc vào ai" },
    ],
    correct: "C",
    explanation: "Hồ Chí Minh nêu rõ phương châm: 'Làm bạn với tất cả mọi nước dân chủ và không gây thù chuốc oán với một ai'.",
  },
  {
    id: 55,
    category: "Tác phẩm lý luận",
    question: "Tác phẩm 'Bản án chế độ thực dân Pháp' của Nguyễn Ái Quốc được xuất bản lần đầu tiên tại đâu?",
    options: [
      { id: "A", text: "Hà Nội, Việt Nam" },
      { id: "B", text: "Quảng Châu, Trung Quốc" },
      { id: "C", text: "Paris, Pháp" },
      { id: "D", text: "Mát-xcơ-va, Liên Xô" },
    ],
    correct: "C",
    explanation: "Tác phẩm được xuất bản lần đầu tiên tại Paris năm 1925, tố cáo tội ác của thực dân Pháp đối với các thuộc địa.",
  },
  {
    id: 56,
    category: "Đạo đức cách mạng",
    question: "Theo Hồ Chí Minh, người cách mạng phải có đạo đức, nếu không có đạo đức thì dù tài giỏi mấy cũng không...?",
    options: [
      { id: "A", text: "Được dân tin" },
      { id: "B", text: "Lãnh đạo được nhân dân" },
      { id: "C", text: "Làm được việc gì" },
      { id: "D", text: "Thành công" },
    ],
    correct: "B",
    explanation: "Bác khẳng định: 'Cũng như sông có nguồn mới có nước... người cách mạng phải có đạo đức, không có đạo đức thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân'.",
  },
  {
    id: 57,
    category: "Văn hóa - Giáo dục",
    question: "Ngay sau Cách mạng Tháng Tám, Hồ Chí Minh đã đề ra phong trào gì để chống 'giặc dốt'?",
    options: [
      { id: "A", text: "Hũ gạo cứu đói" },
      { id: "B", text: "Bình dân học vụ" },
      { id: "C", text: "Tuần lễ vàng" },
      { id: "D", text: "Đời sống mới" },
    ],
    correct: "B",
    explanation: "Phong trào 'Bình dân học vụ' được thành lập ngày 8/9/1945 để nhanh chóng xóa mù chữ cho nhân dân.",
  },
  {
    id: 58,
    category: "Tiểu sử",
    question: "Nguyễn Ái Quốc lấy tên là Hồ Chí Minh vào thời gian nào?",
    options: [
      { id: "A", text: "Năm 1911" },
      { id: "B", text: "Năm 1930" },
      { id: "C", text: "Năm 1941" },
      { id: "D", text: "Năm 1942" },
    ],
    correct: "D",
    explanation: "Tháng 8/1942, khi lên đường sang Trung Quốc để tranh thủ sự giúp đỡ của quốc tế, Người bắt đầu sử dụng tên Hồ Chí Minh.",
  },
  {
    id: 59,
    category: "Xây dựng Đảng",
    question: "Trong tác phẩm 'Sửa đổi lối làm việc' (1947), Bác nêu ra mấy căn bệnh của cán bộ?",
    options: [
      { id: "A", text: "2 bệnh" },
      { id: "B", text: "3 bệnh: Ba hoa, chủ quan, hẹp hòi" },
      { id: "C", text: "4 bệnh" },
      { id: "D", text: "5 bệnh" },
    ],
    correct: "B",
    explanation: "Bác phân tích 3 chứng bệnh chính: Bệnh chủ quan, bệnh hẹp hòi và bệnh ba hoa.",
  },
  {
    id: 60,
    category: "Độc lập dân tộc",
    question: "Đỉnh cao của sự vận dụng tư tưởng Hồ Chí Minh về độc lập dân tộc gắn liền với CNXH trong kháng chiến chống Pháp là chiến dịch nào?",
    options: [
      { id: "A", text: "Chiến dịch Việt Bắc (1947)" },
      { id: "B", text: "Chiến dịch Biên giới (1950)" },
      { id: "C", text: "Chiến dịch Điện Biên Phủ (1954)" },
      { id: "D", text: "Chiến dịch Thượng Lào (1953)" },
    ],
    correct: "C",
    explanation: "Chiến thắng Điện Biên Phủ 'lừng lẫy năm châu, chấn động địa cầu' đã bảo vệ vững chắc nền độc lập dân tộc và đưa miền Bắc tiến lên CNXH.",
  },
  {
    id: 61,
    category: "Văn hóa",
    question: "Theo Hồ Chí Minh, có mấy loại văn hóa?",
    options: [
      { id: "A", text: "2 loại: Vật thể và Phi vật thể" },
      { id: "B", text: "3 loại: Văn nghệ, Giáo dục và Lối sống" },
      { id: "C", text: "5 loại: Chính trị, Kinh tế, Tâm lý, Luân lý và Xã hội" },
      { id: "D", text: "Không phân loại" },
    ],
    correct: "B",
    explanation: "Hồ Chí Minh phân văn hóa thành 3 lĩnh vực chính: Văn hóa văn nghệ, Văn hóa giáo dục và Văn hóa đời sống.",
  },
  {
    id: 62,
    category: "Tiểu sử",
    question: "Tên gọi nào sau đây không phải là bí danh của Hồ Chí Minh?",
    options: [
      { id: "A", text: "Vương" },
      { id: "B", text: "Thầu Chín" },
      { id: "C", text: "Lý Thụy" },
      { id: "D", text: "Thanh niên" },
    ],
    correct: "D",
    explanation: "Các tên Vương, Thầu Chín, Lý Thụy đều là bí danh của Người. 'Thanh niên' là tên một tờ báo do Người sáng lập.",
  },
  {
    id: 63,
    category: "Đoàn kết",
    question: "Theo tư tưởng Hồ Chí Minh, lực lượng của khối đại đoàn kết toàn dân bao gồm những ai?",
    options: [
      { id: "A", text: "Chỉ công nhân và nông dân" },
      { id: "B", text: "Chỉ các đảng viên" },
      { id: "C", text: "Mọi người dân Việt Nam yêu nước, không phân biệt giai cấp, tôn giáo" },
      { id: "D", text: "Chỉ những người theo lý tưởng xã hội chủ nghĩa" },
    ],
    correct: "C",
    explanation: "Đại đoàn kết toàn dân là tập hợp mọi người dân Việt Nam có lòng yêu nước, bất kể thành phần xã hội hay tôn giáo.",
  },
  {
    id: 64,
    category: "Kinh tế",
    question: "Hồ Chí Minh đưa ra quan điểm: 'Nông dân giàu thì nước ta giàu. Nông nghiệp thịnh thì...?'",
    options: [
      { id: "A", text: "Công nghiệp phát triển" },
      { id: "B", text: "Nước ta thịnh" },
      { id: "C", text: "Dân ta no ấm" },
      { id: "D", text: "Xã hội phồn vinh" },
    ],
    correct: "B",
    explanation: "Người khẳng định mối liên hệ mật thiết giữa nông nghiệp và sự hưng thịnh của quốc gia.",
  },
  {
    id: 65,
    category: "Xây dựng Đảng",
    question: "Cán bộ, đảng viên phải thực hiện phương châm gì trong lối sống?",
    options: [
      { id: "A", text: "Hưởng thụ đi đôi với cống hiến" },
      { id: "B", text: "Lo trước thiên hạ, vui sau thiên hạ" },
      { id: "C", text: "Càng cao sang càng tốt" },
      { id: "D", text: "Tận dụng quyền lực để giúp gia đình" },
    ],
    correct: "B",
    explanation: "Đây là phẩm chất của người cộng sản: Hy sinh lợi ích cá nhân vì cộng đồng, luôn lo cho cái lo của dân trước.",
  },
  {
    id: 66,
    category: "Tiểu sử",
    question: "Nguyễn Ái Quốc đã đọc bản Sơ thảo luận cương của Lênin lần đầu tiên ở đâu?",
    options: [
      { id: "A", text: "Pháp" },
      { id: "B", text: "Nga" },
      { id: "C", text: "Anh" },
      { id: "D", text: "Trung Quốc" },
    ],
    correct: "A",
    explanation: "Người đọc tác phẩm này vào tháng 7/1920 tại Paris, Pháp.",
  },
  {
    id: 67,
    category: "Đạo đức cách mạng",
    question: "Phẩm chất 'Kiệm' theo Bác nghĩa là gì?",
    options: [
      { id: "A", text: "Hà tiện, không chi tiêu gì" },
      { id: "B", text: "Tiết kiệm sức lao động, thời gian và tiền bạc" },
      { id: "C", text: "Mua đồ rẻ tiền" },
      { id: "D", text: "Chỉ tiết kiệm của cá nhân mình" },
    ],
    correct: "B",
    explanation: "Kiệm là tiết kiệm sức lao động, tiết kiệm thời gian, tiết kiệm tiền của dân, của nước, của bản thân.",
  },
  {
    id: 68,
    category: "Đạo đức cách mạng",
    question: "Phẩm chất 'Chính' nghĩa là gì?",
    options: [
      { id: "A", text: "Làm quan to" },
      { id: "B", text: "Không tà, nghĩa là thẳng thắn, đứng đắn" },
      { id: "C", text: "Luôn cho mình là đúng" },
      { id: "D", text: "Người nắm quyền hành" },
    ],
    correct: "B",
    explanation: "Đối với mình: không tự cao tự đại; đối với người: không nịnh hót; đối với việc: để việc công lên trên việc tư.",
  },
  {
    id: 69,
    category: "Xây dựng Nhà nước",
    question: "Nhà nước do dân làm chủ là nhà nước nhân dân có quyền gì?",
    options: [
      { id: "A", text: "Quyền bãi miễn các đại biểu không xứng đáng" },
      { id: "B", text: "Quyền làm bất cứ việc gì mình muốn" },
      { id: "C", text: "Quyền không cần đóng thuế" },
      { id: "D", text: "Quyền không thực hiện pháp luật" },
    ],
    correct: "A",
    explanation: "Trong nhà nước do dân làm chủ, nhân dân có quyền bầu ra và cũng có quyền bãi miễn đại biểu nếu họ phản bội lợi ích nhân dân.",
  },
  {
    id: 70,
    category: "Văn hóa",
    question: "Mối quan hệ giữa Văn hóa với Kinh tế và Chính trị theo Bác là gì?",
    options: [
      { id: "A", text: "Văn hóa đứng ngoài kinh tế" },
      { id: "B", text: "Kinh tế và chính trị phải đi trước một bước để làm nền tảng cho văn hóa" },
      { id: "C", text: "Văn hóa không liên quan đến chính trị" },
      { id: "D", text: "Văn hóa là quan trọng nhất, các cái khác không quan trọng" },
    ],
    correct: "B",
    explanation: "Bác dạy: 'Phải làm cho kinh tế, chính trị phát triển thì mới có điều kiện xây dựng văn hóa'.",
  },
  {
    id: 71,
    category: "Quốc tế",
    question: "Hồ Chí Minh đã viết tác phẩm nào để vạch trần tội ác của chủ nghĩa thực dân đối với các dân tộc thuộc địa?",
    options: [
      { id: "A", text: "Đường Kách mệnh" },
      { id: "B", text: "Việt Nam độc lập" },
      { id: "C", text: "Bản án chế độ thực dân Pháp" },
      { id: "D", text: "Kháng chiến nhất định thắng lợi" },
    ],
    correct: "C",
    explanation: "Tác phẩm này là một đòn tấn công trực diện vào chủ nghĩa thực dân Pháp trên toàn thế giới.",
  },
  {
    id: 72,
    category: "Xây dựng Đảng",
    question: "Đảng lãnh đạo nhân dân thông qua hình thức nào?",
    options: [
      { id: "A", text: "Ra lệnh và cưỡng chế" },
      { id: "B", text: "Đường lối, chính sách và sự gương mẫu của đảng viên" },
      { id: "C", text: "Chỉ bằng các văn bản hành chính" },
      { id: "D", text: "Phát tiền cho dân" },
    ],
    correct: "B",
    explanation: "Sự lãnh đạo của Đảng được thể hiện qua các chủ trương đúng đắn và tính tiên phong, gương mẫu của từng cá nhân cán bộ.",
  },
  {
    id: 73,
    category: "Lịch sử",
    question: "Nước Việt Nam tuyên bố độc lập vào ngày nào?",
    options: [
      { id: "A", text: "19/08/1945" },
      { id: "B", text: "02/09/1945" },
      { id: "C", text: "22/12/1944" },
      { id: "D", text: "03/02/1930" },
    ],
    correct: "B",
    explanation: "Ngày 2/9/1945, tại quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập.",
  },
  {
    id: 74,
    category: "Học tập và làm theo",
    question: "Học tập tư tưởng Hồ Chí Minh hiện nay giúp chúng ta điều gì quan trọng nhất?",
    options: [
      { id: "A", text: "Chỉ để đi thi đạt điểm cao" },
      { id: "B", text: "Nâng cao bản lĩnh chính trị và đạo đức cách mạng" },
      { id: "C", text: "Để biết thêm lịch sử" },
      { id: "D", text: "Để có thể làm quan" },
    ],
    correct: "B",
    explanation: "Học tập tư tưởng của Người giúp mỗi cá nhân hoàn thiện nhân cách và có lý tưởng sống đúng đắn.",
  },
  {
    id: 75,
    category: "Dân quân",
    question: "Tên gọi 'Quân đội nhân dân Việt Nam' có ý nghĩa gì?",
    options: [
      { id: "A", text: "Quân đội chỉ phục vụ cho người giàu" },
      { id: "B", text: "Quân đội từ nhân dân mà ra, vì nhân dân mà chiến đấu" },
      { id: "C", text: "Quân đội của riêng một cá nhân" },
      { id: "D", text: "Quân đội chỉ bảo vệ biên giới" },
    ],
    correct: "B",
    explanation: "Đây là quân đội kiểu mới, gắn bó máu thịt với nhân dân.",
  },
  {
    id: 76,
    category: "Đạo đức cách mạng",
    question: "Mối quan hệ giữa 'Đức' và 'Tài' trong tư tưởng Hồ Chí Minh là?",
    options: [
      { id: "A", text: "Tài quan trọng hơn Đức" },
      { id: "B", text: "Đức là gốc, Tài là quan trọng" },
      { id: "C", text: "Có tài thì không cần đức" },
      { id: "D", text: "Có đức thì không cần học để có tài" },
    ],
    correct: "B",
    explanation: "Bác dạy: 'Có tài mà không có đức là người vô dụng. Có đức mà không có tài thì làm việc gì cũng khó'.",
  },
  {
    id: 77,
    category: "Chủ nghĩa xã hội",
    question: "Theo Hồ Chí Minh, con đường đi lên CNXH ở Việt Nam phải trải qua mấy giai đoạn?",
    options: [
      { id: "A", text: "Bước nhảy vọt" },
      { id: "B", text: "Dần dần, từng bước một, từ thấp đến cao" },
      { id: "C", text: "Một giai đoạn duy nhất" },
      { id: "D", text: "Không xác định" },
    ],
    correct: "B",
    explanation: "Xây dựng CNXH là một quá trình lâu dài, phải thận trọng, không được chủ quan nóng vội.",
  },
  {
    id: 78,
    category: "Tôn giáo",
    question: "Thái độ của Hồ Chí Minh đối với các tôn giáo là gì?",
    options: [
      { id: "A", text: "Bài trừ hoàn toàn" },
      { id: "B", text: "Tôn trọng quyền tự do tín ngưỡng, đoàn kết các tôn giáo" },
      { id: "C", text: "Chỉ ủng hộ một tôn giáo duy nhất" },
      { id: "D", text: "Yêu cầu xóa bỏ các cơ sở thờ tự" },
    ],
    correct: "B",
    explanation: "Hồ Chí Minh luôn chủ trương đoàn kết lương - giáo vì mục tiêu chung là độc lập dân tộc.",
  },
  {
    id: 79,
    category: "Thanh niên",
    question: "Bác Hồ căn dặn thanh niên: 'Không có việc gì khó, chỉ sợ lòng không bền. Đào núi và lấp biển, ... làm nên'?",
    options: [
      { id: "A", text: "Sẽ có ngày" },
      { id: "B", text: "Quyết chí ắt" },
      { id: "C", text: "Nhất định sẽ" },
      { id: "D", text: "Cố gắng sẽ" },
    ],
    correct: "B",
    explanation: "Bốn câu thơ nổi tiếng Bác tặng đơn vị Thanh niên xung phong năm 1950.",
  },
  {
    id: 80,
    category: "Kết luận",
    question: "Di sản quý báu nhất mà Hồ Chí Minh để lại cho chúng ta là gì?",
    options: [
      { id: "A", text: "Tiền bạc và tài sản" },
      { id: "B", text: "Thời đại Hồ Chí Minh và Tư tưởng, Đạo đức, Phong cách của Người" },
      { id: "C", text: "Các tác phẩm văn học" },
      { id: "D", text: "Các bí kíp quân sự" },
    ],
    correct: "B",
    explanation: "Đó là kho tàng lý luận và tấm gương sáng ngời về đạo đức để các thế hệ mai sau noi theo.",
  },
  ];
const QuizPage = () => {
  // ===== STATE =====
  const [quizQuestions, setQuizQuestions] = useState([]); // Danh sách 10 câu ngẫu nhiên
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  
  // ===== HÀM CHỌN NGẪU NHIÊN 10 CÂU =====
  const getRandomQuestions = () => {
    // Trộn mảng gốc
    const shuffled = [...ALL_QUESTIONS].sort(() => 0.5 - Math.random());
    // Lấy 10 câu đầu tiên
    return shuffled.slice(0, 10);
  };

  // Khởi tạo 10 câu hỏi khi lần đầu load trang
  useEffect(() => {
    setQuizQuestions(getRandomQuestions());
  }, []);

  // Lấy dữ liệu của câu hỏi hiện tại từ mảng 10 câu đã chọn
  const current = quizQuestions[currentQuestion];

  // ===== HANDLERS =====
  const handleSelect = (id) => {
    // Nếu đã hiện giải thích rồi (đã chọn rồi) thì không cho chọn lại
    if (showExplanation) return;

    setSelectedOption(id);
    setShowExplanation(true); // HIỆN GIẢI THÍCH NGAY LẬP TỨC

    // CHẤM ĐIỂM NGAY LẬP TỨC
    if (id === current.correct) {
      setScore((prev) => prev + 10);
    }
  };

const handleNext = () => {
    // Vì giải thích đã hiện lúc chọn rồi, nên ở đây chỉ việc chuyển câu
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setQuizQuestions(getRandomQuestions()); // Chọn 10 câu mới hoàn toàn khi làm lại
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setIsFinished(false);
  };

  // Nếu chưa kịp load câu hỏi (tránh lỗi undefined)
  if (quizQuestions.length === 0) return <div>Đang tải câu hỏi...</div>;

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

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
    {/* ĐOẠN NÀY HIỂN THỊ SỐ CÂU VÀ ĐIỂM SỐ */}
    <div className="quiz-stats">
      <span>Câu {currentQuestion + 1} / {quizQuestions.length}</span>
      <span>Điểm: {score}</span>
    </div>
          {/* Progress Bar */}
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>

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
                    disabled={showExplanation} // Khóa chọn lại sau khi đã chọn
                  >
                    <span className="option-letter">{opt.id}</span>
                    <span className="option-text">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Giải thích hiện ra ngay khi showExplanation là true */}
            {showExplanation && (
              <div className="explanation-box fade-in">
                <div className="status-label">
                  {selectedOption === current.correct ? (
                    <span className="text-correct">Chính xác!</span>
                  ) : (
                    <span className="text-wrong">Chưa đúng!</span>
                  )}
                </div>
                <strong>Giải thích:</strong>
                <p>{current.explanation}</p>
              </div>
            )}

            {/* Nút này chỉ bấm được sau khi đã chọn đáp án */}
            <button
              className="next-btn"
              disabled={!showExplanation} // Chỉ hiện/bấm được khi đã hiện giải thích
              onClick={handleNext}
            >
              {currentQuestion + 1 === quizQuestions.length
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
            Số điểm của bạn: <span>{score}</span> / 100
          </p>
          <button className="reset-btn" onClick={resetQuiz}>
            <RotateCcw size={18} /> Làm lại
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
