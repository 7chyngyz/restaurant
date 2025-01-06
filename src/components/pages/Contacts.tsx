"use client"
import React from "react";
import scss from "./Contacts.module.scss";
import Image from "next/image";
import frame from "../../assets/Frame 10.png";
import { FiArrowRight } from "react-icons/fi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { useLanguageStore } from "@/store/useLanguageStore";
const Contacts = () => {
  const { language } = useLanguageStore();

  const translate = (key: string) => {
    const translations: Record<"en" | "ru" | "kg", Record<string, string>> = {
      en: {
        visitRestaurant: "Visit Restaurant",
        happyHours: "Join Us for Happy Hours",
        neighborhood: "Your neighborhood",
        address: "225$.Lake Ave.Suite 1150 Pasadena,CA 911101",
        openingHours: "Opening hours:",
        monThu: "Mon-Thu: 10:00 am - 01:00 am",
        friSun: "Fri-Sun: 10:00 am - 02:00 am",
        purchaseGiftCard: "Purchase gift card",
        contactInfo: "Contact Info",
        phone: "+771219900",
        email: "motionweb312@gmail.com",
      },
      ru: {
        visitRestaurant: "Посетите ресторан",
        happyHours: "Присоединяйтесь к нам на счастливые часы",
        neighborhood: "Ваш район",
        address: "225$.Lake Ave.Suite 1150 Pasadena,CA 911101",
        openingHours: "Часы работы:",
        monThu: "Пн-Чт: 10:00 - 01:00",
        friSun: "Пт-Вс: 10:00 - 02:00",
        purchaseGiftCard: "Купить подарочную карту",
        contactInfo: "Контактная информация",
        phone: "+771219900",
        email: "motionweb312@gmail.com",
      },
      kg: {
        visitRestaurant: "Ресторанга келиңиз",
        happyHours: "Көңүлдүү сааттарга кошулуңуз",
        neighborhood: "Сиздин аймак",
        address: "225$.Lake Ave.Suite 1150 Pasadena,CA 911101",
        openingHours: "Иш мезгили:",
        monThu: "Дүй-Шей: 10:00 - 01:00",
        friSun: "Жума-Жек: 10:00 - 02:00",
        purchaseGiftCard: "Подарок карта сатып алыңыз",
        contactInfo: "Контакттык маалымат",
        phone: "+771219900",
        email: "motionweb312@gmail.com",
      },
    };

    return translations[language]?.[key] || key;
  };

  return (
    <div id="contact" className={scss.Contacts}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.block1}>
            <div className={scss.text}>
              <Image src={frame} alt="frame" className={scss.img} />
              <p>{translate("visitRestaurant")}</p>
            </div>
            <h6>
              {translate("happyHours")}
            </h6>
            <div className={scss.caption1}>
              <p className={scss.text1}>{translate("neighborhood")}</p>
              <p className={scss.text2}>{translate("address")}</p>
            </div>
            <div className={scss.caption2}>
              <p className={scss.text1}>{translate("openingHours")}</p>
              <p className={scss.text2}>{translate("monThu")}</p>
              <p className={scss.text2}>{translate("friSun")}</p>
            </div>
            <div className={scss.btns}>
              <p className={scss.lineRigth}></p>
              <button>
                <span>{translate("purchaseGiftCard")}</span>
                <a>
                  <FiArrowRight />
                </a>
              </button>
              <p className={scss.lineLeft}></p>
            </div>
          </div>
          <div className={scss.block2}>
            <div className={scss.blockText}>
              <p>{translate("contactInfo")}</p>
              <a>
                <BiSolidPhoneCall className={scss.icon} />
                <span>{translate("phone")}</span>
              </a>
              <a>
                <TfiEmail className={scss.icon} />
                <span>{translate("email")}</span>
              </a>
            </div>
            <div className={scss.maps}>
              <a>
                <FaTelegramPlane />
                <AiFillInstagram />
              </a>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11693.717079425835!2d74.58899005770287!3d42.88488906098746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9fc655f0bb9%3A0x20d210594faeb18!2z0KHQvtC30LTQsNC90LjQtSDRgdCw0LnRgtCwINCR0LjRiNC60LXQug!5e0!3m2!1sru!2skg!4v1735754780353!5m2!1sru!2skg"
                width="477"
                height="234"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <iframe
            className={scss.iframe}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11693.717079425835!2d74.58899005770287!3d42.88488906098746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9fc655f0bb9%3A0x20d210594faeb18!2z0KHQvtC30LTQsNC90LjQtSDRgdCw0LnRgtCwINCR0LjRiNC60LXQug!5e0!3m2!1sru!2skg!4v1735754780353!5m2!1sru!2skg"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
