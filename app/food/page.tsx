"use client";

import ScrollReveal from "@/components/scroll-reveal";
import { useLanguage } from "@/components/language-provider";
import { foodItems } from "@/src/lib/konaseema-data";
import Image from "next/image";
import { getFoodImage } from "@/lib/placeholders";

export default function FoodPage() {
  const { t, locale } = useLanguage();

  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-konaseema-gold to-konaseema-gold-light text-godavari-blue-dark py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="fade">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
              {t("food.title")}
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              {t("food.subtitle")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Food Items Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foodItems.map((item, index) => (
              <ScrollReveal key={item.id} direction="up" delay={index * 0.1}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-godavari-blue to-konaseema-gold">
                    <Image
                      src={getFoodImage(locale === "en" ? item.name.en : item.name.te)}
                      alt={locale === "en" ? item.name.en : item.name.te}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                      onError={(e) => {
                        // Fallback to gradient if image fails
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-godavari-blue">
                      {locale === "en" ? item.name.en : item.name.te}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {locale === "en" ? item.description.en : item.description.te}
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

