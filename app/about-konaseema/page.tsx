"use client";

import ScrollReveal from "@/components/scroll-reveal";
import { useLanguage } from "@/components/language-provider";
import { Heart, MapPin, Users, Award } from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Heart,
      key: "about.culture",
    },
    {
      icon: MapPin,
      key: "about.nature",
    },
    {
      icon: Users,
      key: "about.agriculture",
    },
    {
      icon: Award,
      key: "about.life",
    },
  ];

  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-godavari-blue to-godavari-blue-dark text-white py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="fade">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
              {t("about.title")}
            </h1>
            <p className="text-xl text-center text-gray-200 max-w-3xl mx-auto">
              {t("about.subtitle")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Konaseema Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal direction="fade">
              <h2 className="text-4xl font-bold mb-8 text-center text-godavari-blue">
                {t("about.whyTitle")}
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                  <div className="text-center p-6 bg-gradient-to-br from-godavari-blue/10 to-konaseema-gold/10 rounded-xl">
                    <feature.icon className="w-12 h-12 text-konaseema-gold mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-godavari-blue">
                      {t(`${feature.key}.title`)}
                    </h3>
                    <p className="text-gray-600">
                      {t(`${feature.key}.description`)}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

