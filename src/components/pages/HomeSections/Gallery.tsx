"use client"
import React, { FC } from "react";
import scss from "./Gallery.module.scss";
import { useLanguageStore } from "@/store/useLanguageStore";

const Gallery: FC = () => {
  const { language } = useLanguageStore();

  const translate = (key: string) => {
    const translations: Record<"en" | "ru" | "kg", Record<string, string>> = {
      en: {
        title: "Modern Interior",
      },
      ru: {
        title: "Современный Интерьер",
      },
      kg: {
        title: "Заманбап Интерьер",
      },
    };

    return translations[language]?.[key] || key;
  };

  return (
    <section className={scss.Gallery}>
      <div className="container">
        <div className={scss.titleSection}>
          <div className={scss.subtitle}>
            <img src="/left.png" alt="left" />
            <h2>{translate("title")}</h2>
            <img src="/right.png" alt="right" />
          </div>
        </div>
        <div className={scss.content}>
          <img src="/frame-1.png" alt="1" className={scss.largeImage} />
          <div className={scss.imgBlock}>
            <img src="/frame-2.png" alt="1" className={scss.middleImage} />
            <div className={scss.imgChildren}>
              <img src="/frame-4.png" alt="1" className={scss.smallImage} />
              <img src="/frame-3.png" alt="1" className={scss.smallImage} />
            </div>
          </div>
          <img src="/frame-1.png" alt="1" className={scss.largeImage} />
          <div className={scss.imgBlock}>
            <img src="/frame-2.png" alt="1" className={scss.middleImage} />
            <div className={scss.imgChildren}>
              <img src="/frame-4.png" alt="1" className={scss.smallImage} />
              <img src="/frame-3.png" alt="1" className={scss.smallImage} />
            </div>
          </div>
          <img src="/frame-1.png" alt="1" className={scss.largeImage} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
