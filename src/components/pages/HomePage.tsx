

import React from "react";
import MainMenu from "./HomeSections/MainMenu";
import Gallery from "./HomeSections/Gallery";
import Welcome from './WelcomeSection/Welcome';
import AboutUs from "./AboutUs";
import Contacts from "./Contacts";

const HomePage = () => {
    return (
        <div>
            <Welcome />
          <AboutUs />
          <MainMenu />
      <Gallery />
              <Contacts />
        </div>
    );

};

export default HomePage;
