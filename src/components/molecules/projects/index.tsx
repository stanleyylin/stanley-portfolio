import EmberGroveHeader from "@/assets/ember-grove-header.jpeg";
import { H2, ProjectCard } from "@/components";
import { ProjectData } from "@/constants";

const Projects = () => {
    return (
        <div className="flex flex-col items-center py-0 pt-20" id="projects">
            <div className="relative flex justify-center items-center w-screen min-h-44 mb-16 border-y-[1px] border-primary overflow-clip">
                <img
                    src={EmberGroveHeader}
                    className="absolute top-0 h-full w-[100vw] object-cover animate-moveTopToBottom"
                />
                <div className="absolute top-0 left-0 h-44 z-10 w-[100vw] bg-background transition duration-300 opacity-0 hover:opacity-30 " />
                <H2 className="z-10 uppercase text-primary md:!text-10 xs:!text-9 !text-8  drop-shadow-text-bright">
                    Projects
                </H2>
            </div>

            <div className="flex w-full justify-center align-center">
                <div className="max-w-[1200px] w-full sm:px-10 xs:px-5 px-3 mb-24 grid gap-6 md:mb-49 md:grid-cols-2">
                    {ProjectData.map((project, index) => (
                        <ProjectCard {...project} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
