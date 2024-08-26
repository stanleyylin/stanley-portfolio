import { H1, P1 } from "@/components/atoms";
import { motion } from "framer-motion";
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
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <div className="flex-shrink-0">
                        <H1 className="xl:text-16 lg:text-15 md:text-14 sm:text-13 xs:text-12 text-11 select-text">
                            {title}
                        </H1>
                        <P1 className="!text-6 text-foreground select-text">
                            {type}
                        </P1>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <P1 className="md:max-w-[380px] xl:text-5 lg:!text-4.5 md:!text-4 font-normal text-foreground md:mt-7 mt-4 xl:max-w-[550px] hidden sm:flex select-text">
                        {description}
                    </P1>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.75 }}
            >
                <div className="relative bg-accent-background drop-shadow-text-softest aspect-square overflow-hidden border border-ring group sm:aspect-[1080/600]">
                    <img
                        src={mockups[0]}
                        className="h-full object-cover z-10 transition-transform duration-300 xl:group-hover:scale-105 bg-no-repeat sm:block hidden select-none"
                        loading="lazy"
                    />
                    <img
                        src={mockups[1]}
                        className="h-full object-cover z-10 transition-transform duration-300 xl:group-hover:scale-105 bg-no-repeat sm:hidden select-none"
                        loading="lazy"
                    />
                    <div className="md:h-full h-[80%] -z-10 absolute w-full bg-gradient-to-b to-[--secondary-background] from-transparent opacity-60 group-hover:opacity-100 transition-all duration-800 ease bottom-0" />
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <P1 className="font-normal text-foreground mt-8 flex sm:hidden select-text">
                    {description}
                </P1>
            </motion.div>
        </section>
    );
};

export default ProjectHero;
