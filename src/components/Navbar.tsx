import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logos/brand-logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "AI Studio", path: "/ai-studio" },
    { name: "Connect", path: "/connect" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 lg:px-16 flex items-center justify-between pointer-events-none">

        {/* Glass background */}
        <div className="absolute inset-0 bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-full mx-2 md:mx-4 lg:mx-8 pointer-events-auto" />

        <div className="relative w-full flex items-center justify-between py-2 md:py-2 px-4 md:px-6 pointer-events-auto">

          {/* ✅ LOGO (balanced size) */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Genwe Films Logo"
              className="h-10 md:h-12 lg:h-14 w-auto object-contain opacity-95"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm tracking-wide text-white/70 hover:text-white transition-colors duration-300 font-body"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">

            <Link to="/connect#contact-form">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/20 text-white rounded-full px-4 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-medium flex items-center gap-1.5 hover:bg-white hover:text-black transition-all duration-300"
              >
                Start your project
                <ArrowUpRight className="w-3 md:w-4 h-3 md:h-4" />
              </motion.button>
            </Link>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-white p-1"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>

          </div>
        </div>
      </nav>

      {/* 🔥 FULLSCREEN MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col justify-between px-6 py-10"
          >

            {/* TOP */}
            <div className="flex items-center justify-between">
              <span className="text-white font-heading italic text-xl">
                Genwe
              </span>

              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-7 h-7 text-white" />
              </button>
            </div>

            {/* NAV LINKS */}
            <div className="flex flex-col gap-8 mt-16">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-4xl md:text-5xl font-heading italic text-white tracking-tight"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* FOOTER */}
            <div className="flex flex-col gap-4">

              <Link
                to="/contact#contact-form"
                onClick={() => setIsMenuOpen(false)}
                className="w-full border border-white/20 text-white rounded-full px-6 py-3 text-center text-sm hover:bg-white hover:text-black transition-all"
              >
                Start a Project
              </Link>

              <span className="text-white/30 text-xs tracking-wider uppercase">
                contact@genwefilms.com
              </span>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}