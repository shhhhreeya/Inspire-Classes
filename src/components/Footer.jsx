import { BookOpen, Heart, Phone, MessageCircle, MapPin, Mail } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Classes", href: "#classes" }, 
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const scroll = (href) => {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center shadow-md">
                <BookOpen size={18} className="text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white leading-none block">Inspire Classes</span>
                <span className="text-[10px] font-medium text-indigo-400 tracking-widest uppercase leading-none">Academic Excellence</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-5">
              Building strong academic foundations for students from Class 1 to 10.
              Where every child is seen, heard, and helped to grow.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:+919407119719" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
                <Phone size={14} className="text-indigo-400 flex-shrink-0" />
                +91 94071 19719
              </a>
              <span className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin size={14} className="text-indigo-400 flex-shrink-0" />
                B-08 Treasure Fantasy, Near Lal Mandir, Indore
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {navLinks.slice(0, 5).map((l) => (
                <button
                  key={l.href}
                  onClick={() => scroll(l.href)}
                  className="text-left text-slate-400 hover:text-white text-sm transition-colors"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">More</h4>
            <div className="flex flex-col gap-2.5">
              {navLinks.slice(5).map((l) => (
                <button
                  key={l.href}
                  onClick={() => scroll(l.href)}
                  className="text-left text-slate-400 hover:text-white text-sm transition-colors"
                >
                  {l.label}
                </button>
              ))}
              <a
                href="https://wa.me/919407119719?text=Hi! I'm interested in Inspire Classes."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-400 hover:text-green-300 text-sm transition-colors mt-2"
              >
                <MessageCircle size={14} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Classes summary */}
        <div className="border-t border-white/10 pt-8 mb-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {["Classes 1–8: All Subjects", "Class 9: Maths & Science", "Class 10: Maths & Science", "Offline", "Free Demo Class", "Max 10 students/batch"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white/5 text-slate-400 text-xs rounded-full border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>© 2025 Inspire Classes. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Made with <Heart size={11} className="text-rose-400 fill-rose-400 mx-0.5" /> for every student's future
          </span>
        </div>
      </div>
    </footer>
  );
}
