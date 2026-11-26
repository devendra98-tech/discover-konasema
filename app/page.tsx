"use client";

import Hero from "@/components/hero";
import ScrollReveal from "@/components/scroll-reveal";
import Link from "next/link";
import { Sparkles, Utensils, MapPin, Palette, Leaf, Images } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function HomePage() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: "/culture", icon: Sparkles, key: "home.quickLinks.culture" },
    { href: "/food", icon: Utensils, key: "home.quickLinks.food" },
    { href: "/places", icon: MapPin, key: "home.quickLinks.places" },
    { href: "/gallery", icon: Palette, key: "home.quickLinks.art" },
    { href: "/gallery", icon: Leaf, key: "home.quickLinks.nature" },
    { href: "/gallery", icon: Images, key: "home.quickLinks.gallery" },
  ];
//pipeline test
  return (
    <>
      <Hero />
      
      {/* Quick Links Section */}
      <section id="quick-links" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="fade">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-godavari-blue">
              {t("home.subtitle")}
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {quickLinks.map((item, index) => (
              <ScrollReveal key={item.key} direction="up" delay={index * 0.1}>
                <Link
                  href={item.href}
                  className="group block p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-godavari-blue/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="w-8 h-8 text-godavari-blue" />
                    </div>
                    <h3 className="text-lg font-semibold text-godavari-blue">
                      {t(item.key)}
                    </h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-godavari-blue text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="fade">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {t("home.aboutTitle")}
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                {t("home.aboutDescription")}
              </p>
              <Link
                href="/about-konaseema"
                className="inline-block px-8 py-4 bg-konaseema-gold text-godavari-blue-dark font-semibold rounded-full hover:bg-konaseema-gold-light transition-colors"
              >
                {t("home.cta")}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

