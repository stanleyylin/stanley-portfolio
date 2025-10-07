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
        date: "May - August 2025",
        location: "Boston, US",
        description: [
            "Spearheaded Report Tags from design to implementation using Figma, React, Redux, and Spring Boot, enabling AI-powered report discovery for 60K+ users and reducing search time by 35%.",
            "Developed backend APIs in Java for single and bulk tagging/filtering, scaling to 15M+ requests/day with 99.9% uptime.",
            "Launched advanced filtering in Typescript with GraphQL and Apollo for 120M+ reports, reducing query times by 25%.",
            "Built an AI tool to auto-generate report templates, reducing setup time by 50%.",
        ],
    },
    {
        image: elbe,
        title: "Leo Berwick, elbe",
        role: "Software Engineer Intern",
        date: "September - December 2024",
        location: "Toronto, CA",
        description: [
            "Deployed a distributed GPT-4 pipeline in Node.js/TypeScript, auto-tagging 20K+ financial documents per week and reducing analyst review time by 70%.",
            "Redesigned and optimized M&A dashboards in Next.js and Firebase, reducing load times by 70% (5s →1.5s) and delivering real-time, intuitive visualizations for $5M+ deal pipelines.",
        ],
    },
    {
        image: deepTreeker,
        title: "Deep Trekker",
        role: "Software Engineer Intern",
        date: "January - April 2024",
        location: "Waterloo, CA",
        description: [
            "Built real-time control systems in Electron, Node.js, and Express.js for underwater robots, cutting drift by 45% with auto-stabilization and improving video clarity by 30% with adaptive lighting.",
            "Developed accessible features in React, TypeScript, Redux, and MySQL for customers in 80+ countries, including a media gallery, overlay editor, and AWS S3-based software updates.",
            "Led development of a vehicle diagnostics bot to reduce vehicle troubleshooting time by 40% and boost fleet uptime from 90% → 96% across 2K+ robots worldwide.",
        ],
    },
    {
        image: bldAI,
        title: "bld.ai",
        role: "Software Engineer Intern",
        date: "May - August 2023",
        location: "Florida, US",
        description: [
            "Built an e-commerce metrics platform with React and Django to cut clients’ manual reporting by 50%.",
            "Implemented authentication and reporting flows in Typescript and Python with full Jest test coverage, boosting onboarding and reporting speed by 25%.",
        ],
    },
];
