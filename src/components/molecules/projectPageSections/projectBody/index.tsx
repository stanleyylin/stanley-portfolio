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
                            className="mt-4 !text-3.5 text-foreground xl:mt-5 xl:!text-4"
                            key={i}
                        >
                            <ProjectBodyChild blockChildren={block.children} />
                        </p>
                    );
                } else if (block.style === "less-padding") {
                    return (
                        <p
                            className="mt-0 !text-3.5 text-foreground xl:!text-4"
                            key={i}
                        >
                            <ProjectBodyChild blockChildren={block.children} />
                        </p>
                    );
                } else if (block.style === "h2") {
                    return (
                        <h2
                            className="-mb-1 mt-8 font-display text-foreground !text-6 font-bold first:mt-0 xl:mt-18 xl:!text-7"
                            key={i}
                        >
                            <ProjectBodyChild blockChildren={block.children} />
                        </h2>
                    );
                } else if (block.style === "h3") {
                    return (
                        <h2
                            className="-mb-1 mt-8 font-display text-foreground !text-5 font-bold first:mt-0 xl:mt-18 xl:!text-6"
                            key={i}
                        >
                            <ProjectBodyChild blockChildren={block.children} />
                        </h2>
                    );
                } else if (block.style === "ul") {
                    return (
                        <ul className="mt-4 !text-3.5 text-foreground xl:mt-5 xl:!text-4 list-disc list-outside pl-10">
                            <ProjectBodyChild blockChildren={block.children} />
                        </ul>
                    );
                } else if (block.style === "ol") {
                    return (
                        <ol className="mt-4 !text-3.5 text-foreground xl:mt-5 xl:!text-4 list-decimal list-outside pl-10">
                            <ProjectBodyChild blockChildren={block.children} />
                        </ol>
                    );
                } else if (block.style === "img") {
                    return (
                        <div
                            className="group my-8 overflow-hidden border border-ring xl:my-12 hover:-translate-y-2 transition-transform duration-300"
                            key={i}
                        >
                            <img src={block.src} alt={block.alt} key={i} />
                        </div>
                    );
                } else if (block.style === "video") {
                }
            })}
        </>
    );
};

export default ProjectBody;
