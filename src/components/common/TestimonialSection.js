import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow } from './SampleNextArrow';
import { SamplePrevArrow } from './SamplePrevArrow';

export const TestimonialSection = () => {
    const testimonialSettings = {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    const imageSettings = {
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <section className="tl-5-testimonial">
            <div className="container">
                <div className="tl-5-testimonial-heading d-flex justify-content-between align-items-center">
                    <h2 className="tl-5-section-title">Meet Our Alumni</h2>
                    <div className="tl-5-testimonial-slider-nav"></div>
                </div>
            </div>

            <div className="tl-5-testimonial-img-slider">
                <Slider {...imageSettings}>
                    <div className="tl-5-testimonial-img">
                        <img src="/assets/images/tl-5/alumni-1.jpg" alt="Alumni Image" />
                    </div>
                    <div className="tl-5-testimonial-img">
                        <img src="/assets/images/tl-5/alumni-2.jpg" alt="Alumni Image" />
                    </div>
                    <div className="tl-5-testimonial-img">
                        <img src="/assets/images/tl-5/alumni-3.jpg" alt="Alumni Image" />
                    </div>
                </Slider>
            </div>

            <div className="container position-relative">
                <Slider {...testimonialSettings} className="tl-5-testimonial-slider">
                    <div className="slider-item">
                        <div className="tl-5-single-testimony">
                            <img className="tl-5-single-testimony-icon" src="assets/images/tl-5/testimonial-icon.png" alt="Quotation Icon" />
                            <div className="tl-5-single-testimony-txt">
                                <p>“Universities offer a wide range of student organizations and clubs catering to diverse interests. These groups focus on hobbies, sports, cultural activities, social causes, academic interests, and more”</p>
                                <div className="tl-5-alumni">
                                    <h5 className="tl-5-alumni-name">Douglas Lyphe</h5>
                                    <div className="tl-5-alumni-label">Professor of Technology</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="tl-5-single-testimony">
                            <img className="tl-5-single-testimony-icon" src="assets/images/tl-5/testimonial-icon.png" alt="Quotation Icon" />
                            <div className="tl-5-single-testimony-txt">
                                <p>“Universities offer a wide range of student organizations and clubs catering to diverse interests. These groups focus on hobbies, sports, cultural activities, social causes, academic interests, and more”</p>
                                <div className="tl-5-alumni">
                                    <h5 className="tl-5-alumni-name">Chris Mark</h5>
                                    <div className="tl-5-alumni-label">Professor of Technology</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="tl-5-single-testimony">
                            <img className="tl-5-single-testimony-icon" src="assets/images/tl-5/testimonial-icon.png" alt="Quotation Icon" />
                            <div className="tl-5-single-testimony-txt">
                                <p>“Universities offer a wide range of student organizations and clubs catering to diverse interests. These groups focus on hobbies, sports, cultural activities, social causes, academic interests, and more”</p>
                                <div className="tl-5-alumni">
                                    <h5 className="tl-5-alumni-name">Makron Dor</h5>
                                    <div className="tl-5-alumni-label">Professor of Technology</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};
