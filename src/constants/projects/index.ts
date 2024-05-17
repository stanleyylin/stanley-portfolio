import DiagnosticSettings2 from "@/assets/diagnosticSettings/diagnosticSettings2.png";
import DiagnosticSettings from "@/assets/diagnosticSettings/diagnosticSettings.png";
import MediaGallery from "@/assets/mediaGallery/mediaGallery.png";
import OverlayEditor from "@/assets/overlayEditor/overlayEditor.png";
import DeepTrekkerHero from "@/assets/projects/project1hero.png";
import DeepTrekkerHeroSquare from "@/assets/projects/project1heroSquare.png";
import VisionaryHero from "@/assets/projects/project2hero.png";
import VisionaryHeroSquare from "@/assets/projects/project2heroSquare.png";
import MapleDirectHero from "@/assets/projects/project3hero.png";
import MapleDirectHeroSquare from "@/assets/projects/project3heroSquare.png";
import MisoHero from "@/assets/projects/project4hero.png";
import MisoHeroSquare from "@/assets/projects/project4heroSquare.png";
import SoftwareUpdates from "@/assets/softwareUpdates/softwareUpdates.png";
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
            {
                style: "normal",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content:
                            "I joined as a web developer intern in January 2024 for my co-op. In a cross-functional team, I...",
                    },
                ],
            },
            {
                style: "ul",
                children: [
                    {
                        type: "li",
                        styles: [],
                        children: [
                            {
                                type: "span",
                                styles: ["strong"],
                                content: "Developed robust robot features: ",
                            },
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "I championed the development of an overlay editor, media gallery, software updates, and diagnostics settings.",
                            },
                        ],
                    },
                    {
                        type: "li",
                        styles: [],
                        children: [
                            {
                                type: "span",
                                styles: ["strong"],
                                content:
                                    "Led QA testing efforts and ensured controller performance quality: ",
                            },
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "I fixed 30+ controller bugs and worked closely with the QA team to write unit tests and test cases with Zephyr.",
                            },
                        ],
                    },
                    {
                        type: "li",
                        styles: [],
                        children: [
                            {
                                type: "span",
                                styles: ["strong"],
                                content: "Drove component-based development: ",
                            },
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "I built reusable UI components with Storybook and used the DT design system with Tailwind.",
                            },
                        ],
                    },
                ],
            },
            {
                style: "h2",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content: "Overlay Editor",
                    },
                ],
            },
            {
                style: "img",
                src: OverlayEditor,
                alt: "Overlay Editor",
            },
            {
                style: "normal",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content:
                            "The Overlay Editor features text-based overlays that can be placed on the camera feed and captured for screen recordings. Funny enough, it was actually requested by a Norwegian fish farm company to label defects and issues with their infrastructure and fish netting. This feature was actually the deciding factor in whether they chose Deep Trekker's ROV or a competitor's product. And so, under a tight deadline, I took ownership of the full development of this feature, working closely with the product designer to ensure that I was delivering an intuitive, seamless-to-use feature. This process included: ",
                    },
                ],
            },
            {
                style: "ul",
                children: [
                    {
                        type: "li",
                        styles: [],
                        content:
                            "Developing text overlay components, including a text alignment component, modals to delete and save overlays, and a text input component.",
                    },
                    {
                        type: "li",
                        styles: [],
                        content:
                            "Creating endpoints in the Express server to save and retrieve text overlays in the MySQL database via Prisma. This allows overlays to be saved across app sessions!",
                    },
                    {
                        type: "li",
                        styles: [],
                        content:
                            "Implementing a responsive draggable interface where overlays were anchored to a side of the page, and configuring the touch interactions so that users could single-tap to edit text and drag-hold to move the overlay.",
                    },
                ],
            },
            {
                style: "h2",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content: "Media Gallery",
                    },
                ],
            },
            {
                style: "img",
                src: MediaGallery,
                alt: "Media Gallery",
            },
            {
                style: "normal",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content:
                            "The media gallery allows users to review images and videos recorded by the robot vehicle within the app. This media is stored on hard drives and disks and helps users review documented footage of their dives. This was one of the first major features I worked on, and my tasks included: ",
                    },
                ],
            },
            {
                style: "ul",
                children: [
                    {
                        type: "li",
                        styles: [],
                        content:
                            "Remedying the slow image and video loading times.",
                    },
                    {
                        type: "li",
                        styles: [],
                        content:
                            "Implementing storage indicators and storage notification warnings.",
                    },
                    {
                        type: "li",
                        styles: [],
                        content:
                            "Adding missing icons and sorting the tabs for the hard drives/disk.",
                    },
                    {
                        type: "li",
                        styles: [],
                        content:
                            "Developed a lightbox to view and zoom in/out on photos, and play videos.",
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
                            "To speed up the media gallery loading speeds, I optimized useSWR to cache images/videos efficiently, implementing stale-while-revalidate to show cached media while fetching updates in the background. I also added lazy loading with placeholders, implemented infinite scroll for images and videos, and compressed videos/images on save.",
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
                            "For the storage indicator, I followed the (very quirky) atomic design methodology to create individual components and stories in Storybook.  I designed the progress bar as an atom (a basic component), the percentage indicator as a molecule (a combination of atoms), and the media storage indicator as an organism (a more complex component). In the app, created a backend endpoint in the Express server to retrieve storage capacities for hard drives/disks. For storage notifications, I built a hook to check if storage capacity thresholds are reached.",
                    },
                ],
            },
            {
                style: "h2",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content: "Software Updates",
                    },
                ],
            },
            {
                style: "img",
                src: SoftwareUpdates,
                alt: "Software Updates",
            },
            {
                style: "normal",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content:
                            "I implemented in-app software updates to update connected devices including cameras, camera heads, Sensor Pod, the vehicle itself, and the Bridge Box (control center). I was in charge of the backend development and integrations:",
                    },
                ],
            },
            {
                style: "ul",
                children: [
                    {
                        type: "li",
                        styles: [],
                        content:
                            "I programmed the WebRTC provider to send update manifests from our AWS S3 to the Bridgebox which then updates the devices.",
                    },
                    {
                        type: "li",
                        styles: [],
                        content:
                            "I built a hook to check and prompt updates automatically by fetching update manifests and comparing connected device versions.",
                    },
                    {
                        type: "li",
                        styles: [],
                        content:
                            "I integrated frontend components and developed a hook to communicate with the Bridgebox to display the various transferring, downloading, and updating steps, and to allow users to download and import offline update files.",
                    },
                ],
            },
            {
                style: "h2",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content: "Diagnostics Settings",
                    },
                ],
            },
            {
                style: "img",
                src: DiagnosticSettings,
                alt: "Diagnostic Settings",
            },
            {
                style: "less-padding",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content:
                            "I developed and integrated diagnostics for the vehicle, inputs (game controllers), WebRTC, and network at Deep Trekker. This included monitoring critical parameters such as power levels, sensor statuses, and system performance metrics to help users swiftly identify and resolve issues. For game controllers, I ensured users could verify connectivity and responsiveness. I also implemented WebRTC diagnostics to monitor video and audio communication quality, latency, and potential points of failure. Additionally, I created network diagnostic tools that monitored connectivity and health, allowing users to identify bottlenecks, disruptions, and optimize their network settings for better performance.",
                    },
                ],
            },
            {
                style: "img",
                src: DiagnosticSettings2,
                alt: "Diagnostic Settings 2",
            },
            {
                style: "h2",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content: "Conclusion",
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
                            "Working with the Deep Trekker team was an absolute joy; it was awesome joining lake days to test the Revolution ROV, spending time at the pool before feature releases, and leading web sprints with the team! Here were my key learnings:",
                    },
                ],
            },
            {
                style: "ol",
                children: [
                    {
                        type: "li",
                        styles: [],
                        children: [
                            {
                                type: "span",
                                styles: ["strong"],
                                content: "Ask good questions: ",
                            },
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "Being in a cross-functional team allowed me to learn so much about all that goes into building an app. I grew so much as a developer by simply reaching out and asking questions when I needed it.",
                            },
                        ],
                    },
                    {
                        type: "li",
                        styles: [],
                        children: [
                            {
                                type: "span",
                                styles: ["strong"],
                                content: "Take Initative and Perservere: ",
                            },
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "I took on many new and unfamiliar tasks that allowed me to explore design systems, backend development, new frontend challenges (draggable components, notifications), and the world of robots.",
                            },
                        ],
                    },
                    {
                        type: "li",
                        styles: [],
                        children: [
                            {
                                type: "span",
                                styles: ["strong"],
                                content: "Making work a place you love: ",
                            },
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "Deep Trekker was such a welcoming, warm place where I could chat with friends, play ping-pong, and have a blast at work outings. I had so much fun and I gained so much from connecting with others.",
                            },
                        ],
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
