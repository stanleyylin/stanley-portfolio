import EmberGroveSecondGif from "@/assets/ember-grove-second-gif.gif";
import EmberGroveSecondPoster from "@/assets/ember-grove-second-poster.webp";
import EmberGroveSecond from "@/assets/ember-grove-second.mp4";
import Stanley from "@/assets/stanley.png";
import { H1, P2, StarIcon } from "@/components/atoms";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const HeroBanner = () => {
    return (
        <div className="relative xs:h-[115vh] h-[100vh] md:py-0 sm:py-15 py-10 md:min-h-[810px] sm:min-h-[900px] min-h-[850px] animate-slight-fade-in">
            <img
                src={EmberGroveSecondPoster}
                className="absolute xs:hidden flex sm-height:flex top-0 md:h-[100vh] w-[100vw] object-cover object-center xs:h-[115vh] h-[100vh] md:min-h-[810px] sm:min-h-[900px] min-h-[850px]"
                loading="eager"
            />
            <img
                src={EmberGroveSecondGif}
                className="absolute xs:hidden flex sm-height:flex top-0  w-[100vw] object-cover object-center xs:h-[115vh] h-[100vh] md:min-h-[810px] sm:min-h-[900px] min-h-[850px]"
                loading="eager"
            />
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 w-[100vw] sm-height:hidden object-cover object-center hidden xs:flex h-[115vh] md:min-h-[810px] min-h-[900px]"
                poster={EmberGroveSecondPoster}
            >
                <source src={EmberGroveSecond} type="video/mp4" />
            </video>
            <div
                className={twMerge(
                    "absolute flex flex-col md:h-screen w-screen sm:h-[100vh] xs:h-[90vh] md:min-h-[700px] sm:min-h-[630px] xs:min-h-[530px] h-[630px] min-h-[480px] items-center justify-center transition-all duration-1000",
                )}
            >
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2 }}
                >
                    <div className="relative sm:h-[0.1rem] h-[0.05rem] xs:w-64 w-72 bg-primary flex items-start justify-center md:mb-28 sm:mb-12 mb-8">
                        <StarIcon className="sm:h-8 h-6" />
                    </div>
                </motion.div>
                <div
                    className={twMerge(
                        "flex flex-col md:flex-row w-screen justify-center items-center opacity-0 duration-1000 transition-all",
                    )}
                >
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 0, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.25 }}
                    >
                        <img
                            src={Stanley}
                            className="sm:h-56 h-50 mb-4 flex md:hidden"
                        />
                    </motion.div>
                    <div className="flex flex-col w-[80vw] lg:pl-5 md:w-[40rem] md:pl-9 sm:pl-4 pl-0">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <H1 className="mb-4 md:!text-16 sm:!text-12 xs:!text-10 !text-8  drop-shadow-text-bright text-primary">
                                HI. I’M STANLEY.
                            </H1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.75 }}
                        >
                            <P2 className="sm:!text-5 xs:!text-4.5 !text-4">
                                I create{" "}
                                <span className="text-secondary-foreground">
                                    meaningful user experiences.
                                </span>
                            </P2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <P2 className="sm:!text-5 xs:!text-4.5 !text-4">
                                I'm a CS student at the{" "}
                                <span className="text-accent-foreground">
                                    University of Waterloo
                                </span>{" "}
                                and I'm looking for internships for Fall 2024!
                            </P2>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <img
                            src={Stanley}
                            className="h-56 mt-2 hidden md:flex"
                        />
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: -25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2 }}
                >
                    <div className="relative sm:h-[0.1rem] h-[0.05rem] bg-primary flex items-end justify-center sm:mt-18 xs:mt-14 mt-10 md:mt-32 xs:w-64 w-72">
                        <StarIcon className="sm:h-8 h-6" />
                    </div>
                </motion.div>
            </div>
            <div className="absolute bottom-0 w-full h-20 left-0 bg-gradient-to-b from-transparent to-background" />
        </div>
    );
};

export default HeroBanner;
