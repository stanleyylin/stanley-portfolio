import EmberGroveHeader from "@/assets/ember-grove-header.jpeg";
import React from "react";

import { H2 } from "../..";

const Projects = () => {
    return (
        <div className="flex flex-col pt-30 h-screen">
            <div className="relative flex justify-center items-center w-screen h-44 border-y-[1px] border-primary overflow-clip">
                <img
                    src={EmberGroveHeader}
                    className="absolute top-0 h-full w-[100vw] object-cover animate-moveTopToBottom"
                />
                <div className="absolute top-0 left-0 h-44 z-10 w-[100vw] bg-background transition duration-300 opacity-0 hover:opacity-30 " />
                <H2 className="z-10 uppercase text-10 drop-shadow-text-bright">
                    Projects
                </H2>
            </div>
        </div>
    );
};

export default Projects;
