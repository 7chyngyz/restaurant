"use client";
import React, { useState, useEffect } from "react";
import left from "../../../../public/assets/Frame 10.png";
import right from "../../../../public/assets/Frame 9.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUser, FaPhone } from "react-icons/fa";

const Welcome = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

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

    return (
        <section
            className="relative h-screen bg-cover bg-center text-white pt-14"
            style={{
                backgroundImage: `url("/assets/photo_2025-01-02_21-09-44.jpg"), linear-gradient(to bottom, #1B202666 40%, #1B2026CC 80%)`,
                backgroundBlendMode: "overlay",
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <div className="absolute top-7 right-5 z-20">
                <hr className="w-[350px] sm:w-[50px] md:w-[100px] lg:w-[350px] bg-white mb-2 opacity-40" />
            </div>
            <div className="relative flex flex-col items-center justify-center h-full text-center px-4 z-20">
                <div className="flex gap-10 text-center items-center">
                    <Image
                        src={left}
                        alt="left"
                        className="w-[50px] h-[14px]"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    />
                    <h3 className="text-4xl font-shalimar mb-4" data-aos="fade-up">
                        Delicious
                    </h3>
                    <Image
                        src={right}
                        alt="right"
                        className="w-[50px] h-[14px]"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    />
                </div>
                <h1 className="text-5xl md:text-6xl font-silkSerif mb-8" data-aos="fade-up">
                    Italian Cuisine
                </h1>
                <p className="text-sm md:text-lg leading-5 font-spartan max-w-2xl mb-10" data-aos="fade-up">
                    Classic steak & delicious with delightfully unexpected twists. <br />
                    The Restaurant’s sunny decor was inspired by the diners.
                </p>
                <p className="text-[#EF272C] w-40 border-b-[1.5px] border-[#EF272C] my-4"></p>
                <button
                    onClick={handleOpenModal}
                    className="px-6 py-2 border border-[#EF272C] text-white font-spartan hover:text-white transition uppercase text-sm md:text-base flex items-center"
                    data-aos="fade-right"
                >
                    Reserve Your Table
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
                <p className="text-[#EF272C] w-40 border-b-[1.5px] border-[#EF272C] my-4"></p>
            </div>
            <div className="absolute bottom-5 left-0 right-0 flex justify-between px-6 text-sm md:text-base z-20">
                <div className="flex items-center space-x-2">
                    <div className="flex flex-col sm:flex-row gap-5 pt-16">
                        <p>Location</p>
                        <div className="w-14 border-t-[1.5px] border-[#fff] mt-3 sm:text-[151px] opacity-30" />
                        <i className="fas fa-map-marker-alt text-[#EF272C]"></i>
                        <span>Rua Da Moeda 1g, 1200-275, Portugal</span>
                    </div>
                </div>
                <div className="flex items-center flex-col sm:flex-row space-x-2 pt-16 gap-2">
                    <p>Hotline</p>
                    <div className="w-14 border-t-[1.5px] border-[#fff] opacity-30" />
                    <i className="fas fa-phone text-[#EF272C]"></i>
                    <span>+771219900</span>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex justify-center sm:justify-end sm:right-0 sm:left-auto items-center bg-black bg-opacity-30 z-30">
                    <div
                        className={`bg-[#1B2026] p-6 rounded-lg w-72 transition-all duration-1000 ease-in-out ${isClosing ? "transform translate-x-full" : "transform translate-x-0"
                            }`}
                        data-aos="fade-left"
                        data-aos-duration="600"
                        data-aos-delay="100"
                    >
                        <form className="mt-4">
                            <div className="flex items-center mb-2">
                                <FaUser className="text-white mr-2 mb-7 text-[22px]" />
                                <div className="flex flex-col">
                                    <span className="ml-2 font-spartan uppercase text-[12px] leading-3 text-[#FFFFFF]">
                                        Name
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="font-spartan text-[17px] p-2 w-full mb-2 outline-none bg-[#1B2026]"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center mb-4">
                                <FaPhone className="text-white mr-2 mb-7 text-[22px]" />
                                <div className="flex flex-col">
                                    <span className="ml-2 font-spartan uppercase text-[12px] leading-3 text-[#FFFFFF]">
                                        Phone
                                    </span>
                                    <input
                                        type="tel"
                                        placeholder="Enter your phone"
                                        className="font-spartan text-[17px] p-2 w-full mb-4 outline-none bg-[#1B2026]"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#EF272C] text-white py-2 rounded-[4px]"
                            >
                                Contact
                            </button>
                        </form>
                        <button
                            onClick={handleCloseModal}
                            className="mt-4 text-red-500 hover:text-red-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Welcome;
