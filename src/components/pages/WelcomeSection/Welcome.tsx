"use client";
import React, { useState, useEffect } from "react";
import left from "../../../../public/assets/Frame 10.png";
import right from "../../../../public/assets/Frame 9.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUser, FaPhone } from "react-icons/fa";
import { useLanguageStore } from "@/store/useLanguageStore";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { RiMapPinFill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";

interface IFormTelegram {
  name: string;
  phone: number;
}

const TG_TOKEN = process.env.NEXT_PUBLIC_TG_TOKEN;
const CHAD_ID = process.env.NEXT_PUBLIC_TG_CHAD_ID;

const Welcome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { language } = useLanguageStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IFormTelegram>({ mode: "onChange" });

  const botsMessageModel = (data: IFormTelegram) => {
    let messageTG = `User's name: <b>${data.name}</b>\n`;
    messageTG += `User's phone: <b>${data.phone}</b>\n`;
    return messageTG;
  };

  const onSubmit: SubmitHandler<IFormTelegram> = async (data) => {
    try {
      await axios.post(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
        chat_id: CHAD_ID,
        parse_mode: "html",
        text: botsMessageModel(data),
      });
      reset();
      toast.success("Message sent successfully!", { autoClose: 2000 });
    } catch {
      toast.error("Please try again later.", { autoClose: 2000 });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 400);
  };

  const translate = (key: string) => {
    const translations: Record<"en" | "ru" | "kg", Record<string, string>> = {
      en: {
        delicious: "Delicious",
        italianCuisine: "Italian Cuisine",
        description:
          "Classic steak & delicious with delightfully unexpected twists. The Restaurant’s sunny decor was inspired by the diners.",
        reserveTable: "Reserve Your Table",
        location: "Location",
        hotline: "Hotline",
        contact: "Contact",
        name: "Name",
        enterName: "Enter your name",
        phone: "Phone",
        enterPhone: "Enter your phone",
        close: "Close",
      },
      ru: {
        delicious: "Вкусно",
        italianCuisine: "Итальянская кухня",
        description:
          "Классический стейк и восхитительные неожиданности. Солнечный декор ресторана был вдохновлен посетителями.",
        reserveTable: "Забронировать столик",
        location: "Адрес",
        hotline: "Горячая линия",
        contact: "Связаться",
        name: "Имя",
        enterName: "Введите ваше имя",
        phone: "Телефон",
        enterPhone: "Введите ваш телефон",
        close: "Закрыть",
      },
      kg: {
        delicious: "Даамдуу",
        italianCuisine: "Италия ашканасы",
        description:
          "Классикалык стейк жана жагымдуу, күтүүсүз даамдар. Ресторандын кооздугу коноктордон шыктанган.",
        reserveTable: "Столду брондоо",
        location: "Жайгашкан жери",
        hotline: "Ысык линия",
        contact: "Байланышуу",
        name: "Аты",
        enterName: "Атыңызды киргизиңиз",
        phone: "Телефон",
        enterPhone: "Телефонуңузду киргизиңиз",
        close: "Жабуу",
      },
    };

    return translations[language]?.[key] || key;
  };

  return (
    <section
      id="interior"
      className="relative h-screen bg-cover bg-center text-white pt-14"
      style={{
        backgroundImage: `url("/assets/photo_2025-01-02_21-09-44.jpg"), linear-gradient(to bottom, #1B202666 40%, #1B2026CC 80%)`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(27,32,38,0.4)] to-[rgba(27,32,38,0.8)] opacity-50 z-10"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center px-4 z-20">
        <div className="flex gap-10 text-center items-center">
          <Image
            src={left}
            alt="left"
            className="w-[50px] h-[14px]"
            data-aos="fade-left"
          />
          <h3 className="text-4xl font-shalimar mb-4" data-aos="fade-up">
            {translate("delicious")}
          </h3>
          <Image
            src={right}
            alt="right"
            className="w-[50px] h-[14px]"
            data-aos="fade-right"
          />
        </div>
        <h1
          className="text-5xl md:text-6xl font-silkSerif mb-8"
          data-aos="fade-up"
        >
          {translate("italianCuisine")}
        </h1>
        <p
          className="text-sm md:text-lg leading-5 font-spartan max-w-2xl mb-10"
          data-aos="fade-up"
        >
          {translate("description")}
        </p>
        <div className="flex flex-col items-center gap-[10px]">
          <hr
            className=" w-[169px] h-0  border-t-[1.4px] border-red-600 opacity-0"
            data-aos="fade-up"
          />

          <button
            onClick={handleOpenModal}
            className="px-6 py-2 border border-[#EF272C] text-white font-spartan hover:text-white transition uppercase text-sm md:text-base flex items-center"
            data-aos="fade-right"
          >
            {translate("reserveTable")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>
          <hr
            className="w-[169px] h-0  border-t-[1.4px] border-red-600 opacity-0"
            data-aos="fade-up"
          />
        </div>
      </div>
      <hr className=" bg-gray-400 opacity-60 w-[350px] absolute  top-[100px] max-[320px]:top-[70px] right-[77px] max-[428px]:w-[151.88px] max-[428px]:right-[20px]" />
      <hr className="absolute left-[34.25px] max-[428px]:left-[20px] max-[391px]:left-[10px] bottom-[40px] max-[428px]:top-[240px] max-[391px]:top-[160px] max-[320px]:top-[100px] h-[340px] w-[0.4px] opacity-60 bg-gray-400 border-none" />
      <div className="absolute bottom-10 left-[35px] max-[428px]:left-0 right-[35px] max-[428px]:right-0 flex justify-between px-6 text-sm md:text-base z-20 max-[320px]:hidden">
        <div className="flex items-center space-x-2 max-[428px]:flex-col max-[428px]:items-start max-[428px]:gap-3">
          <p>{translate("location")}</p>
          <hr className="w-[56px] text-white" />
          <RiMapPinFill className="text-red-600 w-[16.51px] h-[20.17px] max-[428px]:hidden" />
          <span className="flex max-[428px]:flex-col">
            Rua Da Moeda 1g, <span>1200-275, Portugal</span>
          </span>
        </div>
        <div className="flex items-center space-x-2 max-[428px]:flex-col max-[428px]:items-end max-[428px]:gap-3">
          <p>{translate("hotline")}</p>
          <hr className="w-[56px] text-white" />
          <BsTelephoneFill className="text-red-600 w-[16.51px] h-[20.17px] max-[428px]:hidden" />
          <span>+771219900</span>
        </div>
      </div>
      <hr className="bg-gray-400 opacity-60 w-[93%] absolute bottom-5 left-12 max-[428px]:hidden" />
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center sm:justify-end sm:right-0 sm:left-auto items-center bg-black bg-opacity-30 z-30">
          <div
            className={`bg-[#1B2026] p-6 rounded-lg w-72 transition-all duration-500 ease-in-out ${
              isClosing
                ? "transform translate-x-full"
                : "transform translate-x-0"
            }`}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
              <div className="flex items-center mb-2">
                <FaUser className="text-white mr-2 mb-7 text-[22px]" />
                <div className="flex flex-col">
                  <span className="ml-2 font-spartan uppercase text-[12px] leading-3 text-[#FFFFFF]">
                    {translate("name")}
                  </span>
                  <input
                    type="text"
                    placeholder={translate("enterName")}
                    className="font-spartan text-[17px] p-2 w-full mb-2 outline-none bg-[#1B2026]"
                    {...register("name", { required: true })}
                  />
                </div>
              </div>
              <div className="flex items-center mb-4">
                <FaPhone className="text-white mr-2 mb-7 text-[22px]" />
                <div className="flex flex-col">
                  <span className="ml-2 font-spartan uppercase text-[12px] leading-3 text-[#FFFFFF]">
                    {translate("phone")}
                  </span>
                  <input
                    type="tel"
                    placeholder={translate("enterPhone")}
                    className="font-spartan text-[17px] p-2 w-full mb-4 outline-none bg-[#1B2026]"
                    {...register("phone", { required: true })}
                  />
                </div>
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-[#EF272C] text-white py-2 rounded-[4px]"
              >
                {translate("contact")}
              </button>
            </form>
            <button
              onClick={handleCloseModal}
              className="mt-4 text-red-500 hover:text-red-700"
            >
              {translate("close")}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Welcome;
