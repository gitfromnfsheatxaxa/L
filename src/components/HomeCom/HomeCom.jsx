import React from 'react';
import "./HomeCom.css"

const HeaderCom = () => {
    return (
        <header className="header-container">
            <div className="header-frame">
                <div className="ornate-top-border"></div>
                <div className="masthead-content">
                    <h1 className="masthead-title">Lobar</h1>
                    <p className="masthead-subtitle">
                        Professional Photographer and Digital Artist
                    </p>
                    <div className="photo-plinth">
                        <div className="photo-placeholder" aria-label="Lobar's Profile Photo Placeholder">
                        </div>
                    </div>
                </div>
                <div className="ornate-bottom-border"></div>
            </div>
        </header>
    );
};

export default HeaderCom;