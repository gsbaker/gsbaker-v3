import React from 'react';

const Image = ({ src, id, classes }) => {
    return (
        <img
            src={process.env.PUBLIC_URL + src}
            alt={''}
            className={classes}
            id={id}
        />
    );
};

export default Image;
