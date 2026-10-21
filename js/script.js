const titlesByLanguage = {
  en: ["Front-End Developer", "Web Developer"],
  ar: ["مطور واجهات أمامية", "مطور ويب"]
};
let language = localStorage.getItem("portfolio-language") || "en";
let titles = titlesByLanguage[language];
const titleElement = document.querySelector(".typing-text");
let titleIndex = 0;
let letterIndex = titleElement ? titles[0].length : 0;
let removingLetters = true;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const translations = {
  "Open navigation": "فتح القائمة",
  "Close navigation": "إغلاق القائمة",
  "Home": "الرئيسية",
  "Front-End Developer portfolio": "ملف مطور الواجهات الأمامية",
  "Projects": "المشاريع",
  "Selected work and outcomes": "أعمال مختارة ونتائجها",
  "Experience": "الخبرات",
  "Training and professional roles": "التدريب والخبرات المهنية",
  "BUSINESS INFORMATION SYSTEMS": "نظم معلومات الأعمال",
  "Front-End Developer": "مطور واجهات أمامية",
  "Web Developer": "مطور ويب",
  "I build responsive, accessible web experiences and turn designs into clear, reliable interfaces. My Business Information Systems background helps me understand the needs behind the products I create.": "أبني تجارب ويب متجاوبة وسهلة الوصول، وأحوّل التصاميم إلى واجهات واضحة وموثوقة. تساعدني خلفيتي في نظم معلومات الأعمال على فهم احتياجات المنتجات التي أطورها.",
  "Education": "التعليم",
  "BIS degree and achievements": "درجة نظم المعلومات والإنجازات",
  "Skills": "المهارات",
  "Business, technical, and tools": "الأعمال والتقنية والأدوات",
  "About": "نبذة عني",
  "Profile and approach": "الملف الشخصي والنهج",
  "Contact": "تواصل معي",
  "Start a conversation": "ابدأ محادثة",
  "Light mode": "الوضع الفاتح",
  "Dark mode": "الوضع الداكن",
  "SKILLS & TOOLS": "المهارات والأدوات",
  "LET'S CONNECT": "لنتواصل",
  "Have a project in mind?": "هل لديك مشروع؟",
  "Let's talk.": "لنتحدث.",
  "Back to top ↑": "العودة إلى الأعلى ↑",
  "Switch to light mode": "التبديل إلى الوضع الفاتح",
  "Switch to dark mode": "التبديل إلى الوضع الداكن",
  "Switch language to Arabic": "تغيير اللغة إلى العربية",
  "Switch language to English": "Change language to English",
  "FRONT-END DEVELOPER": "مطور واجهات أمامية",
  "CAIRO, EGYPT": "القاهرة، مصر",
  "Hey, I'm": "مرحبًا، أنا",
  "I am a": "أنا",
  "Explore my projects": "استكشف مشاريعي",
  "Contact me": "تواصل معي",
  "SELECTED WORK": "أعمال مختارة",
  "Projects with": "مشاريع لها",
  "purpose.": "هدف.",
  "A closer look at the ideas, interfaces, and teams I've had the chance to work with.": "نظرة أقرب على الأفكار والواجهات والفرق التي أتيحت لي فرصة العمل معها.",
  "GRADUATION PROJECT": "مشروع التخرج",
  "Smart Insurance Broker Platform": "منصة ذكية لوساطة التأمين",
  "Coverly is a smart insurance broker platform that helps users explore, compare, and manage insurance policies from multiple providers in one place.": "Coverly منصة ذكية لوساطة التأمين تساعد المستخدمين على استكشاف وثائق التأمين ومقارنتها وإدارتها من مزودين مختلفين في مكان واحد.",
  "Compare health, motor, life & property plans": "مقارنة خطط التأمين الصحي والسيارات والحياة والممتلكات",
  "Policy management and claims tracking": "إدارة الوثائق ومتابعة المطالبات",
  "AI-powered recommendations and support": "توصيات ومساعدة مدعومة بالذكاء الاصطناعي",
  "A more accessible, transparent experience": "تجربة أكثر سهولة وشفافية",
  "MY CONTRIBUTION": "مساهمتي",
  "My graduation project, completed with an A+ grade, where I contributed to system analysis, business requirements, solution design, and the technical implementation.": "مشروع تخرجي الذي حصل على تقدير A+، وساهمت فيه بتحليل النظام وتحديد متطلبات الأعمال وتصميم الحل والتنفيذ التقني.",
  "View project": "عرض المشروع",
  "PLATFORM PREVIEW": "معاينة المنصة",
  "COVERLY WEBSITE RECORDING": "تسجيل موقع Coverly",
  "CONCEPT PREVIEW": "معاينة تصورية",
  "Coverly insurance platform": "منصة تأمين Coverly",
  "Coverly graduation project presentation": "عرض تقديمي لمشروع تخرج Coverly",
  "Coverly website walkthrough": "استعراض موقع Coverly",
  "SCCI identity": "هوية SCCI",
  "REPLACE WITH PROJECT SCREENSHOT": "استبدلها بصورة من المشروع",
  "UNOFFICIAL PLACEHOLDER": "عنصر تجريبي غير رسمي",
  "COMMUNITY PLATFORM": "منصة مجتمعية",
  "Student Activity Platform": "منصة الأنشطة الطلابية",
  "The SCCI Student Activity Platform provides a centralized digital experience for student activities, events, and community engagement.": "توفر منصة الأنشطة الطلابية في SCCI تجربة رقمية موحدة للأنشطة والفعاليات والمشاركة المجتمعية.",
  "Student activities and event discovery": "استكشاف الأنشطة والفعاليات الطلابية",
  "Workshops and community engagement": "ورش العمل والمشاركة المجتمعية",
  "Responsive, accessible interfaces": "واجهات متجاوبة وسهلة الوصول",
  "Usability improvements and tested flows": "تحسين سهولة الاستخدام واختبار مسارات العمل",
  "As a Web Developer, I worked on responsive user interfaces, platform features, usability improvements, testing, debugging, and collaboration with the team.": "عملت كمطور ويب على واجهات متجاوبة وميزات المنصة وتحسين سهولة الاستخدام والاختبار وتصحيح الأخطاء والتعاون مع الفريق.",
  "STUDENT CONFERENCE ON COMMUNICATION AND INFORMATION": "مؤتمر الطلاب للاتصالات والمعلومات",
  "SCCI welcome page": "الصفحة الترحيبية لـ SCCI",
  "Mohamed Ahmed · Third-year BIS student · SCCI IT member": "محمد أحمد · طالب نظم معلومات أعمال بالفرقة الثالثة · عضو تقنية المعلومات في SCCI",
  "About SCCI": "عن SCCI",
  "Workshop programs": "برامج ورش العمل",
  "Technical and soft skills": "المهارات التقنية والشخصية",
  "Sessions and community": "الجلسات والمجتمع",
  "Student sessions": "جلسات الطلاب",
  "Community events": "الفعاليات المجتمعية",
  "Contact page": "صفحة التواصل",
  "Event closing": "ختام الفعالية",
  "SCCI WEBSITE, WORKSHOPS, SESSIONS & COMMUNITY": "موقع SCCI وورش العمل والجلسات والأنشطة المجتمعية",
  "Download CV": "تحميل السيرة الذاتية",
  "OCT 2025 — JUL 2026": "أكتوبر ٢٠٢٥ — يوليو ٢٠٢٦",
  "PROFESSIONAL EXPERIENCE": "الخبرة المهنية",
  "Head of Instructors": "رئيس المدربين",
  "· SCCI Student Activity": "· النشاط الطلابي SCCI",
  "Designed and delivered training programs to prepare team members as instructors and workshop facilitators.": "صممت وقدمت برامج تدريبية لإعداد أعضاء الفريق كمدربين وميسرين لورش العمل.",
  "Mentored instructors in content creation, presentation techniques, and knowledge delivery.": "أرشدت المدربين في إعداد المحتوى وأساليب العرض ونقل المعرفة.",
  "Coached team members in communication, public speaking, presentation, and audience engagement.": "دربت أعضاء الفريق على التواصل والتحدث أمام الجمهور والعرض والتفاعل مع الحضور.",
  "Supervised training sessions, workshops, and educational events.": "أشرفت على الجلسات التدريبية وورش العمل والفعاليات التعليمية.",
  "Reviewed technical workshop content in Web Development, Data Analysis, Digital Marketing, Entrepreneurship, and Embedded Systems.": "راجعت محتوى ورش تقنية في تطوير الويب وتحليل البيانات والتسويق الرقمي وريادة الأعمال والأنظمة المدمجة.",
  "INTERNSHIP": "تدريب عملي",
  "AUG 2025": "أغسطس ٢٠٢٥",
  "AUG 2026": "أغسطس ٢٠٢٦",
  "AUG 2024": "أغسطس ٢٠٢٤",
  "OCT 2023": "أكتوبر ٢٠٢٣",
  "OCT 2022 — JUN 2026": "أكتوبر ٢٠٢٢ — يونيو ٢٠٢٦",
  "Summer Intern": "متدرب صيفي",
  "· CIB Bank, The Green Leap Program": "· بنك CIB، برنامج Green Leap",
  "Explored banking operations and sustainability initiatives through the summer program.": "تعرفت على العمليات المصرفية ومبادرات الاستدامة من خلال البرنامج الصيفي.",
  "Built professional, communication, and teamwork skills through training and practical activities.": "طورت مهاراتي المهنية والتواصل والعمل الجماعي عبر التدريب والأنشطة العملية.",
  "Customer Service Intern": "متدرب خدمة عملاء",
  "· Banque Misr": "· بنك مصر",
  "Assisted customers with inquiries and learned about banking products and services.": "ساعدت العملاء في استفساراتهم وتعرفت على المنتجات والخدمات المصرفية.",
  "Developed communication, problem-solving, and customer service skills in a professional banking environment.": "طورت مهارات التواصل وحل المشكلات وخدمة العملاء في بيئة مصرفية احترافية.",
  "Completed workshops in entrepreneurship, personal branding, and financial independence.": "أكملت ورش عمل في ريادة الأعمال وبناء العلامة الشخصية والاستقلال المالي.",
  "Developed business awareness and professional communication through practical activities.": "طورت الوعي بالأعمال والتواصل المهني من خلال الأنشطة العملية.",
  "· Mint-EG Bank": "· بنك Mint-EG",
  "EXPERIENCE": "الخبرات",
  "EDUCATION": "التعليم",
  "Bachelor of Commerce": "بكالوريوس تجارة",
  "· Business Information Systems": "· نظم معلومات الأعمال",
  "Capital University (Helwan)": "جامعة العاصمة (حلوان)",
  "GPA 3.76": "المعدل التراكمي 3.76",
  "A+ graduation project": "مشروع تخرج بتقدير A+",
  "VOLUNTEERING": "التطوع",
  "EVENT ORGANIZATION": "تنظيم الفعاليات",
  "TECHNOVATE Summit": "قمة TECHNOVATE",
  "Enactus Career Summit": "قمة Enactus المهنية",
  "iCareer Event": "فعالية iCareer",
  "Event organization · InterContinental Cairo Citystars": "تنظيم فعالية · إنتركونتيننتال القاهرة سيتي ستارز",
  "Event organization · Greek Campus": "تنظيم فعالية · جريك كامبس",
  "What I work with": "مجالات عملي",
  "Technical Skills": "المهارات التقنية",
  "Basic React.js and Angular.js": "أساسيات React.js وAngular.js",
  "Responsive Design": "التصميم المتجاوب",
  "UI Implementation": "تنفيذ واجهات المستخدم",
  "Testing and Debugging": "الاختبار وتصحيح الأخطاء",
  "Business & Analysis": "الأعمال والتحليل",
  "Business analysis fundamentals": "أساسيات تحليل الأعمال",
  "Requirements gathering": "جمع المتطلبات",
  "Process understanding": "فهم العمليات",
  "Problem-solving": "حل المشكلات",
  "Business Knowledge": "المعرفة بالأعمال",
  "Entrepreneurship": "ريادة الأعمال",
  "Financial literacy": "الثقافة المالية",
  "Personal branding": "العلامة الشخصية",
  "Banking awareness": "المعرفة المصرفية",
  "Tools": "الأدوات",
  "Browser Developer Tools": "أدوات المطور في المتصفح",
  "CCNA Study Topics": "موضوعات دراسة CCNA",
  "OSI and TCP/IP models": "نموذجا OSI وTCP/IP",
  "IPv4 and IPv6 addressing": "عنونة IPv4 وIPv6",
  "Subnetting": "تقسيم الشبكات الفرعية",
  "Ethernet and switching": "إيثرنت والتحويل",
  "Routing and VLANs": "التوجيه وشبكات VLAN",
  "DHCP, DNS, and NAT": "DHCP وDNS وNAT",
  "ACLs and network security": "قوائم التحكم بالوصول وأمن الشبكات",
  "Wireless networking and troubleshooting": "الشبكات اللاسلكية واستكشاف الأخطاء وإصلاحها",
  "A LITTLE ABOUT ME": "نبذة عني",
  "Curious by nature.": "فضولي بطبيعتي.",
  "Developer by choice.": "ومطور باختياري.",
  "I'm a Front-End Developer and Business Information Systems graduate from Capital University (Helwan), where I earned an A+ cumulative GPA and an A+ graduation-project grade. I create responsive, user-friendly interfaces with a strong understanding of business needs, requirements, and the value technology can deliver.": "أنا مطور واجهات أمامية وخريج نظم معلومات الأعمال من جامعة العاصمة (حلوان)، حيث حصلت على معدل تراكمي A+ وتقدير A+ في مشروع التخرج. أصمم واجهات متجاوبة وسهلة الاستخدام، مع فهم قوي لاحتياجات الأعمال والمتطلبات والقيمة التي يمكن للتقنية تحقيقها.",
  "DESIGN-MINDED. DETAIL-DRIVEN.": "أهتم بالتصميم. وأركز على التفاصيل.",
  "Cairo, Egypt": "القاهرة، مصر",
  "Made with care": "صُنع بعناية",
  "BACK TO TOP": "العودة إلى الأعلى",
  "Building capability.": "أبني قدراتي.",
  "Delivering with purpose.": "وأحقق أثرًا هادفًا.",
  "04 EDUCATION": "04 التعليم",
  "Business Information": "نظم معلومات",
  "Systems.": "الأعمال.",
  "Academic foundation in business, information systems, and technology-led problem solving.": "أساس أكاديمي في الأعمال ونظم المعلومات وحل المشكلات بالتكنولوجيا.",
  "Cumulative GPA grade": "التقدير التراكمي",
  "Graduation project: A+": "مشروع التخرج: A+",
  "BIS": "نظم معلومات الأعمال",
  "Business Information Systems": "نظم معلومات الأعمال",
  "TECH TRACK": "المسار التقني",
  "PROFESSIONAL TRAINING": "تدريب مهني",
  "Digitera Program": "برنامج Digitera",
  "· Tech Track": "· المسار التقني",
  "Organized by iCareer in partnership with Plan International Egypt under the Ready for Tomorrow program.": "نظمته iCareer بالشراكة مع Plan International Egypt ضمن برنامج Ready for Tomorrow.",
  "Completed the Digitera Program – Tech Track, gaining practical experience in Agile methodologies, PRD and BRD documentation, requirements analysis, user stories, Jira, sprint planning, backlog management, Git, GitHub, pull requests, code reviews, AI-assisted coding, debugging, and team-based project delivery.": "أكملت برنامج Digitera – المسار التقني، واكتسبت خبرة عملية في منهجيات Agile، وإعداد وثائق PRD وBRD، وتحليل المتطلبات، وقصص المستخدم، وJira، وتخطيط السبرنتات، وإدارة قائمة الأعمال، وGit وGitHub، وطلبات الدمج، ومراجعة الشيفرات، والبرمجة بمساعدة الذكاء الاصطناعي، وتصحيح الأخطاء، وتسليم المشاريع ضمن فرق العمل.",
  "Skills & tools": "المهارات والأدوات",
  "Python": "بايثون",
  "Requirements gathering and analysis": "جمع المتطلبات وتحليلها",
  "Business processes": "عمليات الأعمال",
  "PRD and BRD documentation": "توثيق PRD وBRD",
  "User stories": "قصص المستخدم",
  "Banking and financial services": "الخدمات المصرفية والمالية",
  "Tools & Platforms": "الأدوات والمنصات",
  "Git and GitHub": "Git وGitHub",
  "Pull requests and code reviews": "طلبات الدمج ومراجعة الشيفرات",
  "AI-assisted coding tools": "أدوات البرمجة بمساعدة الذكاء الاصطناعي",
  "CCNA Fundamentals": "أساسيات CCNA",
  "Access control lists": "قوائم التحكم بالوصول",
  "Network Fundamentals": "أساسيات الشبكات",
  "OSI & TCP/IP Models": "نماذج OSI وTCP/IP",
  "IPv4/IPv6 Addressing & Subnetting": "عنونة IPv4 وIPv6 وتقسيم الشبكات الفرعية",
  "Switching & VLANs": "التحويل وشبكات VLAN",
  "Routing & OSPF": "التوجيه وOSPF",
  "Network Security & ACLs": "أمن الشبكات وقوائم ACL",
  "Wireless Networking": "الشبكات اللاسلكية",
  "DHCP, DNS & NAT": "DHCP وDNS وNAT",
  "Cisco IOS & CLI Commands": "أوامر Cisco IOS وCLI",
  "Network Troubleshooting": "استكشاف أخطاء الشبكات وإصلاحها",
  "Network Automation & Programmability": "أتمتة الشبكات وقابلية البرمجة",
  "Email: mohamedddd2710@gmail.com": "البريد الإلكتروني: mohamedddd2710@gmail.com"
};

const textNodes = [];
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (textWalker.nextNode()) {
  textNodes.push({ node: textWalker.currentNode, english: textWalker.currentNode.nodeValue });
}

const themeToggle = document.querySelector("#theme-toggle");
const languageToggle = document.querySelector("#language-toggle");
const sidebar = document.querySelector("#site-sidebar");
const sidebarToggle = document.querySelector("#sidebar-toggle");
const sidebarBackdrop = document.querySelector("#sidebar-backdrop");
const pageTitle = document.querySelector("title");
const pageDescription = document.querySelector('meta[name="description"]');

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);
  const isLight = theme === "light";
  themeToggle.setAttribute("aria-pressed", String(isLight));
  themeToggle.querySelector(".control-label").textContent = language === "ar"
    ? (isLight ? "الوضع الداكن" : "الوضع الفاتح")
    : (isLight ? "Dark mode" : "Light mode");
  themeToggle.setAttribute("aria-label", language === "ar"
    ? (isLight ? "التبديل إلى الوضع الداكن" : "التبديل إلى الوضع الفاتح")
    : (isLight ? "Switch to dark mode" : "Switch to light mode"));
}

function setLanguage(nextLanguage) {
  language = nextLanguage;
  const isArabic = language === "ar";
  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  localStorage.setItem("portfolio-language", language);

  textNodes.forEach(({ node, english }) => {
    const originalText = english.trim();
    const replacement = isArabic ? translations[originalText] : originalText;
    if (replacement !== undefined) {
      const leadingSpace = english.match(/^\s*/)[0];
      const trailingSpace = english.match(/\s*$/)[0];
      node.nodeValue = `${leadingSpace}${replacement}${trailingSpace}`;
    }
  });

  languageToggle.querySelector(".control-label").textContent = isArabic ? "English" : "العربية";
  languageToggle.setAttribute("aria-label", isArabic ? "Switch language to English" : "تغيير اللغة إلى العربية");
  pageTitle.textContent = isArabic
    ? "محمد أحمد عبد الوهاب | مطور واجهات أمامية"
    : "Mohamed Ahmed Abdelwahab | Front-End Developer";
  pageDescription.content = isArabic ? pageDescription.dataset.descriptionAr : pageDescription.dataset.descriptionEn;
  titles = titlesByLanguage[language];
  titleIndex = 0;
  letterIndex = titles[0].length;
  removingLetters = true;
  if (titleElement) {
    titleElement.textContent = titles[0];
    titleElement.setAttribute("aria-label", titles[0]);
  }
  document.querySelectorAll('[aria-label="Main navigation"], [aria-label="التنقل الرئيسي"]').forEach((navigation) => {
    navigation.setAttribute("aria-label", isArabic ? "التنقل الرئيسي" : "Main navigation");
  });
  sidebar.setAttribute("aria-label", isArabic ? "التنقل الرئيسي" : "Site navigation");
  updateSidebarToggleLabel();
  document.querySelectorAll('[aria-label="Social profiles"], [aria-label="حسابات التواصل الاجتماعي"]').forEach((profiles) => {
    profiles.setAttribute("aria-label", isArabic ? "حسابات التواصل الاجتماعي" : "Social profiles");
  });
  document.querySelectorAll('[aria-label="Coverly features"], [aria-label="مميزات Coverly"]').forEach((list) => {
    list.setAttribute("aria-label", isArabic ? "مميزات Coverly" : "Coverly features");
  });
  document.querySelectorAll('[aria-label="Student platform focus"], [aria-label="محاور منصة الطلاب"]').forEach((list) => {
    list.setAttribute("aria-label", isArabic ? "محاور منصة الطلاب" : "Student platform focus");
  });
  document.querySelectorAll("[data-label-en][data-label-ar]").forEach((element) => {
    element.setAttribute("aria-label", isArabic ? element.dataset.labelAr : element.dataset.labelEn);
  });
  setTheme(document.documentElement.dataset.theme || "dark");
}

themeToggle.addEventListener("click", () => {
  setTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light");
});

languageToggle.addEventListener("click", () => {
  setLanguage(language === "en" ? "ar" : "en");
});

setTheme(localStorage.getItem("portfolio-theme") || "dark");
setLanguage(language);

document.querySelectorAll("[data-media-slider]").forEach((slider) => {
  const track = slider.querySelector(".media-slider-track");
  const slides = [...slider.querySelectorAll(".media-slide")];
  const counter = slider.querySelector(".slider-count");
  const progress = slider.querySelector(".slider-progress span");
  let activeSlide = 0;
  let pointerStart = null;

  function showSlide(index) {
    activeSlide = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${activeSlide * 100}%)`;
    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeSlide;
      slide.setAttribute("aria-hidden", String(!isActive));
      slide.inert = !isActive;
      if (!isActive) {
        slide.querySelector("video")?.pause();
      }
    });
    counter.textContent = `${String(activeSlide + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    progress.style.transform = `scaleX(${(activeSlide + 1) / slides.length})`;
  }

  slider.querySelector("[data-slide-prev]").addEventListener("click", () => showSlide(activeSlide - 1));
  slider.querySelector("[data-slide-next]").addEventListener("click", () => showSlide(activeSlide + 1));
  slider.addEventListener("keydown", (event) => {
    if (event.target.closest("video")) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showSlide(activeSlide - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showSlide(activeSlide + 1);
    }
  });
  const windowElement = slider.querySelector(".media-slider-window");
  windowElement.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch") pointerStart = event.clientX;
  });
  windowElement.addEventListener("pointerup", (event) => {
    if (pointerStart === null) return;
    const distance = event.clientX - pointerStart;
    if (Math.abs(distance) > 45) showSlide(activeSlide + (distance < 0 ? 1 : -1));
    pointerStart = null;
  });
  windowElement.addEventListener("pointercancel", () => { pointerStart = null; });
  showSlide(0);
});

document.querySelectorAll(".optional-entry-photo").forEach((image) => {
  const showFallback = () => {
    image.classList.remove("is-loaded");
    image.parentElement.querySelector(".photo-fallback, .education-fallback")?.classList.remove("is-hidden");
  };
  const showImage = () => {
    image.classList.add("is-loaded");
    image.parentElement.querySelector(".photo-fallback, .education-fallback")?.classList.add("is-hidden");
  };
  image.addEventListener("load", showImage);
  image.addEventListener("error", showFallback);
  if (image.complete) {
    if (image.naturalWidth > 0) showImage();
    else showFallback();
  }
});

function typeTitle() {
  if (!titleElement || reduceMotion || document.hidden) {
    if (!document.hidden && !reduceMotion && titleElement) {
      setTimeout(typeTitle, 500);
    }
    return;
  }

  const title = titles[titleIndex];

  if (removingLetters) {
    letterIndex--;
  } else {
    letterIndex++;
  }

  titleElement.textContent = title.slice(0, letterIndex);

  if (letterIndex === 0) {
    removingLetters = false;
    titleIndex = (titleIndex + 1) % titles.length;
  } else if (letterIndex === titles[titleIndex].length) {
    removingLetters = true;
  }

  setTimeout(typeTitle, removingLetters ? 42 : 85);
}

if (!reduceMotion) {
  setTimeout(typeTitle, 1500);
}

const revealTargets = document.querySelectorAll(
  ".section-heading, .project-card, .experience-heading, .experience-item, .education-card, .skills-section > .eyebrow, .skills-section > h2, .skill-group, .about-strip > *, .contact-inner > *"
);

if (!reduceMotion && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach((element, index) => {
    element.classList.add("js-reveal");
    element.style.transitionDelay = `${(index % 3) * 90}ms`;
    revealObserver.observe(element);
  });
}

const yearElement = document.querySelector("#current-year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

function updateSidebarToggleLabel() {
  const isOpen = sidebar.classList.contains("is-open");
  const label = isOpen ? "Close navigation" : "Open navigation";
  sidebarToggle.setAttribute("aria-label", language === "ar" ? translations[label] : label);
  sidebarToggle.setAttribute("aria-expanded", String(isOpen));
}

function setSidebarOpen(isOpen) {
  sidebar.classList.toggle("is-open", isOpen);
  sidebar.inert = !isOpen;
  sidebarBackdrop.hidden = !isOpen;
  updateSidebarToggleLabel();
  if (isOpen) {
    sidebar.querySelector(".nav-link")?.focus();
  } else {
    sidebarToggle.focus();
  }
}

sidebarToggle.addEventListener("click", () => setSidebarOpen(!sidebar.classList.contains("is-open")));
sidebarBackdrop.addEventListener("click", () => setSidebarOpen(false));
sidebar.querySelectorAll(".nav-link, .sidebar-wordmark").forEach((link) => {
  link.addEventListener("click", () => setSidebarOpen(false));
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && sidebar.classList.contains("is-open")) setSidebarOpen(false);
});

const sectionLinks = [...sidebar.querySelectorAll(".nav-link")];
if ("IntersectionObserver" in window) {
  const navigationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      sectionLinks.forEach((link) => {
        const isActive = link.hash === `#${entry.target.id}`;
        link.classList.toggle("is-active", isActive);
        if (isActive) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sectionLinks.forEach((link) => {
    if (!link.hash) return;
    const section = document.querySelector(link.hash);
    if (section) navigationObserver.observe(section);
  });
}