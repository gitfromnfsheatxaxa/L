import React, { useEffect, useState } from 'react';
import './WorkCom.css';

export const worksData = [
    // April 2025
    {
        category: "Studio",
        title: "Dilshoda, April 2025",
        photos: [
            { src: "/works/photo_39_2025-11-15_22-38-48.jpg", alt: "Dilshoda" },
        ],
    },

    // May 2025
    {
        category: "Wedding",
        title: "Ulugbek & Severa, 2025 May",
        photos: [
            { src: "/works/photo_21_2025-11-15_22-38-12.jpg", alt: "Ulugbek & Severa" },
            { src: "/works/photo_22_2025-11-15_22-38-12.jpg", alt: "Ulugbek & Severa" },
            { src: "/works/photo_23_2025-11-15_22-38-12.jpg", alt: "Ulugbek & Severa" },
            { src: "/works/photo_24_2025-11-15_22-38-12.jpg", alt: "Ulugbek & Severa" },
            { src: "/works/photo_25_2025-11-15_22-38-12.jpg", alt: "Ulugbek & Severa" },
            { src: "/works/photo_26_2025-11-15_22-38-12.jpg", alt: "Ulugbek & Severa" },
        ],
    },

    // June 2025
    {
        category: "Studio",
        title: "Shahzoda, June 2025",
        photos: [
            { src: "/works/photo_13_2025-11-15_22-38-48.jpg", alt: "Shahzoda" },
            { src: "/works/photo_14_2025-11-15_22-38-48.jpg", alt: "Shahzoda" },
            { src: "/works/photo_15_2025-11-15_22-38-48.jpg", alt: "Shahzoda" },
            { src: "/works/photo_16_2025-11-15_22-38-48.jpg", alt: "Shahzoda" },
            { src: "/works/photo_17_2025-11-15_22-38-48.jpg", alt: "Shahzoda" },
        ],
    },
    {
        category: "Studio",
        title: "Madina, June 2025",
        photos: [
            { src: "/works/photo_18_2025-11-15_22-38-48.jpg", alt: "Madina" },
            { src: "/works/photo_19_2025-11-15_22-38-48.jpg", alt: "Madina" },
            { src: "/works/photo_20_2025-11-15_22-38-48.jpg", alt: "Madina" },
        ],
    },
    {
        category: "Street Shoot",
        title: "Sabina, June 2025",
        photos: [
            { src: "/works/photo_34_2025-11-15_22-38-48.jpg", alt: "Sabina" },
        ],
    },

    // July 2025
    {
        category: "Wedding",
        title: "Zarifjon & Zuhra, 2025 July",
        photos: [
            { src: "/works/photo_16_2025-11-15_22-38-12.jpg", alt: "Zarifjon & Zuhra" },
            { src: "/works/photo_17_2025-11-15_22-38-12.jpg", alt: "Zarifjon & Zuhra" },
            { src: "/works/photo_18_2025-11-15_22-38-12.jpg", alt: "Zarifjon & Zuhra" },
            { src: "/works/photo_19_2025-11-15_22-38-12.jpg", alt: "Zarifjon & Zuhra" },
            { src: "/works/photo_20_2025-11-15_22-38-12.jpg", alt: "Zarifjon & Zuhra" },
        ],
    },
    {
        category: "Street Shoot",
        title: "Mavluda, July 2025",
        photos: [
            { src: "/works/photo_21_2025-11-15_22-38-48.jpg", alt: "Mavluda" },
            { src: "/works/photo_22_2025-11-15_22-38-48.jpg", alt: "Mavluda" },
        ],
    },
    {
        category: "Commercial",
        title: "For brand Manisa, July 2025",
        photos: [
            { src: "/works/photo_1_2025-11-15_22-38-48.jpg", alt: "For brand Manisa" },
            { src: "/works/photo_2_2025-11-15_22-38-48.jpg", alt: "For brand Manisa" },
            { src: "/works/photo_3_2025-11-15_22-38-48.jpg", alt: "For brand Manisa" },
            { src: "/works/photo_4_2025-11-15_22-38-48.jpg", alt: "For brand Manisa" },
        ],
    },

    // August 2025
    {
        category: "Wedding",
        title: "Asilbek & Rashida, 2025 August",
        photos: [
            { src: "/works/photo_1_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
            { src: "/works/photo_2_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
            { src: "/works/photo_3_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
            { src: "/works/photo_4_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
            { src: "/works/photo_5_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
            { src: "/works/photo_6_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
            { src: "/works/photo_7_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
            { src: "/works/photo_8_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
            { src: "/works/photo_10_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
            { src: "/works/photo_11_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
            { src: "/works/photo_12_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
            { src: "/works/photo_13_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
            { src: "/works/photo_14_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
            { src: "/works/photo_15_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
        ],
    },
    {
        category: "Street Shoot",
        title: "Mohina, August 2025",
        photos: [
            { src: "/works/photo_23_2025-11-15_22-38-48.jpg", alt: "Mohina" },
            { src: "/works/photo_24_2025-11-15_22-38-48.jpg", alt: "Mohina" },
            { src: "/works/photo_25_2025-11-15_22-38-48.jpg", alt: "Mohina" },
            { src: "/works/photo_26_2025-11-15_22-38-48.jpg", alt: "Mohina" },
        ],
    },
    {
        category: "Street Shoot",
        title: "Dilshoda, August 2025",
        photos: [
            { src: "/works/photo_36_2025-11-15_22-38-48.jpg", alt: "Dilshoda" },
            { src: "/works/dilshoda22.jpg", alt: "Dilshoda" },
        ],
    },

    // September 2025
    {
        category: "Commercial",
        title: "Meros Gallery Fashion Show, September 2025",
        photos: [
            { src: "/works/photo_5_2025-11-15_22-38-48.jpg", alt: "Meros Gallery Fashion Show" },
            { src: "/works/photo_8_2025-11-15_22-38-48.jpg", alt: "Meros Gallery Fashion Show" },
            { src: "/works/photo_10_2025-11-15_22-38-48.jpg", alt: "Meros Gallery Fashion Show" },
            { src: "/works/photo_11_2025-11-15_22-38-48.jpg", alt: "Meros Gallery Fashion Show" },
            { src: "/works/photo_12_2025-11-15_22-38-48.jpg", alt: "Meros Gallery Fashion Show" },
        ],
    },
    {
        category: "Street Shoot",
        title: "Sabina, September 2025",
        photos: [
            { src: "/works/photo_27_2025-11-15_22-38-48.jpg", alt: "Sabina" },
            { src: "/works/photo_28_2025-11-15_22-38-48.jpg", alt: "Sabina" },
            { src: "/works/photo_29_2025-11-15_22-38-48.jpg", alt: "Sabina" },
        ],
    },

    // October 2025
    {
        category: "Studio",
        title: "Sabina, October 2025",
        photos: [
            { src: "/works/photo_40_2025-11-15_22-38-48.jpg", alt: "Sabina" },
            { src: "/works/photo_41_2025-11-15_22-38-48.jpg", alt: "Sabina" },
            { src: "/works/photo_42_2025-11-15_22-38-48.jpg", alt: "Sabina" },
        ],
    },
    {
        category: "Street Shoot",
        title: "Shohsanam, October 2025",
        photos: [
            { src: "/works/photo_30_2025-11-15_22-38-48.jpg", alt: "Shohsanam" },
            { src: "/works/photo_31_2025-11-15_22-38-48.jpg", alt: "Shohsanam" },
            { src: "/works/photo_32_2025-11-15_22-38-48.jpg", alt: "Shohsanam" },
        ],
    },

    // November 2025
    {
        category: "Commercial",
        title: "For Volna Fitness Club, November 2025",
        photos: [
            { src: "/works/photo_6_2025-11-15_22-38-48.jpg", alt: "For Volna Fitness Club" },
            { src: "/works/photo_7_2025-11-15_22-38-48.jpg", alt: "For Volna Fitness Club" },
            { src: "/works/photo_9_2025-11-15_22-38-48.jpg", alt: "For Volna Fitness Club" },
        ],
    },
    {
        category: "Street Shoot",
        title: "Marjona, November 2025",
        photos: [
            { src: "/works/photo_37_2025-11-15_22-38-48.jpg", alt: "Marjona" },
            { src: "/works/photo_38_2025-11-15_22-38-48.jpg", alt: "Marjona" },
        ],
    },
];


const WorkCom = ({ works }) => {
    const data = works || worksData;
    const [visibleItems, setVisibleItems] = useState([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const allIndexes = data.flatMap((work) =>
                work.photos.map((_, idx) => idx)
            );
            setVisibleItems(allIndexes);
        }, 100);
        return () => clearTimeout(timeout);
    }, [data]);

    const openLightbox = (photo) => {
        setCurrentPhoto(photo);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setCurrentPhoto(null);
    };

    return (
        <div className="gallery-wrapper">
            {data.map((work, wIndex) => (
                <div key={wIndex} className="work-item">
                    <h3 className="work-category">{work.category}</h3>
                    <h2 className="work-title">{work.title}</h2>
                    <div className="gallery">
                        {work.photos.map((photo, pIndex) => (
                            <div
                                key={pIndex}
                                className={`gallery-item ${visibleItems.includes(pIndex) ? "visible" : ""}`}
                                onClick={() => openLightbox(photo)}
                                style={{ cursor: 'pointer' }}
                            >
                                <img src={photo.src} alt={photo.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Lightbox */}
            {lightboxOpen && currentPhoto && (
                <div className="lightbox" onClick={closeLightbox}>
                    <span className="lightbox-close">&times;</span>
                    <img
                        src={currentPhoto.src}
                        alt={currentPhoto.alt}
                        className="lightbox-img"
                        onClick={(e) => e.stopPropagation()} // prevent closing when clicking on image
                    />
                </div>
            )}
        </div>
    );
};

export default WorkCom;
