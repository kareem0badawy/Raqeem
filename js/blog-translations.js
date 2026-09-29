/**
 * Raqeem Blog Translations & Knowledge Articles Database
 * Supports Arabic (AR) and English (EN)
 */

const translations_blog = {
    ar: {
        page_title: "مدونة رَقِيم | أوراق معرفية وتحليلات في هندسة التعلّم والقياس",
        brand_name: "رَقِيم",
        blog_brand_subtitle: "أوراق معرفية وأدلة في هندسة التعلّم",
        nav_home: "الرئيسية",
        nav_featured: "المقال البارز",
        nav_articles: "المقالات",
        nav_toolkits: "الأدلة والقوالب",
        nav_newsletter: "النشرة البريدية",
        btn_req_consult: "طلب استشارة",

        // Hero
        blog_hero_pill_1: "مجلة رَقِيم المعرفية",
        blog_hero_pill_2: "Evidence & Learning Insights",
        blog_hero_title: `أفكار وأدوات عملية لهندسة <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-teal-600 to-emerald-500 dark:from-brand-300 dark:via-teal-300 dark:to-emerald-300">التعلّم والقياس</span>`,
        blog_hero_desc: "أوراق تحليلية، أطر عمل، وقوالب قابلة للتطبيق مباشرة في تخطيط البرامج التدريبية، وبناء التقييمات، وتحليل بيانات المتعلمين، وسد فجوات المهارات.",
        search_placeholder: "ابحث في المقالات، المواضيع، أو المصطلحات (مثال: Rubrics, Alignment Matrix)...",

        // Categories
        cat_all: "الكل (6 مقالات)",
        cat_ld: "تصميم التعليم (Learning Design)",
        cat_assess: "التقييم والشواهد (Assessment)",
        cat_analytics: "تحليلات التعلّم (Analytics)",
        cat_skills: "فجوات المهارات (Skills Gap)",

        // Featured Lead
        featured_badge: "المقال الرئيسي المميز",
        featured_weekly: "مختار هذا الأسبوع",
        feat_read_time: "8 دقائق قراءة",
        diag_title: "مسار المنهجية التطبيقية",
        author_raqeem: "فريق أبحاث وتطوير رَقِيم",
        feat_cat: "تصميم التعليم & المواءمة",
        feat_title: "كيف تبني مصفوفة مواءمة الأهداف (Alignment Matrix) لضمان تحقيق الأثر التدريبي؟",
        feat_excerpt: "أكبر سبب لضعف نتائج الدورات التدريبية هو وجود فجوة بين ما يُقال في المحتوى وما يُطلب في التقييم. نستعرض في هذا الدليل المنهجية التطبيقية لمواءمة كل هدف تدريبي بنشاط تفاعلي وشاهد تقييم قابل للقياس المباشر.",
        feat_bullet1: "قالب مصفوفة المواءمة بصيغة جاهزة",
        feat_bullet2: "تطبيق عملي على تصنيف بلوم المعدل",
        btn_read_full: "قراءة المقال والدليل كاملاً",
        feat_footer_note: "8 min read • Free Framework",

        // Feed
        feed_title: "أحدث الأوراق المعرفية والمقالات",
        btn_read: "قراءة المقال",
        art_count_prefix: "عرض",
        art_count_suffix: "مقالات",

        art2_title: "النموذج الرباعي لهندسة تجربة التعلّم: من الهدف السلوكي إلى النشاط التفاعلي",
        art2_excerpt: "دليل خطوة بخطوة للمدربين ومصممي التعليم لكيفية تحويل المفاهيم النظرية الجافة إلى أنشطة تطبيقية تضمن تفاعل المتعلم واستيعابه العميق.",
        art2_date: "18 سبتمبر 2026",

        art3_title: "لماذا تفشل التقييمات التقليدية؟ الدليل العملي لبناء روبرك قياس الأداء (Rubrics)",
        art3_excerpt: "التقييم ليس لإعطاء الدرجات بل لتوجيه التعلّم؛ كيف تصمم معايير أداء واضحة وعادلة تقيس الإتقان الفعلي وتوفر شواهد موثوقة.",
        art3_date: "12 سبتمبر 2026",

        art4_title: "تحويل مؤشرات LMS إلى قرارات تدريبية: 5 مقاييس حاسمة لفرق التعلّم والتطوير",
        art4_excerpt: "كيف تقرأ معدلات الإكمال والاستبقاء وتحلل نقاط التعثر المبكرة للمتعلمين دون الغرق في أكوام من البيانات غير المفيدة.",
        art4_date: "05 سبتمبر 2026",

        art5_title: "من رصد الفجوة إلى مسار التعلّم: كيف تصمم مسارًا مخصصًا (Learning Path)؟",
        art5_excerpt: "منهجية تحويل نتائج تقييم الكفاءات الوظيفية إلى وحدات تدريبية متدرجة تعالج الفجوة المهارية بأقل وقت وأعلى عائد.",
        art5_date: "28 أغسطس 2026",

        art6_title: "دراسة حالة: كيف رفعنا معدل إكمال برنامج تدريبي بنسبة 42% عبر إعادة تصميم الأنشطة؟",
        art6_excerpt: "تحليل تفصيلي لمشروع حقيقي قمنا فيه بتشخيص تسرب المتعلمين، وإعادة صياغة الأنشطة وتقسيم الوحدات لرفع المشاركة والأثر.",
        art6_date: "19 أغسطس 2026",

        art7_title: "قائمة التحقق الذهبية (Quality Checklist) لاعتماد الحقائب التدريبية قبل الإطلاق",
        art7_excerpt: "12 معيارًا أساسيًا يجب التأكد منها في أهداف الدورة، المحتوى، والأنشطة لضمان خروج الحقيبة بأعلى معايير الجودة التدريبية.",
        art7_date: "10 أغسطس 2026",

        // Sidebar
        sb_kit_badge: "قوالب مجانية للتحميل",
        sb_kit_title: "حزمة أدوات تخطيط وتقييم التدريب 2026",
        sb_kit_desc: "تشمل نماذج مصفوفة المواءمة (Excel)، قوالب روبرك التقييم، ودليل صياغة أهداف التعلّم القابلة للقياس.",
        sb_kit_btn: "تحميل الحزمة المجانية (Instant Download)",
        sb_trending_title: "الأكثر قراءة ومشاركة",
        sb_t1: "كيف تبني مصفوفة مواءمة الأهداف (Alignment Matrix)؟",
        sb_t2: "الدليل العملي لبناء روبرك قياس الأداء القائم على الشواهد",
        sb_t3: "تحويل مؤشرات LMS إلى قرارات تدريبية حاسمة",

        nl_title: "نشرة رَقِيم البريدية (Weekly Dispatch)",
        nl_desc: "نرسل كل أسبوع فكرة واحدة عميقة، أداة عملية، ودراسة حالة في تصميم وقياس التعلّم.",
        nl_placeholder: "أدخل بريدك الإلكتروني...",
        nl_btn: "اشترك مجانًا",
        nl_success: "تم اشتراكك بنجاح في نشرة رَقِيم!",

        sb_tags_title: "سحابة المفاهيم والمصطلحات",
        modal_reader_prompt: "هل ترغب في تطبيق هذه المنهجية داخل برامجك التدريبية؟",

        // Footer
        footer_blog_desc: "منصة وحلول للتعلّم والتطوير المبني على البيانات — نربط بين التخطيط والتقييم وتحليلات الأداء وسد فجوات المهارات لمساعدة المدربين والمؤسسات على بناء برامج قابلة للقياس.",
        footer_quick_links: "روابط سريعة",
        nav_solutions: "حلول وأدوات رَقِيم الأربعة",
        nav_needs: "محدد الاحتياج التدريبي",
        nav_cta: "طلب استشارة وتعاون",
        footer_sections: "الأقسام المعرفية",
        footer_rights_blog: "© 2026 رَقِيم — جميع الحقوق محفوظة | مقالات وأدوات هندسة التعلّم",
        footer_nav_home: "الرئيسية",
        footer_nav_blog: "المدونة",
        footer_nav_contact: "تواصل معنا"
    },

    en: {
        page_title: "Raqeem Journal | Evidence-Based Insights in Learning Engineering & Analytics",
        brand_name: "Raqeem",
        blog_brand_subtitle: "Insights & Toolkits in Learning Engineering",
        nav_home: "Solutions Hub",
        nav_featured: "Featured",
        nav_articles: "Articles",
        nav_toolkits: "Toolkits",
        nav_newsletter: "Newsletter",
        btn_req_consult: "Get in Touch",

        // Hero
        blog_hero_pill_1: "Raqeem Knowledge Journal",
        blog_hero_pill_2: "Evidence & Learning Insights",
        blog_hero_title: `Actionable Toolkits & Ideas for <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-teal-600 to-emerald-500 dark:from-brand-300 dark:via-teal-300 dark:to-emerald-300">Learning Engineering</span>`,
        blog_hero_desc: "In-depth analytical frameworks, field-tested guides, and downloadable templates for curriculum design, authentic assessment, learner analytics, and skill gap remediation.",
        search_placeholder: "Search articles, frameworks, or terms (e.g. Rubrics, Alignment Matrix)...",

        // Categories
        cat_all: "All (6 Articles)",
        cat_ld: "Learning Design",
        cat_assess: "Assessment & Rubrics",
        cat_analytics: "Learning Analytics",
        cat_skills: "Skills Gap",

        // Featured Lead
        featured_badge: "Featured Lead Article",
        featured_weekly: "Editor's Choice This Week",
        feat_read_time: "8 min read",
        diag_title: "Methodology Flow",
        author_raqeem: "Raqeem R&D Team",
        feat_cat: "Learning Design & Alignment",
        feat_title: "How to Build an Alignment Matrix to Ensure Measurable Training ROI",
        feat_excerpt: "The primary culprit behind ineffective courses is the structural disconnect between instructional content and assessment tasks. This blueprint demonstrates how to map every learning outcome to interactive practice and verifiable evidence.",
        feat_bullet1: "Ready-to-use spreadsheet alignment template",
        feat_bullet2: "Practical mapping with Revised Bloom's Taxonomy",
        btn_read_full: "Read Full Guide & Framework",
        feat_footer_note: "8 min read • Free Framework",

        // Feed
        feed_title: "Latest Knowledge Papers & Insights",
        btn_read: "Read Article",
        art_count_prefix: "Showing",
        art_count_suffix: "articles",

        art2_title: "The 4-Part Learning Experience Design Model: From Outcome to Active Practice",
        art2_excerpt: "A step-by-step practitioner guide for instructional designers on converting dense theory into structured, engaging activities that guarantee deep retention.",
        art2_date: "September 18, 2026",

        art3_title: "Why Traditional Tests Fail: The Practical Guide to Evidence-Based Rubrics",
        art3_excerpt: "Assessment exists to guide learning, not merely compute grades. Discover how to construct transparent, fair rubrics that evaluate authentic workplace mastery.",
        art3_date: "September 12, 2026",

        art4_title: "Transforming LMS Telemetry into Strategic Action: 5 Vital Metrics for L&D",
        art4_excerpt: "How to interpret completion velocity, pinpoint drop-off friction, and proactively identify at-risk learners without drowning in vanity metrics.",
        art4_date: "September 05, 2026",

        art5_title: "From Skill Gap Diagnosis to Modular Learning Paths: A Practical Guide",
        art5_excerpt: "Methodologies for translating organizational competency audits into targeted, micro-credentialed pathways that close workforce skill deficits with high ROI.",
        art5_date: "August 28, 2026",

        art6_title: "Case Study: How Activity Redesign Boosted Program Completion by 42%",
        art6_excerpt: "An in-depth breakdown of a real-world enterprise bootcamp where chunking lectures and introducing milestone challenges flipped completion from 38% to 80%.",
        art6_date: "August 19, 2026",

        art7_title: "The Golden Quality Checklist for Validating Course Blueprints Before Launch",
        art7_excerpt: "12 essential pedagogical and structural criteria to audit across learning outcomes, content units, and evaluation tasks before going live.",
        art7_date: "August 10, 2026",

        // Sidebar
        sb_kit_badge: "Free Downloadable Toolkits",
        sb_kit_title: "2026 Course Planning & Assessment Toolkit",
        sb_kit_desc: "Includes Excel Alignment Matrix models, authentic Rubric builders, and measurable objective formulation cheat sheets.",
        sb_kit_btn: "Download Free Toolkit (Instant Download)",
        sb_trending_title: "Most Read & Shared",
        sb_t1: "How to Build an Alignment Matrix?",
        sb_t2: "The Practical Guide to Evidence-Based Rubrics",
        sb_t3: "Transforming LMS Telemetry into Action",

        nl_title: "Raqeem Weekly Dispatch",
        nl_desc: "Every Tuesday: one actionable learning engineering framework, one template, and one field case study.",
        nl_placeholder: "Enter your official email...",
        nl_btn: "Subscribe Free",
        nl_success: "Thank you for subscribing to Raqeem Dispatch!",

        sb_tags_title: "Key Frameworks & Concepts",
        modal_reader_prompt: "Looking to deploy these methodologies across your training programs?",

        // Footer
        footer_blog_desc: "Evidence-based learning engineering — bridging curriculum architecture, authentic assessment, telemetry analytics, and skill gap remediation.",
        footer_quick_links: "Quick Navigation",
        nav_solutions: "4 Raqeem Core Solutions",
        nav_needs: "Needs Diagnosis Tool",
        nav_cta: "Consulting & Partnerships",
        footer_sections: "Topic Hubs",
        footer_rights_blog: "© 2026 Raqeem — All Rights Reserved | Learning Engineering & Analytics",
        footer_nav_home: "Home",
        footer_nav_blog: "Journal",
        footer_nav_contact: "Contact Us"
    }
};

// Full Articles Database
const articlesDB = {
    1: {
        tag: { ar: "تصميم التعليم • Alignment Matrix", en: "Learning Design • Alignment Matrix" },
        readTime: { ar: "8 دقائق قراءة", en: "8 min read" },
        date: { ar: "24 سبتمبر 2026", en: "September 24, 2026" },
        title: {
            ar: "كيف تبني مصفوفة مواءمة الأهداف (Alignment Matrix) لضمان تحقيق الأثر التدريبي؟",
            en: "How to Build an Alignment Matrix to Ensure Measurable Training ROI"
        },
        content: {
            ar: `
                <p class="text-base font-semibold text-brand-600 dark:text-brand-400">
                    مصفوفة المواءمة هي العمود الفقري لأي برنامج تدريبي ناجح؛ فبدونها يتحول التدريب إلى مجرد إلقاء معلومات دون أثر قابل للقياس.
                </p>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">1. ما هي مصفوفة المواءمة (Alignment Matrix)؟</h3>
                <p>
                    هي جدول تخطيطي يربط كل هدف تدريبي (Objective) بنشاط تعلّم تفاعلي (Activity) وبطريقة تقييم محددة (Assessment). إذا كان هناك هدف لا يقابله نشاط أو تقييم، أو كان هناك محتوى لا يخدم أي هدف، فإن البرنامج التدريبي يعاني من "انعدام المواءمة".
                </p>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">2. خطوات بناء المصفوفة:</h3>
                <ul class="list-disc list-inside space-y-2">
                    <li><strong>تحديد الأهداف السلوكية:</strong> باستخدام أفعال قابلة للقياس طبقًا لمستويات بلوم (تطبيق، تحليل، تقييم).</li>
                    <li><strong>تحديد الشاهد التقييمي:</strong> ما الدليل العملي الذي يثبت أن المتعلم أتقن الهدف؟ (مثل: كتابة كود، حل مسألة، دراسة حالة).</li>
                    <li><strong>هندسة النشاط التفاعلي:</strong> تصميم التمرين الذي يمارس فيه المتعلم المهارة قبل أن يُقيّم عليها.</li>
                </ul>
                <div class="p-4 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-dark-border my-4">
                    <strong class="text-gray-900 dark:text-white block mb-1">قاعدة رَقِيم الذهبية:</strong>
                    «لا تضع سؤالاً في التقييم لم يمارس المتعلم تطبيقه في نشاط، ولا تشرح محتوى لا يخدم هدفًا مصاغًا في المصفوفة.»
                </div>
            `,
            en: `
                <p class="text-base font-semibold text-brand-600 dark:text-brand-400">
                    An Alignment Matrix is the strategic backbone of effective learning design. Without rigorous alignment, courses devolve into passive information dumps with unverified impact.
                </p>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">1. What is an Alignment Matrix?</h3>
                <p>
                    It is an architectural blueprint that establishes a direct, 1-to-1 relationship between each measurable Learning Objective, its corresponding Active Practice Activity, and its authentic Assessment Task. If an objective lacks a practice activity or an assessment task, the curriculum suffers from constructive misalignment.
                </p>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">2. The 3-Step Construction Sequence:</h3>
                <ul class="list-disc list-inside space-y-2">
                    <li><strong>Formulate Actionable Outcomes:</strong> Use observable behavioral verbs categorized under Revised Bloom's Taxonomy (Analyze, Evaluate, Synthesize).</li>
                    <li><strong>Define Authentic Evidence:</strong> Specify the concrete artifact that proves competency mastery (e.g. executing code, solving a simulation, presenting a business case).</li>
                    <li><strong>Architect Scaffolding Activities:</strong> Structure intermediate practice loops where learners experiment and fail safely before summative evaluation.</li>
                </ul>
                <div class="p-4 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-dark-border my-4">
                    <strong class="text-gray-900 dark:text-white block mb-1">Raqeem's Golden Rule:</strong>
                    “Never evaluate what was never practiced, and never teach content that does not serve an aligned objective.”
                </div>
            `
        }
    },
    2: {
        tag: { ar: "Learning Design", en: "Learning Design" },
        readTime: { ar: "6 دقائق قراءة", en: "6 min read" },
        date: { ar: "18 سبتمبر 2026", en: "September 18, 2026" },
        title: {
            ar: "النموذج الرباعي لهندسة تجربة التعلّم: من الهدف السلوكي إلى النشاط التفاعلي",
            en: "The 4-Part Learning Experience Design Model: From Outcome to Active Practice"
        },
        content: {
            ar: `
                <p>
                    يقوم نموذج رَقِيم الرباعي (Objective → Content → Activity → Assessment) على فكرة التدرج البيداغوجي المنطقي الذي ينقل المتعلم من متلقٍ سلبي إلى ممارس نشط.
                </p>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mt-4 mb-2">ركائز النموذج:</h3>
                <p>
                    1. <strong>الهدف:</strong> صياغة النتيجة المتوقعة بلغة سلوكية واضحة.<br>
                    2. <strong>المحتوى:</strong> تقديم المعرفة الأساسية فقط دون حشو زائد (Micro-learning chunks).<br>
                    3. <strong>النشاط:</strong> إشراك المتعلم في مهمة فردية أو تفاعلية لتطبيق ما تعلمه.<br>
                    4. <strong>التقييم:</strong> جمع التغذية الراجعة والشواهد لقياس مدى تحقق الهدف.
                </p>
            `,
            en: `
                <p>
                    Raqeem's 4-Part Learning Model (Objective → Content → Activity → Assessment) is anchored in pedagogical scaffolding that transforms learners from passive consumers into active practitioners.
                </p>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mt-4 mb-2">Core Pillars:</h3>
                <p>
                    1. <strong>Objective:</strong> Define the exact performance outcome in unambiguous behavioral terms.<br>
                    2. <strong>Content:</strong> Deliver targeted micro-learning units without extraneous cognitive overload.<br>
                    3. <strong>Activity:</strong> Scaffold hands-on active learning tasks that require immediate application.<br>
                    4. <strong>Assessment:</strong> Capture authentic performance data to measure mastery and close feedback loops.
                </p>
            `
        }
    },
    3: {
        tag: { ar: "Assessment & Rubrics", en: "Assessment & Rubrics" },
        readTime: { ar: "7 دقائق قراءة", en: "7 min read" },
        date: { ar: "12 سبتمبر 2026", en: "September 12, 2026" },
        title: {
            ar: "لماذا تفشل التقييمات التقليدية؟ الدليل العملي لبناء روبرك قياس الأداء (Rubrics)",
            en: "Why Traditional Tests Fail: The Practical Guide to Evidence-Based Rubrics"
        },
        content: {
            ar: `
                <p>
                    الامتحانات التقليدية ذات الاختيار من متعدد تقيس التذكر والحفظ فقط، بينما تتطلب بيئات العمل مهارات معقدة كحل المشكلات والتفكير النقدي.
                </p>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mt-4 mb-2">كيف تصمم روبرك شواهد حقيقي؟</h3>
                <p>
                    الروبرك هو مصفوفة تتضمن: معايير الأداء (Criteria)، ومستويات الإتقان (مبتدئ، متمكن، متقدم)، ووصفًا دقيقًا لكل مستوى. هذا يمنح المتعلم معيارًا عادلاً وشفافًا للتطوير الذاتي.
                </p>
            `,
            en: `
                <p>
                    Standardized multiple-choice tests evaluate surface recall. Modern workplace environments demand verifiable problem solving, critical thinking, and synthesis.
                </p>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mt-4 mb-2">How to Construct Evidence-Based Rubrics:</h3>
                <p>
                    An effective rubric incorporates explicit Performance Criteria, qualitative Mastery Tiers (Novice, Proficient, Exemplary), and observable behavioral descriptors for each tier. This provides unambiguous clarity for learners and eliminates instructor bias.
                </p>
            `
        }
    },
    4: {
        tag: { ar: "Learning Analytics", en: "Learning Analytics" },
        readTime: { ar: "5 دقائق قراءة", en: "5 min read" },
        date: { ar: "05 سبتمبر 2026", en: "September 05, 2026" },
        title: {
            ar: "تحويل مؤشرات LMS إلى قرارات تدريبية: 5 مقاييس حاسمة لفرق التعلّم والتطوير",
            en: "Transforming LMS Telemetry into Strategic Action: 5 Vital Metrics for L&D"
        },
        content: {
            ar: `
                <p>
                    لا تكفي معرفة عدد من سجلوا في الدورة؛ الأهم هو معرفة أين يتعثر المتعلمون ولماذا.
                </p>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mt-4 mb-2">أهم 5 مؤشرات يجب مراقبتها:</h3>
                <ul class="list-disc list-inside space-y-1">
                    <li>معدل إكمال الوحدات التدريبية (Completion Velocity).</li>
                    <li>نقاط الانقطاع (Drop-off Points) في الفيديو والأنشطة.</li>
                    <li>متوسط محاولات اجتياز التقييمات التكوينية.</li>
                    <li>معدل التفاعل والنقاش المجتمعي.</li>
                    <li>الارتباط بين النشاط وتحقيق الكفاءة.</li>
                </ul>
            `,
            en: `
                <p>
                    Enrollment figures are vanity metrics. What matters is pinpointing where learners encounter cognitive friction, drop off, and how quickly they achieve competency benchmarks.
                </p>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mt-4 mb-2">5 High-Impact Telemetry Metrics:</h3>
                <ul class="list-disc list-inside space-y-1">
                    <li><strong>Completion Velocity:</strong> Average progression speed per module.</li>
                    <li><strong>Drop-off Friction Points:</strong> Exact video timestamps and task milestones where engagement decays.</li>
                    <li><strong>Formative Retry Velocity:</strong> Number of attempts required to master practice checks.</li>
                    <li><strong>Collaborative Discussion Density:</strong> Peer inquiry and qualitative contribution rates.</li>
                    <li><strong>Competency Correlation:</strong> Direct correlation between time invested and rubric scores.</li>
                </ul>
            `
        }
    },
    5: {
        tag: { ar: "Skills Gap Analysis", en: "Skills Gap Analysis" },
        readTime: { ar: "9 دقائق قراءة", en: "9 min read" },
        date: { ar: "28 أغسطس 2026", en: "August 28, 2026" },
        title: {
            ar: "من رصد الفجوة إلى مسار التعلّم: كيف تصمم مسارًا مخصصًا (Learning Path)؟",
            en: "From Skill Gap Diagnosis to Modular Learning Paths: A Practical Guide"
        },
        content: {
            ar: `
                <p>
                    البرامج التدريبية الموحدة للجميع (One-size-fits-all) تضيع وقت المتميزين ولا تسعف المتعثرين.
                </p>
                <p>
                    الحل هو بناء مسارات تعلم مخصصة مبنية على نتائج التقييم المبدئي؛ حيث يتجاوز المتعلم المهارات التي يتقنها ويركز وقته وجهده فقط على سد الفجوات المهارية الفعلية.
                </p>
            `,
            en: `
                <p>
                    One-size-fits-all training wastes high performers' time while failing to remediate struggling learners.
                </p>
                <p>
                    The strategic alternative is adaptive modular learning paths rooted in diagnostic pre-assessments. Learners test out of mastered competencies and direct 100% of their learning time toward authentic skill deficits.
                </p>
            `
        }
    },
    6: {
        tag: { ar: "Case Study", en: "Case Study" },
        readTime: { ar: "10 دقائق قراءة", en: "10 min read" },
        date: { ar: "19 أغسطس 2026", en: "August 19, 2026" },
        title: {
            ar: "دراسة حالة: كيف رفعنا معدل إكمال برنامج تدريبي بنسبة 42% عبر إعادة تصميم الأنشطة؟",
            en: "Case Study: How Activity Redesign Boosted Program Completion by 42%"
        },
        content: {
            ar: `
                <p>
                    في هذه الدراسة نستعرض التحدي الذي واجهته إحدى الأكاديميات في برنامج تدريب مهني مدته 8 أسابيع، حيث كان معدل الإكمال 38% فقط.
                </p>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mt-4 mb-2">ما قمنا به مع رَقِيم:</h3>
                <p>
                    1. تفكيك المحاضرات الطويلة إلى كبسولات معرفية مدتها 10 دقائق.<br>
                    2. استبدال الاختبارات النظرية بتحديات أسبوعية عملية (Milestone Projects).<br>
                    3. تتبع مؤشرات التقدم أسبوعيًا والتدخل المبكر مع المتعثرين.<br>
                    <strong>النتيجة:</strong> قفز معدل الإتقان والإكمال إلى 80% في الدفعة التالية.
                </p>
            `,
            en: `
                <p>
                    This case study analyzes an 8-week corporate technical academy plagued by a dismal 38% completion rate.
                </p>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mt-4 mb-2">The Raqeem Intervention:</h3>
                <p>
                    1. Deconstructed 90-minute lectures into 10-minute micro-learning modules with embedded practice.<br>
                    2. Replaced theoretical multiple-choice exams with weekly milestone portfolio projects.<br>
                    3. Deployed telemetry dashboards for weekly instructor intervention with at-risk cohorts.<br>
                    <strong>Outcome:</strong> Completion vaulted to 80% with a 94% authentic skill satisfaction score.
                </p>
            `
        }
    },
    7: {
        tag: { ar: "Quality Checklist", en: "Quality Checklist" },
        readTime: { ar: "4 دقائق قراءة", en: "4 min read" },
        date: { ar: "10 أغسطس 2026", en: "August 10, 2026" },
        title: {
            ar: "قائمة التحقق الذهبية (Quality Checklist) لاعتماد الحقائب التدريبية قبل الإطلاق",
            en: "The Golden Quality Checklist for Validating Course Blueprints Before Launch"
        },
        content: {
            ar: `
                <p>
                    12 بندًا عمليًا للتحقق من سلامة المنهج التدريبي وجودته:
                </p>
                <ul class="list-disc list-inside space-y-1">
                    <li>هل كل هدف مصاغ بفعل سلوكي محدد وقابل للقياس؟</li>
                    <li>هل يوجد نشاط تطبيقي لكل مهارة مستهدفة؟</li>
                    <li>هل التقييم النهائي يقيس الأهداف الأساسية فقط؟</li>
                    <li>هل مدة الوحدات متناسقة مع عمق المعرفة؟</li>
                </ul>
            `,
            en: `
                <p>
                    12 essential quality control checkpoints before deploying any training package:
                </p>
                <ul class="list-disc list-inside space-y-1">
                    <li>Is every learning outcome articulated with a measurable action verb?</li>
                    <li>Does every unit contain an active practice task mapped to its outcome?</li>
                    <li>Do scoring rubrics contain unambiguous criteria and mastery levels?</li>
                    <li>Are video and micro-content lengths calibrated to prevent cognitive overload?</li>
                </ul>
            `
        }
    }
};
