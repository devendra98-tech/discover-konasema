"use client";

import { useLanguage } from "./language-provider";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-godavari-blue text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-konaseema-gold to-konaseema-gold-light bg-clip-text text-transparent">
              {t("home.title")}
            </h3>
            <p className="text-gray-300 text-sm">{t("home.subtitle")}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("common.explore")}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/culture" className="hover:text-konaseema-gold transition-colors">
                  {t("common.culture")}
                </a>
              </li>
              <li>
                <a href="/food" className="hover:text-konaseema-gold transition-colors">
                  {t("common.food")}
                </a>
              </li>
              <li>
                <a href="/places" className="hover:text-konaseema-gold transition-colors">
                  {t("common.places")}
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-konaseema-gold transition-colors">
                  {t("common.gallery")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("common.about")}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/about-konaseema" className="hover:text-konaseema-gold transition-colors">
                  {t("about.whyTitle")}
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-konaseema-gold transition-colors">
                  {t("common.contact")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-konaseema-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-konaseema-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-konaseema-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-konaseema-gold transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2025 Konaseema Essence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

