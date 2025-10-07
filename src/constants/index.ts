import DeepTrekker from "@/assets/projects/project1.png";
import Visionary from "@/assets/projects/project2.png";
import HubSpot from "@/assets/projects/project3.png";
import Miso from "@/assets/projects/project4.png";
import { ProjectCardProps } from "@/types";

export enum ButtonState {
    Default = "DEFAULT",
    Disabled = "DISABLED",
    Danger = "DANGER",
    Warning = "WARNING",
    Pressed = "PRESSED",
}

export const ProjectData: ProjectCardProps[] = [
    {
        image: HubSpot,
        title: "Report Tagging",
        description: "Custom tags to find reports effortlessly.",
        link: "/projects/hubspot",
        index: 1,
        projectType: "Co-op",
    },
    {
        image: DeepTrekker,
        title: "Deep Trekker",
        description: "Web controller for underwater robots.",
        link: "/projects/deeptrekker",
        index: 2,
        projectType: "Co-op",
    },
    {
        image: Visionary,
        title: "Visionary",
        description: "An eye health app with pupil-tracking glasses.",
        link: "/projects/visionary",
        index: 3,
        projectType: "Hack the North Winner",
    },
    {
        image: Miso,
        title: "Miso",
        description: "Misogyny detector AI bot for messaging platforms.",
        link: "/projects/miso",
        index: 4,
        projectType: "UofT Hacks Winner",
    },
];

export const pageVariants = {
    initial: {
        opacity: 0.8,
    },
    in: {
        opacity: 1,
    },
    out: {
        opacity: 0.8,
    },
};

export const pageTransition = {
    type: "tween",
    ease: "linear",
    duration: 0.2,
};
export * from "./experiences";
export * from "./projects";
