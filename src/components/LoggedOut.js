import React from 'react';
import "../style/LoginRegister.scss";
import {Link} from "react-router-dom";

function LoggedOut() {
  return (
    <section>
      <div className="container">
        <div className="loginRegister-loggedOut">
          <h1>
            Wylogowanie nastąpiło<br/>pomyślnie!
          </h1>
          <Link to={"/"}>
            Strona główna
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LoggedOut;
