import { H2, P1 } from "@/components/atoms";
import { LinkProps } from "@/types";
import { FC } from "react";

type ProjectInfoProps = {
    tech: string[];
    skills: string[];
    buttons: LinkProps[];
};

const ProjectInfo: FC<ProjectInfoProps> = ({ tech, skills, buttons }) => {
    return (
        <div className=" grid-cols-1 grid sm:grid-cols-3 sm:gap-4">
            <div className="lg:pb-0 pb-4">
                <H2
                    className="text-5.5 xl:text-6 relative select-text"
                >
                    Technologies
                </H2>
                <P1 className="select-text">
                    {tech.map((technology, index) => (
                        <span key={index} className="text-3.5 xl:text-4">
                            {technology}
                            {index !== tech.length - 1 && ", "}
                        </span>
                    ))}
                </P1>
            </div>
            <div className="lg:pb-0 pb-6">
                <H2
                    className="text-6 xl:text-5.5 relative select-text"
                >
                    Skills
                </H2>
                <P1 className="select-text">
                    {skills.map((skill, index) => (
                        <span key={index} className="text-3.5 xl:text-4">
                            {skill}
                            {index !== skills.length - 1 && ", "}
                        </span>
                    ))}
                </P1>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center sm:pt-0 pt-3">
                {buttons.map(({ id, title, href, Icon }) => (
                    <button
                        key={id}
                        className="w-[80%] min-w-[180px] relative py-3 rounded-6 border-foreground border-[1px] shadow-btn-preglow hover:shadow-btn-glow cursor-pointer transition-all duration-300 ease pt-3"
                        style={{ cursor: "pointer" }}
                    >
                        <a
                            href={href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="mb-1 drop-shadow-text-bright mr-2 text-foreground select-none text-4"
                        >
                            {title}
                        </a>
                        <Icon className="absolute right-5 top-1/2 w-5 -translate-y-1/2  text-foreground" />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProjectInfo;
