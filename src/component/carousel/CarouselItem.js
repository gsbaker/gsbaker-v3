import React from 'react';
import Image from "../Image";

const CarouselItem = ({ image, isActive }) => {
    return (
        <div className={`${isActive ? 'active' : ''} carousel-item`}>
            <Image src={image} classes={'d-block w-100'} />
        </div>
    );
};

export default CarouselItem;
