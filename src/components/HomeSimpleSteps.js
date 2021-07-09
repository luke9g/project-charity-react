import React from 'react';
import {Link} from "react-router-dom";
import "../style/HomeSimpleSteps.scss";

function HomeSimpleSteps() {
  return (
    <section id="simpleSteps">
      <div className="container">
        <h1>Wystarczą 4 proste kroki</h1>
      </div>
      <div className="icons-section">
        <div className="container icons-section-wrapper">
          <div className="icons-centerbox">
            <div className="icon">
              <div className="icon-image icon-shirt"/>
              <h2>
                Wybierz rzeczy
              </h2>
              <div className="icon-info">
                ubrania, zabawki, sprzęt i&nbsp;inne
              </div>
            </div>
            <div className="icon">
              <div className="icon-image icon-bag"/>
              <h2>
                Spakuj je
              </h2>
              <div className="icon-info">
                skorzystaj z&nbsp;worków na śmieci
              </div>
            </div>
            <div className="icon">
              <div className="icon-image icon-magnifier"/>
              <h2>
                Zdecyduj komu chcesz pomóc
              </h2>
              <div className="icon-info">
                wybierz zaufane miejsce
              </div>
            </div>
            <div className="icon">
              <div className="icon-image icon-arrows"/>
              <h2>
                Zamów kuriera<br/>
              </h2>
              <div className="icon-info">
                kurier przyjedzie w&nbsp;dogodnym terminie
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container button-wrapper">
        <div className="cta-button">
          <Link to={"/oddaj-rzeczy"}>
            Oddaj<br/>rzeczy
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeSimpleSteps;
