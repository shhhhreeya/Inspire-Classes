import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Image } from "lucide-react";

const galleryItems = [
  { label: "Classroom Session", size: "tall", emoji: "📖" },
  { label: "Group Study", size: "normal", emoji: "👥" },
  { label: "Whiteboard Learning", size: "normal", emoji: "✏️" },
  { label: "Exam Prep", size: "wide", emoji: "📝" },
  { label: "Science Activity", size: "normal", emoji: "🔬" },
  { label: "Student Awards", size: "tall", emoji: "🏅" },
  { label: "Problem Solving", size: "normal", emoji: "🧮" },
  { label: "Certificate Distribution", size: "wide", emoji: "🎓" },
];

const gradients = [
  "from-indigo-100 to-indigo-200",
  "from-sky-100 to-sky-200",
  "from-violet-100 to-violet-200",
  "from-indigo-100 to-sky-200",
  "from-emerald-100 to-emerald-200",
  "from-violet-100 to-indigo-200",
  "from-sky-100 to-indigo-200",
  "from-amber-100 to-amber-200",
];

export default function Gallery() {
  const [ref, inView] = useInView();

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
            Gallery
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-5">
            Life at Inspire Classes
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            A glimpse into our classroom — where curiosity meets clarity.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer
                ${item.size === "tall" ? "row-span-2" : ""}
                ${item.size === "wide" ? "col-span-2" : ""}
              `}
            >
              <div
                className={`w-full bg-gradient-to-br ${gradients[i % gradients.length]} 
                  flex flex-col items-center justify-center
                  ${item.size === "tall" ? "h-full min-h-[280px]" : "h-40 md:h-48"}
                  ${item.size === "wide" ? "h-40 md:h-48" : ""}
                  transition-transform duration-300 group-hover:scale-105
                `}
              >
                <span className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </span>
                <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                  <Image size={11} />
                  {item.label}
                </div>
                <div className="text-[10px] text-slate-300 mt-1">Add your photo here</div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/20 transition-all duration-300 rounded-2xl flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 rounded-xl px-3 py-1.5 text-xs font-semibold text-navy-900 shadow-lg">
                    {item.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-slate-400 mt-8"
        >
          Replace placeholders with real classroom photos to build authentic trust with parents
        </motion.p>
      </div>
    </section>
  );
}
