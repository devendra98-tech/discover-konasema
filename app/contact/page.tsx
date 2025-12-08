"use client";

import { useState } from "react";
import ScrollReveal from "@/components/scroll-reveal";
import { useLanguage } from "@/components/language-provider";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-godavari-blue to-godavari-blue-dark text-white py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="fade">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
              {t("contact.title")}
            </h1>
            <p className="text-xl text-center text-gray-200 max-w-3xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <ScrollReveal direction="right">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-godavari-blue">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: "Email",
                      content: "info@konaseemaessence.com",
                    },
                    {
                      icon: Phone,
                      title: "Phone",
                      content: "+91 XXX XXX XXXX",
                    },
                    {
                      icon: MapPin,
                      title: "Address",
                      content: "Konaseema, Andhra Pradesh, India",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-gradient-to-r from-godavari-blue/10 to-konaseema-gold/10 rounded-xl"
                    >
                      <item.icon className="w-6 h-6 text-konaseema-gold flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-godavari-blue mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="left">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2 text-godavari-blue"
                  >
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder={t("contact.placeholderName")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-konaseema-gold"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2 text-godavari-blue"
                  >
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder={t("contact.placeholderEmail")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-konaseema-gold"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2 text-godavari-blue"
                  >
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    placeholder={t("contact.placeholderMessage")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-konaseema-gold resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-konaseema-gold text-godavari-blue-dark font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-konaseema-gold-light transition-colors"
                >
                  <Send className="w-5 h-5" />
                  {t("contact.send")}
                </motion.button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

