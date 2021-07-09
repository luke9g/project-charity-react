import React from 'react';
import "../style/GiveAwayThingsWelcome.scss";

function GiveAwayThingsWelcome() {
  return (
    <section id="give-away-things-welcome">
      <div className="container welcome-wrapper">
        <div className="welcome-image-box">
          <div className="give-away-things-welcome-image"/>
        </div>
        <div className="welcome-info">
          <h1 className="give-away-things-title">
            Oddaj rzeczy, których już nie chcesz<br/>
            <span>potrzebującym</span>
          </h1>
          <h2 className="four-steps-title">
            Wystarczą 4 proste kroki
          </h2>
          <div className="four-steps-wrapper">
            <div className="four-steps-step">
              <div className="step-number">
                1
              </div>
              <div className="step-info">
                Wybierz rzeczy
              </div>
            </div>
            <div className="four-steps-step">
              <div className="step-number">
                2
              </div>
              <div className="step-info">
                Spakuj je w worki
              </div>
            </div>
            <div className="four-steps-step">
              <div className="step-number">
                3
              </div>
              <div className="step-info">
                Wybierz fundację
              </div>
            </div>
            <div className="four-steps-step">
              <div className="step-number">
                4
              </div>
              <div className="step-info">
                Zamów kuriera
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GiveAwayThingsWelcome;
