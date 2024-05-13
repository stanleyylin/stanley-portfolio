import { ProjectCardProps } from "@/types";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { H2, P1 } from "../..";

const ProjectCard: FC<ProjectCardProps> = ({
    image,
    description,
    title,
    link,
    index,
}) => {
    const darkStart = index % 4 === 1 || index % 4 === 0;
    const navigate = useNavigate();
    return (
        <div
            className={twMerge(
                "border-foreground border-[1px] group relative aspect-[35/22] overflow-hidden rounded-4 bg-gradient-to-b  xs:rounded-[21px] lg:even:translate-y-10 md:rounded-[17px] xl:rounded-[21px] bg-background drop-shadow-text-softest hover:drop-shadow-text-soft cursor-pointer transition-all duration-300 ease",
                darkStart
                    ? "from-[--accent-background] to-[--background]"
                    : " from-[--background] to-[--accent-background]",
            )}
            onClick={() => navigate(link)}
        >
            <img
                src={image}
                className="absolute inset-0 transition-transform duration-300 ease xl:group-hover:scale-105"
            />
            <div
                className={twMerge(
                    "absolute lg:left-10 md:left-6 sm:left-10 xs:left-8 left-6 lg:w-1/3 md:w-[calc(33%+24px)] w-1/3 z-20 pointer-events-none",
                    title === "Visionary" || title === "Maple Direct"
                        ? "lg:top-10 md:top-5 sm:top-10 xs:top-8 top-5"
                        : "lg:bottom-10 md:bottom-5 sm:bottom-10 xs:bottom-6 bottom-3",
                )}
            >
                <H2 className="mb-4 z-20 xl:text-11 md:text-9 sm:text-11 xs:text-9 text-7 drop-shadow-text-light ">
                    {title}
                </H2>
                <P1 className="!z-20 opacity-80 xl:text-4.5 lg:text-4 md:text-3.5 !text-foreground sm:text-4.5 xs:text-4 2xs:text-3.5 text-3 xs:block hidden">
                    {description}
                </P1>
            </div>

            <div
                className={twMerge(
                    "peer-hover:visible h-[80%] z-10 absolute w-full bg-gradient-to-b from-[--accent-background] to-transparent opacity-40 hover:opacity-75 hover:h-full transition-all duration-800 ease",
                    darkStart
                        ? "bottom-0 to-[--secondary-background] from-transparent "
                        : "top-0 from-[--secondary-background] to-transparent",
                )}
            />
        </div>
    );
};

export default ProjectCard;
