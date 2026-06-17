import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { BookOpen, Calculator, FlaskConical, Trophy, Pencil, ClipboardList } from "lucide-react";

const classCards = [
  {
    grade: "Classes 1–8",
    label: "Foundation Years",
    color: "indigo",
    emoji: "📚",
    subjects: [
      { icon: BookOpen, name: "All Subjects", desc: "Hindi, English, Math, Science, SST — complete academic support" },
      { icon: Pencil, name: "Homework Support", desc: "Daily guided homework completion and concept reinforcement" },
      { icon: ClipboardList, name: "Exam Preparation", desc: "Unit tests, half-yearly, and annual exam strategy" },
    ],
  },
  {
    grade: "Classes 9–10",
    label: "Board Exam Track",
    color: "amber",
    emoji: "🎯",
    subjects: [
      { icon: Calculator, name: "Mathematics", desc: "Algebra, Geometry, Trigonometry, Statistics — concept to problem" },
      { icon: FlaskConical, name: "Science", desc: "Physics, Chemistry, Biology — full NCERT + application-based" },
      { icon: Trophy, name: "Board Preparation", desc: "CBSE/State-Board focused, past papers, mock tests, revision plans" },
    ],
  },
];

const colorMap = {
  indigo: {
    bg: "bg-indigo-600",
    light: "bg-indigo-50",
    border: "border-indigo-100",
    icon: "bg-indigo-100 text-indigo-600",
    badge: "bg-indigo-100 text-indigo-700",
    hover: "hover:border-indigo-200",
    glow: "shadow-indigo-100",
  },
  amber: {
    bg: "bg-amber-500",
    light: "bg-amber-50",
    border: "border-amber-100",
    icon: "bg-amber-100 text-amber-600",
    badge: "bg-amber-100 text-amber-700",
    hover: "hover:border-amber-200",
    glow: "shadow-amber-100",
  },
};

export default function Classes() {
  const [ref, inView] = useInView();

  return (
    <section id="classes" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
            Classes & Subjects
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-5">
            Tailored learning for every stage
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            From foundational literacy and numeracy to board exam mastery — structured
            programs for every class and learning level.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {classCards.map((card, i) => {
            const c = colorMap[card.color];
            return (
              <motion.div
                key={card.grade}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`bg-white rounded-3xl overflow-hidden shadow-lg ${c.glow} hover:shadow-xl transition-all duration-300 border border-slate-100 ${c.hover}`}
              >
                {/* Card header */}
                <div className={`${c.bg} px-8 py-7 relative overflow-hidden`}>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 text-6xl opacity-20">
                    {card.emoji}
                  </div>
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${card.color === 'indigo' ? 'bg-white/20 text-white' : 'bg-white/20 text-white'}`}>
                    {card.label}
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-white">
                    {card.grade}
                  </h3>
                </div>

                {/* Subjects */}
                <div className="p-6 flex flex-col gap-4">
                  {card.subjects.map(({ icon: Icon, name, desc }) => (
                    <div
                      key={name}
                      className={`flex items-start gap-4 p-4 rounded-2xl ${c.light} border ${c.border} hover:shadow-sm transition-all`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${c.icon}`}>
                        <Icon size={17} />
                      </div>
                      <div>
                        <div className="font-semibold text-navy-900 text-sm mb-1">{name}</div>
                        <div className="text-xs text-slate-500 leading-relaxed">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                    className={`block w-full text-center py-3.5 rounded-2xl font-semibold text-sm transition-all ${c.bg} text-white hover:opacity-90 shadow-md`}
                  >
                    Inquire About {card.grade}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-slate-400 mt-8"
        >
          ✦ Demo class available before enrollment &nbsp;·&nbsp; Both online and offline options
        </motion.p>
      </div>
    </section>
  );
}
