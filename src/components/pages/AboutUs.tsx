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

const AboutUs = () => {
  const imgs = [frame3, frame4, frame5, frame6, frame8];
  const productContainerRef = useRef<HTMLDivElement>(null);
  const [showscrollLeft, setShowscrollLeft] = useState(false);
  const [showscrollRigth, setShowscrollRigth] = useState(true);

  const scrollLeft = () => {
    if (productContainerRef.current) {
      productContainerRef.current.scrollBy({ left: -982, behavior: "smooth" });
    }
    setShowscrollRigth(false);
    setShowscrollLeft(true);
  };

  const scrollRight = () => {
    if (productContainerRef.current) {
      productContainerRef.current.scrollBy({ left: 662, behavior: "smooth" });
    }
    setShowscrollLeft(true);
    setShowscrollRigth(false);
  };

  return (
    <div className={scss.AboutUs}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.block1}>
            <div className={scss.blockTextsAll}>
              <div className={scss.text}>
                <Image src={frame} alt="frame" className={scss.img} />
                <p>About Us</p>
              </div>
              <div className={scss.caption}>
                <h6>
                  A Journey Throught <br /> Cafesio Flavors
                </h6>
                <p>
                  Try dishes that will open up new tastes for you and delight
                  your <br />
                  eyes with their appearance. Here you will find a cozy <br />
                  atmosphere, excellent service and attention to each guest.{" "}
                  <br /> Book a table now and enjoy a unique experience of taste{" "}
                  <br />
                  discovery!
                </p>
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
                <p>Best Sellers</p>
              </div>
              <div className={scss.caption}>
                <h6>
                  You Only Reserve <br /> Exception
                </h6>
                <p>
                  Each location has a menu that`s curated just for them. <br />{" "}
                  See what new at your Cafesio and You`ll find Cafesio <br />{" "}
                  Covent Carden moments.
                </p>
              </div>
            </div>
            <div className={scss.blockImg}>
              <div className={scss.images} ref={productContainerRef}>
                {imgs.map((el, index) => (
                  <Image
                    src={el}
                    alt="frame"
                    className={scss.img}
                    key={index}
                  />
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
