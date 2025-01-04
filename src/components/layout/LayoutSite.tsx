import React, { ReactNode } from 'react';
import scss from "./LayoutSite.module.scss"
import Footer from './Footer/Footer';
import ResponsiveNavBar from './Header/ResponsiveNavBar';
const LayoutSite = ({ children }: { children: ReactNode }) => {
    return (
        <div className={scss.LayoutSite}>
            <ResponsiveNavBar />
            {children}
            <Footer />
        </div>
    );
};

export default LayoutSite;