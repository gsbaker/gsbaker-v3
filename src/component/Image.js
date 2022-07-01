import React from 'react';
import PropTypes from 'prop-types';

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

Image.defaultProps = {
    id: '',
}

Image.propTypes = {

};

export default Image;
