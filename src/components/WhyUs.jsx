import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Users, Eye, FileCheck, MessageSquare, Phone, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Small Batch Sizes",
    desc: "Maximum 8 students per batch — ensuring nobody gets lost in the crowd.",
    color: "indigo",
  },
  {
    icon: Eye,
    title: "Individual Attention",
    desc: "Each student's pace, strengths, and gaps are tracked and addressed personally.",
    color: "sky",
  },
  {
    icon: FileCheck,
    title: "Regular Tests",
    desc: "Weekly quizzes and monthly assessments to measure and celebrate progress.",
    color: "violet",
  },
  {
    icon: MessageSquare,
    title: "Doubt Solving Sessions",
    desc: "Dedicated sessions where no question is too small or too silly to ask.",
    color: "emerald",
  },
  {
    icon: Phone,
    title: "Parent Feedback",
    desc: "Monthly parent updates so families stay informed and involved in progress.",
    color: "amber",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    desc: "Detailed performance reports with actionable insights for every student.",
    color: "rose",
  },
];

const colorMap = {
  indigo: "bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:bg-indigo-100",
  sky: "bg-sky-50 text-sky-600 border-sky-100 group-hover:bg-sky-100",
  violet: "bg-violet-50 text-violet-600 border-violet-100 group-hover:bg-violet-100",
  emerald: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100",
  amber: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100",
  rose: "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100",
};

export default function WhyUs() {
  const [ref, inView] = useInView();

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
            Why Choose Us
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-5">
            What makes us different
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            We're not just another coaching class. We're a community of learners where
            every child is seen, heard, and supported.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-3xl bg-white border border-slate-100 hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-50/60 transition-all duration-300 cursor-default"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border transition-colors duration-300 ${colorMap[color]}`}>
                <Icon size={20} />
              </div>
              <h3 className="font-semibold text-navy-900 text-lg mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom highlight banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 p-8 lg:p-10 text-white text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-40 h-40 rounded-full bg-white blur-2xl" />
            <div className="absolute bottom-0 right-1/4 w-40 h-40 rounded-full bg-amber-300 blur-2xl" />
          </div>
          <div className="relative z-10">
            <h3 className="font-display text-2xl lg:text-3xl font-bold mb-3">
              Ready to see the difference?
            </h3>
            <p className="text-indigo-200 mb-6 text-lg">
              Book a free demo class — no commitment required. Let your child experience
              the Inspire Classes difference firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-indigo-700 font-semibold rounded-2xl hover:bg-indigo-50 transition-all shadow-md"
              >
                Book Free Demo Class
              </a>
              <a
                href="https://wa.me/919407119719?text=Hi! I'd like to book a demo class at Inspire Classes."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold rounded-2xl hover:bg-white/20 border border-white/30 transition-all"
              >
                <MessageSquare size={16} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
