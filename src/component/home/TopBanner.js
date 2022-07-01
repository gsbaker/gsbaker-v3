import React from 'react';
import Image from "../Image";

const TopBanner = props => {
    return (
        <div className='home container'>
            <div className={'d-flex flex-wrap align-items-center justify-content-evenly'}>
                <div className={'p-2 mt-4'}>
                    <h1 className={'user-select-all '}>Hi. I'm&nbsp;
                        <span className={'text-navy'}>George</span>.
                    </h1>
                    <h1 className={'user-select-all'}>A Software Engineer.</h1>
                </div>
                <div className={'p-2 mt-4 text-center'}>
                    <Image src={'profile_picture.jpeg'} id={'profile_picture'} classes={'br-10'}/>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;
