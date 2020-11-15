import React from "react";

//import stock
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";
import data from '../utils/dataPortfolio';
import PortfolioItem from './PortfolioItem';

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                {/*<p className="subtitle-a">
                  Incididunt nostrud id aute culpa excepteur pariatur consequat
                  elit culpa nulla enim anim incididunt.
                </p>*/}
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {
              data.map(d => {
                return (
                  <PortfolioItem item={d}/>
                )
              })
            }
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
