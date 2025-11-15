import React from 'react';
import '../AboutCom/AboutCom.css';

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
        <div className="flower-4">
            <PureCssFlower />
        </div>
        <div className="flower-5">
            <PureCssFlower />
        </div>
    </div>
);

const ReflectionsCom = () => {
    return (
        <div className="about-container">
            <div className="book-page" style={{ minHeight: '65vh' }}>
                <div className="page-border"></div>
                <DenseFlowerCluster positionClass="top-left"/>
                <DenseFlowerCluster positionClass="bottom-left"/>
                <DenseFlowerCluster positionClass="top-right"/>
                <DenseFlowerCluster positionClass="bottom-right"/>

                <h2 className="book-subtitle">Reflections</h2>

                <p className="book-text">
                    <span className="drop-cap-container">
                        <span className="initial-ornament">
                            <span className="drop-cap">M</span>
                        </span>
                    </span>
                    <span className="text-after-drop-cap">
<br/>

My portfolio represents my growing journey as a photographer and my desire to capture real moments, emotions, and stories.
                        I focus on using light, color, and composition in a simple but meaningful way, creating images that make viewers pause and feel something.
                        Each photo reflects my interest in storytelling and my goal to show the world from my own perspective.
This portfolio also connects to my professional goals. I want to work with clients and creative teams who value honest, expressive visuals.
                        I aim to develop a style that is both personal and flexible, allowing me to take on different types of projects while keeping my own artistic voice.                    </span>
                </p>

            </div>
        </div>
    );
};

export default ReflectionsCom;
