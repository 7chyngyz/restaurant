"use client";
import React, { useState } from "react";
import scss from "../../pages/MenuSection/Menu.module.scss";
import {
  menuCategories,
  menuItems as menuData,
} from "@/constants/menu-constants";
import ice from "../../../assets/Rectangle 129.png";
import ice1 from "../../../assets/Rectangle 129 (1).png";
import ice2 from "../../../assets/Rectangle 129 (2).png";
import ice3 from "../../../assets/Rectangle 129 (3).png";
import ice4 from "../../../assets/Rectangle 129 (4).png";
import ice5 from "../../../assets/Rectangle 129 (5).png";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";

interface ImenuItems {
  img: string | undefined;
  name: string;
  price: string;
  description: string;
  id: number;
  // Штеукафсу
}

const Menu = () => {
  const image = [ice, ice1, ice2, ice3, ice4, ice5];
  const [menuID, setMenuID] = useState<number>(0);
  const [modalWindow, setModalWindow] = useState<ImenuItems | null>(null);
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("search")?.toLowerCase() || "";
  const router = useRouter();

  const handleCategoryClick = (id: number) => {
    setMenuID(id);
    setModalWindow(null);
    router.push("/menu");
  };

  const menuItems: ImenuItems[] = menuData.map((item, idx) => ({
    ...item,
    img: image[idx % image.length].src,
  }));
  const filteredMenuItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchValue)
  );

  const menuItemList = searchValue
    ? filteredMenuItems
    : menuItems.filter((item) => item.id === menuID);
  return (
    <div className={scss.Menu}>
      <div className="container">
        <div className={scss.content}>
          {/* Категории */}
          <div className={scss.categories}>
            {menuCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`${scss.categoryItem} ${category.id === menuID ? scss.activeCategory : ""
                  }`}
              >
                {category.id === menuID && (
                  <motion.div
                    layoutId="pointer"
                    className={scss.pointer}
                    initial={{ opacity: 1, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", damping: 25 }}
                  />
                )}
                <h4>{category.name}</h4>
              </div>
            ))}
          </div>

          <div className={scss.blockAll}>
            {modalWindow && (
              <div
                className={scss.modalWindow}
                onClick={() => setModalWindow(null)}
              >
                <div className={scss.modalContent}>
                  <div
                    className={scss.close}
                    onClick={() => setModalWindow(null)}
                  >
                    <IoCloseCircleOutline />
                  </div>
                  <img src={modalWindow.img} alt={modalWindow.name} />
                  <div className={scss.info}>
                    <div className={scss.text}>
                      <h1>{modalWindow.name.slice(0, 10)}</h1>
                      <p className={scss.description}>
                        {modalWindow.description.slice(0, 20)}
                      </p>
                    </div>
                    <p className={scss.price}>${modalWindow.price}</p>
                  </div>
                </div>
                <div className={scss.modalText}>
                  <div className={scss.Extras}>
                    <h5>Extras</h5>
                    <p>
                      Cherry <span>$0.90</span>
                    </p>
                    <p>
                      Cherry <span>$0.90</span>
                    </p>
                  </div>
                  <div className={scss.Drinks}>
                    <h5>Drinks</h5>
                    <p>
                      Coca Cola <span>$0.90</span>
                    </p>
                    <p>
                      Coca Cola <span>$0.90</span>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {modalWindow && (
              <>
                <h1 className={scss.similar}>Similar queries</h1>
                <div className={scss.menuBlock}>
                  {menuItemList.map((item, idx) =>
                    modalWindow?.id == item.id ? (
                      <div
                        onClick={() => setModalWindow(item)}
                        className={scss.menuList}
                        key={idx}
                      >
                        <div className={scss.images}>
                          {image[idx % image.length] && (
                            <img
                              src={image[idx % image.length].src}
                              alt={item.name}
                            />
                          )}
                        </div>
                        <div className={scss.info}>
                          <div className={scss.text}>
                            <h1>{item.name.slice(0, 10)}</h1>
                            <p className={scss.description}>
                              {item.description.slice(0, 20)}
                            </p>
                          </div>
                          <p className={scss.price}>{item.price}</p>
                        </div>
                      </div>
                    ) : null
                  )}
                </div>
              </>
            )}
            <div className={scss.menuBlock}>
              {menuItemList.map((item, idx) =>
                modalWindow?.id !== item.id ? (
                  <div
                    onClick={() => setModalWindow(item)}
                    className={scss.menuList}
                    key={idx}
                  >
                    <div className={scss.images}>
                      {image[idx % image.length] && (
                        <img
                          src={image[idx % image.length].src}
                          alt={item.name}
                        />
                      )}
                    </div>
                    <div className={scss.info}>
                      <div className={scss.text}>
                        <h1>{item.name.slice(0, 10)}</h1>
                        <p className={scss.description}>
                          {item.description.slice(0, 20)}
                        </p>
                      </div>
                      <p className={scss.price}>{item.price}</p>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
