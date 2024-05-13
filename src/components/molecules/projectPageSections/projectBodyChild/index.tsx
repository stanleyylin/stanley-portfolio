import { TextBoxChildren } from "@/types";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface ProjectBodyChildProps {
    blockChildren: TextBoxChildren[];
}

const ProjectBodyChild: FC<ProjectBodyChildProps> = ({ blockChildren }) => {
    return blockChildren.map((child, j) => {
        const className = twMerge(
            child.styles.includes("strong") && "font-semibold",
            child.styles.includes("code") && "",
            child.styles.includes("italic") && "",
            child.styles.includes("underline") &&
                "underline underline-offset-2",
            child.styles.includes("strike-through") && "",
            child.styles.includes("highlight") && "",
            child.styles.includes("subscript") && "",
            child.styles.includes("superscript") && "",
        );

        if (child.type === "span") {
            return (
                <span className={className} key={j}>
                    {child.content}
                </span>
            );
        } else if (child.type === "a") {
            return (
                <a
                    key={j}
                    href={child.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                >
                    {child.content}
                </a>
            );
        } else {
            return null;
        }
    });
};

export default ProjectBodyChild;
