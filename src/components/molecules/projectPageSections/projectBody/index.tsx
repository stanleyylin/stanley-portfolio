import { ProjectBodyChild } from "@/components";
import { TextBox } from "@/types";
import { FC } from "react";

type ProjectBodyProps = {
    body: TextBox[];
};
const ProjectBody: FC<ProjectBodyProps> = ({ body }) => {
    return (
        <>
            {body.map((block, i) => {
                if (block.style === "normal") {
                    return (
                        <p
                            className="mt-4 text-4 text-foreground xl:mt-5 xl:text-4.5"
                            key={i}
                        >
                            <ProjectBodyChild blockChildren={block.children} />
                        </p>
                    );
                } else if (block.style === "h2") {
                    return (
                        <h2
                            className="-mb-1 mt-8 font-display text-foreground text-7 font-bold first:mt-0 xl:mt-18 xl:text-9"
                            key={i}
                        >
                            <ProjectBodyChild blockChildren={block.children} />
                        </h2>
                    );
                } else if (block.style === "img") {
                    return (
                        <div
                            className="group my-8 overflow-hidden border border-ring xl:my-12"
                            key={i}
                        >
                            <img
                                src={block.src}
                                alt={block.alt}
                                key={i}
                                className="transition-transform duration-200 xl:group-hover:scale-[1.02]"
                            />
                        </div>
                    );
                } else if (block.style === "video") {
                }
            })}
        </>
    );
};

export default ProjectBody;
