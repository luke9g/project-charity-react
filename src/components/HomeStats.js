import React from 'react';
import "../style/HomeStats.scss";

function HomeStats() {
  return (
    <section id="stats">
      <div className="container stats-wrapper">
        <div className="col">
          <div className="row stat-number">
            10
          </div>
          <div className="row stat-middle">
            odanych worków
          </div>
          <div className="row stat-info">
            Lorem ipsum dolor sit amet, consectetur adipisic. Pellentesque vel enim a elit viverra elementuma. Aliquam
            erat volutpat.
          </div>
        </div>
        <div className="col">
          <div className="row stat-number">
            5
          </div>
          <div className="row stat-middle">
            wspartych organizacji
          </div>
          <div className="row stat-info">
            Lorem ipsum dolor sit amet, consectetur adipisic. Pellentesque vel enim a elit viverra elementuma. Aliquam
            erat volutpat.
          </div>
        </div>
        <div className="col">
          <div className="row stat-number">
            7
          </div>
          <div className="row stat-middle">
            zorganizowanych zbiórek
          </div>
          <div className="row stat-info">
            Lorem ipsum dolor sit amet, consectetur adipisic. Pellentesque vel enim a elit viverra elementuma. Aliquam
            erat volutpat.
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeStats;
