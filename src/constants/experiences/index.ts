import bldAI from "@/assets/experiences/bldAI.png";
import deepTreeker from "@/assets/experiences/deepTrekker.png";
import elbe from "@/assets/experiences/elbe.png";
import hubspot from "@/assets/experiences/hubspot.png";
import { ExperienceCardProps } from "@/components";

export const EXPERIENCES: ExperienceCardProps[] = [
    {
        image: hubspot,
        title: "Hubspot",
        role: "Software Engineer Intern",
        date: "Incoming S25",
        location: "Boston, US",
        description: [],
    },
    {
        image: elbe,
        title: "Leo Berwick, elbe",
        role: "Software Engineer Intern",
        date: "September - December 2024",
        location: "Toronto, CA",
        description: [
            "Built key dashboards and user-facing features for Elbe, an M&A due diligence platform streamlining deal evaluations, optimizing Q&A workflows, and automating reports with Next.js and Firebase.",
            "Championed the redesign of deal and workstream dashboards with React/TypeScript, Recharts, and Figma, creating a robust design system and leveraging user feedback.",
        ],
    },
    {
        image: deepTreeker,
        title: "Deep Trekker",
        role: "Software Engineer Intern",
        date: "January - April 2024",
        location: "Waterloo, CA",
        description: [
            "Developed a controller web app for underwater robot models with React/TypeScript, Node, Express, and  MySQL.",
            "Built controller features for customers across 80+ countries: a Media Gallery, an Overlay Editor for labeling objects in the camera, a Diagnostic Settings dashboard, and Software Updates",
            "Led QA testing efforts, resolving 30+ controller-vehicle bugs.",
        ],
    },
    {
        image: bldAI,
        title: "bld.ai",
        role: "Software Engineer Intern",
        date: "May - August 2023",
        location: "Florida, US",
        description: [
            "Built an e-commerce metrics platform with CI/CD that compiles and analyzes sales, ad, and customer data",
        ],
    },
];
