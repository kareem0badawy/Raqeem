/**
 * Raqeem Learning Analytics & Data Science Lab Translations
 * Bilingual support (Arabic primary, English toggleable)
 */

const translations_lab = {
    ar: {
        page_title: "مختبر تحليلات التعلّم | دليلك العملي في علم بيانات التعليم و L&D",
        brand_name: "رَقِيم",
        lab_badge: "Learning Analytics Lab",
        lab_brand_subtitle: "المختبر التطبيقي لمحللي بيانات التعلّم والتعليم",
        nav_home: "الرئيسية",
        nav_blog: "المدونة",
        nav_lab: "مختبر التحليلات",
        nav_cta: "تواصل معنا",

        // Hero
        hero_pill: "منهج عملي تطبيقي • من البيانات إلى تحسين التعلّم",
        hero_title: `دليل <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-teal-600 to-emerald-500 dark:from-brand-300 dark:via-teal-300 dark:to-emerald-300">علم بيانات التعليم</span> وتحليلات التعلّم (L&D Data Analytics)`,
        hero_desc: "مساحة تعليمية تطبيقية متكاملة مصممة خصيصاً لمحللي بيانات التعليم ومطوري تجارب التعلّم. تغطي الحالات الواقعية من المدارس والمنصات التعليمية، مرتبة بالتدرج من استكشاف البيانات وحتى الذكاء الاصطناعي والتعلّم التكيفي، مدعمة بأكواد بايثون وتطبيقات عملية قابلة للتنفيذ.",
        hero_cta_start: "ابدأ رحلة التعلم",
        hero_cta_download: "تحميل بيانات تجريبية (CSV)",

        // Roadmap Bar
        tier1_nav: "01. التأسيس والاستكشاف",
        tier2_nav: "02. التنبؤ والإنذار المبكر",
        tier3_nav: "03. التجميع والقياس النفسي",
        tier4_nav: "04. الذكاء الاصطناعي والتتبع",

        // Quick Stats
        stat_levels: "4 مستويات متدرجة",
        stat_cases: "حالات دراسية واقعية",
        stat_code: "نماذج بايثون كاملة",
        stat_domain: "تطبيقات مدرسية و L&D",

        // Tier 1
        t1_badge: "المستوى 01 • التأسيسي",
        t1_title: "استكشاف بيانات المدارس وتنظيفها (EDA & Data Cleaning)",
        t1_subtitle: "كيف تحول سجلات الطلاب الخام إلى مؤشرات واضحة يقرأها مدير المدرسة والمعلم؟",
        t1_desc: "في أي بيئة مدرسية أو منصة LMS، لا تأتي البيانات نظيفة. هنا نتعلم كيفية دمج سجلات الحضور مع درجات الواجبات، والتعامل مع القيم المفقودة، وكشف القيم الشاذة التي تشوه متوسطات الفصول.",

        // Tier 2
        t2_badge: "المستوى 02 • المتوسط",
        t2_title: "أنظمة الإنذار المبكر والتنبؤ بتعثر الطلاب (Early Warning Systems)",
        t2_subtitle: "كيف نتنبأ باحتمالية رسوب الطالب في الأسبوع الرابع قبل فوات الأوان؟",
        t2_desc: "الانتقال من الوصف إلى التنبؤ. نبني نموذج تصنيف (Classification) باستخدام خوارزميات مثل Random Forest، مع التركيز على مقياس الـ Recall لأن تكلفة عدم اكتشاف طالب متعثر أعلى بكثير من الإنذار الخاطئ.",

        // Tier 3
        t3_badge: "المستوى 03 • المتقدم",
        t3_title: "تصنيف أنماط الطلاب والقياس النفسي للاختبارات (Clustering & Psychometrics)",
        t3_subtitle: "كيف نكتشف مجموعات الطلاب غير المرئية ونحلل جودة الأسئلة بنظرية الـ IRT؟",
        t3_desc: "استخدام التعلم غير الموجه (Unsupervised Learning) لتجميع الطلاب حسب سلوكهم في المنصة، بالإضافة إلى تحليل جودة أسئلة الامتحانات (معامل الصعوبة والتمييز Item Analysis) لتحسين بنوك الأسئلة.",

        // Tier 4
        t4_badge: "المستوى 04 • المتطور والذكاء الاصطناعي",
        t4_title: "تتبع المعرفة والتعلّم التكيفي (Knowledge Tracing & Adaptive Learning)",
        t4_subtitle: "كيف يعرف النظام الذكي أن الطالب أتقن مهارة معينة وما هو السؤال الأنسب له الآن؟",
        t4_desc: "تطبيق نماذج تتبع المعرفة مثل Bayesian Knowledge Tracing (BKT) ومصفوفة المهارات (Q-Matrix) لتقدير احتمالية إتقان المفاهيم الرياضية والعلمية لحظة بلحظة وبناء مسار تعليمي مخصص لكل طالب.",

        // Dataset Generator
        gen_title: "مولّد مجموعة بيانات مدرسية تجريبية (School LMS Dataset)",
        gen_desc: "يمكنك تحميل ملف بيانات CSV جاهز يحتوي على 200 طالب ببيانات واقعية (ساعات الدراسة، نسبة الحضور، التفاعل مع الفيديو، درجات الاختبارات، وحالة التعثر) لتطبيق الأكواد مباشرة على جهازك.",
        btn_gen_csv: "تنزيل ملف البيانات (students_lms_data.csv)",

        // Footer
        footer_note: "صُمم هذا المختبر ليكون مرجعاً علمياً وعملياً شاملاً لكل باحث ومحلل في مجال بيانات التعلّم وتكنولوجيا التعليم."
    },

    en: {
        page_title: "Learning Analytics Lab | Practical Applied Guide to Educational Data Science & L&D",
        brand_name: "Raqeem",
        lab_badge: "Learning Analytics Lab",
        lab_brand_subtitle: "Applied Data Science & Analytics for Education and L&D",
        nav_home: "Home",
        nav_blog: "Journal",
        nav_lab: "Analytics Lab",
        nav_cta: "Get in Touch",

        // Hero
        hero_pill: "Applied Methodology • From Raw Telemetry to Learning Impact",
        hero_title: `Educational Data Science & <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-teal-600 to-emerald-500 dark:from-brand-300 dark:via-teal-300 dark:to-emerald-300">L&D Analytics</span> Guide`,
        hero_desc: "A comprehensive, structured practical space built for Educational Data Analysts and Learning Experience Engineers. Covers real-world K-12 and LMS use cases, arranged from exploratory analytics up to deep knowledge tracing and adaptive recommendation engines, complete with runnable Python scripts.",
        hero_cta_start: "Explore Curriculum",
        hero_cta_download: "Download Sample CSV",

        // Roadmap Bar
        tier1_nav: "01. Foundations & EDA",
        tier2_nav: "02. Early Warning Systems",
        tier3_nav: "03. Clustering & Psychometrics",
        tier4_nav: "04. AI & Knowledge Tracing",

        // Quick Stats
        stat_levels: "4 Progressive Levels",
        stat_cases: "Real School Scenarios",
        stat_code: "Full Python Scripts",
        stat_domain: "K-12 & Corporate L&D",

        // Tier 1
        t1_badge: "Level 01 • Foundational",
        t1_title: "School Data Exploration & Cleaning (EDA & Pipelines)",
        t1_subtitle: "Transform raw school logs into clear dashboards for principals and educators",
        t1_desc: "In school environments and LMS platforms, data is inherently messy. Here we master joining attendance records with quiz submissions, handling missing values, and detecting score anomalies.",

        // Tier 2
        t2_badge: "Level 02 • Intermediate",
        t2_title: "Early Warning Systems & Student Churn Prediction",
        t2_subtitle: "Predict which students are at risk of failing by Week 4 before it's too late",
        t2_desc: "Shifting from descriptive dashboards to predictive intelligence. We construct a classification pipeline using Random Forests with heavy emphasis on Recall metric.",

        // Tier 3
        t3_badge: "Level 03 • Advanced",
        t3_title: "Learner Personas Clustering & Exam Psychometrics",
        t3_subtitle: "Discover hidden learner archetypes and evaluate question quality with IRT",
        t3_desc: "Apply unsupervised learning (K-Means) to group students based on clickstream velocity, combined with psychometric item analysis (Item Difficulty and Discrimination Index).",

        // Tier 4
        t4_badge: "Level 04 • Cutting-Edge AI",
        t4_title: "Knowledge Tracing & Adaptive Learning Engines",
        t4_subtitle: "How intelligent systems track concept mastery and recommend the next optimal exercise",
        t4_desc: "Implement Bayesian Knowledge Tracing (BKT) and Q-Matrix mapping to estimate real-time skill acquisition probability and build customized learning trajectories.",

        // Dataset Generator
        gen_title: "Synthetic School LMS Dataset Generator",
        gen_desc: "Download a ready-to-use CSV dataset of 200 high school students with realistic telemetry (study hours, attendance, video views, quiz scores, at-risk flags) to run in your Jupyter Notebook.",
        btn_gen_csv: "Download CSV Dataset (students_lms_data.csv)",

        // Footer
        footer_note: "Designed as an exhaustive, practical learning reference for emerging educational data scientists and L&D analysts."
    }
};
