import React from 'react';

const FactCard = ({ className, text, colorScheme }) => {
    return (
        <div className={className}>
            <div className={`${colorScheme ? colorScheme : 'bg-accent'} br-10 p-5`}>
                <p className={'m-0'}>{ text }</p>
            </div>
        </div>



    );
};

export default FactCard;
