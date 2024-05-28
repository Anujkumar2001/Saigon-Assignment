import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <footer className="tl-footer tl-4-footer">
        <div className="tl-footer-top">
          <div className="container">
            <div className="row gy-5 justify-content-between">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="tl-footer-widget tl-4-footer-widget">
                  <Link to="/" className="logo tl-footer-widget-title">
                    <img src="assets/images/logos/logo-3.png" alt="logo" />
                  </Link>

                  <p className="tl-4-footer-descr">
                    Maurus herderite egret orca ac incident. Viramas at deque eu
                    ipsum consenter commode egret t dam celestas beget mi.
                  </p>
                  <div className="tl-4-footer-socials">
                    <ul>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 order-1 order-sm-2 order-lg-1">
                <div className="row gy-5">
                  <div className="col-6 col-xxs-12">
                    <div className="tl-footer-widget tl-4-footer-widget">
                      <h5 className="tl-footer-widget-title tl-4-footer-widget-title">
                        Our Campus
                      </h5>
                      <ul className="tl-footer-links tl-4-footer-links">
                        <li>
                          <Link to="/" role="button">
                            Home
                          </Link>
                        </li>

                        <li>
                          <Link to="/research" role="button">
                            Research
                          </Link>
                        </li>

                        <li>
                          <Link to="/study" role="button">
                            Study
                          </Link>
                        </li>

                        <li>
                          <Link to="/transfer" role="button">
                            Transfer
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-6 col-xxs-12">
                    <div className="tl-footer-widget tl-4-footer-widget">
                      <h5 className="tl-footer-widget-title tl-4-footer-widget-title">
                        Contact
                      </h5>
                      <ul className="tl-footer-links tl-4-footer-links">
                        <li>
                          <a href="tel:12356877787">+49 6221 54-0</a>
                        </li>
                        <li>
                          <p>Tollense University Oldenburg 26127, Germany</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 col-12 order-2 order-sm-1 order-lg-2">
                <div className="tl-footer-widget tl-4-footer-widget">
                  <h5 className="tl-footer-widget-title tl-4-footer-widget-title">
                    Recent Posts
                  </h5>

                  <div className="tl-4-footer-articles">
                    <div className="tl-4-footer-article">
                      <img
                        src="assets/images/tl-11/sidebar-article-2.jpg"
                        alt="Article image"
                        className="tl-4-footer-article-img"
                      />

                      <div className="tl-4-footer-article-txt">
                        <span className="tl-4-footer-article-date">
                          June 16, 2023
                        </span>
                        <h5 className="tl-4-footer-article-title">
                          Education Renaissance Reviving the Art of Learning.
                        </h5>
                      </div>
                    </div>

                    <div className="tl-4-footer-article">
                      <img
                        src="assets/images/tl-11/sidebar-article-3.jpg"
                        alt="Article image"
                        className="tl-4-footer-article-img"
                      />

                      <div className="tl-4-footer-article-txt">
                        <span className="tl-4-footer-article-date">
                          April 18, 2023
                        </span>
                        <h5 className="tl-4-footer-article-title">
                          Education Trailblazers Innovating the Learning.
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tl-footer-bottom tl-4-footer-bottom">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-12">
                <p className="tl-4-copyright-txt m-0 text-center">
                  ©2024 Tollense University
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
