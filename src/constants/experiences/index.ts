import bldAI from "@/assets/experiences/bldAI.png";
import deepTreeker from "@/assets/experiences/deepTrekker.png";
import { ExperienceCardProps } from "@/components";

export const EXPERIENCES: ExperienceCardProps[] = [
    {
        image: deepTreeker,
        title: "Deep Trekker",
        role: "Web Developer",
        date: "January - April 2024",
        location: "Waterloo, CA",
        description: [
            "Engineered a controller web app for underwater robot models with React/TypeScript, Node, Express, and  MySQL.",
            "Developed controller features for customers across 80+ countriess: a Media Gallery, an Overlay Editor for labeling objects in the camera, and Software Updates",
            "Implemented diagnostics settings to monitor and troubleshoot system performance, resulting in an average 40% reduction in troubleshooting time for clients",
            "Led QA testing efforts, resolving 30+ controller-vehicle bugs, such as issues with depth/altitude gauge, lasers, auto-stabilization, and media gallery which resulted in a 60% increase in image/video loading speeds",
        ],
    },
    {
        image: bldAI,
        title: "bld.ai",
        role: "Software Engineer",
        date: "May - August 2023",
        location: "Florida, US",
        description: [
            "Built an e-commerce metrics platform with CI/CD that compiles and analyzes sales, ad, and customer data",
            "Implemented over 10+ key pages, including login/registration, data modeling and visualizations, and various dashboard screens, using React.js, TypeScript, NextUI, and Styled Components",
            "Integrated user authentication and business metrics using Python via Django and ChannelAdvisor API",
            "Streamlined the landing website’s UI/UX and optimized load speeds by 40%, facilitating seamless onboarding for 20+ clients during the initial beta release",
        ],
    },
];
