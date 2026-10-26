"use client";

import { useEffect, useState } from "react";
import portfolioData from "../data/portfolioData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Full Stack Development",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitMessage(
        "Thank you! Your message has been received. I'll get back to you shortly."
      );
      setFormData({
        name: "",
        email: "",
        service: "Full Stack Development",
        message: "",
      });
      setIsSubmitting(false);
    }, 900);
  };

  return (
    <section
      id="contact"
      className="section-padding transition-colors duration-300"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="section-title gradient-text inline-block">Get In Touch</h2>
          <p
            className="text-base sm:text-lg mt-4 leading-relaxed"
            style={{ color: "var(--text-light)" }}
          >
            Have an engineering role, a Zoho CRM project, or an AI automation challenge? Let's discuss how I can contribute.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Details & Direct Links */}
          <div className="lg:col-span-5 fade-in flex flex-col justify-between">
            <div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--text)" }}
              >
                Let's Build Together
              </h3>
              <p
                className="text-sm sm:text-base leading-relaxed mb-8"
                style={{ color: "var(--text-light)" }}
              >
                Whether you're looking for a backend-focused full stack developer, a certified Zoho specialist, or an engineer to build production AI & speech pipelines, feel free to reach out.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                {/* Email card with copy button */}
                <div
                  className="card-shadow p-4 rounded-xl border flex items-center justify-between"
                  style={{
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div className="flex items-center gap-3 truncate">
                    <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div className="truncate">
                      <div className="text-xs font-semibold" style={{ color: "var(--text-light)" }}>
                        Email Address
                      </div>
                      <a
                        href={`mailto:${portfolioData.email}`}
                        className="text-sm font-bold truncate hover:underline hover:text-indigo-500"
                        style={{ color: "var(--text)" }}
                      >
                        {portfolioData.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg border text-xs font-semibold transition-all hover:scale-105 ml-2"
                    style={{
                      borderColor: "var(--border)",
                      backgroundColor: "var(--background)",
                      color: copied ? "#10b981" : "var(--text)",
                    }}
                    title="Copy email to clipboard"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>

                {/* Phone Card */}
                <div
                  className="card-shadow p-4 rounded-xl border flex items-center gap-3"
                  style={{
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold" style={{ color: "var(--text-light)" }}>
                      Phone & WhatsApp
                    </div>
                    <a
                      href={`tel:${portfolioData.phone}`}
                      className="text-sm font-bold hover:underline hover:text-indigo-500"
                      style={{ color: "var(--text)" }}
                    >
                      {portfolioData.phone}
                    </a>
                  </div>
                </div>

                {/* LinkedIn Card */}
                <div
                  className="card-shadow p-4 rounded-xl border flex items-center gap-3"
                  style={{
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold" style={{ color: "var(--text-light)" }}>
                      LinkedIn Profile
                    </div>
                    <a
                      href={portfolioData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold hover:underline hover:text-indigo-500"
                      style={{ color: "var(--text)" }}
                    >
                      linkedin.com/in/rehman318
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CV Download in Contact Section */}
            <div
              className="p-5 rounded-2xl border"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <div className="text-xs font-bold uppercase tracking-wider mb-2 text-indigo-500">
                Need a copy of my Resume?
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={portfolioData.cvs.fullStack.path}
                  download={portfolioData.cvs.fullStack.filename}
                  className="flex-1 text-center py-2 px-3 rounded-lg text-xs font-semibold gradient-bg text-white shadow-sm hover:scale-105 transition-all"
                >
                  Full Stack CV ↓
                </a>
                <a
                  href={portfolioData.cvs.zoho.path}
                  download={portfolioData.cvs.zoho.filename}
                  className="flex-1 text-center py-2 px-3 rounded-lg text-xs font-semibold text-white shadow-sm hover:scale-105 transition-all"
                  style={{
                    background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
                  }}
                >
                  Zoho CV ↓
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7 fade-in">
            <form
              onSubmit={handleSubmit}
              className="card-shadow p-6 sm:p-8 rounded-2xl border"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <h3
                className="text-xl font-bold mb-6"
                style={{ color: "var(--text)" }}
              >
                Send a Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold mb-2 uppercase tracking-wider"
                    style={{ color: "var(--text)" }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2 focus:ring-indigo-500"
                    style={{
                      backgroundColor: "var(--background)",
                      borderColor: "var(--border)",
                      color: "var(--text)",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold mb-2 uppercase tracking-wider"
                    style={{ color: "var(--text)" }}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2 focus:ring-indigo-500"
                    style={{
                      backgroundColor: "var(--background)",
                      borderColor: "var(--border)",
                      color: "var(--text)",
                    }}
                  />
                </div>
              </div>

              {/* Service Interest */}
              <div className="mb-4">
                <label
                  htmlFor="service"
                  className="block text-xs font-semibold mb-2 uppercase tracking-wider"
                  style={{ color: "var(--text)" }}
                >
                  Area of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2 focus:ring-indigo-500"
                  style={{
                    backgroundColor: "var(--background)",
                    borderColor: "var(--border)",
                    color: "var(--text)",
                  }}
                >
                  <option value="Full Stack Development">
                    Backend / Full Stack Development (MERN, APIs, Auth)
                  </option>
                  <option value="Zoho CRM & Flow">
                    Zoho CRM, Flow, Creator & Deluge Automation
                  </option>
                  <option value="AI & MCP Automations">
                    AI Agents, Zoho MCP, Speech Pipelines (Whisper/LLM)
                  </option>
                  <option value="Enterprise Integrations">
                    Oracle Database / ERP & Cloud Storage Integrations
                  </option>
                  <option value="Full-Time Hiring">Full-Time Software Engineering Role</option>
                  <option value="Other">Other Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold mb-2 uppercase tracking-wider"
                  style={{ color: "var(--text)" }}
                >
                  Message / Project Scope
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Share details about your project, team requirements, or questions..."
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2 focus:ring-indigo-500"
                  style={{
                    backgroundColor: "var(--background)",
                    borderColor: "var(--border)",
                    color: "var(--text)",
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message →"}
              </button>

              {submitMessage && (
                <div className="mt-4 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-semibold text-center">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;