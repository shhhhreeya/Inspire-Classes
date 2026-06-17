import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Phone, MessageCircle, MapPin, Send, CheckCircle, Clock, Mail } from "lucide-react";

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", phone: "", class: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();

    const text = `*New Student Inquiry for Inspire Classes*

    Name: ${form.name}
    Phone: ${form.phone}
    Class: ${form.class}

    Message:
    ${form.message}`;

      const whatsappUrl =
        `https://wa.me/919407119719?text=${encodeURIComponent(text)}`;

      window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
            Get in Touch
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-5">
            Let's start your child's journey
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Reach out to book a free demo, ask about admissions, or just say hello.
            We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Contact cards */}
            {[
              {
                icon: Phone,
                title: "Call Us",
                value: "+91 9407119719",
                sub: "Mon–Sat, 9 AM – 8 PM",
                color: "indigo",
                href: "tel:+919407119719",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                value: "+91 9407119719",
                sub: "Quick responses guaranteed",
                color: "green",
                href: "https://wa.me/919407119719?text=Hi! I'm interested in Inspire Classes.",
              },
              {
                icon: MapPin,
                title: "Location",
                value: "B-08, Treasure Fantasy",
                sub: "Near Lal Mandir, Indore",
                color: "amber",
                href: "#map",
              },
            ].map(({ icon: Icon, title, value, sub, color, href }) => (
              <a
                key={title}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-md transition-all duration-200 group"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  color === "indigo" ? "bg-indigo-100 text-indigo-600" :
                  color === "green" ? "bg-green-100 text-green-600" :
                  color === "sky" ? "bg-sky-100 text-sky-600" :
                  "bg-amber-100 text-amber-600"
                } group-hover:scale-105 transition-transform`}>
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-400 mb-0.5">{title}</div>
                  <div className="font-semibold text-navy-900 text-sm">{value}</div>
                  <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <Clock size={10} />
                    {sub}
                  </div>
                </div>
              </a>
            ))}

            {/* Map placeholder */}
            <div
              id="map"
              className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-72"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.8422364914563!2d75.7979201!3d22.65967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962ff68792e30c3%3A0x703e4f587bfc0877!2sInspire%20Classes%20%7C%20B-08%2C%20Treasure%20Fantasy!5e0!3m2!1sen!2sin!4v1781539301037!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-navy-900 mb-3">
                    Message Received!
                  </h3>
                  <p className="text-slate-500 mb-6 text-sm leading-relaxed max-w-sm mx-auto">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                    You can also WhatsApp us for a quicker response.
                  </p>
                  <a
                    href="https://wa.me/919407119719?text=Hi! I just submitted an inquiry on your website."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-2xl hover:bg-green-600 transition-all"
                  >
                    <MessageCircle size={16} />
                    Continue on WhatsApp
                  </a>
                </motion.div>
              ) : (
                <>
                  <h3 className="font-display text-2xl font-bold text-navy-900 mb-2">
                    Send us a message
                  </h3>
                  <p className="text-slate-400 text-sm mb-7">
                    Fill in the details below and we'll get back to you shortly.
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                          Parent / Guardian Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="e.g. Sunita Verma"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-sm text-navy-900 placeholder:text-slate-300 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="e.g. +91 98765 43210"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-sm text-navy-900 placeholder:text-slate-300 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                        Child's Class
                      </label>
                      <select
                        name="class"
                        value={form.class}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-sm text-navy-900 bg-white transition-all"
                      >
                        <option value="">Select class</option>
                        {[1,2,3,4,5,6,7,8].map(c => (
                          <option key={c} value={`Class ${c}`}>Class {c} — All Subjects</option>
                        ))}
                        <option value="Class 9 Math">Class 9 — Mathematics</option>
                        <option value="Class 9 Science">Class 9 — Science</option>
                        <option value="Class 9 Both">Class 9 — Math + Science</option>
                        <option value="Class 10 Math">Class 10 — Mathematics</option>
                        <option value="Class 10 Science">Class 10 — Science</option>
                        <option value="Class 10 Both">Class 10 — Math + Science</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your child's current performance, specific challenges, or any questions you have..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-sm text-navy-900 placeholder:text-slate-300 transition-all resize-none"
                      />
                    </div>
                    <button
                      onClick={handleSubmit}
                      disabled={loading || !form.name || !form.phone}
                      className="inline-flex items-center justify-center gap-2 w-full py-4 bg-indigo-600 text-white font-semibold rounded-2xl hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={16} />
                          Send Inquiry
                        </>
                      )}
                    </button>
                    <p className="text-xs text-slate-400 text-center">
                      We respect your privacy. No spam, ever.
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
