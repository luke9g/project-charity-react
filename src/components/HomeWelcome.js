import React from 'react';
import {Link} from "react-router-dom";
import "../style/HomeWelcome.scss";

function HomeWelcome() {
  return (
    <section id="home-welcome">
      <div className="container welcome-wrapper">
        <div className="welcome-image-box">
          <div className="welcome-image"/>
        </div>
        <div className="welcome-info">
          <h1>
            Zacznij pomagać! <br/>
            Oddaj niechciane rzeczy w&nbsp;zaufane ręce <br/>
          </h1>
          <div className="buttons-wrapper">
            <div className="cta-button">
              <Link to={"/oddaj-rzeczy"}>
              Oddaj<br/>rzeczy
              </Link>
            </div>
            <div className="cta-button">
              <Link to={"/oddaj-rzeczy"}>
                Zorganizuj<br/>zbiórkę
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeWelcome;
