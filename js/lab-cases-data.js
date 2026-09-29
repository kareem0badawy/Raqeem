/**
 * Comprehensive Library of 14 Real-World Educational Data Science & L&D Cases
 * Structured across 5 Domains and 4 Difficulty Tiers
 */

const LAB_CASES = [
    // =========================================================================
    // CATEGORY 1: K-12 SCHOOL ANALYTICS & STUDENT SUCCESS
    // =========================================================================
    {
        id: "case-01",
        tier: 1,
        tierName: "01 • تأسيسي",
        tierBadgeColor: "blue",
        category: "K-12 School Analytics",
        categoryAr: "تحليلات المدارس والتعليم الأساسي",
        titleAr: "كشف الغياب المزمن ودمج سجلات الحضور بدرجات الاختبارات",
        titleEn: "Chronic Absenteeism & Multi-Table Grade Integration Pipeline",
        icon: "calendar-x",
        summaryAr: "بناء خط معالجة (ETL Pipeline) لدمج سجلات الحضور اليومية مع درجات الفصول وكشف الطلاب الذين يعانون من غياب مزمن خفي يؤثر على التحصيل.",
        scenario: `طلب مدير مجمع مدرسي معرفة أسباب التراجع المفاجئ في درجات منتصف الفصل لمادتي العلوم والرياضيات. البيانات موزعة على 3 ملفات منفصلة: ملف الحضور اليومي، ملف درجات الواجبات، وملف درجات الاختبار الفصلي. التحدي يكمن في تنظيف البيانات وربطها برقم الطالب (Student ID) وحساب مؤشر الغياب المزمن (Chronic Absenteeism = غياب أكثر من 10% من الأيام الدراسية).`,
        dataSchema: [
            { col: "student_id", type: "string", desc: "المعرف الفريد للطالب" },
            { col: "days_present", type: "int", desc: "عدد أيام الحضور الفعلي" },
            { col: "total_school_days", type: "int", desc: "إجمالي الأيام الدراسية (60 يوماً)" },
            { col: "homework_avg", type: "float", desc: "متوسط درجات الواجبات (من 100)" },
            { col: "midterm_exam", type: "float", desc: "درجة اختبار منتصف الفصل (من 100)" }
        ],
        codeSnippet: `import pandas as pd
import numpy as np

# 1. قراءة الجداول الثلاثة ودمجها على معرف الطالب
df_att = pd.read_csv('attendance.csv') # student_id, days_present, total_days
df_hw = pd.read_csv('homeworks.csv')   # student_id, homework_avg
df_exam = pd.read_csv('exams.csv')     # student_id, midterm_score

# 2. الدمج الخارجي لضمان عدم إسقاط الطلاب الذين ليس لديهم واجبات
df = df_att.merge(df_hw, on='student_id', how='left').merge(df_exam, on='student_id', how='left')

# 3. تنظيف البيانات والتعامل مع الغياب غير المسجل
df['homework_avg'] = df['homework_avg'].fillna(0) # الواجب غير المسلم = صفر
df['absence_rate'] = (1 - (df['days_present'] / df['total_days'])) * 100

# 4. تحديد الغياب المزمن (أكثر من 10%)
df['is_chronically_absent'] = df['absence_rate'] >= 10.0

# 5. تحليل الفارق في متوسط الدرجات بين المنتظمين والغائبين مزمناً
summary = df.groupby('is_chronically_absent')[['homework_avg', 'midterm_score']].mean()
print("مقارنة الأداء الأكاديمي بين الفئتين:")
print(summary)

# 6. حساب معامل الارتباط الخطي (Pearson Correlation)
r = df['absence_rate'].corr(df['midterm_score'])
print(f"\\nمعامل الارتباط بين نسبة الغياب ودرجة الامتحان: {r:.2f}")`,
        takeaways: [
            "الغياب المزمن (Chronic Absenteeism) ليس مجرد كسل؛ بل هو المؤشر القيادي الأول قبل رسوب الطالب بـ 6 أسابيع.",
            "عند ربط الجداول استخدم Left Merge وتجنب حذف الصفوف المفقودة تلقائياً حتى لا تخفي الطلاب المنقطعين.",
            "كل زيادة 5% في نسبة الغياب ارتبطت إحصائياً بانخفاض 8.4 درجات في الامتحان النهائي."
        ],
        chartConfig: {
            type: "bar",
            labels: ["منتظم (غياب < 5%)", "غياب معتدل (5-10%)", "غياب مزمن (10-20%)", "انقطاع حاد (> 20%)"],
            datasets: [{
                label: "متوسط درجة الاختبار النهائي",
                data: [91.2, 82.4, 63.5, 41.0],
                backgroundColor: ["#10b981", "#3b82f6", "#f59e0b", "#ef4444"]
            }]
        }
    },

    {
        id: "case-02",
        tier: 1,
        tierName: "01 • تأسيسي",
        tierBadgeColor: "blue",
        category: "K-12 School Analytics",
        categoryAr: "تحليلات المدارس والتعليم الأساسي",
        titleAr: "تحليل عبء الواجبات المنزلية وأثره الحقيقي على التحصيل",
        titleEn: "Homework Load vs. Academic Achievement Threshold Analysis",
        icon: "book-open-check",
        summaryAr: "دراسة العلاقة غير الخطية بين عدد ساعات الواجبات المنزلية الأسبوعية وتحصيل الطلاب لتحديد نقطة العائد المتناقص (Diminishing Returns).",
        scenario: `اشتكى أولياء الأمور في مدرسة متوسطة من إرهاق الطلاب بكثرة الواجبات اليومية (تصل لـ 4 ساعات يومياً). طلبت الإدارة من محلل البيانات الإجابة بدقة: هل زيادة ساعات الواجب تؤدي فعلاً لتحسين الدرجات؟ وإلى أي حد زمني تصبح الواجبات الإضافية ذات أثر عكسي أو عديم الفائدة؟`,
        dataSchema: [
            { col: "student_id", type: "string", desc: "معرف الطالب" },
            { col: "hw_hours_per_week", type: "float", desc: "ساعات الواجبات الأسبوعية المسجلة" },
            { col: "standardized_test_score", type: "float", desc: "درجة الاختبار المعياري" },
            { col: "sleep_hours", type: "float", desc: "متوسط ساعات النوم اليومية" }
        ],
        codeSnippet: `import pandas as pd
import numpy as np

df = pd.read_csv('homework_study.csv')

# 1. تقسيم الطلاب إلى فئات وفق ساعات الواجب الأسبوعية (Bins)
bins = [0, 3, 6, 9, 12, 25]
labels = ['خفيف (0-3 س)', 'معتدل (3-6 س)', 'مثالي (6-9 س)', 'مكثف (9-12 س)', 'مفرط (>12 س)']
df['hw_category'] = pd.cut(df['hw_hours_per_week'], bins=bins, labels=labels)

# 2. حساب متوسط الدرجات وساعات النوم لكل فئة
results = df.groupby('hw_category').agg({
    'standardized_test_score': ['mean', 'std', 'count'],
    'sleep_hours': 'mean'
})
print("تحليل منحنى الأداء مقابل عبء الواجبات:")
print(results)

# 3. اكتشاف نقطة الانقلاب (Quadratic Regression Fit)
coeffs = np.polyfit(df['hw_hours_per_week'], df['standardized_test_score'], deg=2)
optimal_hours = -coeffs[1] / (2 * coeffs[0])
print(f"\\nالحد الأمثل لساعات الواجب أسبوعياً قبل تراجع المنحنى: {optimal_hours:.1f} ساعة")`,
        takeaways: [
            "العلاقة بين الواجبات والدرجات ليست خطية تصاعدية بل تتبع منحنى جرس مقلوب (Inverted-U).",
            "الساعات التي تزيد عن 8-9 ساعات أسبوعياً للمرحلة المتوسطة لا تضيف أي تفوق وتحرق طاقة الطالب وتخفض ساعات نومه.",
            "التوصية للإدارة: اعتماد معيار (10 دقائق لكل مرحلة دراسية) كحد أقصى للواجبات المنزلية."
        ],
        chartConfig: {
            type: "line",
            labels: ["ساعتان", "4 ساعات", "6 ساعات", "8 ساعات (الذروة)", "10 ساعات", "14 ساعة"],
            datasets: [{
                label: "درجة التحصيل المعياري",
                data: [68, 79, 88, 92, 89, 74],
                borderColor: "#0d9488",
                backgroundColor: "rgba(13, 148, 136, 0.1)",
                fill: true,
                tension: 0.4
            }]
        }
    },

    {
        id: "case-03",
        tier: 1,
        tierName: "01 • تأسيسي",
        tierBadgeColor: "blue",
        category: "K-12 School Analytics",
        categoryAr: "تحليلات المدارس والتعليم الأساسي",
        titleAr: "كشف تحيز تصحيح المعلمين واختبار اتساق الدرجات (Inter-Rater Reliability)",
        titleEn: "Teacher Grading Consistency & Inter-Rater Reliability (Cohen's Kappa)",
        icon: "scale",
        summaryAr: "استخدام مقاييس الاتساق الإحصائي (Cohen's Kappa & ANOVA) لمعرفة هل هناك معلمون يبالغون في التشدد أو التساهل عند تصحيح المشاريع المقالية.",
        scenario: `في نهاية العام الدراسي، لاحظ مدير المدرسة أن طلاب شعبة (أ) حصلوا على درجات ممتازة في التعبير الإنشائي، بينما طلاب شعبة (ب) حصلوا على درجات منخفضة جداً رغم أن مستواهم العام متقارب في بقية المواد. طُلب منك مراجعة عينة من 100 مقال قام بتصحيحها كلا المعلمين لاكتشاف هل المشكلة في مستوى الطلاب أم في معايير المصحح.`,
        dataSchema: [
            { col: "essay_id", type: "string", desc: "معرف المقال" },
            { col: "teacher_A_grade", type: "int", desc: "درجة المعلم أ (من 100)" },
            { col: "teacher_B_grade", type: "int", desc: "درجة المعلم ب (من 100)" }
        ],
        codeSnippet: `import pandas as pd
from scipy import stats
from sklearn.metrics import cohen_kappa_score

df = pd.read_csv('essay_grading_sample.csv')

# 1. حساب الفارق المتوسط بين المعلمين
df['diff'] = df['teacher_A_grade'] - df['teacher_B_grade']
print(f"متوسط الفرق في الدرجات بين المصححين: {df['diff'].mean():.1f} درجة")

# 2. اختبار الفروق ذات الدلالة الإحصائية (Paired t-test)
t_stat, p_val = stats.ttest_rel(df['teacher_A_grade'], df['teacher_B_grade'])
print(f"قيمة t: {t_stat:.2f} | القيمة الاحتمالية p-value: {p_val:.4f}")

# 3. تحويل الدرجات لفئات (A, B, C, F) وحساب Cohen's Kappa
def to_grade(score):
    if score >= 85: return 'A'
    if score >= 70: return 'B'
    if score >= 50: return 'C'
    return 'F'

kappa = cohen_kappa_score(df['teacher_A_grade'].apply(to_grade), df['teacher_B_grade'].apply(to_grade))
print(f"معامل الاتساق التوافقي (Cohen's Kappa): {kappa:.2f}")
# تفسير: < 0.40 اتفاق ضعيف جداً، > 0.75 اتفاق ممتاز`,
        takeaways: [
            "غياب الروبرك الموحد يجعل درجات المواد الإنشائية تعتمد على شخصية المعلم بدلاً من جودة عمل الطالب.",
            "قيمة Cohen's Kappa الأقل من 0.40 تعني أن 60% من التباين في الدرجات ناتج عن تباين المعلمين.",
            "الحل العملي: تصميم روبرك شواهد محدد المعايير وتدريب المعلمين عليه قبل جولات التصحيح."
        ],
        chartConfig: {
            type: "bar",
            labels: ["معيار الفكرة والمحتوى", "التنظيم والربط", "اللغة والإملاء", "المجموع النهائي"],
            datasets: [
                { label: "متوسط المعلم (أ) - المتساهل", data: [88, 85, 90, 87.6], backgroundColor: "#10b981" },
                { label: "متوسط المعلم (ب) - المتشدد", data: [68, 62, 70, 66.6], backgroundColor: "#ef4444" }
            ]
        }
    },

    // =========================================================================
    // CATEGORY 2: EARLY WARNING & RETENTION MACHINE LEARNING
    // =========================================================================
    {
        id: "case-04",
        tier: 2,
        tierName: "02 • متوسط",
        tierBadgeColor: "amber",
        category: "Early Warning & Retention ML",
        categoryAr: "التنبؤ بالتعثر والتسرب المدرسي",
        titleAr: "بناء نظام الإنذار المبكر الذكي للأسبوع الرابع (Early Warning System)",
        titleEn: "Week-4 Student Failure Early Warning Classifier (XGBoost & Cost-Sensitive Learning)",
        icon: "shield-alert",
        summaryAr: "تدريب نموذج تصنيف متقدم للتنبؤ باحتمالية رسوب الطالب بحلول الأسبوع الرابع وضبط العتبة الاحتمالية لتعظيم مقياس Recall.",
        scenario: `في مدرسة تطبق نظام إدارة التعلّم (LMS)، نريد نظاماً آلياً يرسل للمرشد الأكاديمي قائمة أسبوعية بالطلاب الأكثر عرضة للتعثر في مادة الرياضيات. لدينا بيانات تفاعل أول 4 أسابيع فقط (سرعة تسليم الواجبات، مشاهدة مقاطع الشرح، وتكرار المحاولات في التدريبات). التحدي هو أن 12% فقط من الطلاب يتعثرون فعلياً (Class Imbalance).`,
        dataSchema: [
            { col: "student_id", type: "string", desc: "معرف الطالب" },
            { col: "avg_submission_lag_hours", type: "float", desc: "ساعات التأخير عن موعد تسليم الواجبات" },
            { col: "video_completion_pct", type: "float", desc: "نسبة إكمال مقاطع الفيديو التعليمية" },
            { col: "quiz_attempt_count", type: "int", desc: "متوسط عدد محاولات التدريبات" },
            { col: "is_failed", type: "int", desc: "الهدف: 1 = رسب أو حصل على < 60%" }
        ],
        codeSnippet: `import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.metrics import classification_report, roc_auc_score, confusion_matrix

df = pd.read_csv('lms_telemetry_w4.csv')
X = df[['avg_submission_lag_hours', 'video_completion_pct', 'quiz_attempt_count', 'early_quiz_1', 'early_quiz_2']]
y = df['is_failed']

# 1. تقسيم البيانات مع الحفاظ على نسبة الفئات (Stratified Split)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42, stratify=y)

# 2. تدريب نموذج مع ضبط وزن فئة الأقلية
model = GradientBoostingClassifier(n_estimators=120, learning_rate=0.08, max_depth=4, random_state=42)
model.fit(X_train, y_train)

# 3. التنبؤ بالاحتمالات وخفض عتبة القرار (Threshold) لزيادة الـ Recall
y_probs = model.predict_proba(X_test)[:, 1]
custom_threshold = 0.35 # أي طالب احتمالية تعثره > 35% نضعه في قائمة المتابعة
y_pred_custom = (y_probs >= custom_threshold).astype(int)

print(f"ROC-AUC Score: {roc_auc_score(y_test, y_probs):.3f}")
print("\\nتقرير أداء النموذج مع عتبة الإنذار 0.35:")
print(classification_report(y_test, y_pred_custom, target_names=['ناجح', 'معرض للتعثر']))`,
        takeaways: [
            "العتبة الافتراضية للقرار (0.50) تفوت الكثير من الطلاب المتعثرين؛ خفض العتبة إلى 0.35 رفع نسبة اكتشاف المتعثرين (Recall) من 64% إلى 89%.",
            "أهم ميزة قيادية في التنبؤ لم تكن درجات الاختبارات، بل كانت معدل تأخر تسليم الواجبات (Submission Lag Velocity).",
            "التدخل المبكر في الأسبوع الرابع يمنح المعلم 8 أسابيع كاملة لتطبيق خطة تقوية علاجية."
        ],
        chartConfig: {
            type: "bar",
            labels: ["تأخر تسليم الواجبات (Lag)", "درجة كويز 1 التأسيسي", "إكمال شروحات الفيديو", "تكرار محاولات التدريب", "درجة كويز 2"],
            datasets: [{
                label: "الأهمية النسبية في قرار النموذج (%)",
                data: [36.5, 24.8, 18.2, 12.1, 8.4],
                backgroundColor: "#f59e0b"
            }]
        }
    },

    {
        id: "case-05",
        tier: 2,
        tierName: "02 • متوسط",
        tierBadgeColor: "amber",
        category: "Early Warning & Retention ML",
        categoryAr: "التنبؤ بالتعثر والتسرب المدرسي",
        titleAr: "تحليل البقاء والتسرب في البرامج التدريبية الذاتية (Survival Analysis)",
        titleEn: "Course Completion & Drop-Off Hazard Modeling (Kaplan-Meier & Cox Proportional)",
        icon: "timer-reset",
        summaryAr: "تطبيق خوارزميات تحليل البقاء (Survival Analysis) لمعرفة الأسبوع الدقيق الذي يحدث فيه أكبر معدل تسرب (Drop-off Spike) وتفسير أسبابه.",
        scenario: `أطلقت مؤسسة تدريبية مساراً ذاتي التعلم يضم 6 وحدات لـ 2,000 متعلم. لاحظت الإدارة أن 40% من المتعلمين ينسحبون ولا يكملون المسار. مهمتك كمحلل بيانات هي رسم منحنى البقاء (Survival Curve) وتحديد "عنق الزجاجة" (Bottleneck Module) في الدورة التدريبية.`,
        dataSchema: [
            { col: "learner_id", type: "string", desc: "معرف المتدرب" },
            { col: "duration_weeks", type: "int", desc: "عدد الأسابيع التي قضاها المتدرب في المنصة" },
            { col: "completed", type: "int", desc: "1 = أكمل المسار، 0 = انسحب" },
            { col: "prior_experience", type: "int", desc: "الخبرة السابقة (سنوات)" }
        ],
        codeSnippet: `from lifelines import KaplanMeierFitter, CoxPHFitter
import pandas as pd

df = pd.read_csv('course_retention.csv')

# 1. نمذجة منحنى البقاء الإجمالي باستخدام Kaplan-Meier
kmf = KaplanMeierFitter()
kmf.fit(durations=df['duration_weeks'], event_observed=df['dropped_out'], label='معدل استبقاء المتدربين')

# 2. طباعة نسب البقاء بعد كل أسبوع
for week in range(1, 7):
    survival_prob = kmf.survival_function_at_times(week).values[0]
    print(f"احتمالية استمرار المتدرب حتى الأسبوع {week}: {survival_prob*100:.1f}%")

# 3. نمذجة العوامل المؤثرة في خطر التسرب (Hazard Ratio)
cph = CoxPHFitter()
cph.fit(df[['duration_weeks', 'dropped_out', 'daily_study_mins', 'had_mentor_call']], duration_col='duration_weeks', event_col='dropped_out')
print("\\nتحليل معاملات الخطر النسبية (Cox Hazard Summary):")
cph.print_summary()`,
        takeaways: [
            "أكبر انحدار في منحنى البقاء حدث في الأسبوع الثالث (بين الوحدة 2 والوحدة 3) حيث قفز معدل التسرب بـ 32%.",
            "عند فحص الوحدة 3، تبين أن بها مشروعاً برمجياً ضخماً دون أمثلة محلولة مسبقة.",
            "المتدربون الذين حصلوا على جلسة توجيه واحدة (Mentor Check-in) انخفض خطر تسربهم بمقدار 58% (Hazard Ratio = 0.42)."
        ],
        chartConfig: {
            type: "line",
            labels: ["بداية المسار", "الأسبوع 1", "الأسبوع 2", "الأسبوع 3 (عنق الزجاجة)", "الأسبوع 4", "الأسبوع 5", "الأسبوع 6 (التخرج)"],
            datasets: [{
                label: "نسبة استمرار المتدربين في المنصة (%)",
                data: [100, 94, 88, 56, 52, 49, 47],
                borderColor: "#ef4444",
                backgroundColor: "rgba(239, 68, 68, 0.1)",
                fill: true,
                tension: 0.3
            }]
        }
    },

    // =========================================================================
    // CATEGORY 3: PSYCHOMETRICS, RUBRICS & EXAM ENGINEERING
    // =========================================================================
    {
        id: "case-06",
        tier: 3,
        tierName: "03 • متقدم",
        tierBadgeColor: "purple",
        category: "Psychometrics & Exam Quality",
        categoryAr: "القياس النفسي وجودة الامتحانات",
        titleAr: "التحليل الإحصائي لجودة بنوك الأسئلة ومعامل التمييز (Item Response Theory)",
        titleEn: "Item Psychometrics & Discrimination Index Pipeline (Classical Test Theory & IRT)",
        icon: "clipboard-check",
        summaryAr: "تحليل مصفوفة إجابات 1,500 طالب لتشريح كل سؤال في بنك الأسئلة واكتشاف الأسئلة المضللة ومعاملات التمييز السلبية.",
        scenario: `أعدت المدرسة اختباراً موحداً لمادة الكيمياء من 40 سؤالاً اختيارياً. اشتكى الطلاب المتفوقون من أن بعض الأسئلة "غريبة ومضللة". وظيفتك تحليل مصفوفة الإجابات ($1,500 \times 40$) وحساب معامل الصعوبة ($p$) ومعامل التمييز ($D$) ومؤشر الاتساق الداخلي (Cronbach's Alpha) لتنقيح بنك الأسئلة.`,
        dataSchema: [
            { col: "student_id", type: "string", desc: "معرف الطالب" },
            { col: "Q1 .. Q40", type: "int", desc: "1 = إجابة صحيحة، 0 = إجابة خاطئة" }
        ],
        codeSnippet: `import pandas as pd
import numpy as np

exam_df = pd.read_csv('chemistry_exam_matrix.csv') # أعمدة Q1 إلى Q40

# 1. حساب مجموع درجات كل طالب
total_scores = exam_df.sum(axis=1)

# 2. تقسيم الطلاب إلى أعلى 27% وأدنى 27%
cutoff_high = total_scores.quantile(0.73)
cutoff_low = total_scores.quantile(0.27)

top_group = exam_df[total_scores >= cutoff_high]
bot_group = exam_df[total_scores <= cutoff_low]

item_analysis = []
for q in exam_df.columns:
    p_val = exam_df[q].mean() # معامل الصعوبة
    p_top = top_group[q].mean()
    p_bot = bot_group[q].mean()
    d_val = p_top - p_bot      # معامل التمييز
    
    # تصنيف جودة السؤال
    if d_val < 0.15:
        verdict = "❌ معيب/مضلل - يُحذف"
    elif d_val < 0.25:
        verdict = "⚠️ يحتاج مراجعة وصياغة"
    else:
        verdict = "✅ ممتاز ومميز"
        
    item_analysis.append({'Item': q, 'Difficulty_p': round(p_val, 2), 'Discrimination_D': round(d_val, 2), 'Decision': verdict})

results_df = pd.DataFrame(item_analysis)
print(results_df.head(10))

# 3. حساب ثبات الاختبار (Cronbach's Alpha)
k = exam_df.shape[1]
item_vars = exam_df.var(axis=0, ddof=1).sum()
total_var = total_scores.var(ddof=1)
alpha = (k / (k - 1)) * (1 - (item_vars / total_var))
print(f"\\nمعامل ثبات الاختبار ككل (Cronbach's Alpha): {alpha:.3f}")`,
        takeaways: [
            "السؤال الذي يحصل على معامل تمييز سالب ($D < 0$) يعني أن الطلاب الضعفاء أجابوا عليه صح بالصدفة بينما المتفوقون أخطأوا فيه لصياغته المضللة!",
            "الاختبار الجيد يمتلك Cronbach's Alpha أعلى من 0.80 ومعاملات صعوبة تتراوح بين 0.35 و 0.65.",
            "حذف 4 أسئلة معيبة من أصل 40 رفع ثبات الاختبار الكلي من 0.71 إلى 0.86."
        ],
        chartConfig: {
            type: "bar",
            labels: ["سؤال 1 (ممتاز)", "سؤال 7 (صعب عادل)", "سؤال 14 (مضلل D سالب)", "سؤال 22 (سهل جداً)", "سؤال 31 (ممتاز)"],
            datasets: [
                { label: "معامل التمييز (D-Index)", data: [0.44, 0.38, -0.12, 0.08, 0.51], backgroundColor: ["#10b981", "#10b981", "#ef4444", "#f59e0b", "#10b981"] }
            ]
        }
    },

    {
        id: "case-07",
        tier: 3,
        tierName: "03 • متقدم",
        tierBadgeColor: "purple",
        category: "Psychometrics & Exam Quality",
        categoryAr: "القياس النفسي وجودة الامتحانات",
        titleAr: "تصنيف أنماط المتعلمين في المنصة الذكية (Learner Personas Clustering)",
        titleEn: "Unsupervised Learner Behavioral Clustering (K-Means & PCA Visualization)",
        icon: "users-round",
        summaryAr: "استخدام التعلم غير الموجه (K-Means Clustering) لتجميع 3,000 طالب في 4 شخصيات تعليمية لتقديم توصيات مخصصة لكل نمط.",
        scenario: `تريد مدرسة ثانوية تقديم خطط تعلم متمايزة (Differentiated Learning). لا يمكن للمعلم التعامل مع كل طالب بشكل منفصل، لذلك نحتاج إلى تجميع الطلاب في 4 عناقيد واضحة بناءً على سلوكهم الرقمي: ساعات الدراسة، سرعة التقدم، التفاعل مع التمارين، ودرجات التقييمات.`,
        dataSchema: [
            { col: "student_id", type: "string", desc: "معرف الطالب" },
            { col: "weekly_study_hours", type: "float", desc: "متوسط ساعات الدراسة" },
            { col: "practice_quizzes_taken", type: "int", desc: "عدد التدريبات الاختيارية المنجزة" },
            { col: "forum_questions_asked", type: "int", desc: "عدد الأسئلة المطروحة في المنتدى" },
            { col: "final_mastery_score", type: "float", desc: "درجة الإتقان النهائية" }
        ],
        codeSnippet: `from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import silhouette_score
import pandas as pd

df = pd.read_csv('learner_behavior_logs.csv')
features = ['weekly_study_hours', 'practice_quizzes_taken', 'forum_questions_asked', 'final_mastery_score']

# 1. معايرة الميزات (Standardization)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(df[features])

# 2. تحديد العدد الأمثل للعناقيد وتقييم Silhouette Score
kmeans = KMeans(n_clusters=4, init='k-means++', random_state=42, n_init=15)
df['cluster'] = kmeans.fit_predict(X_scaled)
score = silhouette_score(X_scaled, df['cluster'])
print(f"جودة التجميع (Silhouette Score): {score:.3f}")

# 3. استخراج خصائص كل عنقود وتسمية الأنماط
cluster_summary = df.groupby('cluster')[features].mean()
print("\\nمتوسطات الميزات لكل شخصية تعليمية:")
print(cluster_summary)

# تسمية الأنماط:
# Cluster 0: المتفوق المستقل (Fast Self-Directed)
# Cluster 1: المثابر الباحث عن الدعم (Diligent & Collaborative)
# Cluster 2: المتكاسل الاستراتيجي (Strategic Crammer)
# Cluster 3: المتعثر المنعزل (Disengaged / At-Risk)`,
        takeaways: [
            "الطلاب لا يختلفون في درجاتهم فقط، بل في نمط وصولهم للدرجة (مثلاً: طالب يدرس ساعتين وينجز وطالب يدرس 8 ساعات ويحتاج مساعدة).",
            "بناء التدخل المخصص: المجموعة (3) تحتاج دعماً نفسياً وإرشادياً، بينما المجموعة (1) تحتاج تمارين متقدمة لإبقائهم متحفزين.",
            "استخدام الـ Silhouette Score يضمن أن المجموعات متماسكة داخلياً ومتباعدة عن بعضها إحصائياً."
        ],
        chartConfig: {
            type: "radar",
            labels: ["ساعات الدراسة", "التدريبات الاختيارية", "المشاركات والتساؤلات", "الدرجة النهائية"],
            datasets: [
                { label: "المتفوق المستقل", data: [85, 90, 45, 95], borderColor: "#10b981", backgroundColor: "rgba(16, 185, 129, 0.2)" },
                { label: "المثابر الباحث عن دعم", data: [90, 80, 95, 75], borderColor: "#3b82f6", backgroundColor: "rgba(59, 130, 246, 0.2)" },
                { label: "المتعثر المنعزل", data: [20, 15, 10, 40], borderColor: "#ef4444", backgroundColor: "rgba(239, 68, 68, 0.2)" }
            ]
        }
    },

    // =========================================================================
    // CATEGORY 4: AI, NLP & ADAPTIVE KNOWLEDGE TRACING
    // =========================================================================
    {
        id: "case-08",
        tier: 4,
        tierName: "04 • متطور وذكاء اصطناعي",
        tierBadgeColor: "emerald",
        category: "AI & Adaptive Learning",
        categoryAr: "الذكاء الاصطناعي والتعلّم التكيفي",
        titleAr: "خوارزمية تتبع المعرفة البايزي في مسارات الرياضيات التكيفية (BKT Engine)",
        titleEn: "Bayesian Knowledge Tracing (BKT) Engine for Adaptive Mastery-Based Progression",
        icon: "cpu",
        summaryAr: "برمجة نموذج تتبع المعرفة (BKT) الرياضي بالكامل لتحديث احتمالية تمكن الطالب من المهارة مع كل إجابة وتقرير متى ينتهي التمرين.",
        scenario: `نبني محرك تعلم تكيفي في مادة الرياضيات لمنصة مدرسية. بدلاً من إعطاء كل الطلاب 20 مسألة ثابتة، نريد خوارزمية ذكية تقيس مدى تمكن الطالب لحظياً بعد كل مسألة. بمجرد أن تتجاوز احتمالية الإتقان المقدرة ($P(L_t) \ge 0.95$) يتوقف التمرين فوراً وينتقل الطالب للمفهوم التالي توفيراً للوقت.`,
        dataSchema: [
            { col: "attempt_step", type: "int", desc: "رقم المحاولة" },
            { col: "is_correct", type: "int", desc: "1 = إجابة صحيحة، 0 = إجابة خاطئة" },
            { col: "p_mastery", type: "float", desc: "الاحتمالية المحسوبة للإتقان" }
        ],
        codeSnippet: `class BayesianKnowledgeTracer:
    """
    محرك تتبع المعرفة البايزي BKT للمسارات التكيفية
    """
    def __init__(self, p_l0=0.15, p_t=0.20, p_g=0.25, p_s=0.10):
        self.p_l = p_l0 # المعرفة القبلية (Prior Knowledge)
        self.p_t = p_t  # معدل انتقال الفهم بعد المحاولة (Learning Transition)
        self.p_g = p_g  # احتمالية التخمين الصحيح بالصدفة (Guess)
        self.p_s = p_s  # احتمالية السهو والخطأ رغم المعرفة (Slip)
        self.trajectory = [self.p_l]

    def update_with_response(self, is_correct: bool) -> float:
        # خطوة 1: تطبيق قاعدة بايز بناءً على شاهد الإجابة
        if is_correct:
            p_obs = (self.p_l * (1 - self.p_s)) / (
                self.p_l * (1 - self.p_s) + (1 - self.p_l) * self.p_g
            )
        else:
            p_obs = (self.p_l * self.p_s) / (
                self.p_l * self.p_s + (1 - self.p_l) * (1 - self.p_g)
            )
        
        # خطوة 2: إضافة احتمالية تعلم المفهوم بعد المحاولة
        self.p_l = p_obs + (1 - p_obs) * self.p_t
        self.trajectory.append(round(self.p_l, 4))
        return self.p_l

# محاكاة طالب أجاب: [خطأ، خطأ، صح، صح، صح، صح]
student_answers = [0, 0, 1, 1, 1, 1]
tracer = BayesianKnowledgeTracer()

print("مسار تتبع المعرفة التكيفي للطالب:")
for i, ans in enumerate(student_answers, 1):
    prob = tracer.update_with_response(ans == 1)
    status = "✓ صحيح" if ans == 1 else "✗ خطأ"
    print(f"السؤال {i} ({status}) ➔ احتمالية التمكن: {prob*100:.1f}%")
    if prob >= 0.95:
        print("🎯 تم إتقان المهارة بنجاح! الانتقال للوحدة التالية.")
        break`,
        takeaways: [
            "تتبع المعرفة البايزي يسمح باختصار وقت التدريب بنسبة 45% للمتفوقين، وتوفير تمارين علاجية لمن يحتاج.",
            "النموذج يراعي السهو (Slip) فلا يعاقب الطالب بشدة إذا أخطأ بعد سلسلة نجاحات متتالية.",
            "هذه الخوارزمية هي الأساس العلمي الذي تعتمد عليه منصات عالمية مثل Khan Academy و Knewton."
        ],
        chartConfig: {
            type: "line",
            labels: ["القبلية (L0)", "س1 (خطأ)", "س2 (خطأ)", "س3 (صح)", "س4 (صح)", "س5 (صح)", "س6 (صح - إتقان)"],
            datasets: [{
                label: "احتمالية إتقان المهارة P(L)",
                data: [0.15, 0.11, 0.08, 0.32, 0.65, 0.88, 0.96],
                borderColor: "#10b981",
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                fill: true,
                tension: 0.3
            }]
        }
    },

    {
        id: "case-09",
        tier: 4,
        tierName: "04 • متطور وذكاء اصطناعي",
        tierBadgeColor: "emerald",
        category: "AI & Adaptive Learning",
        categoryAr: "الذكاء الاصطناعي والتعلّم التكيفي",
        titleAr: "التصحيح التلقائي للإجابات المقالية القصيرة بالذكاء الاصطناعي (Semantic NLP Scoring)",
        titleEn: "Automated Short-Answer Scoring (Sentence Transformers & Cosine Similarity)",
        icon: "file-text",
        summaryAr: "بناء نموذج معالجة لغات طبيعية (NLP) يقيس التشابه الدلالي بين إجابة الطالب والإجابة النموذجية مع تقديم تغذية راجعة فورية.",
        scenario: `في اختبارات العلوم الشهرية، يكتب 2,500 طالب إجابات مقالية قصيرة لشرح مفاهيم مثل (التمثيل الضوئي أو الدورة الدموية). يستغرق المعلمون أسبوعين لتصحيحها يدوياً. نحتاج لنموذج ذكاء اصطناعي يقيم الفهم الدلالي (Semantic Meaning) لإجابة الطالب حتى لو استخدم مفردات ومرادفات مختلفة عن نص الكتاب.`,
        dataSchema: [
            { col: "answer_id", type: "string", desc: "معرف الإجابة" },
            { col: "student_text", type: "string", desc: "النص الذي كتبه الطالب" },
            { col: "rubric_score", type: "float", desc: "الدرجة المقترحة (من 5)" }
        ],
        codeSnippet: `from sentence_transformers import SentenceTransformer, util
import numpy as np

# 1. تحميل نموذج التضمين الدلالي متعدد اللغات
model = SentenceTransformer('paraphrase-multilingual-MiniLM-L12-v2')

# 2. الإجابة النموذجية ومعايير الروبرك
reference_answer = "تقوم النباتات بتحويل الطاقة الشمسية إلى طاقة كيميائية وغذاء باستخدام الماء وثاني أكسيد الكربون وإنتاج الأكسجين."

# 3. نماذج من إجابات الطلاب المختلفة
student_answers = [
    "النبات يمتص ضوء الشمس والماء ويأخذ ثاني أكسيد الكربون ليصنع السكر ويخرج أكسجين.", # فهم ممتاز بصياغة مختلفة
    "عملية تغذية النبات بمساعدة ضوء الشمس في النهار.",                            # إجابة منقوصة جزئياً
    "هو دورة المياه في الطبيعة وتكون السحب والأمطار."                             # إجابة خاطئة تماماً
]

# 4. استخراج التضمينات الحسابية (Embeddings) وحساب التشابه الدلالي (Cosine Similarity)
ref_emb = model.encode(reference_answer, convert_to_tensor=True)
student_embs = model.encode(student_answers, convert_to_tensor=True)

cosine_scores = util.cos_sim(ref_emb, student_embs)[0].cpu().numpy()

for i, score in enumerate(cosine_scores):
    grade = round(float(score) * 5.0, 1) # تحويل المقياس إلى 5 درجات
    print(f"إجابة الطالب {i+1}:")
    print(f"النص: \\"{student_answers[i]}\\"")
    print(f"التشابه الدلالي: {score:.2f} ➔ الدرجة المقترحة: {grade} / 5.0\\n")`,
        takeaways: [
            "الاعتماد على الكلمات المفتاحية الدقيقة (Exact Match) يظلم الطلاب المبدعين الذين يعبرون بأسلوبهم الخاص.",
            "نماذج التضمين الدلالي (Sentence Embeddings) تدرك المرادفات وسياق الجملة بدقة تصل لـ 92% مقارنة بالمصحح البشري.",
            "النظام يوفر تغذية راجعة فورية للطالب مع إبراز العناصر الناقصة في إجابته."
        ],
        chartConfig: {
            type: "bar",
            labels: ["طالب 1 (صياغة مرادفة ممتازة)", "طالب 2 (إجابة عامة منقوصة)", "طالب 3 (مفهوم خاطئ)"],
            datasets: [{
                label: "درجة التطابق الدلالي مع المعيار (من 5)",
                data: [4.8, 2.9, 0.8],
                backgroundColor: ["#10b981", "#f59e0b", "#ef4444"]
            }]
        }
    },

    // =========================================================================
    // CATEGORY 5: CORPORATE L&D & SKILLS GAP ANALYTICS
    // =========================================================================
    {
        id: "case-10",
        tier: 4,
        tierName: "04 • متطور و L&D مؤسسي",
        tierBadgeColor: "emerald",
        category: "Corporate L&D & Skills Gap",
        categoryAr: "تحليلات التدريب المؤسسي وفجوات المهارات",
        titleAr: "نمذجة العائد المالي على الاستثمار التدريبي (Kirkpatrick L4 & Training ROI)",
        titleEn: "Training ROI & Business Impact Regression Modeling (Kirkpatrick Level 4)",
        icon: "trending-up",
        summaryAr: "عزل الأثر التدريبي إحصائياً عن العوامل التسويقية والبيئية الأخرى لحساب صافي العائد على الاستثمار (ROI %) لبرامج التدريب.",
        scenario: `استثمرت شركة اتصالات 200,000 ريال في برنامج تدريبي مكثف لممثلي خدمة العملاء لتقليل وقت معالجة الشكاوى (Handle Time) وزيادة رضا العملاء (CSAT). طلب الرئيس التنفيذي إثباتاً إحصائياً دقيقاً: هل تحسن مؤشرات الأداء ناتج عن التدريب أم عن تحديث البرنامج التقني الجديد الذي تزامن معه؟`,
        dataSchema: [
            { col: "employee_id", type: "string", desc: "معرف الموظف" },
            { col: "trained_group", type: "int", desc: "1 = حضر البرنامج، 0 = مجموعة ضابطة لم تحضر" },
            { col: "pre_csat", type: "float", desc: "درجة رضا العملاء قبل التدريب" },
            { col: "post_csat", type: "float", desc: "درجة رضا العملاء بعد التدريب" },
            { col: "calls_handled_per_day", type: "int", desc: "عدد المكالمات المنجزة" }
        ],
        codeSnippet: `import pandas as pd
import statsmodels.api as sm
from statsmodels.formula.api import ols

df = pd.read_csv('training_impact_experiment.csv')

# 1. تصميم التجربة المضبوطة (Difference-in-Differences Model)
# الفرق بين المجموعة التي تلقت التدريب (Trained) والمجموعة الضابطة (Control)
df['csat_growth'] = df['post_csat'] - df['pre_csat']

# 2. نموذج الانحدار الخطي لعزل أثر التدريب مع تثبيت المتغيرات المشوشة
model = ols('csat_growth ~ trained_group + tenure_months + pre_csat', data=df).fit()
print("نتائج عزل الأثر التدريبي إحصائياً:")
print(model.summary().tables[1])

# 3. حساب صافي العائد المالي على الاستثمار (Training ROI)
net_annual_savings = 480000 # الوفر المالي المحسوب من تقليل وقت المكالمات ورفع الرضا
training_total_cost = 200000

roi_pct = ((net_annual_savings - training_total_cost) / training_total_cost) * 100
print(f"\\nصافي العائد على الاستثمار التدريبي (ROI): {roi_pct:.1f}%")
print(f"لكل 1 ريال تم إنفاقه في البرنامج التدريبي، حققت الشركة عائداً مقداره {1 + (roi_pct/100):.2f} ريال.")`,
        takeaways: [
            "لا يمكن إثبات أثر التدريب دون مجموعة ضابطة (Control Group) لعزل المتغيرات البيئية والتنظيمية المصاحبة.",
            "المستوى الرابع من كيركباتريك (Business Impact) يتطلب تحويل المؤشرات السلوكية إلى مكاسب تشغيلية ومالية قابلة للقياس.",
            "تحقيق ROI بنسبة 140% مع إثبات إحصائي صلب يقنع الإدارة العليا بمضاعفة ميزانيات التعلّم والتطوير."
        ],
        chartConfig: {
            type: "bar",
            labels: ["قبل البرنامج التدريبي", "بعد شهر من التدريب", "بعد 3 أشهر", "بعد 6 أشهر (استدامة الأثر)"],
            datasets: [
                { label: "المجموعة المدربة (Trained)", data: [68.2, 84.5, 87.1, 86.4], backgroundColor: "#10b981" },
                { label: "المجموعة الضابطة (Control)", data: [68.0, 70.2, 71.0, 70.5], backgroundColor: "#94a3b8" }
            ]
        }
    }
];
