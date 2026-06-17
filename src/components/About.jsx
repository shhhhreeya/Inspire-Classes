import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { GraduationCap, Lightbulb, BookOpen } from "lucide-react";
import archanaImage from "../assets/archana_jpeg.jpeg";

const traits = [
  { icon: GraduationCap, title: "M.Sc. Physics", desc:["Post-graduate with deep subject mastery across sciences and math."]},
  { icon: GraduationCap, title: "B.Ed.", desc: ["Every child learns differently. I adapt my teaching to each student."] },
  { icon: Lightbulb, title: "Experience as a College lecturer", desc: ["• Shri Vaishnav Polytechnic College, Indore", "• Kothari College of Management Science and Technology, Indore", "• Priyadarshini College, Indore", "• Government Science College, Begumganj",
    "• S. S. L. Jain College, Vidisha"] }
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image placeholder with decorations */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* Main image area */}
            <div className="relative">
              <div className="aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-sky-50 border border-slate-100 shadow-xl">
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-slate-300">
                  <img src={archanaImage} alt="Archana Jaiswal" />
                  
                </div>
              </div>

              {/* Decorative blocks */}
              <div className="absolute -top-5 -left-5 w-20 h-20 rounded-2xl bg-indigo-600 opacity-10" />
              <div className="absolute -bottom-5 -right-5 w-32 h-32 rounded-3xl bg-amber-400 opacity-10" />

              {/* Experience badge */}
              <div className="absolute top-6 -right-6 bg-indigo-600 text-white rounded-2xl px-5 py-4 shadow-xl shadow-indigo-200">
                <div className="text-3xl font-display font-bold">25+</div>
                <div className="text-xs font-medium opacity-90">Years of<br />Teaching</div>
              </div>

              {/* Achievement tag */}
              <div className="absolute -bottom-2 left-6 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-slate-100">
                <div className="text-2xl">🏆</div>
                <div>
                  <div className="text-xs font-bold text-navy-900">Board Exam Results</div>
                  <div className="text-[11px] text-slate-500">80%+ avg in Class 10</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
              About the Teacher
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-6">
              More than a tutor,{" "}
              <span className="text-indigo-600 italic">a mentor</span> who cares.
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              Hello! I'm Archana Jaiswal, the founder of Inspire Classes. With over 25+ years of dedicated teaching
              experience, I've had the privilege of guiding students from Class 1 right through
              their Class 10 board exams.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              My teaching philosophy is simple: every student has potential, they just need the
              right environment to unlock it. I focus on building genuine understanding rather than
              memorization, creating a space where asking questions is celebrated, not discouraged.
            </p>

            {/* Traits grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {traits.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-indigo-50 border border-transparent hover:border-indigo-100 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-indigo-100 group-hover:bg-indigo-200 flex items-center justify-center mb-3 transition-colors">
                    <Icon size={17} className="text-indigo-600" />
                  </div>
                  <div className="text-sm font-semibold text-navy-900 mb-1">{title}</div>
                  <div className="text-xs text-slate-500 leading-relaxed">
                    {Array.isArray(desc) ? (
                      desc.map((item, idx) => (
                        <div key={idx}>{item}</div>
                      ))
                    ) : (
                      desc
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
