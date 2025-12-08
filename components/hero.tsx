"use client";

import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "./language-provider";
import { useRouter } from "next/navigation";

export default function Hero() {
  const { t } = useLanguage();
  const router = useRouter();

  const handleExplore = () => {
    // Smooth scroll to the quick links section
    const quickLinksSection = document.getElementById("quick-links");
    if (quickLinksSection) {
      quickLinksSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleWatchVideo = () => {
    // Navigate to gallery page where videos are displayed
    router.push("/gallery");
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video/Image Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
          alt="Konaseema landscape"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-godavari-blue/80 via-godavari-blue/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            {t("home.heroTitle")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl md:text-3xl text-konaseema-gold mb-2 font-semibold"
          >
            {t("home.heroSubtitle")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            {t("home.description")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWatchVideo}
              className="px-8 py-4 bg-konaseema-gold text-godavari-blue-dark font-semibold rounded-full flex items-center gap-2 hover:bg-konaseema-gold-light transition-colors cursor-pointer"
            >
              <Play className="w-5 h-5" />
              {t("common.watchVideo")}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleExplore}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-godavari-blue transition-colors cursor-pointer"
            >
              {t("common.explore")}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={handleExplore}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center text-white"
          >
            <span className="text-sm mb-2">{t("common.scrollToExplore")}</span>
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* Pattern Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 telugu-pattern opacity-20 z-10" />
    </section>
  );
}
