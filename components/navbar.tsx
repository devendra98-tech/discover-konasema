"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "./language-provider";
import { cn } from "@/lib/utils";
import { Locale } from "@/src/i18n";

const navLinks = [
  { href: "/", key: "common.home" },
  { href: "/culture", key: "common.culture" },
  { href: "/food", key: "common.food" },
  { href: "/places", key: "common.places" },
  { href: "/gallery", key: "common.gallery" },
  { href: "/about-konaseema", key: "common.about" },
  { href: "/contact", key: "common.contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "te" : "en");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold bg-gradient-to-r from-godavari-blue to-konaseema-gold bg-clip-text text-transparent"
            >
              {t("home.title")}
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors",
                  isScrolled
                    ? pathname === link.href
                      ? "text-godavari-blue"
                      : "text-gray-700 hover:text-godavari-blue"
                    : pathname === link.href
                    ? "text-white"
                    : "text-white/90 hover:text-white"
                )}
              >
                {t(link.key)}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={cn(
                      "absolute bottom-0 left-0 right-0 h-0.5",
                      isScrolled ? "bg-konaseema-gold" : "bg-white"
                    )}
                  />
                )}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className={cn(
                "p-2 rounded-full transition-colors flex items-center gap-2",
                isScrolled
                  ? "hover:bg-gray-200 text-gray-700"
                  : "hover:bg-white/20 text-white"
              )}
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-semibold">{locale.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className={cn(
                "p-2 rounded-full transition-colors",
                isScrolled
                  ? "hover:bg-gray-200 text-gray-700"
                  : "hover:bg-white/20 text-white"
              )}
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2 rounded-full transition-colors",
                isScrolled
                  ? "hover:bg-gray-200 text-gray-700"
                  : "hover:bg-white/20 text-white"
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 space-y-2"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-2 rounded-lg transition-colors",
                    pathname === link.href
                      ? "bg-godavari-blue text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  {t(link.key)}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

