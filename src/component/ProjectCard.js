import React from 'react';
import Image from "./Image";

const ProjectCard = ({ title, category, image, shadow }) => {
    return (
        <div className={`${window.matchMedia('(prefers-color-scheme: dark)').matches ? 'bg-accent-darker' : 'bg-accent'} project-card p-4 mt-5 mb-5 br-10`}>
            <div className={'float-end text-end w-100'}>
                <p className={'m-0'}>{category}</p>
                <h1>{title}</h1>
            </div>
            <div className={'p-2 text-center container'}>
                <Image classes={`${shadow ? 'shadow' : ''} project-card-img img-fluid  mt-2`} src={`project_screenshots/${image}`}/>
            </div>
        </div>
    );
};

export default ProjectCard;
