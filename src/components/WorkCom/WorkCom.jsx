import React, { useEffect, useState } from 'react';
import './WorkCom.css';

export const worksData = [
    {
        title: "Ulugbek & Severa, 2025 May",
        photos: [
            { src: "/public/works/U.jpg", alt: "Ulugbek & Severa 1" },
            { src: "/public/works/U2.JPG", alt: "Ulugbek & Severa 2" },
            { src: "/public/works/U3.JPG", alt: "Ulugbek & Severa 3" },
            { src: "/public/works/U4.JPG", alt: "Ulugbek & Severa 4" },
            { src: "/public/works/U5.JPG", alt: "Ulugbek & Severa 5" },
            { src: "/public/works/U6.JPG", alt: "Ulugbek & Severa 6" },
        ],
    },
    {
        title: "Zarifjon & Zuhra, 2025 July",
        photos: [
            { src: "/public/works/R1.JPG", alt: "Zarifjon & Zuhra 1" },
            { src: "/public/works/R2.JPG", alt: "Zarifjon & Zuhra 2" },
            { src: "/public/works/R3.JPG", alt: "Zarifjon & Zuhra 3" },
            { src: "/public/works/R4.JPG", alt: "Zarifjon & Zuhra 4" },
            { src: "/public/works/R5.JPG", alt: "Zarifjon & Zuhra 5" },
        ],
    },
    {
        title: "Asilbek & Rashida, 2025 August",
        photos: [
            { src: "/public/works/A1.JPG", alt: "Asilbek & Rashida 1" },
            { src: "/public/works/A2.JPG", alt: "Asilbek & Rashida 2" },
            { src: "/public/works/A3.JPG", alt: "Asilbek & Rashida 3" },
            { src: "/public/works/A4.JPG", alt: "Asilbek & Rashida 4" },
            { src: "/public/works/A5.JPG", alt: "Asilbek & Rashida 5" },
            { src: "/public/works/A6.JPG", alt: "Asilbek & Rashida 6" },
            { src: "/public/works/A7.JPG", alt: "Asilbek & Rashida 7" },
            { src: "/public/works/A8.JPG", alt: "Asilbek & Rashida 8" },
            { src: "/public/works/A9.JPG", alt: "Asilbek & Rashida 9" },
            { src: "/public/works/A10.JPG", alt: "Asilbek & Rashida 10" },
            { src: "/public/works/A11.JPG", alt: "Asilbek & Rashida 11" },
            { src: "/public/works/A12.JPG", alt: "Asilbek & Rashida 12" },
            { src: "/public/works/A13.JPG", alt: "Asilbek & Rashida 13" },
            { src: "/public/works/A14.JPG", alt: "Asilbek & Rashida 14" },
            { src: "/public/works/A15.JPG", alt: "Asilbek & Rashida 15" },
        ],
    },
];

const WorkCom = ({ works }) => {
    const data = works || worksData; // use passed works or full worksData
    const [visibleItems, setVisibleItems] = useState([]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const allIndexes = data.flatMap((work) =>
                work.photos.map((_, idx) => idx)
            );
            setVisibleItems(allIndexes);
        }, 100);
        return () => clearTimeout(timeout);
    }, [data]);

    return (
        <div className="gallery-wrapper">
            {data.map((work, wIndex) => (
                <div key={wIndex} className="work-item">
                    <h2 className="work-title">{work.title}</h2>
                    <div className="gallery">
                        {work.photos.map((photo, pIndex) => (
                            <div
                                key={pIndex}
                                className={`gallery-item ${
                                    visibleItems.includes(pIndex) ? "visible" : ""
                                }`}
                            >
                                <img src={photo.src} alt={photo.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WorkCom;
