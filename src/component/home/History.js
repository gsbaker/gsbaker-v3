import React from 'react';
import LocationCard from "./LocationCard";

const History = props => {
    return (
        <div className={'container'}>
            <h2 className={'display-font'}>A brief history</h2>
            <LocationCard
                title={'University of Birmingham'}
                subtitle={'Computer Science'}
                year={'19-22'}
                colorScheme={'bg-accent'}
            />
            <LocationCard
                title={'FreeAgent'}
                subtitle={'Software Engineering Intern'}
                year={'21'}
                colorScheme={'bg-accent'}
            />
            <LocationCard
                title={'?'}
                subtitle={'Where Next?'}
                image={'item_box.webp'}
                colorScheme={'bg-accent'}
            />
        </div>
    );
};

export default History;
