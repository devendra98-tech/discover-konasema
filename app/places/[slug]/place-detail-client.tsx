"use client";

import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal";
import { useLanguage } from "@/components/language-provider";
import { Place } from "@/src/lib/konaseema-data";
import { MapPin, Camera, Navigation } from "lucide-react";
import { getLocationImage } from "@/lib/placeholders";

interface PlaceDetailClientProps {
  place: Place;
}

export default function PlaceDetailClient({ place }: PlaceDetailClientProps) {
  const { t, locale } = useLanguage();

  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden bg-gradient-to-br from-godavari-blue to-konaseema-gold">
        <Image
          src={getLocationImage(locale === "en" ? place.name.en : place.name.te)}
          alt={locale === "en" ? place.name.en : place.name.te}
          fill
          className="object-cover"
          priority
          unoptimized
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-godavari-blue/80 to-konaseema-gold/80" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <ScrollReveal direction="fade">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {locale === "en" ? place.name.en : place.name.te}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {locale === "en" ? place.title.en : place.title.te}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal direction="up">
              <h2 className="text-3xl font-bold mb-6 text-godavari-blue">
                {t("common.about")} {locale === "en" ? place.name.en : place.name.te}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {locale === "en" ? place.description.en : place.description.te}
              </p>
            </ScrollReveal>

            {/* Highlights */}
            <ScrollReveal direction="up" delay={0.2}>
              <h3 className="text-2xl font-bold mb-4 text-godavari-blue">
                Highlights
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {place.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-godavari-blue/10 to-konaseema-gold/10 rounded-lg"
                  >
                    <Camera className="w-5 h-5 text-konaseema-gold flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Travel Tips */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="bg-gradient-to-br from-godavari-blue/10 to-konaseema-gold/10 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-godavari-blue flex items-center gap-2">
                  <Navigation className="w-6 h-6" />
                  Travel Tips
                </h3>
                <ul className="space-y-3">
                  {place.travelTips.map((tip, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="text-konaseema-gold font-bold mt-1">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="zoom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center text-godavari-blue">
                Location Map
              </h2>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${place.coordinates.lat},${place.coordinates.lng}&zoom=12`}
                />
                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-konaseema-gold" />
                  <span className="text-sm font-semibold text-godavari-blue">
                    {locale === "en" ? place.name.en : place.name.te}
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

