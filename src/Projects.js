import ProjectCard from "./component/ProjectCard";

const Projects = () => {
    return (
        <div className='pt-3 container'>
            <ProjectCard
                title={"Smart Garage"}
                category={"iOS"}
                image={'smart_garage.png'}
            />
            <ProjectCard
                title={"Visual Perception Quiz"}
                category={"Web App"}
                image={'vp-quiz.png'}
                shadow={true}
            />
            <ProjectCard
                title={"Uniqlo Redesigned"}
                category={"Figma"}
                image={'uniqlo.png'}
                shadow={true}
            />
        </div>

    );
};

export default Projects