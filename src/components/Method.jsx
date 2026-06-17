import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Brain, PenTool, HelpCircle, ClipboardCheck, LineChart } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Brain,
    title: "Concept Building",
    desc: "We start from the ground up — explaining the 'why' behind every topic. Through visual aids, real-world analogies, and interactive explanations, students don't just learn what to do, they understand why it works.",
    color: "indigo",
  },
  {
    num: "02",
    icon: PenTool,
    title: "Guided Practice",
    desc: "Knowledge becomes skill through practice. Students work through problems step by step, guided by the teacher. Mistakes are treated as learning moments — not failures.",
    color: "violet",
  },
  {
    num: "03",
    icon: HelpCircle,
    title: "Doubt Resolution",
    desc: "Every doubt is addressed with patience. Dedicated doubt-clearing time ensures no student moves forward with unresolved confusion. No question is too basic.",
    color: "sky",
  },
  {
    num: "04",
    icon: ClipboardCheck,
    title: "Weekly Assessments",
    desc: "Short weekly tests help reinforce learning and identify gaps early. These aren't high-pressure exams — they're tools for the teacher and student to calibrate progress together.",
    color: "emerald",
  },
  {
    num: "05",
    icon: LineChart,
    title: "Progress Analysis",
    desc: "Each student's journey is tracked and reviewed. Parents receive regular updates. Learning plans are adjusted based on where each student excels and where they need extra support.",
    color: "amber",
  },
];

const colorMap = {
  indigo: { dot: "bg-indigo-600 border-indigo-200", icon: "bg-indigo-50 text-indigo-600", line: "bg-indigo-100", num: "text-indigo-600", card: "hover:border-indigo-200" },
  violet: { dot: "bg-violet-600 border-violet-200", icon: "bg-violet-50 text-violet-600", line: "bg-violet-100", num: "text-violet-600", card: "hover:border-violet-200" },
  sky: { dot: "bg-sky-500 border-sky-200", icon: "bg-sky-50 text-sky-600", line: "bg-sky-100", num: "text-sky-600", card: "hover:border-sky-200" },
  emerald: { dot: "bg-emerald-600 border-emerald-200", icon: "bg-emerald-50 text-emerald-600", line: "bg-emerald-100", num: "text-emerald-600", card: "hover:border-emerald-200" },
  amber: { dot: "bg-amber-500 border-amber-200", icon: "bg-amber-50 text-amber-600", line: "bg-amber-100", num: "text-amber-600", card: "hover:border-amber-200" },
};

export default function Method() {
  const [ref, inView] = useInView();

  return (
    <section id="method" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
            Teaching Method
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-5">
            A process designed for real learning
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Every session follows a proven, structured approach that takes students from
            confusion to clarity — and keeps them there.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {steps.map(({ num, icon: Icon, title, desc, color }, i) => {
            const c = colorMap[color];
            return (
              <motion.div
                key={num}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                {/* Timeline line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-slate-200" />
                )}

                {/* Dot */}
                <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-2xl ${c.dot} border-4 flex items-center justify-center shadow-md`}>
                  <Icon size={18} className="text-white" />
                </div>

                {/* Content */}
                <div className={`flex-1 bg-white rounded-2xl p-6 border border-slate-100 ${c.card} hover:shadow-md transition-all duration-300`}>
                  <div className={`text-xs font-bold ${c.num} mb-1 font-display`}>{num}</div>
                  <h3 className="font-semibold text-navy-900 text-lg mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
