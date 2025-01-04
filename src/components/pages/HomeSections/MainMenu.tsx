"use client";

import React, { useState } from "react";
import scss from "./MainMenu.module.scss";
import { menuCategories, menuItems } from "@/constants/menu-constants";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

function MainMenu() {
  const [menuID, setMenuID] = useState<number>(0);
  const router = useRouter();

  const handleCategoryClick = (id: number) => {
    setMenuID(id);
  };

  return (
    <div className="container">
      <div className={scss.inner}>
        <div className={scss.titleSection}>
          <div className={scss.subtitle}>
            <img src="/left.png" alt="left" />
            <h2>Main Menu</h2>
            <img src="/right.png" alt="right" />
          </div>
          <h1 className={scss.mainTitle}>Exceptional Quality.</h1>
          <h1 className={scss.mainTitle}>Delightfully Delicious</h1>
        </div>

        <div className={scss.content}>
          <div className={scss.categories}>
            {menuCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`${scss.categoryItem} ${
                  category.id === menuID ? scss.activeCategory : ""
                }`}
              >
                {category.id === menuID && (
                  <motion.div
                    layoutId="pointer"
                    className={scss.pointer}
                    initial={{ opacity: 1, y: -50 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      type: "spring",
                      damping: 25,
                    }}
                  />
                )}
                <h4>{category.name}</h4>
              </div>
            ))}
          </div>

          <motion.div
            key={menuID}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.9 }}
            className={scss.menuItems}
          >
            {menuItems
              .filter((item) => item.id === menuID)
              .map((el, index) => (
                <div key={index} className={scss.menuItem}>
                  <div className={scss.item}>
                    <div className={scss.info}>
                      <h3 className={scss.itemName}>{el.name.slice(0, 100)}</h3>
                      <p className={scss.itemDescription}>{el.description}</p>
                    </div>
                    <div className={scss.itemActions}>
                      <span className={scss.itemPrice}>{el.price}</span>
                      <button className={scss.orderButton}>Order Now</button>
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>
        </div>

        <div className={scss.viewMenu}>
          <div className={scss.action}>
            <div className={scss.line}></div>
            <button
              onClick={() => router.push("/menu")}
              className={scss.viewMenuButton}
            >
              VIEW FULL MENU →
            </button>
            <div className={scss.line}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
