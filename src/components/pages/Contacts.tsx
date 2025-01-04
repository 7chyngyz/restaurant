import React from "react";
import scss from "./Contacts.module.scss";
import Image from "next/image";
import frame from "../../assets/Frame 10.png";
import { FiArrowRight } from "react-icons/fi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Contacts = () => {
  return (
    <div className={scss.Contacts}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.block1}>
            <div className={scss.text}>
              <Image src={frame} alt="frame" className={scss.img} />
              <p>Visit Restaurant</p>
            </div>
            <h6>
              Join Us for <br /> Happy Hours
            </h6>
            <div className={scss.caption1}>
              <p className={scss.text1}>Your neighborhood</p>
              <p className={scss.text2}>
                225$.Lake Ave.Suite 1150 <br /> Pasadena,CA 911101
              </p>
            </div>
            <div className={scss.caption2}>
              <p className={scss.text1}>Opening hours:</p>
              <p className={scss.text2}>Mon-Thu: 10:00 am - 01:00 am</p>
              <p className={scss.text2}>Fri-Sun: 10:00 am - 02:00 am</p>
            </div>
            <div className={scss.btns}>
              <p className={scss.lineRigth}></p>
              <button>
                <span>Purchase gift card</span>
                <a>
                  <FiArrowRight />
                </a>
              </button>
              <p className={scss.lineLeft}></p>
            </div>
          </div>
          <div className={scss.block2}>
            <div className={scss.blockText}>
              <p>Contact Info</p>
              <a>
                <BiSolidPhoneCall className={scss.icon} />
                <span>+771219900</span>
              </a>
              <a>
                <TfiEmail className={scss.icon} />
                <span>motionweb312@gmail.com</span>
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
