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
                        <p className="book-text">
                            My journey began with a simple curiosity and a modest camera, yet it evolved into a lifelong
                            dedication to the craft of visual storytelling. Each project is a new chapter, written with
                            light, shadow, and intention, reflecting both artistry and authenticity.
                        </p>
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
                        <p className="book-text">
                            These experiences have allowed me to cultivate a versatile portfolio, blending vibrant
                            lifestyle imagery with meticulously crafted commercial work, all unified by a pursuit of
                            beauty, authenticity, and narrative depth.
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
                            <li><strong>Photography Disciplines:</strong> Portraits, lifestyle, commercial, and
                                editorial projects, each executed with thoughtful composition and creative vision.
                            </li>
                            <li><strong>Editing Mastery (Adobe Lightroom):</strong> Four years of experience in tonal
                                refinement, color grading, and creating cohesive visual narratives.
                            </li>
                            <li><strong>Digital Artistry (Photoshop):</strong> Skillful retouching, compositing, and
                                manipulation to achieve polished and compelling visuals.
                            </li>
                            <li><strong>Post-production Expertise:</strong> Advanced techniques in color correction,
                                detailed retouching, and seamless image enhancement.
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
                            <li><strong>Creative Vision:</strong> An attentive eye for composition and storytelling,
                                ensuring each image conveys depth and emotion.
                            </li>
                            <li><strong>Communication:</strong> Strong collaborative skills to interpret and realize
                                client visions with precision and care.
                            </li>
                            <li><strong>Efficiency:</strong> Effective project management and adherence to deadlines,
                                balancing speed with uncompromised quality.
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default AboutCom;
