const MCQ_BANK = [
  {
    "module": 2,
    "number": 1,
    "question": "In the context of setting up a wireless network, what is the primary purpose of assigning an SSID?",
    "options": [
      "To assign a static IP address to the router",
      "To encrypt the data transmitted over the network",
      "To determine the maximum number of users allowed on the network",
      "To provide a unique name that identifies the wireless network for connecting devices"
    ],
    "answer": "To provide a unique name that identifies the wireless network for connecting devices",
    "explanation": "SSID là tên Wi-Fi để thiết bị nhận biết mạng cần kết nối.",
    "id": 1
  },
  {
    "module": 2,
    "number": 2,
    "question": "Which component of the Internet hierarchy is primarily responsible for aggregating traffic from multiple Local ISPs and connecting to the global backbone?",
    "options": [
      "Home Router",
      "Content Delivery Network (CDN)",
      "Network Access Point (NAP)",
      "Regional ISP"
    ],
    "answer": "Regional ISP",
    "explanation": "Regional ISP gom lưu lượng từ các Local ISP và kết nối lên mạng lớn hơn.",
    "id": 2
  },
  {
    "module": 2,
    "number": 3,
    "question": "When a Tier-1 ISP \"peers\" with another Tier-1 ISP, what is the main characteristic of this arrangement?",
    "options": [
      "One ISP pays the other for bandwidth usage",
      "One ISP becomes a subsidiary of the other",
      "They exchange traffic directly without charging each other to reduce latency and increase redundancy",
      "They merge their physical infrastructure into a single entity"
    ],
    "answer": "They exchange traffic directly without charging each other to reduce latency and increase redundancy",
    "explanation": "Peering cho phép các ISP lớn trao đổi lưu lượng trực tiếp, thường không thu phí lẫn nhau.",
    "id": 3
  },
  {
    "module": 2,
    "number": 4,
    "question": "Which of the following correctly distinguishes the Internet from the World Wide Web?",
    "options": [
      "The World Wide Web consists of physical hardware like fibre optic cables and routers",
      "There is no difference; the terms are interchangeable.",
      "The Internet is a service running on top of the World Wide Web infrastructure",
      "The Internet is the underlying physical infrastructure and protocols (like TCP/IP), while the Web is a service using HTTP/HTML that runs on it"
    ],
    "answer": "The Internet is the underlying physical infrastructure and protocols (like TCP/IP), while the Web is a service using HTTP/HTML that runs on it",
    "explanation": "Internet là hạ tầng mạng; WWW là dịch vụ web chạy trên Internet.",
    "id": 4
  },
  {
    "module": 2,
    "number": 5,
    "question": "In the URL http://www.example.com:80/homepage.html?timetable#semester1, what function does the segment :80 serve?",
    "options": [
      "It defines the protocol scheme used for encryption",
      "It specifies the port number, which is the default endpoint for HTTP connections",
      "It indicates the specific section of the webpage to scroll to",
      "It represents the query string sent to the server"
    ],
    "answer": "It specifies the port number, which is the default endpoint for HTTP connections",
    "explanation": ":80 là cổng kết nối mặc định của HTTP; HTTPS thường dùng cổng 443.",
    "id": 5
  },
  {
    "module": 2,
    "number": 6,
    "question": "Which term describes a deceptive practice that exploits human psychology to trick victims into interacting with a device against their best interests?",
    "options": [
      "Encryption",
      "Social Engineering",
      "Malware",
      "Firewall"
    ],
    "answer": "Social Engineering",
    "explanation": "Social engineering lợi dụng tâm lý con người thay vì chỉ khai thác lỗi kỹ thuật.",
    "id": 6
  },
  {
    "module": 2,
    "number": 7,
    "question": "What is the primary function of Two-Factor Authentication (2FA)?",
    "options": [
      "To encrypt data files using a cryptographic algorithm",
      "To require two distinct forms of identification before accessing an account",
      "To replicate itself across a network without user interaction",
      "To block unauthorised access while allowing authorised communications"
    ],
    "answer": "To require two distinct forms of identification before accessing an account",
    "explanation": "2FA cần hai yếu tố xác thực khác loại, giúp bảo vệ tài khoản khi lộ mật khẩu.",
    "id": 7
  },
  {
    "module": 2,
    "number": 8,
    "question": "Which type of malicious software is designed to infiltrate a device without consent specifically to gather and transmit information about the user?",
    "options": [
      "Trojan",
      "Worm",
      "Spyware",
      "Ransomware"
    ],
    "answer": "Spyware",
    "explanation": "Spyware bí mật theo dõi và thu thập thông tin người dùng.",
    "id": 8
  },
  {
    "module": 2,
    "number": 9,
    "question": "How does a computer virus differ from a worm?",
    "options": [
      "A virus locks the system, whereas a worm steals passwords",
      "A worm requires user interaction to spread, whereas a virus does not",
      "A virus requires a host file to replicate, whereas a worm is self-distributing",
      "A worm attaches to emails, whereas a virus attaches to websites"
    ],
    "answer": "A virus requires a host file to replicate, whereas a worm is self-distributing",
    "explanation": "Virus cần tệp chủ; worm là chương trình độc lập có thể tự lan truyền.",
    "id": 9
  },
  {
    "module": 2,
    "number": 10,
    "question": "What is the defining characteristic of a Trojan?",
    "options": [
      "It locks the device and demands payment for an unlock code",
      "It redirects website traffic to fraudulent sites",
      "It self-replicates and spreads automatically across networks",
      "It appears to perform a legitimate function while actually performing a malicious one"
    ],
    "answer": "It appears to perform a legitimate function while actually performing a malicious one",
    "explanation": "Trojan giả dạng phần mềm hữu ích nhưng thực hiện hành vi độc hại.",
    "id": 10
  },
  {
    "module": 2,
    "number": 11,
    "question": "Which attack involves redirecting website traffic to a fraudulent site to collect personal data or distribute malware?",
    "options": [
      "Phishing",
      "Social Engineering",
      "Pharming",
      "Encryption"
    ],
    "answer": "Pharming",
    "explanation": "Pharming chuyển hướng truy cập sang trang giả; phishing thường dùng thông điệp lừa đảo.",
    "id": 11
  },
  {
    "module": 2,
    "number": 12,
    "question": "What is the primary purpose of a Digital Certificate?",
    "options": [
      "To encrypt all data transmitted over the internet regardless of the protocol",
      "To block unauthorised access to a local network",
      "To prove the ownership of a public key and verify identity via a trusted third party",
      "To act as a secret string of characters for user authentication"
    ],
    "answer": "To prove the ownership of a public key and verify identity via a trusted third party",
    "explanation": "Digital certificate gắn danh tính với public key, thường được xác minh qua CA.",
    "id": 12
  },
  {
    "module": 2,
    "number": 13,
    "question": "Which of the following best describes Ransomware?",
    "options": [
      "A program that secretly monitors user activity",
      "A program that replicates itself by attaching to executable files",
      "A program that disguises itself as useful software",
      "A program that locks a device or system and requests payment for an unlocking code"
    ],
    "answer": "A program that locks a device or system and requests payment for an unlocking code",
    "explanation": "Ransomware khóa hoặc mã hóa dữ liệu và đòi tiền chuộc.",
    "id": 13
  },
  {
    "module": 2,
    "number": 14,
    "question": "What is the role of a Firewall in network security?",
    "options": [
      "To deceive users into revealing their passwords",
      "To block unauthorised access while allowing authorised communications",
      "To encrypt messages so they are hidden from unauthorised readers",
      "To generate random passwords for user accounts"
    ],
    "answer": "To block unauthorised access while allowing authorised communications",
    "explanation": "Firewall lọc lưu lượng, chặn kết nối không được phép.",
    "id": 14
  },
  {
    "module": 2,
    "number": 15,
    "question": "How is a Password defined in the context of authentication?",
    "options": [
      "A self-replicating program designed to cause harm",
      "A deceptive email acting as a message from a trusted organisation",
      "A secret string of characters used to authenticate a user's identity",
      "An electronic document issued by a certificate authority"
    ],
    "answer": "A secret string of characters used to authenticate a user's identity",
    "explanation": "Password là chuỗi ký tự bí mật để xác minh danh tính.",
    "id": 15
  },
  {
    "module": 2,
    "number": 16,
    "question": "Which HTML element is used to create the largest heading on a webpage?",
    "options": [
      "<h1>",
      "<head>",
      "<heading>",
      "<h6>"
    ],
    "answer": "<h1>",
    "explanation": "<h1> là tiêu đề lớn nhất trong các thẻ h1 đến h6.",
    "id": 16
  },
  {
    "module": 2,
    "number": 17,
    "question": "Which HTML attribute is used to provide an alternate text for an image if the image cannot be displayed?",
    "options": [
      "href",
      "alt",
      "src",
      "title"
    ],
    "answer": "alt",
    "explanation": "alt là văn bản thay thế cho ảnh và hỗ trợ khả năng tiếp cận.",
    "id": 17
  },
  {
    "module": 2,
    "number": 18,
    "question": "What is the correct HTML element for inserting a line break?",
    "options": [
      "<lb>",
      "<newline>",
      "<break>",
      "<br>"
    ],
    "answer": "<br>",
    "explanation": "<br> dùng để xuống dòng trong HTML.",
    "id": 18
  },
  {
    "module": 2,
    "number": 19,
    "question": "Which CSS property is used to change the text colour of an element?",
    "options": [
      "font-color",
      "foreground",
      "color",
      "text-color"
    ],
    "answer": "color",
    "explanation": "CSS color điều khiển màu chữ; background-color điều khiển màu nền.",
    "id": 19
  },
  {
    "module": 2,
    "number": 20,
    "question": "Which CSS property controls the size of the space between an element's border and its content?",
    "options": [
      "border-gap",
      "spacing",
      "padding",
      "margin"
    ],
    "answer": "padding",
    "explanation": "Padding là khoảng cách bên trong viền; margin là khoảng cách bên ngoài.",
    "id": 20
  },
  {
    "module": 2,
    "number": 21,
    "question": "Where in an HTML document should an external CSS stylesheet be linked?",
    "options": [
      "At the very end of the HTML file",
      "Inside the <footer> section",
      "Inside the <body> section at the top",
      "Inside the <head> section"
    ],
    "answer": "Inside the <head> section",
    "explanation": "Liên kết CSS thường được đặt trong <head> bằng thẻ <link>.",
    "id": 21
  },
  {
    "module": 2,
    "number": 22,
    "question": "Which JavaScript method is used to write content directly into the HTML document?",
    "options": [
      "document.output()",
      "window.print()",
      "console.log()",
      "document.write()"
    ],
    "answer": "document.write()",
    "explanation": "document.write() ghi nội dung vào tài liệu HTML; ít được khuyến nghị trong ứng dụng hiện đại.",
    "id": 22
  },
  {
    "module": 2,
    "number": 23,
    "question": "How do you declare a variable in JavaScript that cannot be reassigned later in the code?",
    "options": [
      "let",
      "const",
      "static",
      "var"
    ],
    "answer": "const",
    "explanation": "const không cho phép gán lại biến; đối tượng hoặc mảng const vẫn có thể thay đổi nội dung.",
    "id": 23
  },
  {
    "module": 2,
    "number": 24,
    "question": "Which JavaScript event occurs when a user clicks on an HTML element?",
    "options": [
      "onclick",
      "onhover",
      "onchange",
      "onmouseclick"
    ],
    "answer": "onclick",
    "explanation": "onclick xảy ra khi người dùng nhấp vào phần tử.",
    "id": 24
  },
  {
    "module": 2,
    "number": 25,
    "question": "What is the result of the JavaScript expression: 5 + \"5\"?",
    "options": [
      "10",
      "Error",
      "\"55\"",
      "NaN (Not a Number)"
    ],
    "answer": "\"55\"",
    "explanation": "JavaScript nối chuỗi khi một toán hạng là string: 5 + \"5\" thành \"55\".",
    "id": 25
  },
  {
    "module": 3,
    "number": 1,
    "question": "Which SDLC model is described as having a 'linear, sequential approach' where each phase must finish before the next starts?",
    "options": [
      "DevOps",
      "Waterfall",
      "Agile",
      "Spiral"
    ],
    "answer": "Waterfall",
    "explanation": "Waterfall đi tuần tự qua các giai đoạn; Agile lặp lại và linh hoạt hơn.",
    "id": 26
  },
  {
    "module": 3,
    "number": 2,
    "question": "Which of the following is NOT one of the five core components of an Information System ?",
    "options": [
      "Software",
      "People",
      "Network",
      "Hardware"
    ],
    "answer": "Network",
    "explanation": "Theo mô hình 5 thành phần của bài học: hardware, software, data, people, procedures.",
    "id": 27
  },
  {
    "module": 3,
    "number": 3,
    "question": "What is the primary purpose of a Transaction Processing System (TPS)?",
    "options": [
      "To create management reports",
      "To integrate all business units",
      "To handle routine, day-to-day business transactions",
      "To support executive decision-making"
    ],
    "answer": "To handle routine, day-to-day business transactions",
    "explanation": "TPS xử lý giao dịch hằng ngày như đặt lịch, bán hàng và thanh toán.",
    "id": 28
  },
  {
    "module": 3,
    "number": 4,
    "question": "Which requirement type defines how well the system must perform, such as speed or security?",
    "options": [
      "Technical Requirement",
      "Operational Requirement",
      "Functional Requirement",
      "Non-Functional Requirement"
    ],
    "answer": "Non-Functional Requirement",
    "explanation": "Non-functional requirement mô tả chất lượng như tốc độ, bảo mật, độ tin cậy.",
    "id": 29
  },
  {
    "module": 3,
    "number": 5,
    "question": "Which level of testing involves testing individual functions or methods in isolation?",
    "options": [
      "Integration Testing",
      "Acceptance Testing",
      "Unit Testing",
      "System Testing"
    ],
    "answer": "Unit Testing",
    "explanation": "Unit testing kiểm tra từng hàm hoặc thành phần riêng lẻ.",
    "id": 30
  },
  {
    "module": 3,
    "number": 6,
    "question": "In the context of testing, what characterises 'Black-Box' testing?",
    "options": [
      "The tester focuses on code structure",
      "The tester does NOT see the code",
      "The tester can see the internal code",
      "The tester writes the code"
    ],
    "answer": "The tester does NOT see the code",
    "explanation": "Black-box testing đánh giá đầu vào/đầu ra mà không cần xem mã nguồn.",
    "id": 31
  },
  {
    "module": 3,
    "number": 7,
    "question": "Which UML diagram is best suited to show 'WHO uses the system' and 'WHAT they do'?",
    "options": [
      "Use Case Diagram",
      "Class Diagram",
      "Sequence Diagram",
      "Deployment Diagram"
    ],
    "answer": "Use Case Diagram",
    "explanation": "Use Case Diagram thể hiện actors (ai) và use cases (họ làm gì).",
    "id": 32
  },
  {
    "module": 3,
    "number": 8,
    "question": "What are the three elements of the CIA Triad for security in Information Systems?",
    "options": [
      "Control, Integrity, Authentication",
      "Confidentiality, Integrity, Availability",
      "Confidentiality, Identity, Access",
      "Compliance, Integrity, Availability"
    ],
    "answer": "Confidentiality, Integrity, Availability",
    "explanation": "CIA = Confidentiality (bí mật), Integrity (toàn vẹn), Availability (sẵn sàng).",
    "id": 33
  },
  {
    "module": 3,
    "number": 9,
    "question": "Which of the following is identified as a common pitfall where developers add extras nobody asked for?",
    "options": [
      "Vague Words",
      "Scope Creep",
      "Ignoring NFRs",
      "Gold Plating"
    ],
    "answer": "Gold Plating",
    "explanation": "Gold plating là tự thêm tính năng không được yêu cầu; scope creep là phạm vi tăng mất kiểm soát.",
    "id": 34
  },
  {
    "module": 3,
    "number": 10,
    "question": "What is the role of an IT Business Analyst ?",
    "options": [
      "To act as the bridge between business users and IT developers",
      "To manage the production servers",
      "To write the source code",
      "To conduct unit testing"
    ],
    "answer": "To act as the bridge between business users and IT developers",
    "explanation": "Business Analyst kết nối nhu cầu nghiệp vụ với nhóm phát triển kỹ thuật.",
    "id": 35
  },
  {
    "module": 3,
    "number": 11,
    "question": "Which Information System type provides 'Executive dashboards' for a CEO performance overview?",
    "options": [
      "ERP",
      "EIS",
      "DSS",
      "MIS"
    ],
    "answer": "EIS",
    "explanation": "EIS cung cấp bảng điều khiển cấp lãnh đạo; TPS xử lý giao dịch thường ngày.",
    "id": 36
  },
  {
    "module": 3,
    "number": 12,
    "question": "In the Bug Life Cycle, what stage comes immediately after 'In Progress'?",
    "options": [
      "Assigned",
      "Fixed",
      "Closed",
      "New"
    ],
    "answer": "Fixed",
    "explanation": "Trong quy trình bug của bài học, sau In Progress là Fixed.",
    "id": 37
  },
  {
    "module": 3,
    "number": 13,
    "question": "Which technique for gathering requirements involves watching users do their jobs to uncover hidden tasks?",
    "options": [
      "Surveys",
      "Interviews",
      "Observation",
      "Prototyping"
    ],
    "answer": "Observation",
    "explanation": "Observation giúp phát hiện công việc thực tế mà người dùng có thể quên mô tả.",
    "id": 38
  },
  {
    "module": 3,
    "number": 14,
    "question": "What distinguishes \"Disruptive\" technology from standard innovation?",
    "options": [
      "It is only used in the healthcare sector.",
      "It requires established companies to lead the development.",
      "It is always more expensive than existing solutions.",
      "It fundamentally changes how an industry works, often creating new markets or destroying existing ones."
    ],
    "answer": "It fundamentally changes how an industry works, often creating new markets or destroying existing ones.",
    "explanation": "Disruptive technology làm thay đổi đáng kể cách ngành hoạt động.",
    "id": 39
  },
  {
    "module": 3,
    "number": 15,
    "question": "Which type of AI is described as being designed for one specific task, such as Siri or spam filters, and represents what exists today?",
    "options": [
      "General AI (Strong AI)",
      "Quantum AI",
      "Super AI",
      "Narrow AI (Weak AI)"
    ],
    "answer": "Narrow AI (Weak AI)",
    "explanation": "Narrow AI chỉ giải quyết các nhiệm vụ cụ thể, như lọc spam.",
    "id": 40
  },
  {
    "module": 3,
    "number": 16,
    "question": "In the context of Machine Learning, what is the primary difference from traditional software?",
    "options": [
      "AI is programmed with exact rules for every situation; traditional software learns patterns.",
      "Traditional software follows explicit rules; AI learns patterns from data and examples.",
      "Traditional software learns from data; AI follows explicit rules.",
      "There is no difference; both use the same logic."
    ],
    "answer": "Traditional software follows explicit rules; AI learns patterns from data and examples.",
    "explanation": "Phần mềm truyền thống chạy theo quy tắc viết sẵn; machine learning học mẫu từ dữ liệu.",
    "id": 41
  },
  {
    "module": 3,
    "number": 17,
    "question": "Which subset of Machine Learning uses neural networks with many layers and excels at image recognition and language translation?",
    "options": [
      "Genetic Algorithms",
      "Expert Systems",
      "Rule-Based Systems",
      "Deep Learning"
    ],
    "answer": "Deep Learning",
    "explanation": "Deep learning dùng mạng nơ-ron nhiều lớp.",
    "id": 42
  },
  {
    "module": 3,
    "number": 18,
    "question": "What is the defining characteristic of a Blockchain that makes it secure and transparent?",
    "options": [
      "It is only used for storing images and videos.",
      "It is controlled by a single central authority.",
      "It is a shared, digital ledger where data, once recorded, cannot be changed (immutable).",
      "It requires a bank to validate every transaction."
    ],
    "answer": "It is a shared, digital ledger where data, once recorded, cannot be changed (immutable).",
    "explanation": "Blockchain là sổ cái chia sẻ có tính chống sửa đổi; không phải tuyệt đối không thể thay đổi.",
    "id": 43
  },
  {
    "module": 3,
    "number": 19,
    "question": "Which of the following is a limitation of Blockchain technology mentioned in the text?",
    "options": [
      "It is too fast for modern applications.",
      "Transaction processing speed is slow compared to traditional systems.",
      "It has low energy consumption.",
      "It is impossible to regulate."
    ],
    "answer": "Transaction processing speed is slow compared to traditional systems.",
    "explanation": "Một hạn chế của nhiều blockchain là tốc độ xử lý giao dịch tương đối thấp.",
    "id": 44
  },
  {
    "module": 3,
    "number": 20,
    "question": "What does the acronym \"IoT\" stand for?",
    "options": [
      "Internet of Things",
      "Integrated Online Technology",
      "Internet of Transactions",
      "Intelligent Operating Tools"
    ],
    "answer": "Internet of Things",
    "explanation": "IoT = Internet of Things, các thiết bị vật lý kết nối Internet.",
    "id": 45
  },
  {
    "module": 3,
    "number": 21,
    "question": "Which of the following is cited as a major security risk associated with IoT devices?",
    "options": [
      "They are immune to botnet attacks.",
      "Many devices have weak or no passwords and lack regular security updates.",
      "They only connect via secure wired networks.",
      "They are too expensive to hack."
    ],
    "answer": "Many devices have weak or no passwords and lack regular security updates.",
    "explanation": "Thiết bị IoT dùng mật khẩu yếu và ít cập nhật dễ bị tấn công.",
    "id": 46
  },
  {
    "module": 3,
    "number": 22,
    "question": "In Cloud Computing, what does \"SaaS\" stand for?",
    "options": [
      "System as a Service",
      "Software as a Service",
      "Security as a Service",
      "Storage as a Service"
    ],
    "answer": "Software as a Service",
    "explanation": "SaaS cung cấp phần mềm qua Internet, thường sử dụng bằng trình duyệt.",
    "id": 47
  },
  {
    "module": 3,
    "number": 23,
    "question": "What is the primary advantage of Edge Computing over traditional Cloud Computing?",
    "options": [
      "It sends all data to a central server for processing.",
      "It processes data near the source, reducing delay for time-critical tasks.",
      "It is cheaper to implement than cloud storage.",
      "It requires less internet connectivity."
    ],
    "answer": "It processes data near the source, reducing delay for time-critical tasks.",
    "explanation": "Edge computing xử lý gần nơi tạo dữ liệu nên giảm độ trễ.",
    "id": 48
  },
  {
    "module": 3,
    "number": 24,
    "question": "Which of the following best describes Augmented Reality (AR)?",
    "options": [
      "It replaces the real world entirely with a virtual one.",
      "It creates a completely immersive digital world.",
      "It overlays digital content onto the real world.",
      "It is a type of blockchain technology."
    ],
    "answer": "It overlays digital content onto the real world.",
    "explanation": "AR phủ nội dung số lên thế giới thật; VR tạo môi trường ảo.",
    "id": 49
  },
  {
    "module": 3,
    "number": 25,
    "question": "What is the \"Digital Divide\"?",
    "options": [
      "The gap between AI and human intelligence.",
      "The gap between those who have access to technology/internet and those who do not.",
      "The difference between 4G and 5G networks.",
      "The separation between hardware and software."
    ],
    "answer": "The gap between those who have access to technology/internet and those who do not.",
    "explanation": "Digital divide là chênh lệch về khả năng tiếp cận công nghệ và Internet.",
    "id": 50
  },
  {
    "module": 4,
    "number": 1,
    "question": "Which network type typically connects devices within a home or single building?",
    "options": [
      "LAN",
      "WAN",
      "MAN",
      "Global backbone"
    ],
    "answer": "LAN",
    "explanation": "LAN là mạng cục bộ trong nhà, văn phòng hoặc tòa nhà.",
    "id": 51,
    "week": "Week 4"
  },
  {
    "module": 4,
    "number": 2,
    "question": "Which network type spans countries or continents?",
    "options": [
      "WAN",
      "PAN",
      "LAN",
      "Bluetooth network"
    ],
    "answer": "WAN",
    "explanation": "WAN kết nối các mạng trên khoảng cách địa lý lớn.",
    "id": 52,
    "week": "Week 4"
  },
  {
    "module": 4,
    "number": 3,
    "question": "Which network is usually used for personal devices over a short range?",
    "options": [
      "PAN",
      "WAN",
      "MAN",
      "Tier-1 ISP"
    ],
    "answer": "PAN",
    "explanation": "PAN kết nối thiết bị cá nhân ở khoảng cách gần.",
    "id": 53,
    "week": "Week 4"
  },
  {
    "module": 4,
    "number": 4,
    "question": "What is a network protocol?",
    "options": [
      "A set of rules for communication",
      "A physical cable",
      "A website design",
      "A storage disk"
    ],
    "answer": "A set of rules for communication",
    "explanation": "Protocol là bộ quy tắc giúp các thiết bị giao tiếp.",
    "id": 54,
    "week": "Week 4"
  },
  {
    "module": 4,
    "number": 5,
    "question": "What is the main purpose of TCP?",
    "options": [
      "Reliable ordered delivery",
      "Encrypting every file",
      "Assigning website colours",
      "Replacing DNS"
    ],
    "answer": "Reliable ordered delivery",
    "explanation": "TCP hỗ trợ truyền dữ liệu tin cậy và đúng thứ tự.",
    "id": 55,
    "week": "Week 4"
  },
  {
    "module": 4,
    "number": 6,
    "question": "Which protocol is commonly chosen for low-latency streaming or gaming?",
    "options": [
      "UDP",
      "SMTP",
      "FTP",
      "HTML"
    ],
    "answer": "UDP",
    "explanation": "UDP ít overhead hơn nhưng không bảo đảm truyền đủ như TCP.",
    "id": 56,
    "week": "Week 4"
  },
  {
    "module": 4,
    "number": 7,
    "question": "Which protocol is mainly used to send email between mail servers?",
    "options": [
      "SMTP",
      "HTTP",
      "DNS",
      "ICMP"
    ],
    "answer": "SMTP",
    "explanation": "SMTP được dùng để gửi và chuyển tiếp email.",
    "id": 57,
    "week": "Week 4"
  },
  {
    "module": 4,
    "number": 8,
    "question": "Which protocol is traditionally used to transfer files?",
    "options": [
      "FTP",
      "CSS",
      "ICMP",
      "ARPANET"
    ],
    "answer": "FTP",
    "explanation": "FTP là File Transfer Protocol.",
    "id": 58,
    "week": "Week 4"
  },
  {
    "module": 4,
    "number": 9,
    "question": "Which protocol is used for diagnostic messages such as ping?",
    "options": [
      "ICMP",
      "HTML",
      "SMTP",
      "CSS"
    ],
    "answer": "ICMP",
    "explanation": "Ping thường sử dụng ICMP để kiểm tra kết nối.",
    "id": 59,
    "week": "Week 4"
  },
  {
    "module": 4,
    "number": 10,
    "question": "What is the purpose of the OSI model?",
    "options": [
      "Describe network communication in seven layers",
      "Create web page layouts",
      "Store user passwords",
      "Replace routers"
    ],
    "answer": "Describe network communication in seven layers",
    "explanation": "OSI chia hoạt động mạng thành bảy lớp để dễ hiểu và xử lý lỗi.",
    "id": 60,
    "week": "Week 4"
  },
  {
    "module": 4,
    "number": 11,
    "question": "Which OSI layer is responsible for routing packets between networks?",
    "options": [
      "Network layer",
      "Presentation layer",
      "Application layer",
      "Physical layer"
    ],
    "answer": "Network layer",
    "explanation": "Network layer xử lý địa chỉ logic và định tuyến.",
    "id": 61,
    "week": "Week 4"
  },
  {
    "module": 4,
    "number": 12,
    "question": "Which OSI layer deals with signals and transmission media?",
    "options": [
      "Physical layer",
      "Session layer",
      "Application layer",
      "Transport layer"
    ],
    "answer": "Physical layer",
    "explanation": "Physical layer liên quan tín hiệu và phương tiện truyền.",
    "id": 62,
    "week": "Week 4"
  },
  {
    "module": 4,
    "number": 13,
    "question": "What happens to data as it travels across the Internet?",
    "options": [
      "It is split into packets",
      "It always travels as one file",
      "It is converted into CSS",
      "It never passes through routers"
    ],
    "answer": "It is split into packets",
    "explanation": "Dữ liệu được chia thành packet và ghép lại ở đích.",
    "id": 63,
    "week": "Week 4"
  },
  {
    "module": 4,
    "number": 14,
    "question": "What does a router primarily do?",
    "options": [
      "Forward packets between networks",
      "Write HTML pages",
      "Generate images",
      "Store browser history"
    ],
    "answer": "Forward packets between networks",
    "explanation": "Router chuyển tiếp packet giữa các mạng.",
    "id": 64,
    "week": "Week 4"
  },
  {
    "module": 4,
    "number": 15,
    "question": "What is the main role of an ISP?",
    "options": [
      "Provide Internet connectivity",
      "Create JavaScript variables",
      "Style webpages",
      "Validate HTML tags"
    ],
    "answer": "Provide Internet connectivity",
    "explanation": "ISP cung cấp kết nối Internet cho người dùng.",
    "id": 65,
    "week": "Week 4"
  },
  {
    "module": 4,
    "number": 16,
    "question": "Which language defines the structure of a web page?",
    "options": [
      "HTML",
      "CSS",
      "SQL",
      "SMTP"
    ],
    "answer": "HTML",
    "explanation": "HTML định nghĩa cấu trúc và nội dung trang web.",
    "id": 66,
    "week": "Week 5"
  },
  {
    "module": 4,
    "number": 17,
    "question": "Which language controls the appearance and layout of a web page?",
    "options": [
      "CSS",
      "HTML",
      "DNS",
      "TCP"
    ],
    "answer": "CSS",
    "explanation": "CSS điều khiển màu sắc, font và bố cục.",
    "id": 67,
    "week": "Week 5"
  },
  {
    "module": 4,
    "number": 18,
    "question": "Which HTML element creates a hyperlink?",
    "options": [
      "<a>",
      "<p>",
      "<img>",
      "<table>"
    ],
    "answer": "<a>",
    "explanation": "Thẻ <a> tạo liên kết, thường dùng thuộc tính href.",
    "id": 68,
    "week": "Week 5"
  },
  {
    "module": 4,
    "number": 19,
    "question": "Which HTML element displays an image?",
    "options": [
      "<img>",
      "<picturebox>",
      "<linktext>",
      "<h1>"
    ],
    "answer": "<img>",
    "explanation": "Thẻ <img> hiển thị ảnh, dùng src và alt.",
    "id": 69,
    "week": "Week 5"
  },
  {
    "module": 4,
    "number": 20,
    "question": "Which HTML element creates a paragraph?",
    "options": [
      "<p>",
      "<tr>",
      "<head>",
      "<ul>"
    ],
    "answer": "<p>",
    "explanation": "Thẻ <p> biểu thị đoạn văn.",
    "id": 70,
    "week": "Week 5"
  },
  {
    "module": 4,
    "number": 21,
    "question": "Which CSS selector targets an element with id=\"main\"?",
    "options": [
      "#main",
      ".main",
      "main#",
      "*main"
    ],
    "answer": "#main",
    "explanation": "CSS dùng dấu # để chọn id.",
    "id": 71,
    "week": "Week 5"
  },
  {
    "module": 4,
    "number": 22,
    "question": "Which CSS selector targets elements with class=\"card\"?",
    "options": [
      ".card",
      "#card",
      "card#",
      "@card"
    ],
    "answer": ".card",
    "explanation": "CSS dùng dấu chấm để chọn class.",
    "id": 72,
    "week": "Week 5"
  },
  {
    "module": 4,
    "number": 23,
    "question": "Which CSS property changes the background colour?",
    "options": [
      "background-color",
      "text-style",
      "font-color",
      "margin"
    ],
    "answer": "background-color",
    "explanation": "background-color thay đổi màu nền.",
    "id": 73,
    "week": "Week 5"
  },
  {
    "module": 4,
    "number": 24,
    "question": "What does responsive web design aim to achieve?",
    "options": [
      "Layouts that adapt to different screen sizes",
      "Identical fixed width on all devices",
      "Disabling mobile browsers",
      "Only desktop support"
    ],
    "answer": "Layouts that adapt to different screen sizes",
    "explanation": "Responsive giúp giao diện phù hợp laptop và điện thoại.",
    "id": 74,
    "week": "Week 5"
  },
  {
    "module": 4,
    "number": 25,
    "question": "What does the CSS margin property control?",
    "options": [
      "Space outside an element border",
      "Space between content and border",
      "Text alignment",
      "Image alternative text"
    ],
    "answer": "Space outside an element border",
    "explanation": "Margin là khoảng cách ngoài border; padding là bên trong.",
    "id": 75,
    "week": "Week 5"
  },
  {
    "module": 4,
    "number": 26,
    "question": "What is the main role of JavaScript on a webpage?",
    "options": [
      "Add interactivity and behaviour",
      "Define physical network links",
      "Replace HTML entirely",
      "Configure ISP peering"
    ],
    "answer": "Add interactivity and behaviour",
    "explanation": "JavaScript xử lý sự kiện và cập nhật nội dung động.",
    "id": 76,
    "week": "Week 6"
  },
  {
    "module": 4,
    "number": 27,
    "question": "Which JavaScript method selects an element by its ID?",
    "options": [
      "document.getElementById()",
      "document.writeCSS()",
      "window.getRouter()",
      "Math.select()"
    ],
    "answer": "document.getElementById()",
    "explanation": "getElementById tìm phần tử theo id.",
    "id": 77,
    "week": "Week 6"
  },
  {
    "module": 4,
    "number": 28,
    "question": "Which JavaScript keyword declares a variable that can be reassigned?",
    "options": [
      "let",
      "const",
      "fixed",
      "staticOnly"
    ],
    "answer": "let",
    "explanation": "let cho phép gán lại giá trị biến.",
    "id": 78,
    "week": "Week 6"
  },
  {
    "module": 4,
    "number": 29,
    "question": "What does an event listener do?",
    "options": [
      "Runs code when an event occurs",
      "Changes network ports",
      "Encrypts all website traffic",
      "Compiles Java"
    ],
    "answer": "Runs code when an event occurs",
    "explanation": "Event listener xử lý hành động như click hoặc input.",
    "id": 79,
    "week": "Week 6"
  },
  {
    "module": 4,
    "number": 30,
    "question": "What does DOM stand for?",
    "options": [
      "Document Object Model",
      "Digital Output Method",
      "Data Organisation Module",
      "Domain Operating Machine"
    ],
    "answer": "Document Object Model",
    "explanation": "DOM là mô hình đối tượng của tài liệu HTML.",
    "id": 80,
    "week": "Week 6"
  },
  {
    "module": 4,
    "number": 31,
    "question": "What is the purpose of search engine crawling?",
    "options": [
      "Discover web pages",
      "Encrypt passwords",
      "Compile JavaScript",
      "Change monitor resolution"
    ],
    "answer": "Discover web pages",
    "explanation": "Crawler đi theo liên kết để tìm trang web.",
    "id": 81,
    "week": "Week 6"
  },
  {
    "module": 4,
    "number": 32,
    "question": "What is search engine indexing?",
    "options": [
      "Organising discovered page information for retrieval",
      "Deleting every search result",
      "Connecting a router",
      "Adding CSS padding"
    ],
    "answer": "Organising discovered page information for retrieval",
    "explanation": "Indexing lưu và tổ chức thông tin trang để phục vụ tìm kiếm.",
    "id": 82,
    "week": "Week 6"
  },
  {
    "module": 4,
    "number": 33,
    "question": "Which search engine is discussed as privacy-enhanced in the tutorial?",
    "options": [
      "DuckDuckGo",
      "Google Analytics",
      "Gmail",
      "GitHub Pages"
    ],
    "answer": "DuckDuckGo",
    "explanation": "Tutorial so sánh DuckDuckGo với Google về quyền riêng tư.",
    "id": 83,
    "week": "Week 6"
  },
  {
    "module": 4,
    "number": 34,
    "question": "Which design principle makes important information stand out?",
    "options": [
      "Visual hierarchy",
      "Random alignment",
      "Removing all contrast",
      "Using one huge paragraph"
    ],
    "answer": "Visual hierarchy",
    "explanation": "Hierarchy giúp người đọc nhận biết nội dung quan trọng.",
    "id": 84,
    "week": "Week 6"
  },
  {
    "module": 4,
    "number": 35,
    "question": "Which design principle provides breathing room between elements?",
    "options": [
      "White space",
      "Pharming",
      "Peering",
      "Encapsulation"
    ],
    "answer": "White space",
    "explanation": "White space tạo khoảng trống giúp dễ đọc.",
    "id": 85,
    "week": "Week 6"
  },
  {
    "module": 4,
    "number": 36,
    "question": "What is the purpose of alternative text for images?",
    "options": [
      "Improve accessibility by describing images",
      "Increase router speed",
      "Replace all CSS",
      "Store passwords"
    ],
    "answer": "Improve accessibility by describing images",
    "explanation": "Alt text hỗ trợ người dùng screen reader và khi ảnh không tải.",
    "id": 86,
    "week": "Week 6"
  },
  {
    "module": 4,
    "number": 37,
    "question": "Which technique tricks users through fake messages or websites?",
    "options": [
      "Phishing",
      "Encryption",
      "Indexing",
      "Compilation"
    ],
    "answer": "Phishing",
    "explanation": "Phishing lừa người dùng cung cấp dữ liệu hoặc nhấn link độc hại.",
    "id": 87,
    "week": "Week 6"
  },
  {
    "module": 4,
    "number": 38,
    "question": "What does encryption do?",
    "options": [
      "Transforms readable data into protected ciphertext",
      "Makes HTML headings larger",
      "Creates DNS names",
      "Removes all malware automatically"
    ],
    "answer": "Transforms readable data into protected ciphertext",
    "explanation": "Encryption chuyển plaintext thành ciphertext để bảo vệ dữ liệu.",
    "id": 88,
    "week": "Week 6"
  },
  {
    "module": 4,
    "number": 39,
    "question": "Which of these is a programming language rather than a markup or stylesheet language?",
    "options": [
      "JavaScript",
      "HTML",
      "CSS",
      "XML"
    ],
    "answer": "JavaScript",
    "explanation": "JavaScript là ngôn ngữ lập trình; HTML và CSS không phải.",
    "id": 89,
    "week": "Week 7"
  },
  {
    "module": 4,
    "number": 40,
    "question": "What is a variable used for in a program?",
    "options": [
      "Store a value for use by the program",
      "Connect fibre cables",
      "Change the DNS resolver",
      "Draw UML inheritance"
    ],
    "answer": "Store a value for use by the program",
    "explanation": "Variable lưu giá trị để chương trình xử lý.",
    "id": 90,
    "week": "Week 7"
  },
  {
    "module": 4,
    "number": 41,
    "question": "Which data type represents true or false?",
    "options": [
      "Boolean",
      "String",
      "Array",
      "Integer"
    ],
    "answer": "Boolean",
    "explanation": "Boolean có hai giá trị true và false.",
    "id": 91,
    "week": "Week 7"
  },
  {
    "module": 4,
    "number": 42,
    "question": "Which data type typically represents text?",
    "options": [
      "String",
      "Boolean",
      "Integer",
      "Float"
    ],
    "answer": "String",
    "explanation": "String biểu diễn văn bản.",
    "id": 92,
    "week": "Week 7"
  },
  {
    "module": 4,
    "number": 43,
    "question": "What is an array used for?",
    "options": [
      "Store multiple values in an ordered collection",
      "Assign a public IP address",
      "Validate certificates",
      "Change CSS specificity"
    ],
    "answer": "Store multiple values in an ordered collection",
    "explanation": "Array lưu nhiều giá trị theo thứ tự.",
    "id": 93,
    "week": "Week 7"
  },
  {
    "module": 4,
    "number": 44,
    "question": "What does a compiler do?",
    "options": [
      "Translate an entire program before execution",
      "Style a web page",
      "Route packets",
      "Check a user password"
    ],
    "answer": "Translate an entire program before execution",
    "explanation": "Compiler biên dịch chương trình trước khi chạy.",
    "id": 94,
    "week": "Week 7"
  },
  {
    "module": 4,
    "number": 45,
    "question": "How is an interpreter described in the Week 7 slides?",
    "options": [
      "Translates and executes code line by line",
      "Only edits CSS",
      "Connects regional ISPs",
      "Always creates an executable file first"
    ],
    "answer": "Translates and executes code line by line",
    "explanation": "Slide mô tả interpreter dịch và chạy từng dòng.",
    "id": 95,
    "week": "Week 7"
  },
  {
    "module": 4,
    "number": 46,
    "question": "What is source code?",
    "options": [
      "Human-readable instructions written by a programmer",
      "A network cable",
      "A firewall rule only",
      "A database backup"
    ],
    "answer": "Human-readable instructions written by a programmer",
    "explanation": "Source code là mã nguồn do lập trình viên viết.",
    "id": 96,
    "week": "Week 7"
  },
  {
    "module": 4,
    "number": 47,
    "question": "What is a key output of the SDLC Planning phase?",
    "options": [
      "A project plan with scope and resources",
      "A fully deployed application",
      "A final bug report only",
      "A password reset email"
    ],
    "answer": "A project plan with scope and resources",
    "explanation": "Planning xác định phạm vi, tính khả thi, nguồn lực và kế hoạch.",
    "id": 97,
    "week": "Week 8"
  },
  {
    "module": 4,
    "number": 48,
    "question": "Which requirements technique involves speaking directly to stakeholders?",
    "options": [
      "Interviews",
      "Packet routing",
      "Code compilation",
      "Encryption"
    ],
    "answer": "Interviews",
    "explanation": "Interview hỏi trực tiếp stakeholder để hiểu nhu cầu.",
    "id": 98,
    "week": "Week 8"
  },
  {
    "module": 4,
    "number": 49,
    "question": "What does a UML class diagram primarily represent?",
    "options": [
      "Classes, attributes and relationships",
      "Only website colours",
      "Internet packet routes",
      "Search rankings"
    ],
    "answer": "Classes, attributes and relationships",
    "explanation": "Class diagram thể hiện lớp, thuộc tính và quan hệ.",
    "id": 99,
    "week": "Week 8"
  },
  {
    "module": 4,
    "number": 50,
    "question": "What does UML inheritance represent?",
    "options": [
      "A specialised class is a type of a more general class",
      "A website is offline",
      "A database is encrypted",
      "Two users have identical passwords"
    ],
    "answer": "A specialised class is a type of a more general class",
    "explanation": "Inheritance là quan hệ is-a, ví dụ OnlineCourse là Course.",
    "id": 100,
    "week": "Week 8"
  }
];
const WRITTEN_BANK = {
  "short": [
    {
      "id": "S1",
      "title": "DNS & failure",
      "question": "Explain the role of DNS when accessing a website. What happens if the DNS resolver fails? [5 marks]",
      "answer": "DNS translates human-readable domain names into IP addresses. When a user enters a URL, the browser asks a DNS resolver for the IP address. The browser uses that address to connect to the web server and request the page. If the resolver fails and no cached result exists, the browser cannot resolve the domain and the site may not load. The user may see a DNS error.",
      "keywords": [
        "domain",
        "ip address",
        "resolver",
        "browser",
        "fail"
      ],
      "guide": "Define DNS → request flow → effect of failure → example/error.",
      "flow": "Domain → DNS resolver → IP → web server; failure → no resolution.",
      "variants": [
        "A student types a university URL but the DNS resolver is unavailable. Explain what happens.",
        "Describe the relationship between DNS, IP addresses and a web browser."
      ]
    },
    {
      "id": "S2",
      "title": "URL components",
      "question": "Identify and define the four primary components of a standard URL, excluding query and fragment. [5 marks]",
      "answer": "Scheme: specifies the protocol, such as HTTPS. Host: identifies the server, such as www.example.com. Port: identifies the service endpoint, such as 443 for HTTPS. Path: identifies the requested resource, such as /booking.html. Example: https://www.example.com:443/booking.html.",
      "keywords": [
        "scheme",
        "host",
        "port",
        "path",
        "example"
      ],
      "guide": "List 4 named components, explain each, add one labelled URL.",
      "flow": "Scheme → Host → Port → Path.",
      "variants": [
        "Label the four components of http://hospital.example:80/appointments.",
        "Explain how scheme, host, port and path differ in a URL."
      ]
    },
    {
      "id": "S3",
      "title": "Client vs Server",
      "question": "Compare a client and a server in web architecture, with an example. [5 marks]",
      "answer": "A client is a device or application, such as a web browser, that requests services or resources. A server receives requests, processes them and sends responses. The client usually initiates an HTTP/HTTPS request, while the server provides a webpage or service in an HTTP response. For example, a patient’s browser requests the GoodHealth booking page; the web server returns the page, and the browser displays it.",
      "keywords": [
        "client",
        "server",
        "request",
        "response",
        "example"
      ],
      "guide": "Define client → define server → difference → request/response → example.",
      "flow": "Browser → HTTP request → server → HTTP response → browser.",
      "variants": [
        "Explain how a browser and web server communicate when opening a university homepage.",
        "Compare the roles of the client and server when a patient loads a booking page."
      ]
    },
    {
      "id": "S4",
      "title": "Client-side vs Server-side",
      "question": "Compare client-side and server-side processing and provide examples. [5 marks]",
      "answer": "Client-side processing runs in the user’s browser. JavaScript can update the interface and check form inputs quickly. Server-side processing runs on a server and handles business rules, authentication and database operations. Client-side code is generally visible to users, so sensitive validation must also happen on the server. For example, a booking form checks required fields in the browser, but the server verifies doctor availability and saves the booking.",
      "keywords": [
        "browser",
        "javascript",
        "server",
        "database",
        "booking"
      ],
      "guide": "Where it runs → role of each → security difference → paired example.",
      "flow": "Client-side = UI / validation; server-side = authentication / database.",
      "variants": [
        "Compare client-side form validation with server-side booking validation.",
        "Why should password checking not rely only on client-side JavaScript?"
      ]
    },
    {
      "id": "S5",
      "title": "Waterfall vs Agile",
      "question": "Compare the Waterfall and Agile SDLC models. [5 marks]",
      "answer": "Waterfall is a sequential model where phases are completed in order and requirements are usually defined early. It suits relatively stable requirements but changes can be expensive. Agile develops software iteratively in short cycles with frequent user feedback. It adapts better to changing requirements but needs ongoing collaboration. For a booking website with changing requirements, Agile may help gather feedback earlier.",
      "keywords": [
        "waterfall",
        "sequential",
        "agile",
        "iterative",
        "feedback"
      ],
      "guide": "Define both → 2 differences → appropriate example.",
      "flow": "Waterfall = fixed phases; Agile = cycles + feedback.",
      "variants": [
        "Which approach suits a project with frequently changing requirements, and why?",
        "Compare how Waterfall and Agile handle testing and user feedback."
      ]
    },
    {
      "id": "S6",
      "title": "Functional vs Non-functional",
      "question": "Explain functional and non-functional requirements with examples. [5 marks]",
      "answer": "Functional requirements describe what a system must do, such as allowing patients to create or cancel appointments. Non-functional requirements describe how well it must work, such as loading quickly, remaining available under high traffic and protecting patient data. Both are necessary because a system may provide the right features but still fail in performance or security.",
      "keywords": [
        "functional",
        "what",
        "non-functional",
        "performance",
        "example"
      ],
      "guide": "Define WHAT → define HOW WELL → example of each → why both matter.",
      "flow": "Functional = feature; Non-functional = quality.",
      "variants": [
        "Classify “users can reset passwords” and “page loads within 2 seconds”.",
        "Give two functional and two non-functional requirements for a hospital website."
      ]
    },
    {
      "id": "S7",
      "title": "Testing levels",
      "question": "Explain how software testing ensures quality and name four levels of testing. [5 marks]",
      "answer": "Testing finds defects and checks whether software meets requirements. Unit testing checks individual functions. Integration testing checks how components work together. System testing checks the complete application. Acceptance testing checks whether the system meets user or business needs. For GoodHealth, integration and system testing should have happened before launch.",
      "keywords": [
        "unit",
        "integration",
        "system",
        "acceptance",
        "quality"
      ],
      "guide": "Purpose of testing → name + define four levels.",
      "flow": "Small component → connected components → full system → user approval.",
      "variants": [
        "Which testing levels would detect a broken booking-database connection?",
        "Explain how unit, integration, system and acceptance testing differ."
      ]
    },
    {
      "id": "S8",
      "title": "Requirement gathering",
      "question": "Why is requirements analysis important? Name three requirement-gathering techniques. [5 marks]",
      "answer": "Requirements analysis clarifies stakeholder needs before development. It helps prevent misunderstandings, rework and expensive changes. Interviews ask stakeholders directly about their needs. Surveys collect responses from many people. Observation watches users perform real tasks to reveal practical requirements. In GoodHealth, unclear final requirements contributed to project problems.",
      "keywords": [
        "requirements",
        "interviews",
        "surveys",
        "observation",
        "rework"
      ],
      "guide": "Importance → three techniques with purpose → case link.",
      "flow": "Understand needs → interviews/surveys/observation → fewer errors.",
      "variants": [
        "Recommend three ways to gather requirements for an online booking system.",
        "Explain why unclear requirements can cause project failure."
      ]
    },
    {
      "id": "S9",
      "title": "Social engineering vs Malware",
      "question": "Distinguish social engineering from malware and give examples. [5 marks]",
      "answer": "Social engineering manipulates people into unsafe actions, for example phishing emails that steal passwords or pretexting that uses a false identity. Malware is harmful software, such as a virus that attaches to files, a worm that spreads automatically or ransomware that encrypts data for payment. Social engineering may be used to deliver malware, but they are not the same concept.",
      "keywords": [
        "social engineering",
        "phishing",
        "malware",
        "virus",
        "worm"
      ],
      "guide": "Define each → give examples → distinguish human trick vs malicious code.",
      "flow": "Human manipulation vs harmful software.",
      "variants": [
        "Explain how a phishing email could lead to a ransomware infection.",
        "Compare pretexting with a Trojan and identify which is social engineering."
      ]
    },
    {
      "id": "S10",
      "title": "Virus vs Worm",
      "question": "Explain the difference between a computer virus and a worm. [5 marks]",
      "answer": "A virus is malware that attaches to a host file or program and spreads when the infected host is executed. A worm is standalone malware that can copy itself and spread automatically across networks. The key difference is that a virus depends on a host, while a worm does not. Both can disrupt systems or compromise information.",
      "keywords": [
        "virus",
        "host",
        "worm",
        "automatically",
        "network"
      ],
      "guide": "Define virus → define worm → contrast replication → impact.",
      "flow": "Virus = host file; Worm = standalone + self-spreading.",
      "variants": [
        "A threat spreads through a network without opening infected files. Identify it and justify.",
        "Compare the way a virus and worm replicate and spread."
      ]
    },
    {
      "id": "S11",
      "title": "Security controls",
      "question": "Explain how 2FA, firewalls and digital certificates improve security. [5 marks]",
      "answer": "Two-factor authentication requires two different authentication factors, reducing account takeover when passwords are stolen. A firewall filters network traffic and blocks unauthorised connections. A digital certificate binds an identity to a public key and helps browsers authenticate HTTPS websites. Together they reduce different risks, but no single control removes every threat.",
      "keywords": [
        "2fa",
        "firewall",
        "certificate",
        "authentication",
        "https"
      ],
      "guide": "Control → mechanism → risk mitigated; do all three.",
      "flow": "2FA = login; firewall = traffic; certificate = identity.",
      "variants": [
        "Which controls help against stolen passwords, unwanted network traffic and fake websites?",
        "Explain three different ways to protect a hospital booking system."
      ]
    },
    {
      "id": "S12",
      "title": "GoodHealth performance & security",
      "question": "Identify two non-functional failures in GoodHealth and explain their impacts. [5 marks]",
      "answer": "Performance and availability were inadequate: the website was slow, froze and went offline, and tests had not shown it could handle more than 20 concurrent users. Security assurance was also incomplete: 50% of security controls were untested, so patient information might not be protected. These problems could disrupt bookings and damage patient trust. The case does not prove that patient data was actually leaked.",
      "keywords": [
        "performance",
        "20",
        "security",
        "50%",
        "patients"
      ],
      "guide": "Name two qualities → cite case evidence → explain impact without inventing a breach.",
      "flow": "Evidence → failed quality → impact.",
      "variants": [
        "From the QuickCart case, identify two non-functional requirement failures and explain their effects. [5 marks]",
        "From the UniEnroll case, identify two non-functional requirements that were not met and explain why. [5 marks]"
      ],
      "scenario": "GOODHEALTH – ORIGINAL CASE STUDY (provided for practice)\n\nA new hospital, GoodHealth, is about to launch an online patient booking system. When prospective patients try to access the newly launched website, response times are slow, screens freeze, and the site goes offline within hours.\n\nTwo contractors are involved. TopSoftware is responsible for integrating the website with existing patient-management databases, but it does not manage the project. ManageWell leads project management. TopSoftware may have produced sloppy code to meet unrealistic deadlines.\n\nGoodHealth administration staff need the system to reflect medical services and doctors’/physiotherapists’ availability. Final requirements were not communicated well. Developers have fewer than three months to develop and test before go-live. ManageWell lacks expertise in IT system development and cannot manage the schedule. Three months before launch, an internal email warns that development is far off track and the system does not work.\n\nA senior software engineer says the final integration test will not finish before launch. Another senior team member reports the system has not successfully handled more than 20 concurrent users. The security officer recommends against the Authority to Operate because 50% of security controls have not been tested, leaving protection of personally identifiable information uncertain. ManageWell repeatedly claims the website will be ready. It launches on schedule but is not ready.",
      "variantScenarios": [
        "CASE STUDY – QuickCart online shopping\nQuickCart is launching an online store. BrightCode developers build checkout and connect the inventory database. PlanFast project managers manage delivery, but have little e-commerce experience. Warehouse staff say the final stock and delivery rules were never agreed. Developers have only eight weeks. A QA engineer warns that payment integration tests are unfinished; load tests fail with 35 simultaneous customers. A security analyst reports that access controls have not been fully tested. Managers launch anyway. Customers encounter failed payments, incorrect stock information and an outage on launch day.",
        "CASE STUDY – UniEnroll student portal\nA university launches a new student-enrolment portal. CampusTech developers build enrolment pages and connect student records. LeadTrack project managers control the schedule. Enrolment officers provide course and prerequisite rules, but their updated rules arrive late. Students are end users. Two weeks before launch, an engineer reports the portal cannot support more than 50 simultaneous students. The final database integration test is incomplete. The privacy officer says access permissions have not been verified. Leadership decides to launch. Students experience timeouts, incorrect course selections and privacy concerns."
      ],
      "variantAnswers": [
        "Performance: load tests failed at 35 simultaneous customers, so the store could not reliably handle demand. Security: access controls were not fully tested, creating a risk of unauthorised access. Both are non-functional requirements because they describe system quality rather than features.",
        "Performance: the portal could not support more than 50 simultaneous students, causing timeouts. Security/privacy: access permissions were not verified, creating a risk to student information. These are non-functional requirements because they describe quality and protection."
      ]
    }
  ],
  "long": [
    {
      "id": "L1",
      "title": "SDLC – Question 1 (a, b, c)",
      "question": "Question 1 – Answer ALL parts:\n(a) Outline the seven phases of SDLC. [7 marks]\n(b) Explain why Analysis is critical and list three requirements-gathering techniques. [7 marks]\n(c) Describe how Testing ensures quality and list four testing levels. [6 marks]",
      "answer": "1. Planning: define goals, scope, budget and schedule. 2. Analysis: gather and analyse requirements. 3. Design: plan architecture, data and interface. 4. Development: write code and build components. 5. Testing: detect defects and check requirements. 6. Deployment: release to users. 7. Maintenance: fix defects and improve the system. Analysis is critical because it aligns developers and stakeholders, reducing rework and cost. Three techniques are interviews, surveys and observation. Testing improves quality through unit, integration, system and acceptance testing.",
      "keywords": [
        "planning",
        "analysis",
        "design",
        "development",
        "testing",
        "deployment",
        "maintenance",
        "interviews",
        "surveys",
        "observation",
        "unit",
        "integration",
        "system",
        "acceptance"
      ],
      "guide": "Split answer by (a) 7 phases, (b) analysis + 3 techniques, (c) testing purpose + 4 levels.",
      "flow": "7 phases → importance of analysis → 3 techniques → 4 test levels.",
      "variants": [
        "Apply all seven SDLC stages to an online library system and explain which failures unclear requirements might cause.",
        "Describe how a team developing an online store should plan, analyse, design, build, test, deploy and maintain the system."
      ],
      "parts": [
        {
          "label": "(a) Seven SDLC phases",
          "question": "Outline the seven phases of SDLC.",
          "marks": 7,
          "keywords": [
            "planning",
            "analysis",
            "design",
            "development",
            "testing",
            "deployment",
            "maintenance"
          ],
          "answer": "1. Planning – Define goals, scope, budget and timeline.\n2. Analysis – Gather requirements.\n3. Design – Plan architecture, database and interface.\n4. Development – Write code.\n5. Testing – Find defects and check quality.\n6. Deployment – Release to users.\n7. Maintenance – Fix bugs and improve the system."
        },
        {
          "label": "(b) Analysis and three techniques",
          "question": "Explain why Analysis is critical; list three requirements-gathering techniques.",
          "marks": 7,
          "keywords": [
            "requirements",
            "interviews",
            "surveys",
            "observation"
          ],
          "answer": "Analysis identifies stakeholder needs and clear requirements, reducing misunderstandings, rework and costs.\n• Interviews – Ask stakeholders about needs.\n• Surveys – Collect responses from many users.\n• Observation – Watch users perform tasks."
        },
        {
          "label": "(c) Testing and four levels",
          "question": "Describe how Testing ensures quality; list four testing levels.",
          "marks": 6,
          "keywords": [
            "bugs",
            "unit",
            "integration",
            "system",
            "acceptance"
          ],
          "answer": "Testing identifies defects, verifies requirements and improves reliability.\n• Unit – Individual functions.\n• Integration – Components together.\n• System – Complete system.\n• Acceptance – Meets user/business needs."
        }
      ]
    },
    {
      "id": "L2",
      "title": "Internet security threats",
      "question": "(a) Explain three social engineering attacks and three malware types. (b) Compare a virus and a worm. (c) Explain 2FA, firewalls and digital certificates. [20 marks]",
      "answer": "Social engineering: phishing uses fraudulent messages to steal information; pretexting uses a false story or identity; baiting offers something attractive to trick users. Malware: a virus attaches to a host file; a worm spreads automatically as standalone code; a Trojan pretends to be legitimate software. A virus requires a host file to spread, whereas a worm can self-replicate across networks. 2FA requires two different authentication factors, limiting misuse of stolen passwords. Firewalls filter network traffic and block unauthorised connections. Digital certificates bind public keys to identities and help authenticate HTTPS websites.",
      "keywords": [
        "phishing",
        "pretexting",
        "baiting",
        "virus",
        "worm",
        "trojan",
        "2fa",
        "firewall",
        "certificate"
      ],
      "guide": "Follow marks: 6 examples + mechanisms → virus/worm distinction → 3 controls and threats mitigated.",
      "flow": "Human attacks → malicious code → replication difference → defences.",
      "variants": [
        "Analyse a fake hospital email that tricks staff into installing a Trojan and recommend three defences.",
        "Explain how phishing, worms and ransomware differ, then recommend authentication, network and identity protections."
      ]
    },
    {
      "id": "L3",
      "title": "HTML & CSS assessment table",
      "question": "Create an HTML page with an Assessment Schedule table, headings, three data rows, external CSS and visual priority styling. Explain the tags and styles used. [20 marks]",
      "answer": "HTML example:\n<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Schedule</title><link rel=\"stylesheet\" href=\"style.css\"></head>\n<body><h1>Assessment Schedule</h1><table><tr><th>Assessment</th><th>Weightage</th><th>Due Date</th><th>Priority</th></tr><tr class=\"urgent\"><td>Web Page</td><td>10%</td><td>22 May</td><td>Urgent</td></tr><tr><td>Viva</td><td>20%</td><td>Week 10</td><td>High</td></tr><tr><td>Final Exam</td><td>40%</td><td>12 June</td><td>Revision</td></tr></table></body></html>\nCSS example:\nbody { font-family: Arial, sans-serif; margin: 20px; }\ntable { width: 100%; border-collapse: collapse; }\nth, td { padding: 10px; border: 1px solid #ddd; }\n.urgent { background: #ffe5e5; color: #a00000; }\nHTML structures the content using table, tr, th and td. CSS controls spacing, borders, colour and priority emphasis.",
      "keywords": [
        "html",
        "head",
        "body",
        "table",
        "tr",
        "th",
        "td",
        "css",
        "padding",
        "border"
      ],
      "guide": "Write valid HTML first; link stylesheet in head; use table rows and cells; add CSS for layout and priority.",
      "flow": "HTML structure → table headers/rows → CSS rules → explain styling.",
      "variants": [
        "Build a weekly timetable with columns Day, Time, Class and Location; highlight urgent events using CSS.",
        "Create an HTML booking summary table with Patient, Service, Date and Status, styled with an external CSS file."
      ]
    },
    {
      "id": "L4",
      "title": "University UML",
      "question": "Draw a UML class diagram with University, Program, Course, Student, InternalCourse and OnlineCourse, including attributes, multiplicities and inheritance. [20 marks]",
      "answer": "Classes: University(name:String); Program(name:String, programID:int); Course(name:String, courseID:int); Student(name:String); InternalCourse(campus:String, courseType:String); OnlineCourse(sessions:int). Associations: University [1] — [1..*] Program; Program [1] — [1..*] Course; Program [1] — [12..120] Student. Generalisation: InternalCourse → Course and OnlineCourse → Course; hollow triangle points to Course. Assumptions: each Program belongs to one University and each Course belongs to one Program (unless clarified otherwise). Multiplicity near a class counts instances of that class linked to ONE instance at the opposite end.",
      "keywords": [
        "university",
        "program",
        "course",
        "student",
        "internalcourse",
        "onlinecourse",
        "12..120",
        "inheritance",
        "1..*"
      ],
      "guide": "6 classes → attributes/types → associations → ask each direction → hollow triangle to parent → assumptions.",
      "flow": "One University has 1..* Programs; one Student belongs to 1 Program; one Program has 12..120 Students.",
      "variants": [
        "Draw the six-class Library UML diagram using the full requirements shown above. [20 marks]",
        "Draw the six-class School UML diagram using the full requirements shown above. [20 marks]"
      ],
      "scenario": "UML REQUIREMENTS – UNIVERSITY (original exam-style task)\nDraw a UML Class Diagram with exactly six entities: Course, Program, InternalCourse, University, OnlineCourse, Student.\n• InternalCourse and OnlineCourse are types of Course.\n• A Program has one or more Courses. A University consists of one or more Programs.\n• A Student is enrolled in exactly one Program. Each Program has at least 12 and at most 120 Students.\n• Course: name, courseID. Program: name, programID.\n• OnlineCourse: number of sessions. InternalCourse: campus and course type (word).\n• University and Student: name.\nList assumptions. Show attributes, relationships, cardinalities and correct inheritance notation.",
      "variantScenarios": [
        "UML REQUIREMENTS – LIBRARY (practice)\nDraw exactly six classes: Library, Section, Book, Member, PrintedBook, EBook. PrintedBook and EBook are types of Book. A Library has one or more Sections. A Section contains 1..* Books. Each Member belongs to exactly one Library; each Library has between 5 and 300 Members. Book has title:String and bookID:int; Section has sectionName:String and sectionID:int; Library has name:String; Member has name:String and memberID:int; PrintedBook has shelf:String; EBook has fileFormat:String. State assumptions for reverse multiplicities.",
        "UML REQUIREMENTS – SCHOOL (practice)\nDraw exactly six classes: School, ClassGroup, Lesson, Student, OnlineLesson, CampusLesson. OnlineLesson and CampusLesson are types of Lesson. Each School has 1..* ClassGroups; each ClassGroup includes 1..* Lessons. Each Student is enrolled in exactly one ClassGroup; each ClassGroup has 10..30 Students. School and Student have name:String; ClassGroup has name:String and groupID:int; Lesson has title:String and lessonID:int; OnlineLesson has sessions:int; CampusLesson has room:String. State assumptions."
      ],
      "variantAnswers": [
        "Classes: Library(name), Section(sectionName, sectionID), Book(title, bookID), Member(name, memberID), PrintedBook(shelf), EBook(fileFormat). PrintedBook and EBook generalise to Book (hollow triangle toward Book). Associations: Library [1] — [1..*] Section; Section [1] — [1..*] Book; Library [1] — [5..300] Member. Assumptions: one Section belongs to one Library; one Book belongs to one Section.",
        "Classes: School(name), ClassGroup(name, groupID), Lesson(title, lessonID), Student(name), OnlineLesson(sessions), CampusLesson(room). OnlineLesson and CampusLesson generalise to Lesson. Associations: School [1] — [1..*] ClassGroup; ClassGroup [1] — [1..*] Lesson; ClassGroup [1] — [10..30] Student. Assumptions: each ClassGroup belongs to one School; each Lesson belongs to one ClassGroup."
      ]
    },
    {
      "id": "L5",
      "title": "GoodHealth UML",
      "question": "Draw a UML class diagram for Patients, AppointmentBookings, Doctors, HealthPractitioners, Physiotherapists and MedicalServices. Include attributes, cardinalities, inheritance and assumptions. [20 marks]",
      "answer": "Classes: Patients(name:String, patientID:int); AppointmentBookings(bookingID:int, date:Date, time:Time, duration:int); HealthPractitioners(name:String, practitionerID:int); MedicalServices(serviceID:int, description:String, requirements:String); Doctors and Physiotherapists inherit from HealthPractitioners. Associations: Patients [1] — [1..*] AppointmentBookings (assuming each booking belongs to exactly one patient); AppointmentBookings [0..*] — [1..2] MedicalServices (assuming a service can appear in zero or more bookings); HealthPractitioners [1..*] — [1..*] MedicalServices (assuming each service has at least one practitioner). Inheritance triangles point from Doctors and Physiotherapists to HealthPractitioners. These reverse multiplicities are assumptions, not stated facts.",
      "keywords": [
        "patients",
        "appointmentbookings",
        "doctors",
        "healthpractitioners",
        "physiotherapists",
        "medicalservices",
        "1..2",
        "1..*",
        "assumption"
      ],
      "guide": "Identify six classes → list attributes → underline quantities → ask BOTH directions → identify is-a → write assumptions.",
      "flow": "Patient→Bookings 1..*; Booking→Services 1..2; Practitioner→Services 1..*; subclass→parent.",
      "variants": [
        "Draw the six-class VetCare UML diagram using the full requirements shown above. [20 marks]",
        "Draw the six-class Salon UML diagram using the full requirements shown above. [20 marks]"
      ],
      "scenario": "UML REQUIREMENTS – GOODHEALTH (original practice)\nDraw exactly six classes: Patients, AppointmentBookings, Doctors, HealthPractitioners, Physiotherapists, MedicalServices.\n• Doctors and Physiotherapists are types of HealthPractitioners.\n• A Patient can make one or more AppointmentBookings.\n• An AppointmentBooking can include at least 1 and at most 2 MedicalServices.\n• HealthPractitioners offer one or more MedicalServices.\n• Patient: name, patientID. HealthPractitioner: name, practitionerID.\n• MedicalServices: serviceID, description, requirements.\n• AppointmentBooking: bookingID, date, time, duration.\nList any assumptions you make, especially multiplicities not stated for the reverse direction.",
      "variantScenarios": [
        "UML REQUIREMENTS – VETCARE (practice)\nDraw exactly six classes: PetOwners, VisitBookings, Veterinarians, Practitioners, Nurses, Services. Veterinarians and Nurses are types of Practitioners. Each PetOwner makes 1..* VisitBookings. Each VisitBooking includes 1..3 Services. Each Practitioner offers 1..* Services. PetOwners: name, ownerID; Practitioners: name, practitionerID; VisitBookings: bookingID, date, duration; Services: serviceID, description, requirements. State reverse-side assumptions.",
        "UML REQUIREMENTS – SALON (practice)\nDraw exactly six classes: Customers, Appointments, Hairdressers, Staff, Therapists, Treatments. Hairdressers and Therapists are types of Staff. Each Customer can make 0..* Appointments. Each Appointment includes 1..2 Treatments. Each Staff member offers 1..* Treatments. Customers: name, customerID; Staff: name, staffID; Appointments: appointmentID, date, time; Treatments: treatmentID, description, price. State reverse-side assumptions."
      ],
      "variantAnswers": [
        "PetOwners(name, ownerID), VisitBookings(bookingID,date,duration), Practitioners(name,practitionerID), Services(serviceID,description,requirements), Veterinarians and Nurses. Inheritance: Veterinarians/Nurses → Practitioners. Associations: PetOwners [1] — [1..*] VisitBookings; VisitBookings [0..*] — [1..3] Services; Practitioners [1..*] — [1..*] Services. Reverse-side multiplicities are assumptions.",
        "Customers(name,customerID), Appointments(appointmentID,date,time), Staff(name,staffID), Treatments(treatmentID,description,price), Hairdressers and Therapists. Inheritance: Hairdressers/Therapists → Staff. Associations: Customers [1] — [0..*] Appointments; Appointments [0..*] — [1..2] Treatments; Staff [1..*] — [1..*] Treatments. Reverse-side multiplicities are assumptions."
      ]
    },
    {
      "id": "L6",
      "title": "GoodHealth Case Study – Question 1 (a, b, c)",
      "question": "Question 1 – Read the case study and answer ALL parts:\n(a) Identify the key employees and describe their roles.\n(b) Identify the SDLC stages followed and explain each stage.\n(c) Identify the factors that made the project challenging and explain why.",
      "answer": "(a) Employees and roles\nManageWell project managers: Managed the project schedule and coordinated delivery, but lacked IT development expertise.\nTopSoftware developers: Built and integrated the booking website with existing patient databases.\nGoodHealth administration staff: Supplied requirements about medical services and practitioner availability.\nSenior software engineers/team members: Reported incomplete integration testing and that more than 20 concurrent users had not been handled successfully.\nGoodHealth security officer: Reviewed security readiness and recommended against signing the Authority to Operate because 50% of controls were untested.\nPatients: Affected end users, not employees; mention separately only if the question asks for all stakeholders.\n\n(b) SDLC stages\nPlanning: Define goals, scope, budget and timeline. ManageWell coordinated the schedule poorly.\nAnalysis: Gather requirements. GoodHealth administration staff provided service and practitioner availability needs, but final requirements were unclear.\nDesign: Plan architecture, database and interface. The case does not describe design work in detail.\nDevelopment: Build and integrate the website. TopSoftware integrated the site with existing patient databases.\nTesting: Check functionality, integration, performance and security. Final integration tests were incomplete, 20 concurrent users had not been successfully exceeded, and 50% of security controls were untested.\nDeployment: Release the system. It launched despite warnings and went offline within hours.\nMaintenance: Fix and improve after release. The case does not describe maintenance actions.\n\n(c) Challenges\nPoor communication: Final service and practitioner-availability requirements were not communicated clearly, risking incorrect implementation.\nUnrealistic deadline: Fewer than three months were available for development and testing, encouraging rushed work.\nWeak project management: ManageWell lacked IT system-development expertise and failed to manage the schedule.\nIncomplete integration testing: The final integration test would not finish before launch, so components could fail together.\nPoor performance readiness: The system had not successfully handled more than 20 concurrent users, leading to slow responses and outages.\nSecurity uncertainty: 50% of security controls were untested, so patient personal information might not be adequately protected.\nIgnored warnings: Management launched despite engineering and security objections.\nImprovements: Agree and document requirements, use realistic milestones, finish integration/load/security tests and delay launch until critical issues are resolved.",
      "keywords": [
        "managewell",
        "topsoftware",
        "administration",
        "engineers",
        "security officer",
        "patients",
        "planning",
        "analysis",
        "design",
        "development",
        "testing",
        "deployment",
        "maintenance",
        "20",
        "50%",
        "communication",
        "deadline",
        "warnings",
        "improve"
      ],
      "guide": "Answer each part separately: (a) Person → role → evidence. (b) Phase → purpose → case evidence. (c) Problem → evidence → impact.",
      "flow": "Read case → highlight PEOPLE / STAGES / PROBLEMS → answer (a), (b), (c).",
      "variants": [
        "QuickCart – Answer ALL three parts (a) stakeholders, (b) SDLC stages, (c) challenges and impacts.",
        "UniEnroll – Answer ALL three parts (a) stakeholders, (b) SDLC stages, (c) challenges and impacts."
      ],
      "scenario": "GOODHEALTH – ORIGINAL CASE STUDY (provided for practice)\n\nA new hospital, GoodHealth, is about to launch an online patient booking system. When prospective patients try to access the newly launched website, response times are slow, screens freeze, and the site goes offline within hours.\n\nTwo contractors are involved. TopSoftware is responsible for integrating the website with existing patient-management databases, but it does not manage the project. ManageWell leads project management. TopSoftware may have produced sloppy code to meet unrealistic deadlines.\n\nGoodHealth administration staff need the system to reflect medical services and doctors’/physiotherapists’ availability. Final requirements were not communicated well. Developers have fewer than three months to develop and test before go-live. ManageWell lacks expertise in IT system development and cannot manage the schedule. Three months before launch, an internal email warns that development is far off track and the system does not work.\n\nA senior software engineer says the final integration test will not finish before launch. Another senior team member reports the system has not successfully handled more than 20 concurrent users. The security officer recommends against the Authority to Operate because 50% of security controls have not been tested, leaving protection of personally identifiable information uncertain. ManageWell repeatedly claims the website will be ready. It launches on schedule but is not ready.",
      "variantScenarios": [
        "CASE STUDY – QuickCart online shopping\nQuickCart is launching an online store. BrightCode developers build checkout and connect the inventory database. PlanFast project managers manage delivery, but have little e-commerce experience. Warehouse staff say the final stock and delivery rules were never agreed. Developers have only eight weeks. A QA engineer warns that payment integration tests are unfinished; load tests fail with 35 simultaneous customers. A security analyst reports that access controls have not been fully tested. Managers launch anyway. Customers encounter failed payments, incorrect stock information and an outage on launch day.",
        "CASE STUDY – UniEnroll student portal\nA university launches a new student-enrolment portal. CampusTech developers build enrolment pages and connect student records. LeadTrack project managers control the schedule. Enrolment officers provide course and prerequisite rules, but their updated rules arrive late. Students are end users. Two weeks before launch, an engineer reports the portal cannot support more than 50 simultaneous students. The final database integration test is incomplete. The privacy officer says access permissions have not been verified. Leadership decides to launch. Students experience timeouts, incorrect course selections and privacy concerns."
      ],
      "variantAnswers": [
        "PlanFast project managers: schedule and coordination, despite limited e-commerce experience. BrightCode developers: checkout implementation and inventory integration. Warehouse staff: stock and delivery requirements. QA engineer: unfinished payment integration testing. Security analyst: untested access controls. Customers: affected end users, not employees.",
        "LeadTrack project managers: delivery schedule. CampusTech developers: enrolment pages and student-record integration. Enrolment officers: course/prerequisite requirements. Engineer: performance warning (50 simultaneous students). Privacy officer: access permissions and privacy. Students: affected end users, not employees."
      ],
      "parts": [
        {
          "label": "(a) Employees and roles",
          "question": "Question 1 – Read the case study and answer ALL parts:\n(a) Identify the key employees and describe their roles.\n(b) Identify the SDLC stages followed and explain each stage.\n(c) Identify the factors that made the project challenging and explain why.",
          "answer": "ManageWell project managers: Managed the project schedule and coordinated delivery, but lacked IT development expertise.\nTopSoftware developers: Built and integrated the booking website with existing patient databases.\nGoodHealth administration staff: Supplied requirements about medical services and practitioner availability.\nSenior software engineers/team members: Reported incomplete integration testing and that more than 20 concurrent users had not been handled successfully.\nGoodHealth security officer: Reviewed security readiness and recommended against signing the Authority to Operate because 50% of controls were untested.\nPatients: Affected end users, not employees; mention separately only if the question asks for all stakeholders.",
          "keywords": [
            "managewell",
            "topsoftware",
            "administration",
            "engineers",
            "security officer",
            "patients"
          ],
          "marks": 6,
          "variantAnswers": [
            "PlanFast project managers: schedule and coordination, despite limited e-commerce experience. BrightCode developers: checkout implementation and inventory integration. Warehouse staff: stock and delivery requirements. QA engineer: unfinished payment integration testing. Security analyst: untested access controls. Customers: affected end users, not employees.",
            "LeadTrack project managers: delivery schedule. CampusTech developers: enrolment pages and student-record integration. Enrolment officers: course/prerequisite requirements. Engineer: performance warning (50 simultaneous students). Privacy officer: access permissions and privacy. Students: affected end users, not employees."
          ]
        },
        {
          "label": "(b) SDLC stages",
          "question": "Question 1(b). Identify the stages of the SDLC (Systems Development Life Cycle) followed in the GoodHealth case study. Explain each stage. [Long Answer]",
          "answer": "Planning: Define goals, scope, budget and timeline. ManageWell coordinated the schedule poorly.\nAnalysis: Gather requirements. GoodHealth administration staff provided service and practitioner availability needs, but final requirements were unclear.\nDesign: Plan architecture, database and interface. The case does not describe design work in detail.\nDevelopment: Build and integrate the website. TopSoftware integrated the site with existing patient databases.\nTesting: Check functionality, integration, performance and security. Final integration tests were incomplete, 20 concurrent users had not been successfully exceeded, and 50% of security controls were untested.\nDeployment: Release the system. It launched despite warnings and went offline within hours.\nMaintenance: Fix and improve after release. The case does not describe maintenance actions.",
          "keywords": [
            "planning",
            "analysis",
            "design",
            "development",
            "testing",
            "deployment",
            "maintenance",
            "20",
            "50%"
          ],
          "marks": 7,
          "variantAnswers": [
            "Planning: PlanFast set an eight-week schedule. Analysis: warehouse stock and delivery rules were not finalised. Design: not described. Development: BrightCode built checkout and inventory integration. Testing: payment integration unfinished, load testing failed at 35 simultaneous users, access controls untested. Deployment: store launched and failed. Maintenance: not described.",
            "Planning: LeadTrack managed timeline. Analysis: enrolment officers updated course/prerequisite requirements late. Design: not described. Development: CampusTech built portal and integrated student records. Testing: database integration incomplete, load capacity only 50 simultaneous students, access permissions unverified. Deployment: portal launched with timeouts and incorrect selections. Maintenance: not described."
          ]
        },
        {
          "label": "(c) Challenges",
          "question": "Question 1(c). Identify the factors that made the GoodHealth information systems development project challenging. Explain why. [Long Answer]",
          "answer": "Poor communication: Final service and practitioner-availability requirements were not communicated clearly, risking incorrect implementation.\nUnrealistic deadline: Fewer than three months were available for development and testing, encouraging rushed work.\nWeak project management: ManageWell lacked IT system-development expertise and failed to manage the schedule.\nIncomplete integration testing: The final integration test would not finish before launch, so components could fail together.\nPoor performance readiness: The system had not successfully handled more than 20 concurrent users, leading to slow responses and outages.\nSecurity uncertainty: 50% of security controls were untested, so patient personal information might not be adequately protected.\nIgnored warnings: Management launched despite engineering and security objections.\nImprovements: Agree and document requirements, use realistic milestones, finish integration/load/security tests and delay launch until critical issues are resolved.",
          "keywords": [
            "communication",
            "deadline",
            "managewell",
            "testing",
            "20",
            "50%",
            "warnings",
            "improve"
          ],
          "marks": 7,
          "variantAnswers": [
            "Unclear requirements: warehouse rules not agreed, causing wrong stock/delivery behaviour. Eight-week deadline: insufficient time. Weak project leadership: PlanFast lacked experience. Incomplete integration testing: payments failed. Load-test failure: 35 concurrent users caused errors. Security: access controls not fully tested. Ignored warnings: launched despite known risks. Improvements: freeze/validate critical rules, finish tests, set go/no-go criteria, postpone launch.",
            "Late requirement changes: enrolment rules arrived late, causing wrong selections. Weak scheduling and coordination: launch despite unfinished work. Integration risk: student-record integration incomplete. Capacity: failed above 50 simultaneous students, causing timeouts. Privacy: access permissions unverified. Ignored warnings: launch proceeded. Improvements: confirm prerequisites, finish integration/load/privacy testing, use acceptance criteria, delay go-live."
          ]
        }
      ]
    },
    {
      "id": "L9",
      "title": "Client–server web journey",
      "question": "Explain the client–server request/response process, including DNS, HTTP/HTTPS and the distinction between client-side and server-side processing. [Long answer]",
      "answer": "The client is the user’s browser; the server provides resources and services. The user enters a URL, and DNS resolves the domain name to an IP address. The browser connects and sends an HTTP/HTTPS request. The server processes the request and sends an HTTP response with content or status. The browser renders HTML/CSS and executes client-side JavaScript for interactions. Server-side code handles authentication, business rules and database access. For GoodHealth, the browser validates booking form fields, while the server checks appointment availability and saves the booking. HTTPS encrypts data in transit using TLS.",
      "keywords": [
        "client",
        "server",
        "dns",
        "ip",
        "request",
        "response",
        "browser",
        "javascript",
        "database",
        "https"
      ],
      "guide": "Describe steps in order → distinguish browser vs server work → give hospital example → security.",
      "flow": "URL → DNS → IP → HTTP request → server → HTTP response → render.",
      "variants": [
        "Describe what happens when a student opens an online learning portal and logs in.",
        "Explain the client/server journey for booking a medical appointment and identify client-side vs server-side tasks."
      ]
    }
  ]
};