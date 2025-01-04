"use client";
import React, { useState } from "react";
import NavBar from "./Header";
import MobileNavBar from "./MobileNavBar";

const ResponsiveNavBar = () => {
    const [showNav, setShowNav] = useState<boolean>(false);

    const showNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false);

    return (
        <div>
            <NavBar openNav={showNavHandler} />
            <MobileNavBar showNav={showNav} closeNav={closeNavHandler} />
        </div>
    );
};

export default ResponsiveNavBar;
