import React from 'react';
import HomeWelcome from "./HomeWelcome";
import HomeStats from "./HomeStats";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import Contact from "./Contact";
import Footer from "./Footer";

class Home extends React.Component {
  render() {
    return (
      <>
        <HomeWelcome/>
        <HomeStats/>
        <HomeSimpleSteps/>
        <HomeAboutUs/>
        <HomeWhoWeHelp/>
        <Contact/>
        <Footer/>
      </>
    );
  }
}

export default Home;
