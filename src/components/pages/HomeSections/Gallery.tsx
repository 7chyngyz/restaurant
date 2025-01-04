import React, { FC } from "react";
import scss from "./Gallery.module.scss";

const Gallery: FC = () => {
  return (
    <section className={scss.Gallery}>
      <div className="container">
        <div className={scss.titleSection}>
          <div className={scss.subtitle}>
            <img src="/left.png" alt="left" />
            <h2>Modern interior</h2>
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
