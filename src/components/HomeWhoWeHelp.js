import React from 'react';
import "../style/HomeWhoWeHelp.scss";
import foundations from "../assets/database/foundations";
import organizations from "../assets/database/organizations";
import local from "../assets/database/local";

class HomeWhoWeHelp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "foundations",
      currentPage: 1
    }
  }

  createInstitutions = (title, institutions, page) => {
    return (
      <>
        <p className="institution-info">
          {institutions.info}
        </p>
        <div className="institution-items">
          {institutions.list
            .filter((institution, index) => (index < page * 3 && index >= page * 3 - 3))
            .map((institution, index) => {
              return (
                <div key={index} className="institution-item">
                  <div className="institution-item-description">
                    <h2>{title} “{institution.name}”</h2>
                    <div className="mission">Cel i misja: {institution.mission}.</div>
                  </div>
                  <div className="institution-item-things">
                    {institution.things.join(", ")}
                  </div>
                </div>
              )
            })}
        </div>
        <div className="institution-pagination">
          {institutions.list.length > 3 && this.createPagination(institutions.list.length)}
        </div>
      </>
    );
  };

  createPagination = (listLength) => {
    const paginationButtons = [];
    for (let i = 0; i < Math.ceil(listLength / 3); i++) {
      paginationButtons.push(
        <button key={i}
                className={this.state.currentPage === i + 1 ? "pagination-button active" : "pagination-button"}
                onClick={() => this.changePage(i + 1)}>
          {i + 1}
        </button>
      )
    }
    return paginationButtons
  };

  changeInstitution = (type) => {
    if (this.state.selected !== type) {
      this.setState({
        selected: type,
        currentPage: 1
      })
    }
  };

  changePage = (numberOfPage) => {
    if (this.state.currentPage !== numberOfPage) {
      this.setState({
        currentPage: numberOfPage
      })
    }
  };

  render() {
    return (
      <section id="whoWeHelp">
        <div className="container">
          <h1>Komu pomagamy?</h1>
          <div className="buttons-wrapper">
            <div className="cta-button">
              <button
                onClick={() => this.changeInstitution("foundations")}
                className={this.state.selected === "foundations" ? "active" : ""}>
                Fundacjom
              </button>
            </div>
            <div className="cta-button">
              <button
                onClick={() => this.changeInstitution("organizations")}
                className={this.state.selected === "organizations" ? "active" : ""}>
                Organizacjom pozarządowym
              </button>
            </div>
            <div className="cta-button">
              <button
                onClick={() => this.changeInstitution("local")}
                className={this.state.selected === "local" ? "active" : ""}>
                Lokalnym zbiórkom
              </button>
            </div>
          </div>
          <div className="institution">
            {this.state.selected === "foundations"
            && this.createInstitutions("Fundacja", foundations, this.state.currentPage)}
            {this.state.selected === "organizations"
            && this.createInstitutions("Organizacja", organizations, this.state.currentPage)}
            {this.state.selected === "local"
            && this.createInstitutions("Zbiórka", local, this.state.currentPage)}
          </div>
        </div>
      </section>
    );
  }
}

export default HomeWhoWeHelp;
