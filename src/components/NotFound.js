import React from 'react';
import "../style/NotFound.scss";
import {Link} from "react-router-dom";

function NotFound() {
  return (
    <section>
      <div className="container not-found-wrapper">
        <h1>
          404 <br/> Nie ma strony o takim adresie!
        </h1>
        <Link to={"/project-charity-react"}>
          Strona główna
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
