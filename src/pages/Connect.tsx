import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Aurora from "../components/Aurora";
import { Mail, Instagram, Linkedin } from "lucide-react";

export default function Connect() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#contact-form") {
      const element = document.getElementById("contact-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={["#8F1E0D", "#F7F0DF", "#5C100A"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#090909]/20 via-[#5C100A]/50 to-[#090909]" />

      {/* CONTENT */}
      <main className="relative z-10">

        <Navbar />

        {/* HERO + FORM */}
        <section
          id="contact-form"
          className="pt-28 md:pt-26 pb-16 md:pb-24 flex items-start"
        >
          <ContactForm />
        </section>

        {/* 🔥 CLEAN STACKED INFO SECTION */}
        <section className="py-24 border-t border-white/5 bg-white/[0.01] relative">

          {/* subtle divider */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[160px] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="max-w-md mx-auto px-6 text-center space-y-8">

            {/* Email */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:contact@genwefilms.com"
                  className="hover:text-white transition"
                >
                  contact@genwefilms.com
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition">
                <Instagram className="w-4 h-4" />
                <a
                  href="https://www.instagram.com/genwefilms_ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  @genwefilms_ai
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition">
                <Linkedin className="w-4 h-4" />
                <a
                  href="https://www.linkedin.com/company/genwefilms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Genwe Films
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}