import { NotFound, ProjectBody, ProjectHero } from "@/components";
import ProjectInfo from "@/components/molecules/projectPageSections/projectInfo";
import { pageTransition, pageVariants } from "@/constants";
import { PROJECTS } from "@/constants/projects";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
    useEffect(() => {
        setTimeout(() => {
            const root = document.documentElement;
            root.style.setProperty("overflow", "hidden scroll");
            window.scrollTo(0, 0);
            document.body.removeEventListener("touchstart", function (e) {
                e.preventDefault();
            });
        }, 5);
    }, []);

    let { slug } = useParams();
    if (!slug || !(slug in PROJECTS)) {
        return <NotFound />;
    }
    const { title, type, description, mockups } = PROJECTS[slug];
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={pageTransition}
        >
            <div className="mx-auto my-8 pb-12 max-w-[1080px] px-5 sm:px-5">
                <ProjectHero
                    title={title}
                    type={type}
                    description={description}
                    mockups={mockups}
                />
                <div className="flex flex-col">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <ProjectInfo
                            tech={PROJECTS[slug ?? ""].technologies}
                            skills={PROJECTS[slug ?? ""].skills}
                            buttons={PROJECTS[slug ?? ""].buttons}
                        />
                    </motion.div>
                    <ProjectBody body={PROJECTS[slug ?? ""].content} />
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectPage;
