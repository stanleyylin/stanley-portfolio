import { H1, P1 } from "@/components/atoms";
import { FC } from "react";

type ProjectHeroProps = {
    title: string;
    type: string;
    description: string;
    mockups: string[];
};
const ProjectHero: FC<ProjectHeroProps> = ({
    title,
    type,
    description,
    mockups,
}) => {
    return (
        <section className="pt-21 mb-8 sm:pt-24 md:mb-11 mb:pt-32 xl:mb-14">
            <div className="mb-8 flex justify-between md:mb-12 xl:mb-16 md:flex-row flex-col">
                <div className="flex-shrink-0">
                    <H1 className="xl:text-16 lg:text-15 md:text-14 sm:text-13 xs:text-12 text-11">
                        {title}
                    </H1>
                    <P1 className="!text-6 text-foreground">{type}</P1>
                </div>
                <P1 className="md:max-w-[380px] xl:text-5 lg:!text-4.5 md:!text-4 font-normal text-foreground md:mt-7 mt-4 xl:max-w-[550px] hidden sm:flex">
                    {description}
                </P1>
            </div>
            <div className="relative bg-accent-background drop-shadow-text-softest aspect-square overflow-hidden border border-ring group sm:aspect-[1080/600]">
                <img
                    src={mockups[0]}
                    className="h-full object-cover z-10 transition-transform duration-300 xl:group-hover:scale-105 bg-no-repeat sm:block hidden"
                    loading="lazy"
                />
                <img
                    src={mockups[1]}
                    className="h-full object-cover z-10 transition-transform duration-300 xl:group-hover:scale-105 bg-no-repeat sm:hidden"
                    loading="lazy"
                />
                <div className="md:h-full h-[80%] -z-10 absolute w-full bg-gradient-to-b to-[--secondary-background] from-transparent opacity-60 group-hover:opacity-100 transition-all duration-800 ease bottom-0" />
            </div>
            <P1 className="font-normal text-foreground mt-8 flex sm:hidden">
                {description}
            </P1>
        </section>
    );
};

export default ProjectHero;
