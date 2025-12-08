"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal";
import { useLanguage } from "@/components/language-provider";
import { places } from "@/src/lib/konaseema-data";
import { MapPin, ArrowRight } from "lucide-react";
import { getLocationImage } from "@/lib/placeholders";

export default function PlacesPage() {
  const { t, locale } = useLanguage();

  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-godavari-blue to-godavari-blue-light text-white py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="fade">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
              {t("places.title")}
            </h1>
            <p className="text-xl text-center text-gray-200 max-w-3xl mx-auto">
              {t("places.subtitle")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Places Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {places.map((place, index) => (
              <ScrollReveal key={place.id} direction="up" delay={index * 0.1}>
                <Link href={`/places/${place.id}`}>
                  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-godavari-blue to-konaseema-gold">
                      <Image
                        src={getLocationImage(locale === "en" ? place.name.en : place.name.te)}
                        alt={locale === "en" ? place.name.en : place.name.te}
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {locale === "en" ? place.name.en : place.name.te}
                        </h3>
                        <p className="text-white/90 text-sm">
                          {locale === "en" ? place.title.en : place.title.te}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {locale === "en" ? place.description.en : place.description.te}
                      </p>
                      <div className="flex items-center text-konaseema-gold group-hover:translate-x-2 transition-transform">
                        <span className="font-semibold">{t("common.explore")}</span>
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

