import { motion } from "motion/react";
import { useState } from "react";
import { supabase } from "../lib/supabase";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [projectType, setProjectType] = useState("Product AI Ads");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [timeline, setTimeline] = useState("");
  const [timelineOpen, setTimelineOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  // ✅ UPDATED PROJECT TYPES
  const projectTypes = [
    "Product AI Ads",
    "CGI Ads",
    "AI Brand Ads",
    "AI Short Film",
    "Product CGI Ads",
    "Cinematic Brand Film",
    "Luxury Story Film",
    "Adventure Brand Film",
  ];

  // ✅ NEW TIMELINE OPTIONS
  const timelineOptions = [
    "Within 7 Days",
    "Within 14 Days",
    "Within 30 Days",
    "Within 60 Days",
  ];

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (loading) return;

    const form = new FormData(e.target);
    const email = form.get("email") as string;

    if (!validateEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }

    setLoading(true);

    const data = {
      name: form.get("name"),
      email,
      project_type: projectType,
      timeline: form.get("timeline"),
      message: form.get("message"),
    };

    try {
      const { error: dbError } = await supabase
        .from("contacts")
        .insert([data]);

      if (dbError) {
        alert("Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      emailjs
        .send(
          "Genwefilms_ai",
          "template_e0t9uqs",
          data,
          "pXm_36J49xPtTLhoq"
        )
        .catch(() => {});

      setSubmitted(true);
      e.target.reset();
    } catch {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="liquid-glass rounded-3xl p-12 text-center max-w-2xl mx-auto border border-white/5 w-full flex flex-col items-center gap-6"
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center"
        >
          <motion.span
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-white text-lg"
          >
            ✓
          </motion.span>
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-heading italic text-white">
          Received.
        </h2>

        <p className="text-white/60 text-sm md:text-base max-w-md">
          Thanks for sharing your details. We’ll get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <div
      id="contact-form"
      className="w-full max-w-6xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"
    >
      {/* LEFT */}
      <div className="lg:w-5/12 flex flex-col justify-center text-left">
        <span className="text-white/40 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-6">
          Contact Us
        </span>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white mb-6 leading-[0.9]">
          Let's Build Something <br className="hidden lg:block" /> Unforgettable.
        </h2>

        <p className="text-white/50 text-base md:text-lg">
          Tell us about your project. We’ll get back to you within 24 hours.
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="lg:w-7/12 liquid-glass rounded-[2rem] border border-white/5 p-8 md:p-12 space-y-6 md:space-y-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          <div className="flex flex-col gap-3">
            <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-4">
              Name
            </label>
            <input
              name="name"
              required
              type="text"
              placeholder="e.g. John Doe"
              className="bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-white/30 w-full"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-4">
              Email
            </label>
            <input
              name="email"
              required
              type="email"
              placeholder="e.g. john@brand.com"
              className="bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-white/30 w-full"
            />
          </div>
        </div>

        {/* 🔥 UPDATED SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">

          {/* PROJECT TYPE */}
          <div className="flex flex-col gap-3">
            <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-4">
              Project Type
            </label>

            <div
              className="bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white cursor-pointer flex justify-between"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {projectType}
            </div>

            {dropdownOpen && (
              <div className="bg-[#111] border border-white/10 rounded-xl mt-2">
                {projectTypes.map((type) => (
                  <div
                    key={type}
                    className="px-6 py-3 hover:bg-white/5 cursor-pointer"
                    onClick={() => {
                      setProjectType(type);
                      setDropdownOpen(false);
                    }}
                  >
                    {type}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* TIMELINE (NEW DROPDOWN) */}
          <div className="flex flex-col gap-3">
            <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-4">
              When Do You Want To Begin
            </label>

            <div
              className="bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white cursor-pointer flex justify-between"
              onClick={() => setTimelineOpen(!timelineOpen)}
            >
              {timeline || "Select"}
            </div>

            {timelineOpen && (
              <div className="bg-[#111] border border-white/10 rounded-xl mt-2">
                {timelineOptions.map((option) => (
                  <div
                    key={option}
                    className="px-6 py-3 hover:bg-white/5 cursor-pointer"
                    onClick={() => {
                      setTimeline(option);
                      setTimelineOpen(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}

            {/* hidden input for backend */}
            <input type="hidden" name="timeline" value={timeline} />
          </div>

        </div>

        <div className="flex flex-col gap-3">
          <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-4">
            Project Brief
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us a bit about your vision..."
            className="bg-white/5 border border-white/10 rounded-[2rem] px-6 py-6 text-white resize-none"
          />
        </div>

        <button
          type="submit"
          className="liquid-glass-strong rounded-full px-10 py-4 text-white hover:scale-105 transition w-full sm:w-auto"
        >
          {loading ? "Sending..." : "Start Your Project"}
        </button>

        <p className="text-white/30 text-[10px] uppercase tracking-wider">
          Fast turnaround. Cinematic quality. Built to perform.
        </p>
      </form>
    </div>
  );
}