"use client";

import { useState } from "react";
import ScrollReveal from "@/components/scroll-reveal";
import { useLanguage } from "@/components/language-provider";
import { motion, AnimatePresence } from "framer-motion";
import { X, Image as ImageIcon } from "lucide-react";
import { getCategoryImage } from "@/lib/placeholders";
import Image from "next/image";

const galleryImages = [
  { id: 1, category: "nature", alt: "River Boats" },
  { id: 2, category: "nature", alt: "Paddy Fields" },
  { id: 3, category: "culture", alt: "Coconut Groves" },
  { id: 4, category: "culture", alt: "Temples" },
  { id: 5, category: "places", alt: "Backwaters" },
  { id: 6, category: "places", alt: "Villages" },
  { id: 7, category: "nature", alt: "Sunset" },
  { id: 8, category: "culture", alt: "Festivals" },
  { id: 9, category: "places", alt: "Resorts" },
];

export default function GalleryPage() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", "nature", "culture", "places"];

  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-godavari-blue to-godavari-blue-light text-white py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="fade">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
              {t("gallery.title")}
            </h1>
            <p className="text-xl text-center text-gray-200 max-w-3xl mx-auto">
              {t("gallery.subtitle")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  filter === category
                    ? "bg-konaseema-gold text-godavari-blue-dark"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {t(`gallery.categories.${category}`)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery - Masonry Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((image, index) => (
              <ScrollReveal key={image.id} direction="zoom" delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-xl cursor-pointer group mb-6 break-inside-avoid"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <div className="relative h-64 w-full bg-gradient-to-br from-godavari-blue to-konaseema-gold">
                    <Image
                      src={getCategoryImage(image.category, image.id - 1)}
                      alt={image.alt}
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
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                          <span className="text-white font-semibold">View</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <p className="text-white font-semibold">{image.alt}</p>
                      <p className="text-white/80 text-sm capitalize">{image.category}</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-4 right-4 text-white hover:text-konaseema-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </motion.button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[80vh] w-full rounded-xl overflow-hidden bg-gradient-to-br from-godavari-blue to-konaseema-gold">
                <Image
                  src={getCategoryImage(
                    galleryImages.find((img) => img.id === selectedImage)?.category || "nature",
                    (selectedImage || 1) - 1
                  )}
                  alt={galleryImages.find((img) => img.id === selectedImage)?.alt || "Gallery image"}
                  fill
                  className="object-contain"
                  unoptimized
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

