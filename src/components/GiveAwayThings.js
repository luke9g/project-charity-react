import React from 'react';
import Contact from "./Contact";
import GiveAwayThingsWelcome from "./GiveAwayThingsWelcome";
import GiveAwayThingsForm from "./GiveAwayThingsForm";
import Footer from "./Footer";

function GiveAwayThings() {
  return (
    <>
      <GiveAwayThingsWelcome/>
      <GiveAwayThingsForm/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default GiveAwayThings;
