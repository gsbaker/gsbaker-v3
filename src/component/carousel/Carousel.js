import React from 'react';

const Carousel = ({ children }) => {
    return (
        <div id="carousel" className={`${window.matchMedia('(prefers-color-scheme: dark)').matches ? '' : 'carousel-dark'} carousel slide`} data-bs-interval="false">
            <div className="carousel-inner">
                { children }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"/>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
