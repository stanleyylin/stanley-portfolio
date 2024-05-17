import { NotFound, ProjectBody, ProjectHero } from "@/components";
import ProjectInfo from "@/components/molecules/projectPageSections/projectInfo";
import { PROJECTS } from "@/constants/projects";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty("overflow", "hidden scroll");
    }, []);

    let { slug } = useParams();
    if (!slug || !(slug in PROJECTS)) {
        return <NotFound />;
    }
    const { title, type, description, mockups } = PROJECTS[slug];
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="mx-auto my-8 pb-12 max-w-[1080px] px-3 sm:px-5">
            <ProjectHero
                title={title}
                type={type}
                description={description}
                mockups={mockups}
            />
            <div className="flex flex-col">
                <ProjectInfo
                    tech={PROJECTS[slug ?? ""].technologies}
                    skills={PROJECTS[slug ?? ""].skills}
                    buttons={PROJECTS[slug ?? ""].buttons}
                />
                <ProjectBody body={PROJECTS[slug ?? ""].content} />
            </div>
        </div>
    );
};

export default ProjectPage;
