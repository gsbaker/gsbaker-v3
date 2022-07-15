import ProjectCard from "./component/ProjectCard";

const Projects = () => {
    return (
        <div className='pt-3 container'>
            <ProjectCard
                title={"Golden Shoe"}
                category={"Web App"}
                image={"golden-shoe.png"}
            />
            <ProjectCard
                title={"Smart Garage"}
                category={"iOS"}
                image={'smart_garage.png'}
            />
            <ProjectCard
                title={"Visual Perception Quiz"}
                category={"Web App"}
                image={'visual-perception-quiz.png'}
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