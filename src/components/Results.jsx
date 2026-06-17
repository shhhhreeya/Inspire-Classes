import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { useEffect, useState } from "react";
import { TrendingUp, Star, Award } from "lucide-react";

function CountUp({ target, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}



const resultCards = [
  { name: " Tashvi Singh ", class: "Class 10 (2024-25)", before: 90, after: 97, subject: "10th Boards" },
  { name: "Prince Kohli", class: "Class 10 (2024-25)", before: 75, after: 84, subject: "10th Boards" },
  { name: "Eeshee Karma", class: "Class 10 (2024-25)", before: 72, after: 80, subject: "10th Boards" },
  { name: "Akshita Ekwale", class: "Class 10 (2024-25)", before: 61, after: 70, subject: "10th Boards" },
  { name: " Samarth Vishwakarma ", class: "Class 8 (2024-25)", before: 78, after: 82, subject: "All Subjects" },
  { name: "Dakshesh Kadam", class: "Class 7 (2024-25)", before: 77, after: 79, subject: "All Subjects" },
  { name: "Akul Jaiswal", class: "Class 7 (2024-25)", before: 66, after: 73, subject: "All Subjects" },
  { name: "Aradhya", class: "Class 9 (2024-25)", before: 71, after: 76, subject: "All Subjects" },
];

export default function Results() {
  const [ref, inView] = useInView();

  return (
    <section id="results" className="py-20 lg:py-28 bg-gradient-to-br from-indigo-950 via-indigo-900 to-navy-900 relative overflow-hidden">
      {/* BG decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-indigo-400 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-amber-400 blur-3xl" />
      </div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 text-indigo-200 rounded-full text-xs font-semibold uppercase tracking-wider mb-5 border border-white/10">
            Student Results
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Results that speak for themselves
          </h2>
          <p className="text-indigo-300 text-lg leading-relaxed">
            Every number here is a story of a child who found their confidence.
          </p>
        </motion.div>

        {/* Result cards */}
        <div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {resultCards.map(({ name, class: cls, before, after, subject }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="bg-white rounded-2xl p-5 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-display font-bold text-indigo-600 text-sm">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900 text-sm">{name}</div>
                    <div className="text-[11px] text-slate-400">{cls}</div>
                  </div>
                </div>
                <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-2">{subject}</div>
                <div className="flex items-end gap-3 mb-3">
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-slate-400">{before}%</div>
                    <div className="text-[10px] text-slate-400">Before</div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <TrendingUp size={18} className="text-green-500" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-indigo-600">{after}%</div>
                    <div className="text-[10px] text-slate-400">After</div>
                  </div>
                </div>
                <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: `${before}%` }}
                    animate={inView ? { width: `${after}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.6 + i * 0.1, ease: "easeOut" }}
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-full"
                  />
                </div>
                <div className="mt-2 text-right text-xs font-semibold text-green-600">
                  +{after - before}% improvement
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
