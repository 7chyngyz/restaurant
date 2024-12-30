import React, { ReactNode } from 'react';
import scss from "./LayoutSite.module.scss"
import Header from './Header/Header';
import Footer from './Footer/Footer';
const LayoutSite = ({ children }: { children: ReactNode }) => {
    return (
        <div className={scss.LayoutSite}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default LayoutSite;