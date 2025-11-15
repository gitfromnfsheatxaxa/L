import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import './AboutCom.css';
import {EffectCreative, Pagination} from 'swiper/modules';

const PureCssFlower = () => (
    <div className="pure-css-flower"></div>
);

const DenseFlowerCluster = ({positionClass}) => (
    <div className={`corner-decor-container ${positionClass}`}>
        <div className="flower-1">
            <PureCssFlower/>
        </div>
        <div className="flower-2">
            <PureCssFlower/>
        </div>
        <div className="flower-3">
            <PureCssFlower/>
        </div>
    </div>
);

const AboutCom = () => {
    return (
        <div className="about-container">
            <Swiper
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-120%', 0, -500],
                        opacity: 0.8,
                    },
                    next: {
                        shadow: true,
                        translate: ['120%', 0, -500],
                        opacity: 0.8,
                    },
                }}
                grabCursor={true}
                pagination={{clickable: true}}
                modules={[Pagination, EffectCreative]}
                className="book-swiper"
            >
                {/* --- Page 1: Introduction --- */}
                <SwiperSlide>
                    <div className="book-page">
                        <div className="page-border"></div>
                        <DenseFlowerCluster positionClass="top-left"/>
                        <DenseFlowerCluster positionClass="bottom-left"/>
                        <DenseFlowerCluster positionClass="top-right"/>
                        <DenseFlowerCluster positionClass="bottom-right"/>
                        <h2 className="book-subtitle">About me</h2>

                        <div className="book-text">
                            <span className="drop-cap-container">
                                <span className="initial-ornament">
                                    <span className="drop-cap">I</span>
                                </span>
                            </span>
                            <span className="text-after-drop-cap">
I'm Lobar
Professional photographer and photo editor based in Tashkent, Uzbekistan.
I specialize in creating visually compelling images and edits, with a strong focus on both aesthetic quality and storytelling.                            </span>
                        </div>

                    </div>
                </SwiperSlide>

                {/* --- Page 2: Accomplishments --- */}
                <SwiperSlide>
                    <div className="book-page">
                        <div className="page-border"></div>
                        <DenseFlowerCluster positionClass="top-left"/>
                        <DenseFlowerCluster positionClass="bottom-left"/>
                        <DenseFlowerCluster positionClass="top-right"/>
                        <DenseFlowerCluster positionClass="bottom-right"/>

                        <h2 className="book-subtitle">Achievements</h2>
                        <p className="book-text">
                            <span className="drop-cap-container">
                                <span className="initial-ornament">
                                    <span className="drop-cap">I</span>
                                </span>
                            </span>
                            <span className="text-after-drop-cap">
Worked with a variety of clients including influencers, brands, and commercial projects.
I am passionate about bringing creative ideas to life through photography and post-production and am always open to collaboration. If you have a concept or project in mind, feel free to reach out — I’d love to work with you!                            </span>
                        </p>

                    </div>
                </SwiperSlide>

                {/* --- Page 3: Technical Skills --- */}
                <SwiperSlide>
                    <div className="book-page">
                        <div className="page-border"></div>
                        <DenseFlowerCluster positionClass="top-left"/>
                        <DenseFlowerCluster positionClass="bottom-left"/>
                        <DenseFlowerCluster positionClass="top-right"/>
                        <DenseFlowerCluster positionClass="bottom-right"/>

                        <h2 className="book-subtitle">Technical Skills</h2>
                        <ul className="book-list">
                            <li><strong>Photography:</strong> Portraits, lifestyle, commercial.
                            </li>
                            <li><strong>Editing:</strong> dobe Lightroom (4 years)
                            </li>
                            <li><strong>Photoshop:</strong> Photoshop (1 year)
                            </li>
                            <li><strong>Post-production:</strong> Color grading, retouching, compositing
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>

                {/* --- Page 4: Soft Skills --- */}
                <SwiperSlide>
                    <div className="book-page">
                        <div className="page-border"></div>
                        <DenseFlowerCluster positionClass="top-left"/>
                        <DenseFlowerCluster positionClass="bottom-left"/>
                        <DenseFlowerCluster positionClass="top-right"/>
                        <DenseFlowerCluster positionClass="bottom-right"/>

                        <h2 className="book-subtitle">Soft Skills</h2>
                        <ul className="book-list">
                            <li><strong>Creative Vision:</strong> Creative vision and attention to detail
                            </li>
                            <li><strong>Communication:</strong> Strong communication and collaboration with clients
                            </li>
                            <li><strong>Efficiency:</strong> Project management and time efficiency
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default AboutCom;
