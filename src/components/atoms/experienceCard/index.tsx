import { H2, P1, P2 } from "@/components";
import { motion } from "framer-motion";
import { FC } from "react";

export type ExperienceCardProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    location: string;
    description: (string | TrustedHTML)[];
    link?: string;
};
const ExperienceCard: FC<ExperienceCardProps> = ({
    image,
    title,
    role,
    date,
    location,
    description,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col w-full max-w-[1000px] [&:not(:last-child)]:mb-8"
        >
            <div className="flex w-full max-w-[1000px] justify-between gap-7 flex-col lg:flex-row">
                <div className="flex flex-row-reverse justify-between lg:justify-start lg:flex-row items-center relative gap-7 lg:gap-0">
                    <img
                        src={image}
                        alt="Company icon"
                        className="lg:w-16 lg:h-16 w-12 h-12 rounded-1 lg:mr-12 select-none"
                    />
                    <div className="lg:hidden justify-center flex-grow items-center h-18 flex">
                        <div className="bg-primary w-full h-[0.5px] bg-opacity-10" />
                    </div>
                    <div className="flex flex-col items-start">
                        <H2 className="h-12 flex items-center select-text">
                            {title}
                        </H2>
                        <P1 className="h-6 flex items-center !text-4.5 text-primary select-text">
                            {role}
                        </P1>
                    </div>
                </div>
                <div className="lg:flex justify-center flex-grow items-center -translate-y-2 h-18 hidden">
                    <div className="bg-primary w-full h-[0.5px] bg-opacity-10" />
                </div>
                <div className=" flex flex-col items-end">
                    <P1 className="!text-5 text-primary h-12 items-center mt-1 hidden lg:flex select-text">
                        {date}
                    </P1>
                    <P2 className="!text-4 text-primary opacity-80 h-6 -mt-2 items-start hidden lg:flex select-text">
                        {location}
                    </P2>
                </div>
            </div>

            <ul className="flex flex-col lg:pl-32 pl-6 pr-6 lg:pt-6 pb-2 lg:pr-[16.25rem] md:pr-[8rem] list-disc list-outside">
                {description.map((point, index) => (
                    <li
                        key={index}
                        className="text-primary opacity-75 font-sans list-outside select-text"
                        dangerouslySetInnerHTML={{ __html: point }}
                    />
                ))}
            </ul>
        </motion.div>
    );
};

export default ExperienceCard;
