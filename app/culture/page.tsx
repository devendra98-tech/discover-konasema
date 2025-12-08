"use client";

import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal";
import { useLanguage } from "@/components/language-provider";
import { Waves, Ship, TreePine, Sparkles, Home } from "lucide-react";
import { getCategoryImage } from "@/lib/placeholders";

export default function CulturePage() {
  const { t } = useLanguage();

  const cultureSections = [
    {
      icon: Waves,
      key: "culture.riverLife",
    },
    {
      icon: Ship,
      key: "culture.boatTraditions",
    },
    {
      icon: TreePine,
      key: "culture.coconutPlantations",
    },
    {
      icon: Sparkles,
      key: "culture.festivals",
    },
    {
      icon: Home,
      key: "culture.villageLife",
    },
  ];

  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-godavari-blue to-godavari-blue-light text-white py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="fade">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
              {t("culture.title")}
            </h1>
            <p className="text-xl text-center text-gray-200 max-w-3xl mx-auto">
              {t("culture.subtitle")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Culture Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cultureSections.map((section, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-godavari-blue to-konaseema-gold">
                    <Image
                      src={getCategoryImage("culture", index)}
                      alt={t(`${section.key}.title`)}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <section.icon className="w-10 h-10 text-konaseema-gold drop-shadow-lg" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-godavari-blue">
                      {t(`${section.key}.title`)}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t(`${section.key}.description`)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

