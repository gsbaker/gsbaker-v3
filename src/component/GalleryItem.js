import React from 'react';
import Image from "./Image";

const MyComponent = ({ image, title, caption }) => {
    return (
        <div className={'mb-5'}>
            <div className={'text-center'}>
                <Image src={'photography/' + image + '.jpeg'} classes={'img-fluid br-10'} />
            </div>
            <div className={'pt-3'}>
                <p className={'text-center m-1 text-muted'}>{title}</p>
                <div className={'block'}>
                    <p className={'small text-muted m-0'}>{caption}</p>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
