import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, Star, Users, Award } from "lucide-react";
import { useEffect, useRef } from "react";
import archanaImage2 from "../assets/archana_jpeg2.jpeg";

function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 70, 229, ${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50/40 to-sky-50"
    >
      <ParticleCanvas />

      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-100/60 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-sky-100/70 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-6"
            >
              <Star size={14} className="fill-indigo-600" />
              Trusted by 200+ families in the city
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight tracking-tight mb-6"
            >
              Archana Jaiswal at{" "}
              <span className="relative">
                <span className="relative z-10 text-indigo-600">Inspire Classes</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
                  className="absolute bottom-1 left-0 right-0 h-3 bg-amber-300/50 rounded -z-0 origin-left"
                />
              </span>{" "}
              Foundations
              <br className="hidden sm:block" /> for Classes 1–10
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg"
            >
              Personalized teaching that goes beyond textbooks, building genuine understanding,
              confidence, and a love for learning in every student.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-indigo-600 text-white font-semibold rounded-2xl hover:bg-indigo-700 transition-all duration-200 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5"
              >
                Enroll Now
              </a>
              <a
                href="https://wa.me/919407119719?text=Hi! I'm interested in Inspire Classes. Can you share details about admissions?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white text-slate-700 font-semibold rounded-2xl border border-slate-200 hover:border-green-300 hover:text-green-600 hover:bg-green-50 transition-all duration-200 shadow-sm"
              >
                <MessageCircle size={18} className="text-green-500" />
                WhatsApp Inquiry
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-8"
            >
              {[
                { icon: Users, num: "200+", label: "Students Taught" },
                { icon: Award, num: "95%", label: "Success Rate" },
                { icon: Star, num: "25+ yrs", label: "Experience" },
              ].map(({ icon: Icon, num, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-navy-900 font-display">{num}</div>
                    <div className="text-xs text-slate-500 font-medium">{label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Teacher photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Decorative ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full border-2 border-dashed border-indigo-200 animate-spin" style={{ animationDuration: "30s" }} />
            </div>

            {/* Photo container */}
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              <div className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-100 to-sky-100 shadow-2xl shadow-indigo-100/80 border border-white">
                <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-indigo-300">
                  
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-white shadow-2xl shadow-indigo-100/80 border border-white">
                    <img
                      src={archanaImage2}
                      alt="Archana Jaiswal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg shadow-slate-200 px-4 py-3 flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center">
                  <Star size={14} className="text-amber-500 fill-amber-500" />
                </div>
                <div>
                  <div className="text-xs font-bold text-navy-900">Top Rated</div>
                  <div className="text-[10px] text-slate-400">by Parents</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg shadow-slate-200 px-4 py-3 flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-xl bg-green-100 flex items-center justify-center">
                  <Users size={14} className="text-green-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-navy-900">Small Batches</div>
                  <div className="text-[10px] text-slate-400">Max 10 students</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 hover:text-indigo-500 transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-[11px] font-medium tracking-widest uppercase">Discover</span>
        <ChevronDown size={18} />
      </motion.button>
    </section>
  );
}
