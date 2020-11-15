import React from "react";
import imageOverlay from "../img/earth.jpg";

class Contact extends React.Component {
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="socials">
                    <ul>
                      <li>
                        <a
                          href="https://github.com/Kam1Cadzee"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                              <span className="ico-circle">
                                <i className="ion-social-github"></i>
                              </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/vadim-vereketa-961945164/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                              <span className="ico-circle">
                                <i className="ion-social-linkedin"></i>
                              </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
