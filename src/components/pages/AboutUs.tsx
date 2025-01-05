"use client";
import React, { useRef, useState } from "react";
import scss from "./AboutUs.module.scss";
import Image from "next/image";
import frame from "../../assets/Frame 10.png";
import frame1 from "../../assets/Frame 15.png";
import frame2 from "../../assets/Frame 16.png";
import frame3 from "../../assets/Frame 19.png";
import frame4 from "../../assets/Frame 20.png";
import frame5 from "../../assets/Frame 420.png";
import frame6 from "../../assets/Frame 421.png";
import frame8 from "../../assets/Frame 422.png";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi2";
import { useLanguageStore } from "@/store/useLanguageStore";

const translations = {
  en: {
    aboutUs: "About Us",
    journey: "A Journey Through Cafesio Flavors",
    reserve:
      "Try dishes that will open up new tastes for you and delight your eyes with their appearance. Book a table now and enjoy a unique experience of taste discovery!",
    bestSellers: "Best Sellers",
    onlyReserve: "You Only Reserve Exception",
    menuInfo:
      "Each location has a menu that’s curated just for them. See what’s new at your Cafesio, and you’ll find Cafesio Covent Garden moments.",
  },
  ru: {
    aboutUs: "О Нас",
    journey: "Путешествие через вкусы Cafesio",
    reserve:
      "Попробуйте блюда, которые откроют для вас новые вкусы и порадуют глаза своим видом. Забронируйте столик и насладитесь уникальным открытием вкусов!",
    bestSellers: "Бестселлеры",
    onlyReserve: "Вы заслуживаете только лучшее",
    menuInfo:
      "В каждом месте меню специально подобрано для них. Узнайте, что нового в вашем Cafesio, и найдите моменты Cafesio Covent Garden.",
  },
  kg: {
    aboutUs: "Биз жөнүндө",
    journey: "Cafesio даамдары боюнча саякат",
    reserve:
      "Жаңы даамдарды ачып, көздөрүңүздү өзүнүн көрүнүшү менен кубанткан тамактарды татып көрүңүз. Столду азыр брондоп, даам ачылышынын уникалдуу тажрыйбасын ырахаттануу!",
    bestSellers: "Эң популярдуу продуктылар",
    onlyReserve: "Сиз тек гана мыктысын брондойсуз",
    menuInfo:
      "Ар бир жайда меню өзүнө ылайыкталып түзүлгөн. Сиздин Cafesio жакта эмне жаңылык бар экенин көрүңүз, жана Cafesio Covent Garden учурларын таба аласыз.",
  },
};

const AboutUs = () => {
  const imgs = [frame3, frame4, frame5, frame6, frame8];
  const productContainerRef = useRef<HTMLDivElement>(null);
  const [showscrollLeft, setShowscrollLeft] = useState(false);
  const [showscrollRigth, setShowscrollRigth] = useState(true);
  const { language } = useLanguageStore();

  const scrollLeft = () => {
    if (productContainerRef.current) {
      productContainerRef.current.scrollBy({ left: -982, behavior: "smooth" });
    }
    setShowscrollRigth(true);
    setShowscrollLeft(false);
  };

  const scrollRight = () => {
    if (productContainerRef.current) {
      productContainerRef.current.scrollBy({ left: 662, behavior: "smooth" });
    }
    setShowscrollLeft(true);
    setShowscrollRigth(false);
  };

  return (
    <div id="aboutUs" className={scss.AboutUs}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.block1}>
            <div className={scss.blockTextsAll}>
              <div className={scss.text}>
                <Image src={frame} alt="frame" className={scss.img} />
                <p>{translations[language].aboutUs}</p>
              </div>
              <div className={scss.caption}>
                <h6>{translations[language].journey}</h6>
                <p>{translations[language].reserve}</p>
              </div>
            </div>
            <div className={scss.images}>
              <Image src={frame1} alt="frame" className={scss.img} />
              <Image src={frame2} alt="frame" className={scss.img} />
            </div>
          </div>
          <div className={scss.block2}>
            <div className={scss.blockTextsAll}>
              <div className={scss.text}>
                <Image src={frame} alt="frame" className={scss.img} />
                <p>{translations[language].bestSellers}</p>
              </div>
              <div className={scss.caption}>
                <h6>{translations[language].onlyReserve}</h6>
                <p>{translations[language].menuInfo}</p>
              </div>
            </div>
            <div className={scss.blockImg}>
              <div className={scss.images} ref={productContainerRef}>
                {imgs.map((el, index) => (
                  <Image src={el} alt="frame" className={scss.img} key={index} />
                ))}
              </div>
              {showscrollLeft && (
                <a onClick={scrollLeft}>
                  <HiChevronDoubleLeft />
                </a>
              )}
              {showscrollRigth && (
                <a onClick={scrollRight}>
                  <HiChevronDoubleRight />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
