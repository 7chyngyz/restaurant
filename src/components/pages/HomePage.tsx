
import React from "react";
import MainMenu from "./HomeSections/MainMenu";
import Gallery from "./HomeSections/Gallery";
import Welcome from './WelcomeSection/Welcome';

const HomePage = () => {
    return (
        <div>
            <Welcome />
          <MainMenu />
      <Gallery />
        </div>
    );

};

export default HomePage;
