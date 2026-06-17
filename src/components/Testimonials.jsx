import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sunita Verma",
    relation: "Parent of Riya, Class 10",
    avatar: "S",
    rating: 5,
    color: "indigo",
    text: "My daughter went from dreading Math to actually enjoying it. Her board exam score improved by 30 marks in just 6 months. The teacher's patience and clear explanations made all the difference.",
  },
  {
    name: "Rahul Kapoor",
    relation: "Parent of Arjun, Class 9",
    avatar: "R",
    rating: 5,
    color: "violet",
    text: "What I appreciate most is the personal attention and the regular parent updates. I always know exactly where my son stands and what he needs to work on. Truly professional.",
  },
  {
    name: "Meena Sharma",
    relation: "Parent of Priya, Class 7",
    avatar: "M",
    rating: 5,
    color: "sky",
    text: "The small batch size is a game changer. My daughter isn't afraid to ask questions anymore. Her confidence has shot up along with her grades. Highly recommend to every parent.",
  },
  {
    name: "Amit Joshi",
    relation: "Parent of Dev, Class 10",
    avatar: "A",
    rating: 5,
    color: "emerald",
    text: "The structured approach — concept building, practice, assessments — is exactly what Dev needed. He went from failing Maths to scoring 88% in boards. I'm beyond grateful.",
  },
  {
    name: "Kavita Nair",
    relation: "Parent of Aanya, Class 5",
    avatar: "K",
    rating: 5,
    color: "amber",
    text: "Aanya loves going to class now — that says it all! The teacher has a wonderful way with young kids. Homework is no longer a battle at home, and her reading has improved so much.",
  },
  {
    name: "Dinesh Tiwari",
    relation: "Parent of Rohan, Class 8",
    avatar: "D",
    rating: 5,
    color: "rose",
    text: "Transparent, punctual, caring — three words for Inspire Classes. The monthly feedback calls are something I look forward to. Results have been consistently great throughout the year.",
  },
];

const avatarColors = {
  indigo: "bg-indigo-100 text-indigo-700",
  violet: "bg-violet-100 text-violet-700",
  sky: "bg-sky-100 text-sky-700",
  emerald: "bg-emerald-100 text-emerald-700",
  amber: "bg-amber-100 text-amber-700",
  rose: "bg-rose-100 text-rose-700",
};

export default function Testimonials() {
  const [ref, inView] = useInView();

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
            Testimonials
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-5">
            What parents say
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            The trust of our parent community is our greatest achievement.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map(({ name, relation, avatar, rating, color, text }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="break-inside-avoid bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300 inline-block w-full"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(rating)].map((_, j) => (
                  <Star key={j} size={13} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote size={28} className="text-indigo-100 mb-3 -rotate-180" />

              {/* Text */}
              <p className="text-slate-600 text-sm leading-relaxed mb-5">{text}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full font-display font-bold text-sm flex items-center justify-center ${avatarColors[color]}`}>
                  {avatar}
                </div>
                <div>
                  <div className="font-semibold text-navy-900 text-sm">{name}</div>
                  <div className="text-xs text-slate-400">{relation}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
