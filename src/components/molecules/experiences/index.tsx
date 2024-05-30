import EmberGroveHeader2 from "@/assets/ember-grove-header-2.webp";
import { ExperienceCard, H2 } from "@/components";
import { EXPERIENCES } from "@/constants";

const Experiences = () => {
    return (
        <div
            className="flex flex-col items-center p-30 lg:px-30 md:px-20 sm:px-10 xs:px-8 2xs:px-6 px-4 transition-all duration-300 pt-0"
            id="experiences"
        >
            <div className="relative flex justify-center items-center w-screen min-h-44 mb-16 border-y-[1px] border-primary overflow-clip">
                <img
                    src={EmberGroveHeader2}
                    className="absolute top-0 h-full w-[100vw] object-cover animate-moveTopToBottom opacity-70"
                />
                <div className="absolute top-0 left-0 h-44 z-10 w-[100vw] bg-background transition duration-300 opacity-0 hover:opacity-30 " />
                <H2 className="z-10 uppercase text-primary md:!text-10 xs:!text-9 !text-8 drop-shadow-text-bright">
                    Experiences
                </H2>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                {EXPERIENCES.map((experience, index) => (
                    <ExperienceCard {...experience} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Experiences;
