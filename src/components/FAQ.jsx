import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What are the batch timings?",
    a: "Batches run on weekdays (3–8 PM), and also on Sundays during exam times. Timings are flexible based on the student's school schedule. We'll find a slot that works the student.",
  },
  {
    q: "Is a demo class available before enrolling?",
    a: "Absolutely! We offer a completely free 3 day demo classes — no commitment required. It's the best way for your child to experience the teaching style and for us to understand their current level.",
  },
  {
    q: "What is the fee structure?",
    a: "Fees vary by class level and number of subjects. Please contact us directly for the current fee chart — we offer a fixed full year fee deposite in single or half yearly installments.",
  },
  {
    q: "What is the maximum batch size?",
    a: "We maintain a strict limit of 10 students per batch. This is non-negotiable — small batches are the cornerstone of our teaching philosophy, ensuring every child gets the individual attention they deserve.",
  },
  {
    q: "How do parents stay updated on progress?",
    a: "We provide monthly progress reports and a brief parent call every month. Parents also have direct WhatsApp access for day-to-day updates. You'll never feel out of the loop about your child's learning.",
  },
  {
    q: "Do you follow the school curriculum?",
    a: "Yes, we follow both CBSE and State Board syllabi precisely, aligned with the student's school curriculum. We also use supplementary material for concept-building that goes beyond the textbook when needed.",
  },
  {
    q: "What if my child misses a class?",
    a: "Make-up classes are scheduled for each missed session at no extra cost. We also share notes and any material covered so no student falls behind due to unavoidable absences.",
  },
];

function FaqItem({ q, a, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border border-slate-200 rounded-2xl overflow-hidden hover:border-indigo-200 transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-indigo-50/50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-navy-900 text-sm sm:text-base">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center"
        >
          <ChevronDown size={16} className="text-slate-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [ref, inView] = useInView();

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
            FAQ
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-5">
            Questions parents usually ask
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            We believe in full transparency. If something isn't answered here, just ask.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {inView && faqs.map((faq, i) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
          {!inView && (
            <div ref={ref} className="h-20" />
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <p className="text-slate-500 text-sm mb-4">Still have questions?</p>
          <a
            href="https://wa.me/919407119719?text=Hi! I have a question about Inspire Classes."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-2xl hover:bg-green-600 transition-all shadow-md shadow-green-200"
          >
            <HelpCircle size={16} />
            Ask on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
