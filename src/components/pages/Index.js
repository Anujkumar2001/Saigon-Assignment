import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/index.css";
import { Carousel } from "react-responsive-carousel";
import { Footer } from "../common/Footer";
import { SocialComponent } from "./SocialComponent";
import { Link } from "react-router-dom";
import { TestimonialSection } from "../common/TestimonialSection";
import { ResearchCard } from "../common/ResearchCard";
import { AcademicPrograms } from "../common/AcademicPrograms";
import img1 from "../../images/heroimg1.jpg";
import img2 from "../../images/heroimg2.jpg";

export const Index = () => {
  return (
    <div>
      <section className="tl-4-banner">
        <div className="tl-4-banner-slider owl-carousel">
          <Carousel
            autoPlay
            interval="5000"
            transitionTime="500"
            infiniteLoop
            showArrows={false}
          >
            <div
              className="tl-4-banner-slide bg-defaults heroPage "
              data-background={img1}
              style={{
                backgroundImage: `url(${img1})`,
              }}
            >
              <div className="container content moredetails">
                <div className="row">
                  <div className="col-xl-8 col-lg-9 col-10 col-xxs-12">
                    <div className="tl-4-banner-txt">
                      <h6 className="tl-4-banner-sub-title">
                        Learn how you want
                      </h6>
                      <h1 className="tl-4-banner-title">
                        Education is The Best key Success in Life.
                      </h1>
                      <p className="tl-4-banner-descr">
                        Through a combination of lectures, readings, and
                        discussions, students will gain a solid foundation in
                        educational psychology.
                      </p>

                      <a
                        href="https://en.wikipedia.org/wiki/University"
                        style={{ color: "white" }}
                        className="anchor"
                      >
                        More Details
                        <i
                          class="fa-solid fa-angles-right"
                          style={{ margin: "0px 10px" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tl-4-banner-slide bg-defaults heroPage"
              data-background={img2}
              style={{
                backgroundImage: `url(${img2})`,
                backgroundColor: "red",
              }}
            >
              <div className="container content">
                <div className="row">
                  <div className="col-xl-8 col-lg-9 col-10 col-xxs-12">
                    <div className="tl-4-banner-txt">
                      <h6 className="tl-4-banner-sub-title">
                        Learn how you want
                      </h6>
                      <h1 className="tl-4-banner-title">
                        Education is The Best key Success in Life.
                      </h1>
                      <p className="tl-4-banner-descr">
                        Through a combination of lectures, readings, and
                        discussions, students will gain a solid foundation in
                        educational psychology.
                      </p>

                      <a
                        href="https://en.wikipedia.org/wiki/University"
                        style={{ color: "white" }}
                        className="anchor"
                      >
                        More Details
                        <i
                          class="fa-solid fa-angles-right"
                          style={{ margin: "0px 10px" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tl-4-banner-slide bg-defaults"
              data-background="assets/images/tl-4/banner-bg-3.jpg"
              style={{
                backgroundImage: `url(/assets/images/tl-4/banner-bg-1.jpg)`,
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-9 col-10 col-xxs-12">
                    <div className="tl-4-banner-txt">
                      <h6 className="tl-4-banner-sub-title">
                        Learn how you want
                      </h6>
                      <h1 className="tl-4-banner-title">
                        Education is The Best key Success in Life.
                      </h1>
                      <p className="tl-4-banner-descr">
                        Through a combination of lectures, readings, and
                        discussions, students will gain a solid foundation in
                        educational psychology.
                      </p>

                      <a
                        href="https://en.wikipedia.org/wiki/University"
                        style={{ color: "white" }}
                        className="anchor"
                      >
                        More Details
                        <i
                          class="fa-solid fa-angles-right"
                          style={{ margin: "0px 10px" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>

        <div className="tl-4-banner-slider-dots"></div>
      </section>
      <section className="tl-4-about tl-3-section-spacing">
        <div className="container">
          <div className="row gy-4 gy-sm-5 align-items-center">
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="tl-3-about-img tl-4-about-img">
                <img
                  src="assets/images/tl-4/about-img-1.jpg"
                  alt="School Picture"
                />
                <img
                  src="assets/images/tl-4/about-img-2.jpg"
                  alt="School Picture"
                />
              </div>
            </div>

            <div className="col-lg-6 order-lg-2 order-1">
              <div className="tl-4-about-txt">
                <h2 className="tl-4-section-title">
                  Experience in School Leadership & Teaching
                </h2>
                <p className="tl-4-about-descr">
                  Mauris sit amet lacinia est, vitae tristique metus. Nulla
                  facilisi. Mauris tempor nibh vitae pulvinar ultricies. Sed
                  malesuada placerat metus. Vivamus sagittis arcu eu elit
                  semper, eget varius turpis posuere. Suspendisse ac nibh
                  cursus, dignissim urna a, porttitor nisi.
                </p>

                <div className="tl-4-about-stats">
                  <div className="tl-4-about-stat">
                    <div className="tl-4-about-stat-txt">
                      <span className="tl-4-about-stat-num">52+</span>
                      <span className="tl-4-about-stat-name">Our Teachers</span>
                    </div>
                  </div>

                  <div className="tl-4-about-stat">
                    <div className="tl-4-about-stat-txt">
                      <span className="tl-4-about-stat-num">85+</span>
                      <span className="tl-4-about-stat-name">
                        National Awards
                      </span>
                    </div>
                  </div>

                  <div className="tl-4-about-stat">
                    <div className="tl-4-about-stat-txt">
                      <span className="tl-4-about-stat-num">2k+</span>
                      <span className="tl-4-about-stat-name">
                        Student Enrolled
                      </span>
                    </div>
                  </div>
                </div>

                <div className="tl-4-about-txt-bottom">
                  <a
                    href="https://all4ed.org/wp-content/uploads/2017/05/TLP-white-paper-Leadership-in-Teaching-2016.pdf"
                    target="_blank"
                    className="tl-def-btn tl-4-def-btn"
                  >
                    moredetails
                    <i class="fa-solid fa-angles-right"></i>
                  </a>{" "}
                  <div className="tl-4-about-support">
                    <img
                      src="assets/images/tl-4/support.png"
                      alt="support icon"
                    />
                    <div>
                      <span className="tl-4-about-support-txt">
                        Get Support
                      </span>
                      <a
                        to="mailto:info.tollenseuniversity@gmail.com"
                        className="tl-4-about-support-mail"
                      >
                        info.tollenseuniversity@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AcademicPrograms />
      <TestimonialSection />

      <section className="tl-4-innovs tl-3-section-spacing">
        <div className="container">
          <div className="tl-4-innovs-heading">
            <h2 className="tl-4-section-title">Research & Innovation</h2>
            <p className="tl-4-innovs-heading-txt">
              Mauris sit amet lacinia est, vitae tristique metus. Nulla
              facilisi. Mauris tempor nibh vitae pulvinar ultricies.
            </p>
          </div>

          <ResearchCard />
        </div>
      </section>
      <section className="tl-4-campus">
        <div className="row g-0">
          <div className="col-xxl-4 col-lg-3">
            <div className="tl-5-campus-img">
              <img src="assets/images/tl-5/campus-1.jpg" alt="Students" />
            </div>
          </div>
          <div className="col-xxl-4 col-lg-6">
            <div className="tl-4-campus-txt">
              <h2 className="tl-5-section-title">
                Campus Life Revolves Around Academic Pursuits.
              </h2>
              <Link to="/transfer" className="tl-def-btn-2">
                More Information <i class="fa-solid fa-angles-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-3">
            <div className="tl-5-campus-img">
              <img src="assets/images/tl-5/campus-2.jpg" alt="Students" />
            </div>
          </div>
        </div>
      </section>
      <section
        className="tl-4-blogs tl-3-section-spacing"
        data-bg-color="#F3F1F1"
      >
        <div className="container">
          <h2 className="tl-4-section-title">Read Our Latest News</h2>

          <div className="row g-xl-4 g-3 justify-content-center justify-content-md-around">
            <div className="col-lg-6 ">
              <div className="tl-4-blog">
                <div className="tl-4-blog-img">
                  <img
                    src="assets/images/tl-4/blog-1.jpg"
                    alt="Blog Thumbnail"
                  />
                  <span className="kb-10-pop-article-category tl-4-blog-category">
                    Education
                  </span>
                </div>

                <div className="tl-single-blog-txt">
                  <span className="tl-single-blog-date">
                    <i className="fa-regular fa-clock"></i> March 24, 2023
                  </span>
                  <h4 className="tl-single-blog-title">
                    <Link to="/transfer">
                      10 Ways Improve Dropdowns in UI &amp; UX Design
                    </Link>
                  </h4>
                  <p className="tl-single-blog-descr">
                    There many tins pages any Lorem Ipsum available, but
                    alteration some.
                  </p>
                  <Link className="tl-single-blog-btn" to="/transfer">
                    Read More <i class="fa-solid fa-angles-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 ">
              <div className="tl-4-blog">
                <div className="tl-4-blog-img">
                  <img
                    src="assets/images/tl-4/blog-2.jpg"
                    alt="Blog Thumbnail"
                  />
                  <span className="kb-10-pop-article-category tl-4-blog-category">
                    Education
                  </span>
                </div>

                <div className="tl-single-blog-txt">
                  <span className="tl-single-blog-date">
                    <i className="fa-regular fa-clock"></i> March 24, 2023
                  </span>
                  <h4 className="tl-single-blog-title">
                    <Link to="/transfer">
                      Range Input That Looks Consistent Across All Browser.
                    </Link>
                  </h4>
                  <p className="tl-single-blog-descr">
                    There many tins pages any Lorem Ipsum available, but
                    alteration some.
                  </p>
                  <Link className="tl-single-blog-btn" to="/transfer">
                    Read More <i class="fa-solid fa-angles-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="tl-4-socials bg-defaults"
        data-background="assets/images/tl-4/social-bg.jpg"
        style={{ backgroundImage: `url(/assets/images/tl-4/social-bg.jpg)` }}
      >
        <div className="row g-0">
          <div className="col-xl-3 col-md-6 col-12">
            <SocialComponent
              title="YouTube"
              description="Nulla lacinia velit at nisl volutpat placerat. Fusce at elit id orci molestie iaculis eget eget metus. Donec purus est, porttitor at lacus sit amet."
              buttonText="Subscribe Channel"
            />
          </div>
          <div className="col-xl-3 col-md-6 col-12">
            <SocialComponent
              title="Facebook"
              description="Nulla lacinia velit at nisl volutpat placerat. Fusce at elit id orci molestie iaculis eget eget metus. Donec purus est, porttitor at lacus sit amet."
              buttonText="Like Page"
            />
          </div>
          <div className="col-xl-3 col-md-6 col-12">
            <SocialComponent
              title="Instagram"
              description="Nulla lacinia velit at nisl volutpat placerat. Fusce at elit id orci molestie iaculis eget eget metus. Donec purus est, porttitor at lacus sit amet."
              buttonText="Follow Account"
            />
          </div>
          <div className="col-xl-3 col-md-6 col-12">
            <SocialComponent
              title="Twitter"
              description="Nulla lacinia velit at nisl volutpat placerat. Fusce at elit id orci molestie iaculis eget eget metus. Donec purus est, porttitor at lacus sit amet."
              buttonText="Follow Handle"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
