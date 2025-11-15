import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import './AboutCom.css';
import { Pagination, EffectCreative } from 'swiper/modules';

const PureCssFlower = () => (
    <div className="pure-css-flower"></div>
);

const DenseFlowerCluster = ({ positionClass }) => (
    <div className={`corner-decor-container ${positionClass}`}>
        <div className="flower-1">
            <PureCssFlower />
        </div>
        <div className="flower-2">
            <PureCssFlower />
        </div>
        <div className="flower-3">
            <PureCssFlower />
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
                pagination={{ clickable: true }}
                modules={[Pagination, EffectCreative]}
                className="book-swiper"
            >
                {/* --- Page 1: Introduction --- */}
                <SwiperSlide>
                    <div className="book-page">
                        <div className="page-border"></div>
                        <DenseFlowerCluster positionClass="top-left" />
                        <DenseFlowerCluster positionClass="bottom-left" />
                        <DenseFlowerCluster positionClass="top-right" />
                        <DenseFlowerCluster positionClass="bottom-right" />

                        <h3 className="book-title">Liber Primus: De Auctore</h3>
                        <h1 className="main-heading">The Chronicle of Lobar</h1>

                        <div className="book-text">
                            <span className="drop-cap-container">
                                <span className="initial-ornament">
                                    <span className="drop-cap">I</span>
                                </span>
                            </span>
                            <span className="text-after-drop-cap">
                                I'm Lobar, a professional photographer and visual storyteller based in Tashkent, Uzbekistan. Through my lens, I seek to capture the subtle poetry of everyday life, transforming fleeting moments into lasting memories. Every image I create is a dialogue between light, composition, and emotion, revealing narratives that words alone cannot convey.
                            </span>
                        </div>
                        <p className="book-text">
                            My journey began with a simple curiosity and a modest camera, yet it evolved into a lifelong dedication to the craft of visual storytelling. Each project is a new chapter, written with light, shadow, and intention, reflecting both artistry and authenticity.
                        </p>
                    </div>
                </SwiperSlide>

                {/* --- Page 2: Accomplishments --- */}
                <SwiperSlide>
                    <div className="book-page">
                        <div className="page-border"></div>
                        <DenseFlowerCluster positionClass="top-left" />
                        <DenseFlowerCluster positionClass="bottom-left" />
                        <DenseFlowerCluster positionClass="top-right" />
                        <DenseFlowerCluster positionClass="bottom-right" />

                        <h3 className="book-title">De Gestis et Gloriis</h3>
                        <h2 className="book-subtitle">A Record of Accomplishments</h2>
                        <p className="book-text">
                            <span className="drop-cap-container">
                                <span className="initial-ornament">
                                    <span className="drop-cap">I</span>
                                </span>
                            </span>
                            <span className="text-after-drop-cap">
                                I have collaborated with a diverse range of clients, from international brands to influential individuals and editorial publications. Each endeavor is approached with a commitment to creativity, precision, and storytelling excellence, ensuring that every project leaves a lasting impression.
                            </span>
                        </p>
                        <p className="book-text">
                            These experiences have allowed me to cultivate a versatile portfolio, blending vibrant lifestyle imagery with meticulously crafted commercial work, all unified by a pursuit of beauty, authenticity, and narrative depth.
                        </p>
                    </div>
                </SwiperSlide>

                {/* --- Page 3: Technical Skills --- */}
                <SwiperSlide>
                    <div className="book-page">
                        <div className="page-border"></div>
                        <DenseFlowerCluster positionClass="top-left" />
                        <DenseFlowerCluster positionClass="bottom-left" />
                        <DenseFlowerCluster positionClass="top-right" />
                        <DenseFlowerCluster positionClass="bottom-right" />

                        <h3 className="book-title">Instrumenta Artis</h3>
                        <h2 className="book-subtitle">The Tools of My Trade</h2>
                        <ul className="book-list">
                            <li><strong>Photography Disciplines:</strong> Portraits, lifestyle, commercial, and editorial projects, each executed with thoughtful composition and creative vision.</li>
                            <li><strong>Editing Mastery (Adobe Lightroom):</strong> Four years of experience in tonal refinement, color grading, and creating cohesive visual narratives.</li>
                            <li><strong>Digital Artistry (Photoshop):</strong> Skillful retouching, compositing, and manipulation to achieve polished and compelling visuals.</li>
                            <li><strong>Post-production Expertise:</strong> Advanced techniques in color correction, detailed retouching, and seamless image enhancement.</li>
                        </ul>
                    </div>
                </SwiperSlide>

                {/* --- Page 4: Soft Skills --- */}
                <SwiperSlide>
                    <div className="book-page">
                        <div className="page-border"></div>
                        <DenseFlowerCluster positionClass="top-left" />
                        <DenseFlowerCluster positionClass="bottom-left" />
                        <DenseFlowerCluster positionClass="top-right" />
                        <DenseFlowerCluster positionClass="bottom-right" />

                        <h3 className="book-title">Virtutes et Mores</h3>
                        <h2 className="book-subtitle">Essential Qualities</h2>
                        <ul className="book-list">
                            <li><strong>Creative Vision:</strong> An attentive eye for composition and storytelling, ensuring each image conveys depth and emotion.</li>
                            <li><strong>Communication:</strong> Strong collaborative skills to interpret and realize client visions with precision and care.</li>
                            <li><strong>Efficiency:</strong> Effective project management and adherence to deadlines, balancing speed with uncompromised quality.</li>
                        </ul>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default AboutCom;
