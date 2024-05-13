import DeepTrekkerHero from "@/assets/projects/project1hero.png";
import DeepTrekkerHeroSquare from "@/assets/projects/project1heroSquare.png";
import VisionaryHero from "@/assets/projects/project2hero.png";
import VisionaryHeroSquare from "@/assets/projects/project2heroSquare.png";
import MapleDirectHero from "@/assets/projects/project3hero.png";
import MapleDirectHeroSquare from "@/assets/projects/project3heroSquare.png";
import MisoHero from "@/assets/projects/project4hero.png";
import MisoHeroSquare from "@/assets/projects/project4heroSquare.png";
import { ProjectPageProps } from "@/types";
import { FaExternalLinkAlt } from "react-icons/fa";

export const PROJECTS: Record<string, ProjectPageProps> = {
    deeptrekker: {
        id: "deeptrekker",
        title: "Deep Trekker",
        type: "Web App Controller",
        description:
            "A modern web application to inspect underwater infrastructure assets via remotely operated vehicles.",
        mockups: [DeepTrekkerHero, DeepTrekkerHeroSquare],
        technologies: [
            "React",
            "Typescript",
            "Redux",
            "Express",
            "MySQL/prisma",
            "Storybook",
        ],
        skills: [
            "Full-stack web development",
            "Component Testing",
            "Robot Testing",
        ],
        buttons: [
            {
                id: "company-site",
                title: "Company Site",
                href: "https://www.deeptrekker.com/",
                Icon: FaExternalLinkAlt,
            },
        ],
        content: [
            {
                style: "h2",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content: "Background",
                    },
                ],
            },
            {
                style: "normal",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content:
                            "Deep Trekker Inc. is a robotics manufacturing company that builds and develops highly-portable ",
                    },
                    {
                        type: "span",
                        styles: ["strong"],
                        content: "remotely operated vehicles (ROVs) ",
                    },
                    {
                        type: "span",
                        styles: [],
                        content:
                            "for surveillance, inspections, search & rescue, and defense on land and in water.",
                    },
                    {
                        type: "span",
                        styles: [],
                        content:
                            " In 2022, Deep Trekker began transitioning the old product line of controllers with embededded C++ systems to top-side web-based interfaces. As a co-op software developer, I had the opportunity to develop the ROV control web app for the underwater robot models! ",
                    },
                ],
            },
            {
                style: "h2",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content: "My Role",
                    },
                ],
            },
        ],
    },
    visionary: {
        id: "visionary",
        title: "Visionary",
        type: "Eye-health App",
        description:
            "A eye-health habits app connectable to Eye-tracking glasses. Hack the North Winner - Most Innovative Eye Tracking Application!",
        mockups: [VisionaryHero, VisionaryHeroSquare],
        technologies: [
            "React",
            "Typescript",
            "Flask",
            "Google Firebase",
            "Adhawk API",
            "Figma",
        ],
        skills: ["Full-stack web development", "Product Design"],
        buttons: [
            {
                id: "github",
                title: "Github",
                href: "https://github.com/stanleyylin/visionary",
                Icon: FaExternalLinkAlt,
            },
            {
                id: "devpost",
                title: "Devpost",
                href: "https://devpost.com/software/visionary-bzvo5p",
                Icon: FaExternalLinkAlt,
            },
        ],
        content: [
            {
                style: "h2",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content: "Our Idea",
                    },
                ],
            },
            {
                style: "normal",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content:
                            "Do your eyes ever feel strained and dry after hours and hours spent staring at screens? Has your eye doctor ever told you about the 20-20-20 rule? Good thing we’ve automated it for you along with personalized analysis of your eye activity using",
                    },
                    {
                        type: "span",
                        styles: ["strong"],
                        content: " AdHawk’s eye tracking device!",
                    },
                ],
            },
            {
                style: "h2",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content: "My Role",
                    },
                ],
            },
            {
                style: "normal",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content:
                            "In a Hack the North 2023 team of 4, I worked on the frontend and the database/backend integration. Our app featured a landing page, a dashboard, and an eye-training game that allowed users to connect their Adhawk eye-tracking glasses!",
                    },
                ],
            },
            // {
            //     style: 'img',
            //     alt: 'Pethsapp home, community, and resources screens',
            //     src:
            // },
        ],
    },
    mapledirect: {
        id: "mapledirect",
        title: "Maple Direct",
        type: "E-commerce Metrics Platform",
        description:
            "A platform that compiles and analyzes sales, ad, and customer data for business executives.",
        mockups: [MapleDirectHero, MapleDirectHeroSquare],
        technologies: [
            "React",
            "Typescript",
            "Styled Components",
            "Django",
            "AWS",
            "Figma",
        ],
        skills: ["Full-stack web development", "Product Design"],
        buttons: [
            {
                id: "landing-page",
                title: "Landing Page",
                href: "https://maple.direct/",
                Icon: FaExternalLinkAlt,
            },
        ],
        content: [
            {
                style: "h2",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content: "Background",
                    },
                ],
            },
            {
                style: "normal",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content:
                            "For my co-op at bld.ai, I designed and built the frontend of Maple Direct’s executive dashboard with React (Typescript, Styled Components, Jest) and Node.js. This dashboard uses Chart.js and ChannelAdvisors API to display various inventory, advertising, and customer metrics for e-commerce executives. During this project, I also gained exposure to Python Django for user authentication and AWS!",
                    },
                ],
            },
        ],
    },
    miso: {
        id: "miso",
        title: "Miso",
        type: "AI-Powered Misogyny Detector",
        description:
            "An AI bot integrable on Discord. Winner of UofT Hacks Best Hack to Empower Females in STEM.",
        mockups: [MisoHero, MisoHeroSquare],
        technologies: [
            "Javascript",
            "Python",
            "Cohere API",
            "Discord API",
            "Estuary (Database)",
            "Figma",
        ],
        skills: [
            "App Development",
            "Product Ideation",
            "Product Design",
            "Hackathon Pitching",
        ],
        buttons: [
            {
                id: "github",
                title: "Github",
                href: "https://github.com/stanleyylin/Miso",
                Icon: FaExternalLinkAlt,
            },
            {
                id: "devpost",
                title: "Devpost",
                href: "https://devpost.com/software/miso",
                Icon: FaExternalLinkAlt,
            },
        ],
        content: [
            {
                style: "h2",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content: "Background",
                    },
                ],
            },
            {
                style: "normal",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content:
                            "Miso is an AI bot that detects misogynistic and harmful comments made on messaging platforms!",
                    },
                ],
            },
        ],
    },
};
