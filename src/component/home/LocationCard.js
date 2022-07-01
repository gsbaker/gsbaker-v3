import React from 'react';
import Image from "../Image";

const LocationCard = ({ title, subtitle, year, colorScheme, image }) => {
    return (
        <div className={`${colorScheme ? colorScheme : 'bg-accent'} d-inline-block me-4 mb-3 p-3 br-10 mb-3 user-select-all`}>
            <div className={'d-inline-flex flex-wrap align-items-center'}>
                <div className={'p-2 pe-3 me-5'}>
                    <p className={'fs-6 m-0'}>{ title }</p>
                    <p className={'small m-0'}>{ subtitle }</p>
                </div>
                <div className={'p-2'}>
                    { year ? <p className={'fs-5 m-0'}>{ year }</p> : <Image src={image} classes={'location-card-img'}/> }

                </div>
            </div>

        </div>
    );
};

export default LocationCard;
