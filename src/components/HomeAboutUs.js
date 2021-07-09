import React from 'react';
import "../style/HomeAboutUs.scss";
import image from "./../assets/images/People.jpg"

function HomeAboutUs() {
  return (
    <section id="aboutUs">
      <div className="container aboutUs-wrapper">
        <div className="aboutUs-info">
          <h1>O nas</h1>
          <p>
            Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
            Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
          </p>
          <div className="signature"/>
        </div>
        <div className="aboutUs-photo">
          <img src={image} alt="Oddaj rzeczy - nasz team" title="Nasz team"/>
        </div>
      </div>
    </section>
  );
}

export default HomeAboutUs;
