/**
 * Raqeem Landing Page Translations
 * Supports Arabic (AR) and English (EN)
 */

const translations_index = {
    ar: {
        page_title: "رَقِيم | حلول التعلّم والتطوير المبني على البيانات",
        brand_name: "رَقِيم",
        brand_subtitle: "منظومة هندسة التعلّم والقياس",
        
        // Navigation
        nav_solutions: "الحلول",
        nav_cycle: "دورة التحسين",
        nav_audiences: "الفئات المستهدفة",
        nav_needs: "محدد الاحتياج",
        nav_blog: "المدونة",
        nav_lab: "مختبر التحليلات",
        nav_cta: "تواصل معنا",
        mobile_nav_blog: "📖 مجلة ومدونة رَقِيم المعرفية",
        mobile_nav_lab: "🧪 مختبر علم بيانات التعليم (Lab)",

        // Hero Section
        hero_pill_badge: "منظومة تصميم التعلّم والقياس الذكي",
        hero_pill_tag: "Evidence-Based Learning",
        hero_headline: `نخطط للتعلّم، <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-teal-600 to-emerald-500 dark:from-brand-300 dark:via-teal-300 dark:to-emerald-300 font-black inline-block">نقيس أثره،</span> ونستخدم البيانات لتطويره.`,
        hero_manifesto: `<strong class="text-gray-950 dark:text-white font-bold">رَقِيم</strong> منصة تقدّم حلولًا عملية لتصميم وتطوير تجارب التعلّم والتدريب؛ من تخطيط البرامج وتحديد أهداف التعلّم، إلى تصميم التقييم، وتحليل بيانات المتعلمين، وتحديد فجوات المهارات.`,
        hero_formula_title: "نربط الركائز الأربع في منظومة واحدة متكاملة",
        pillar_1_short: "Learning Design",
        pillar_2_short: "Assessment",
        pillar_3_short: "Analytics",
        pillar_4_short: "Skills Dev",
        hero_cta_explore: "استكشف حلول رَقِيم",
        hero_cta_needs: "ابدأ بتحديد احتياجك",
        trust_1: "للمدربين ومقدمي التدريب",
        trust_2: "لفرق التعلّم والتطوير (L&D)",
        trust_3: "للمؤسسات التعليمية والأكاديمية",

        // Solutions Section
        sol_subtitle: "رَكائز المنظومة",
        sol_title: "حلول رَقِيم المتخصصة",
        sol_desc: "أدوات ومناهج تطبيقية مصممة لمساعدتك على بناء برامج تدريبية أكثر وضوحًا وقابلية للقياس والتطوير المستمر.",
        
        // Solution 1
        sol1_badge: "01 — Learning Design",
        sol1_title: "Course Planning Toolkit",
        sol1_sub: "حوّل فكرة الدورة إلى خطة تعلّم واضحة ومحكمة.",
        sol1_desc: "أدوات تساعدك على تحديد أهداف التعلّم بدقة، وتنظيم المحتوى، وتصميم الأنشطة التفاعلية، وبناء تسلسل تعلّم متين ومترابط يضمن انغماس المتعلم وتحقيق النتيجة المطلوبة.",
        sol1_point1: "خرائط هيكلة المناهج وتوزيع الوحدات التدريبية",
        sol1_point2: "مصفوفة مواءمة الأهداف بالأنشطة (Alignment Matrix)",

        // Solution 2
        sol2_badge: "02 — Learning Assessment",
        sol2_title: "Learning Assessment Kit",
        sol2_sub: "اربط التقييم بما تريد حقًا أن يتعلمه المتعلم.",
        sol2_desc: "أدوات تساعدك على اختيار أساليب التقييم وتصميمها (المبدئي، التكويني، والختامي)، وربطها بأهداف التعلّم، وتحليل النتائج واستخدامها مباشرة في تحسين وتطوير عملية التعلّم.",
        sol2_point1: "نماذج روبرك ومعايير قياس الأداء (Rubrics) القائمة على الشواهد",
        sol2_point2: "تصميم بنوك الأسئلة والتقييمات التفاعلية والعملية",

        // Solution 3
        sol3_badge: "03 — Learning Analytics",
        sol3_title: "Learning Analytics Dashboard",
        sol3_sub: "حوّل بيانات التعلّم إلى رؤى تدعم اتخاذ القرار.",
        sol3_desc: "نساعدك على تحليل بيانات المتعلمين لفهم وتتبع معدلات التقدم، ومستويات التفاعل، وجودة الأداء، والإنجاز؛ واكتشاف الأنماط السلوكية التي تدعم تطوير البرامج التدريبية وتحديثها.",
        sol3_point1: "لوحات تحكم تفاعلية لمراقبة مؤشرات أداء التعلم (KPIs)",
        sol3_point2: "تقارير تشخيصية لاكتشاف نقاط التعثر ومعدلات التسرب",

        // Solution 4
        sol4_badge: "04 — Skills Development",
        sol4_title: "Skills Gap Analysis",
        sol4_sub: "حدد فجوات المهارات، وابنِ مسارًا واضحًا لتطويرها.",
        sol4_desc: "نستخدم نتائج التقييم وبيانات الأداء لتحديد المهارات الفعلية، واكتشاف الفجوات الفردية والمؤسسية، وتحديد أولويات التطوير، وربطها بمسارات تعلّم دقيقة ومخصصة (Learning Paths).",
        sol4_point1: "خرائط الكفاءات ومصفوفة المهارات الوظيفية (Skill Matrix)",
        sol4_point2: "مسارات تعلّم تدريجية لمعالجة الفجوات المستهدفة",

        // Pipelines
        pipe_title: "مسار المنهجية التطبيقية",
        pipe_steps_count: "4 محطات متتابعة",
        step_1_label: "تحديد الأهداف",
        step_2_label: "تنظيم المحتوى",
        step_3_label: "الأنشطة التفاعلية",
        step_4_label: "قياس الأثر",
        step_1_align: "مواءمة الأهداف",
        step_2_assess: "تصميم التقييم",
        step_3_evidence: "جمع الشواهد",
        step_4_improve: "التطوير المستمر",
        step_1_data: "جمع البيانات",
        step_2_analysis: "التحليل الذكي",
        step_3_insight: "استخراج الرؤى",
        step_4_action: "اتخاذ القرار",
        step_1_reality: "تقييم الواقع",
        step_2_map: "خرائط المهارات",
        step_3_gap: "رصد الفجوة",
        step_4_path: "مسار التعلّم",
        btn_explore_details: "استكشف تفاصيل الحل",

        // Continuous Improvement Cycle
        cycle_badge: "فلسفة العمل والمنهجية",
        cycle_title: "كيف تعمل رَقِيم؟",
        cycle_quote: "«نبدأ من المشكلة، وليس من الأداة.»",
        cycle_desc: "في رَقِيم، لا ننظر إلى تخطيط الدورة والتقييم وتحليل البيانات وتطوير المهارات كعمليات منفصلة، بل نربطها في دورة واحدة مغلقة للتحسين المستمر.",
        cycle_1_ar: "التخطيط",
        cycle_1_desc: "نحدد ما الذي ينبغي أن يتعلمه المتعلم بدقة، ونبني أهدافًا محكمة ومسارًا واضحًا ومنطقيًا للتعلّم.",
        cycle_1_tag: "مواءمة الأهداف",
        cycle_2_ar: "التقييم",
        cycle_2_desc: "نصمم طرقًا وأدوات مناسبة لجمع الشواهد والأدلة (evidence) عن مدى تحقق أهداف التعلّم.",
        cycle_2_tag: "جمع الشواهد",
        cycle_3_ar: "التحليل",
        cycle_3_desc: "نستخدم البيانات لفهم التقدم والأداء ومعدلات التفاعل، واكتشاف الأنماط السلوكية والفجوات الدقيقة.",
        cycle_3_tag: "استخراج الرؤى",
        cycle_4_ar: "التطوير",
        cycle_4_desc: "نحوّل النتائج إلى إجراءات تطويرية مباشرة ومسارات تعلّم علاجية وإثرائية تستجيب للاحتياج الفعلي.",
        cycle_4_tag: "مسارات الاستجابة",
        cycle_5_ar: "التحسين",
        cycle_5_desc: "نستخدم نتائج القياس والتحليل لتحسين البرامج والمقررات والتقييمات بصورة دورية ومستمرة.",
        cycle_5_tag: "الاستدامة والأثر",
        insight_pill: "من التعلّم إلى التحسين المستمر",
        insight_quote: "«الهدف ليس إنتاج المحتوى أو جمع الأرقام فقط؛ بل استخدام ما نعرفه عن التعلّم لتحسين ما نقدّمه للمتعلّم.»",

        // Target Audiences
        aud_badge: "مواءمة القيمة",
        aud_title: "لمن صُممت رَقِيم؟",
        aud_desc: "حلول مخصصة تخدم مختلف الجهات العاملة في بيئات التعلّم والتدريب المؤسسي والأكاديمي.",
        aud_1_title: "Training Providers",
        aud_1_sub: "مقدمو التدريب والشركات التدريبية",
        aud_1_desc: "لتطوير البرامج التدريبية وتحديث حقائبها وضمان قياس نتائجها وتقديم قيمة واضحة وملموسة لعملائهم.",
        aud_1_tag: "رفع تنافسية الحقائب التدريبية",
        aud_2_title: "Educators & Trainers",
        aud_2_sub: "المعلمون والمدربون المستقلون",
        aud_2_desc: "لتخطيط الدورات باحترافية، وتصميم التقييمات التفاعلية، وتحليل نتائج المتعلمين بسهولة دون تعقيد تقني.",
        aud_2_tag: "توفير الوقت وتجويد التقييم",
        aud_3_title: "L&D Teams",
        aud_3_sub: "فرق التعلّم والتطوير المؤسسي",
        aud_3_desc: "لفهم احتياجات المهارات الفعلية للموظفين، وسد الفجوات وربط التدريب بخطط التطوير والنمو الوظيفي.",
        aud_3_tag: "مواءمة التدريب مع أهداف البزنس",
        aud_4_title: "Educational Orgs",
        aud_4_sub: "المؤسسات التعليمية والأكاديمية",
        aud_4_desc: "لبناء حلول تعلّم مستدامة وقابلة للقياس والتحسين المعياري المستمر وفق أحدث ممارسات الجودة.",
        aud_4_tag: "اعتماد معايير الجودة والحوكمة",

        // Needs Assessment
        need_badge: "الموجّه التفاعلي الذكي",
        need_title: "ابدأ من احتياجك",
        need_desc: "اختر التحدي أو الهدف الحالي لمؤسستك، وسيقترح عليك نظام رَقِيم الحل والمسار التطبيقي الأنسب مباشرة:",
        need_opt_1_num: "الخيار 01",
        need_opt_1_title: "هل تخطط لبرنامج تدريبي جديد؟",
        need_opt_2_num: "الخيار 02",
        need_opt_2_title: "هل تريد تطوير دورة قائمة؟",
        need_opt_3_num: "الخيار 03",
        need_opt_3_title: "هل تحتاج إلى تحسين طريقة تقييم المتعلمين؟",
        need_opt_4_num: "الخيار 04",
        need_opt_4_title: "هل لديك بيانات عن المتعلمين وتريد تحويلها إلى رؤى؟",
        need_opt_5_num: "الخيار 05",
        need_opt_5_title: "هل تريد تحديد فجوات المهارات وبناء مسار تعلّم (Learning Path)؟",
        rec_sequence_label: "تسلسل التنفيذ المقترح:",
        rec_ready_prompt: "جاهز لبدء هذا الحل في مشروعك؟",
        rec_request_btn: "اطلب استشارة حول هذا الحل",

        // Contact Section
        contact_badge: "التعاون المؤسسي والشراكات",
        contact_title: `ابدأ بالاحتياج، ودع <span class="text-brand-600 dark:text-brand-400">رَقِيم</span> يساعدك على بناء الحل.`,
        contact_desc: "سواء كنت تمثل شركة تدريب، أو قسم موارد بشرية وتطوير، أو مؤسسة تعليمية تبحث عن تصميم تجارب تعلّم وقياس أثرها باحترافية — نحن هنا لتحويل التحدي إلى منظومة عمل قابلة للقياس.",
        contact_email_label: "البريد الإلكتروني للتعاون",
        contact_copy_btn: "نسخ",
        contact_wa_label: "واتساب مباشر",
        contact_wa_chat: "محادثة",

        // Form
        form_title: "إرسال استفسار أو طلب تعاون",
        form_subtitle: "املأ النموذج وسيتم التواصل معك خلال أقل من 24 ساعة لمناقشة الاحتياج وتجهيز مقترح العمل.",
        form_name_label: "الاسم الكريم / الجهة",
        form_name_placeholder: "مثال: د. محمد أحمد / شركة مسار للتدريب",
        form_email_label: "البريد الإلكتروني",
        form_phone_label: "رقم الهاتف / الواتساب",
        form_sol_label: "نوع الحل المطلوب",
        drop_opt1_desc: "تخطيط البرامج والدورات وتصميم المناهج",
        drop_opt2_desc: "تصميم التقييم وبناء الشواهد والروبرك",
        drop_opt3_desc: "تحليل بيانات التعلّم ولوحات المؤشرات الذكية",
        drop_opt4_desc: "تحليل فجوات المهارات ومسارات التعلم",
        drop_opt5_title: "منظومة رَقِيم المتكاملة (All-in-One)",
        drop_opt5_desc: "حلول استشارية متكاملة لجميع المراحل",
        form_msg_label: "تفاصيل الاحتياج أو المشروع",
        form_msg_placeholder: "اكتب نبذة مختصرة عن البرنامج التدريبي، التحديات الحالية، أو المخرجات المستهدفة...",
        form_submit_btn: "إرسال الطلب ومناقشة التعاون",
        form_success_text: "تم استلام طلبك بنجاح! سيتم التواصل معك قريبًا جدًا.",

        // Footer
        footer_desc: "حلول للتعلّم والتطوير — نربط بين التخطيط والتقييم وتحليلات البيانات وسد فجوات المهارات لمساعدة المدربين والمؤسسات على بناء تجارب تعلّم قابلة للقياس والتطوير.",
        footer_sol_title: "حلول المنظومة",
        footer_cycle_title: "دورة التحسين المستمر",
        footer_rights: "© 2026 رَقِيم — جميع الحقوق محفوظة | تصميم مخصص للأعمال والتعاون المؤسسي",
        footer_blog_link: "📖 مجلة ومدونة رَقِيم",
        footer_status: "متاح للمشاريع والتعاون الاستشاري",

        // Modals
        m1_desc: "منهجية شاملة لتحويل الأفكار التدريبية إلى خطط تعلم متماسكة تضمن تحقيق أثر حقيقي وقابل للقياس.",
        m1_box_title: "ما الذي نقدمه في هذه الأداة؟",
        m1_bullets: `<li>صياغة أهداف التعلّم السلوكية والمعرفية طبقًا لمستويات بلوم المعدلة (Bloom's Taxonomy).</li><li>بناء التسلسل البيداغوجي (Pedagogical Sequencing) للمحتوى لضمان التدرج المنطقي.</li><li>تصميم الأنشطة التفاعلية الفردية والجماعية وربطها المباشر بأهداف الوحدة.</li>`,

        m2_desc: "أدوات علمية لجمع الشواهد الحقيقية والتأكد من إتقان المتعلم للمهارات المستهدفة بعدالة ودقة.",
        m2_box_title: "المخرجات والنماذج المشمولة:",
        m2_bullets: `<li>قوالب روبرك تقييم أداء المشاريع والمهام العملية (Rubrics).</li><li>معايير تقييم التفاعل والنقاش الصفي والافتراضي.</li><li>منهجية تحليل نتائج التقييم لتحسين المحتوى وليس لمجرد إعطاء درجات.</li>`,

        m3_desc: "تحويل التدفق الرقمي لسلوك المتعلمين إلى لوحات معلومات ذكية تساعد المدرب والمشرف على اتخاذ قرارات دقيقة.",
        m3_box_title: "مؤشرات الأداء التي نتتبعها:",
        m3_bullets: `<li>معدلات الإكمال والاستبقاء (Retention & Completion Rates).</li><li>تحليل أنماط التفاعل مع المحتوى ومقاطع الفيديو والأنشطة.</li><li>التنبؤ المبكر بالمتعلمين المعرضين للتعثر (At-risk Learners).</li>`,

        m4_desc: "تحديد الفجوات بين واقع المهارات الحالي والمهارات المستهدفة، مع رسم مسارات تعلّم دقيقة لسد تلك الفجوات.",
        m4_box_title: "المنهجية والمخرجات:",
        m4_bullets: `<li>رسم مصفوفة الكفاءات والمهارات (Competency Framework).</li><li>تحديد الأولويات التدريبية وفق الأثر المالي والتشغيلي.</li><li>هندسة مسارات تعلّم مرنة (Customized Learning Paths).</li>`,

        modal_cta_btn: "طلب هذا الحل لمؤسستي"
    },

    en: {
        page_title: "Raqeem | Data-Driven Learning & Development Solutions",
        brand_name: "Raqeem",
        brand_subtitle: "Learning Engineering & Measurement",
        
        // Navigation
        nav_solutions: "Solutions",
        nav_cycle: "Framework",
        nav_audiences: "Audiences",
        nav_needs: "Diagnostic",
        nav_blog: "Journal",
        nav_lab: "Analytics Lab",
        nav_cta: "Get in Touch",
        mobile_nav_blog: "📖 Raqeem Knowledge Journal & Blog",
        mobile_nav_lab: "🧪 Learning Analytics Lab",

        // Hero Section
        hero_pill_badge: "Smart Learning Design & Measurement",
        hero_pill_tag: "Evidence-Based Learning",
        hero_headline: `We plan learning, <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-teal-600 to-emerald-500 dark:from-brand-300 dark:via-teal-300 dark:to-emerald-300 font-black inline-block">measure impact</span>, and leverage data to evolve.`,
        hero_manifesto: `<strong class="text-gray-950 dark:text-white font-bold">Raqeem</strong> delivers actionable frameworks and toolkits to design, assess, and continuously refine learning programs — from competency alignment and authentic assessment to learning analytics and skill gap remediation.`,
        hero_formula_title: "Connecting the 4 pillars in one unified ecosystem",
        pillar_1_short: "Learning Design",
        pillar_2_short: "Assessment",
        pillar_3_short: "Analytics",
        pillar_4_short: "Skills Dev",
        hero_cta_explore: "Explore Raqeem Solutions",
        hero_cta_needs: "Diagnose Your Need",
        trust_1: "For Trainers & Training Providers",
        trust_2: "For Corporate L&D Teams",
        trust_3: "For Academic & Higher Ed Institutions",

        // Solutions Section
        sol_subtitle: "Ecosystem Pillars",
        sol_title: "Specialized Raqeem Solutions",
        sol_desc: "Applied toolkits and methodologies engineered to make your training programs crystal clear, measurable, and continuously improving.",
        
        // Solution 1
        sol1_badge: "01 — Learning Design",
        sol1_title: "Course Planning Toolkit",
        sol1_sub: "Transform training ideas into structured, high-impact learning plans.",
        sol1_desc: "Tools to define measurable learning outcomes, organize micro-content, craft engaging activities, and architect seamless pedagogical sequencing.",
        sol1_point1: "Curriculum architecture maps & module breakdowns",
        sol1_point2: "Objective-to-Activity Alignment Matrix",

        // Solution 2
        sol2_badge: "02 — Learning Assessment",
        sol2_title: "Learning Assessment Kit",
        sol2_sub: "Align assessments with what learners truly need to master.",
        sol2_desc: "Frameworks to design diagnostic, formative, and summative assessments directly tied to objectives, turning evaluation data into instant curriculum enhancements.",
        sol2_point1: "Evidence-based rubric templates & performance criteria",
        sol2_point2: "Scenario-based item banks & authentic task evaluation",

        // Solution 3
        sol3_badge: "03 — Learning Analytics",
        sol3_title: "Learning Analytics Dashboard",
        sol3_sub: "Transform learning data into decisive, actionable intelligence.",
        sol3_desc: "Uncover learner drop-off points, measure engagement velocity, track mastery benchmarks, and unlock behavioral insights that drive data-informed course optimization.",
        sol3_point1: "Interactive executive KPI dashboards for learning metrics",
        sol3_point2: "Diagnostic reporting for at-risk learner intervention",

        // Solution 4
        sol4_badge: "04 — Skills Development",
        sol4_title: "Skills Gap Analysis",
        sol4_sub: "Pinpoint skill deficits and engineer personalized learning pathways.",
        sol4_desc: "Leverage assessment metrics to diagnose individual and team skill gaps, prioritize training ROI, and construct targeted, modular learning pathways.",
        sol4_point1: "Role-based competency frameworks & skill matrices",
        sol4_point2: "Progressive, adaptive learning pathways for targeted mastery",

        // Pipelines
        pipe_title: "Applied Methodology Pipeline",
        pipe_steps_count: "4 Sequential Milestones",
        step_1_label: "Set Objectives",
        step_2_label: "Structure Content",
        step_3_label: "Active Practice",
        step_4_label: "Impact Measurement",
        step_1_align: "Objective Alignment",
        step_2_assess: "Assessment Design",
        step_3_evidence: "Evidence Gathering",
        step_4_improve: "Iterative Refinement",
        step_1_data: "Data Ingestion",
        step_2_analysis: "Smart Analytics",
        step_3_insight: "Insight Synthesis",
        step_4_action: "Strategic Action",
        step_1_reality: "Baseline Audit",
        step_2_map: "Skill Mapping",
        step_3_gap: "Gap Diagnosis",
        step_4_path: "Targeted Path",
        btn_explore_details: "Explore Solution Details",

        // Continuous Improvement Cycle
        cycle_badge: "Methodology & Philosophy",
        cycle_title: "How Does Raqeem Work?",
        cycle_quote: "“We start with the problem, never just the tool.”",
        cycle_desc: "At Raqeem, course design, assessment, analytics, and skill development are never treated in isolation — they operate in a closed, continuous improvement loop.",
        cycle_1_ar: "Plan",
        cycle_1_desc: "Define exactly what learners must master through robust behavioral objectives and structured learning journeys.",
        cycle_1_tag: "Outcome Alignment",
        cycle_2_ar: "Assess",
        cycle_2_desc: "Architect authentic evidence-gathering instruments to verify genuine competency acquisition.",
        cycle_2_tag: "Evidence Capture",
        cycle_3_ar: "Analyze",
        cycle_3_desc: "Process learner behavioral streams to understand engagement patterns and diagnose learning friction.",
        cycle_3_tag: "Data Insights",
        cycle_4_ar: "Develop",
        cycle_4_desc: "Convert analytical findings into targeted, modular learning pathways that address real performance gaps.",
        cycle_4_tag: "Adaptive Paths",
        cycle_5_ar: "Improve",
        cycle_5_desc: "Systematically calibrate courses, assessments, and learning assets in an iterative quality cycle.",
        cycle_5_tag: "Continuous Impact",
        insight_pill: "From Learning to Continuous Improvement",
        insight_quote: "“The goal isn’t merely publishing content or logging numbers; it’s harnessing learning science to elevate the learner’s actual outcome.”",

        // Target Audiences
        aud_badge: "Value Alignment",
        aud_title: "Who Is Raqeem Built For?",
        aud_desc: "Tailored solutions for training firms, corporate L&D departments, independent educators, and academic institutions.",
        aud_1_title: "Training Providers",
        aud_1_sub: "Training Providers & Academies",
        aud_1_desc: "Upgrade training packages, ensure measurable competency gains, and deliver undeniable ROI to corporate clients.",
        aud_1_tag: "Elevate Training Package Competitiveness",
        aud_2_title: "Educators & Trainers",
        aud_2_sub: "Independent Educators & Trainers",
        aud_2_desc: "Structure courses methodically, author authentic rubrics, and interpret learner analytics effortlessly without technical overhead.",
        aud_2_tag: "Save Time & Elevate Assessment Quality",
        aud_3_title: "L&D Teams",
        aud_3_sub: "Corporate L&D & People Teams",
        aud_3_desc: "Identify critical workforce skill gaps, close competencies systematically, and link training directly to business performance.",
        aud_3_tag: "Align Training with Business KPIs",
        aud_4_title: "Educational Orgs",
        aud_4_sub: "Academic & Higher Ed Institutions",
        aud_4_desc: "Construct scalable, evidence-based learning ecosystems with rigorous governance and continuous quality benchmark standards.",
        aud_4_tag: "Ensure Rigorous Quality & Governance",

        // Needs Assessment
        need_badge: "Smart Interactive Advisor",
        need_title: "Start With Your Need",
        need_desc: "Select your primary training objective or current institutional bottleneck, and Raqeem will recommend the optimal pathway immediately:",
        need_opt_1_num: "Option 01",
        need_opt_1_title: "Are you launching a brand new training program?",
        need_opt_2_num: "Option 02",
        need_opt_2_title: "Do you want to audit and upgrade an existing course?",
        need_opt_3_num: "Option 03",
        need_opt_3_title: "Do you need to improve learner assessment methods & rubrics?",
        need_opt_4_num: "Option 04",
        need_opt_4_title: "Do you have learner data and want actionable insights?",
        need_opt_5_num: "Option 05",
        need_opt_5_title: "Do you want to diagnose skill gaps & engineer targeted Learning Paths?",
        rec_sequence_label: "Recommended Implementation Pipeline:",
        rec_ready_prompt: "Ready to deploy this framework in your organization?",
        rec_request_btn: "Request a Tailored Consultation",

        // Contact Section
        contact_badge: "Institutional Partnerships & Consulting",
        contact_title: `Start with your need, and let <span class="text-brand-600 dark:text-brand-400">Raqeem</span> engineer the solution.`,
        contact_desc: "Whether you represent a corporate training firm, an HR & L&D team, or an academic organization seeking evidence-based learning experiences — we turn your challenges into measurable systems.",
        contact_email_label: "Consulting & Partnership Email",
        contact_copy_btn: "Copy",
        contact_wa_label: "Direct WhatsApp",
        contact_wa_chat: "Chat Now",

        // Form
        form_title: "Send an Inquiry or Partnership Request",
        form_subtitle: "Fill out the brief form below and our learning engineering team will respond within 24 hours to schedule a discovery call.",
        form_name_label: "Full Name / Organization",
        form_name_placeholder: "e.g. Dr. Sarah Jenkins / Delta Training Academy",
        form_email_label: "Official Email Address",
        form_phone_label: "Phone / WhatsApp Number",
        form_sol_label: "Selected Solution Track",
        drop_opt1_desc: "Curriculum planning, learning outcomes & course architecture",
        drop_opt2_desc: "Authentic rubrics, evidence-based assessments & item banks",
        drop_opt3_desc: "LMS analytics, engagement insights & KPI dashboards",
        drop_opt4_desc: "Competency matrices & modular learning pathways",
        drop_opt5_title: "Raqeem All-in-One Ecosystem",
        drop_opt5_desc: "End-to-end consulting across all design & measurement phases",
        form_msg_label: "Project Scope & Challenge Details",
        form_msg_placeholder: "Describe your program, target audience, existing bottlenecks, or expected deliverables...",
        form_submit_btn: "Submit Inquiry & Request Proposal",
        form_success_text: "Thank you! Your inquiry has been received. Our team will get in touch promptly.",

        // Footer
        footer_desc: "Evidence-based learning engineering — bridging curriculum design, authentic assessment, analytics, and skill gap remediation for measurable training impact.",
        footer_sol_title: "Core Solutions",
        footer_cycle_title: "Continuous Cycle",
        footer_rights: "© 2026 Raqeem — All Rights Reserved | Enterprise Learning Engineering",
        footer_blog_link: "📖 Raqeem Knowledge Journal",
        footer_status: "Available for Consulting & Bespoke Engagements",

        // Modals
        m1_desc: "A comprehensive methodology for converting training concepts into coherent learning blueprints that guarantee measurable mastery.",
        m1_box_title: "What we deliver in this solution:",
        m1_bullets: `<li>Behavioral and cognitive learning outcome formulation aligned with Revised Bloom's Taxonomy.</li><li>Pedagogical sequencing that ensures logical scaffolded progression.</li><li>Interactive individual and collaborative learning activities directly mapped to unit objectives.</li>`,

        m2_desc: "Scientific tools to collect authentic evidence and verify learner competency acquisition with equity and precision.",
        m2_box_title: "Deliverables & Artifacts Included:",
        m2_bullets: `<li>Evidence-based performance scoring rubrics for practical assignments and projects.</li><li>Standardized criteria for classroom and asynchronous discussion evaluation.</li><li>Assessment outcome analytics to refine curriculum rather than just assign grades.</li>`,

        m3_desc: "Transforming digital learner behavioral exhaust into strategic dashboards that empower instructors and leaders to intervene decisively.",
        m3_box_title: "Key Metrics We Monitor:",
        m3_bullets: `<li>Retention, progression velocity, and milestone completion rates.</li><li>Engagement heatmaps across video, micro-content, and interactive tasks.</li><li>Predictive early-warning indicators for at-risk learners.</li>`,

        m4_desc: "Diagnosing exact gaps between baseline competencies and target performance, with tailored roadmaps to bridge them efficiently.",
        m4_box_title: "Methodology & Artifacts:",
        m4_bullets: `<li>Role-based competency matrices and skill inventory frameworks.</li><li>Training prioritization based on operational and business ROI impact.</li><li>Adaptive, modular learning pathways (Customized Learning Paths).</li>`,

        modal_cta_btn: "Request This Solution for My Organization"
    }
};

// Needs Assessment Dynamic Recommendation Database
const needsDataLang = {
    ar: {
        1: {
            pillar: "الحل الموصى به: 01 Learning Design",
            title: "Course Planning Toolkit",
            tag: "Plan Phase",
            desc: "نبدأ معك من الصفر لصياغة أهداف تعلّم قابلة للقياس (Measurable Objectives)، وهيكلة المحتوى، وتصميم الأنشطة التي تضمن تحقيق أثر حقيقي ونقل المعرفة بكفاءة.",
            formula: "<span>Objective</span> → <span>Content</span> → <span>Activity</span> → <span>Assessment</span>",
            selectVal: "learning-design"
        },
        2: {
            pillar: "الحل الموصى به: 01 & 05 Course Redesign & Improvement",
            title: "Course Audit & Redesign",
            tag: "Improve Phase",
            desc: "نقوم بمراجعة شاملة للدورة القائمة لتشخيص مواضع الخلل، وإعادة هيكلة الأنشطة والتقييمات ورفع جاذبية التعلّم وتأثيره.",
            formula: "<span>Review</span> → <span>Gap Audit</span> → <span>Redesign</span> → <span>Re-Launch</span>",
            selectVal: "learning-design"
        },
        3: {
            pillar: "الحل الموصى به: 02 Learning Assessment",
            title: "Learning Assessment Kit",
            tag: "Assess Phase",
            desc: "نصمم لك روبرك ومعايير قياس وبنوك أسئلة شواهد دقيقة تعكس مدى الإتقان الفعلي وتمنحك بيانات موثوقة عن تقدم المتعلمين.",
            formula: "<span>Objective</span> → <span>Assessment</span> → <span>Evidence</span> → <span>Improvement</span>",
            selectVal: "learning-assessment"
        },
        4: {
            pillar: "الحل الموصى به: 03 Learning Analytics",
            title: "Learning Analytics Dashboard",
            tag: "Analyze Phase",
            desc: "نربط بياناتك بلوحات تحكم ذكية تستخرج مؤشرات التفاعل، وتحدد أسباب التعثر ومعدلات التسرب لتمكين قرارات تدريبية مبنية على الحقائق.",
            formula: "<span>Data</span> → <span>Analysis</span> → <span>Insight</span> → <span>Action</span>",
            selectVal: "learning-analytics"
        },
        5: {
            pillar: "الحل الموصى به: 04 Skills Development",
            title: "Skills Gap Analysis",
            tag: "Develop Phase",
            desc: "نحدد الفجوة الدقيقة بين الكفاءات الحالية والمطلوبة لموظفيك أو متعلميك، ونرسم خرائط مسارات تعلّم تدريجية لمعالجة الفجوات المستهدفة.",
            formula: "<span>Assessment</span> → <span>Skill Mapping</span> → <span>Gap</span> → <span>Learning Path</span>",
            selectVal: "skills-development"
        }
    },
    en: {
        1: {
            pillar: "Recommended Solution: 01 Learning Design",
            title: "Course Planning Toolkit",
            tag: "Plan Phase",
            desc: "We engineer your program from scratch: formulating measurable learning objectives, structuring micro-content chunks, and designing active engagement tasks.",
            formula: "<span>Objective</span> → <span>Content</span> → <span>Activity</span> → <span>Assessment</span>",
            selectVal: "learning-design"
        },
        2: {
            pillar: "Recommended Solution: 01 & 05 Course Redesign",
            title: "Course Audit & Redesign",
            tag: "Improve Phase",
            desc: "A rigorous pedagogical diagnostic of your existing curriculum to eliminate friction, revamp passive content into interactive tasks, and elevate completion rates.",
            formula: "<span>Review</span> → <span>Gap Audit</span> → <span>Redesign</span> → <span>Re-Launch</span>",
            selectVal: "learning-design"
        },
        3: {
            pillar: "Recommended Solution: 02 Learning Assessment",
            title: "Learning Assessment Kit",
            tag: "Assess Phase",
            desc: "We author authentic scoring rubrics, scenario item banks, and formative checks that verify genuine skill application and provide dependable mastery data.",
            formula: "<span>Objective</span> → <span>Assessment</span> → <span>Evidence</span> → <span>Improvement</span>",
            selectVal: "learning-assessment"
        },
        4: {
            pillar: "Recommended Solution: 03 Learning Analytics",
            title: "Learning Analytics Dashboard",
            tag: "Analyze Phase",
            desc: "We connect your LMS telemetry streams to executive dashboards that illuminate engagement patterns, isolate drop-off bottlenecks, and guide proactive interventions.",
            formula: "<span>Data</span> → <span>Analysis</span> → <span>Insight</span> → <span>Action</span>",
            selectVal: "learning-analytics"
        },
        5: {
            pillar: "Recommended Solution: 04 Skills Development",
            title: "Skills Gap Analysis",
            tag: "Develop Phase",
            desc: "We map your organizational competency framework, audit baseline talent capabilities, and architect targeted, modular learning pathways.",
            formula: "<span>Assessment</span> → <span>Skill Mapping</span> → <span>Gap</span> → <span>Learning Path</span>",
            selectVal: "skills-development"
        }
    }
};

// Solution Dropdown Titles & Metadata
const solutionTitles = {
    'learning-design': {
        icon: 'layout-template',
        title: '01 — Learning Design',
        desc: { ar: 'تخطيط البرامج والدورات وتصميم المناهج', en: 'Curriculum planning & course architecture' }
    },
    'learning-assessment': {
        icon: 'clipboard-check',
        title: '02 — Learning Assessment',
        desc: { ar: 'تصميم التقييم وبناء الشواهد والروبرك', en: 'Authentic rubrics & evidence-based assessment' }
    },
    'learning-analytics': {
        icon: 'bar-chart-3',
        title: '03 — Learning Analytics',
        desc: { ar: 'تحليل بيانات التعلّم ولوحات المؤشرات الذكية', en: 'LMS analytics & insight dashboards' }
    },
    'skills-development': {
        icon: 'git-branch',
        title: '04 — Skills Gap Analysis',
        desc: { ar: 'تحليل فجوات المهارات ومسارات التعلم', en: 'Competency matrices & learning pathways' }
    },
    'all-inclusive': {
        icon: 'sparkles',
        title: 'All-in-One Ecosystem',
        desc: { ar: 'منظومة رَقِيم المتكاملة للاستشارات التعليمية', en: 'End-to-end learning engineering suite' }
    }
};
