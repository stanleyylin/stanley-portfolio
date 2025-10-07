import DiagnosticSettings2 from "@/assets/diagnosticSettings/diagnosticSettings2.png";
import DiagnosticSettings from "@/assets/diagnosticSettings/diagnosticSettings.png";
import MediaGallery from "@/assets/mediaGallery/mediaGallery.png";
import discordDemo from "@/assets/miso/discord demo.mov";
import OverlayEditor from "@/assets/overlayEditor/overlayEditor.png";
import DeepTrekkerHero from "@/assets/projects/project1hero.png";
import DeepTrekkerHeroSquare from "@/assets/projects/project1heroSquare.png";
import VisionaryHero from "@/assets/projects/project2hero.png";
import VisionaryHeroSquare from "@/assets/projects/project2heroSquare.png";
import HubSpotHero from "@/assets/projects/project3hero.png";
import HubSpotHeroSquare from "@/assets/projects/project3heroSquare.png";
import MisoHero from "@/assets/projects/project4hero.png";
import MisoHeroSquare from "@/assets/projects/project4heroSquare.png";
import TagsInReportList from "@/assets/reportTaggingMockups/slide1.png";
import SetTags from "@/assets/reportTaggingMockups/slide2.png";
import BulkAction from "@/assets/reportTaggingMockups/slide3.png";
import Filters from "@/assets/reportTaggingMockups/slide4.png";
import TagManager from "@/assets/reportTaggingMockups/slide5.png";
import Consideration1 from "@/assets/reportTaggingMockups/slide6.png";
import Consideration2 from "@/assets/reportTaggingMockups/slide7.png";
import SoftwareUpdates from "@/assets/softwareUpdates/softwareUpdates.png";
import { ProjectPageProps } from "@/types";
import { FaExternalLinkAlt } from "react-icons/fa";

export const PROJECTS: Record<string, ProjectPageProps> = {
    hubspot: {
        id: "hubspot",
        title: "HubSpot",
        type: "Report Tagging Feature",
        description:
            "Organize and discover reports effortlessly with custom tags and smarter search.",
        mockups: [HubSpotHero, HubSpotHeroSquare],
        technologies: [
            "React",
            "Typescript",
            "Redux",
            "Java",
            "DropWizard",
            "Figma",
        ],
        skills: ["Full-stack web development", "Product Design"],
        buttons: [
            {
                id: "hubspot-page",
                title: "Blog Post",
                href: "https://www.linkedin.com/posts/hubspot-tips-and-tricks_hubspot-revops-hubspottipsandtricks-activity-7363124240847388672-7WNH?utm_source=share&utm_medium=member_desktop&rcm=ACoAADSFTQgB8D9sblOXm_jF36Sd36vSCkFxkfE",
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
                            "HubSpot is a leading CRM platform that helps businesses connect marketing, sales, and customer data in one place. As an intern, I worked on improving how users organize and find their reports. I led the development of a tagging system that introduced flexible categorization and filtering, making it easier for teams to locate insights and collaborate efficiently.",
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
                            "I joined HubSpot as a Software Engineer Intern in Summer 2025 on the Reporting Home team. In a cross-functional group of engineers, designers, and PMs, I championed the frontend, backend, and product design for the new tagging system. I...",
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
                                content: "Led end-to-end feature development: ",
                            },
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "Built the full tagging experience in React with Redux and TypeScript, allowing users to create, edit, delete, and filter tags in reports.",
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
                                content: "Drove backend development: ",
                            },
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "Worked with the backend team to design, implement, and integrate Spring Boot endpoints for portal-level and bulk tag management, including CRUD operations and report-tag associations based on user filters.",
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
                                content: "Spearheaded product design and UX: ",
                            },
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "Designed the interaction flow and tag management interface in Figma, ensuring accessibility, scalability, and alignment with HubSpot’s design system.",
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
                        content: "Tags in Reports List",
                    },
                ],
            },
            {
                style: "img",
                src: TagsInReportList,
                alt: "Tags in Reports List",
            },
            {
                style: "normal",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content:
                            "In the redesigned Reports List, fetching tags for each report at scale meant balancing performance with a smooth, intuitive experience.",
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
                                content:
                                    "In Figma and on the frontend, I made the tag column effortless to use: ",
                            },
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "flexible across any number or length of tags, with a clean two-row layout, truncation for overflow, and hover states to reveal the rest. I added quick actions like “Set tags” and a three-dot menu for editing, so users could manage their tags without breaking their flow.",
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
                                content: "On the engineering side, ",
                            },
                            {
                                type: "span",
                                styles: [""],
                                content:
                                    "I built the data layer with the Redux Ducks pattern to keep state management modular. Tags were fetched in bulk and cached client-side to cut down on redundant network calls, keeping the list fast even for portals with thousands of reports.",
                            },
                        ],
                    },
                    {
                        type: "li",
                        styles: [],
                        content:
                            "I worked with the backend team to redesign Spring Boot endpoints for reports that included tags within batched, paginated responses so tag data could load fast without blocking rendering.",
                    },
                ],
            },
            {
                style: "h2",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content: "Setting Tags",
                    },
                ],
            },
            {
                style: "img",
                src: SetTags,
                alt: "Seting Tags",
            },
            {
                style: "normal",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content:
                            "To make tagging flexible, I added multiple entry points for setting report tags, including the Reports List, the action menu, and the Single Report Viewer (SRV). This made tagging feel native to wherever users already worked, which ",
                    },
                    {
                        type: "span",
                        styles: ["strong"],
                        content: "reduced friction and improved adoption.",
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
                            "I designed a nice checklist editor that lets users add /remove multiple tags in one go, with overwrites existing tags. On the backend, I helped implement Spring Boot endpoints for bulk tag updates, edits, and deletions, optimized to handle thousands of reports!!",
                    },
                ],
            },
            {
                style: "h2",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content: "Bulk Action",
                    },
                ],
            },
            {
                style: "img",
                src: BulkAction,
                alt: "Bulk Action",
            },
            {
                style: "normal",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content:
                            "For bulk report tagging, users are able to...",
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
                                styles: [],
                                content:
                                    "Manually select reports via checkboxes",
                            },
                        ],
                    },
                    {
                        type: "li",
                        styles: [],
                        children: [
                            {
                                type: "span",
                                styles: [],
                                content: "Select an entire page of reports",
                            },
                        ],
                    },
                    {
                        type: "li",
                        styles: [],
                        children: [
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "And even apply tags to all reports matching filters based on owner, dashboards the reports are on, last modified date, brands, and more.",
                            },
                        ],
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
                            "At first, the backend struggled to process these associations efficiently since each report-tag link triggered multiple writes. I optimized the workflow by batching updates on the frontend and collaborating with the backend team to switch to bulk database operations, which significantly sped up tag assignments.",
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
                            "In a customer call, one user suggested adding an option to append tags instead of overwriting them, which I later recommended as a nice-to-have feature to give users more control when managing large sets of reports.",
                    },
                ],
            },
            {
                style: "h2",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content: "Filtering by Tags",
                    },
                ],
            },
            {
                style: "img",
                src: Filters,
                alt: "Filters",
            },
            {
                style: "normal",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content:
                            "Filtering by tags is the crux of the entire feature. It gave users a powerful way to cut through hundreds or even thousands of reports to find exactly what they needed. I built a fast, searchable dropdown that supports multi-select filters and dynamically queries tag associations across a portal.",
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
                            "On the backend, I worked with the team to optimize these requests for speed and scalability, ensuring filters remained responsive even under heavy load. This improvement directly contributed to a 35% faster report search time and made the Reports List a far more efficient workspace for data-heavy teams.",
                    },
                ],
            },
            {
                style: "h2",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content: "Tag Manager",
                    },
                ],
            },
            {
                style: "img",
                src: TagManager,
                alt: "Tag Manager",
            },
            {
                style: "normal",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content:
                            "The Tag Manager lets admins easily create, edit, and delete tags within a portal. I designed it to feel lightweight and intuitive, with hover-based edit and delete buttons for quick actions on each row, and a clear “Create Tag” button in the top right for adding new ones. The layout keeps everything visible and minimizes clicks, making tag management feel fast and predictable.",
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
                            "On the backend, separate endpoints were created to track tags per portal and handle permission-based access, ensuring that only portal admins could make edits. This structure made it easier to scale and maintain clean separation between tag data and report associations, while keeping the UI responsive and reliable.",
                    },
                ],
            },
            {
                style: "h2",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content: "Design Considerations",
                    },
                ],
            },
            {
                style: "img",
                src: Consideration1,
                alt: "Design Consideration 1",
            },
            {
                style: "h3-less-padding",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content: "Custom Tag Colors",
                    },
                ],
            },
            {
                style: "normal",
                children: [
                    {
                        type: "span",
                        styles: ["strong"],
                        content: "Pros:",
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
                                styles: [],
                                content:
                                    "Gives users freedom to personalize and visually group tags.",
                            },
                        ],
                    },
                    {
                        type: "li",
                        styles: [],
                        children: [
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "Can improve quick recognition in data-heavy workspaces.",
                            },
                        ],
                    },
                    {
                        type: "li",
                        styles: [],
                        children: [
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "Feels more dynamic and modern for teams that value customization (no running out of colors!).",
                            },
                        ],
                    },
                ],
            },
            {
                style: "normal",
                children: [
                    {
                        type: "span",
                        styles: ["strong"],
                        content: "Cons:",
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
                                styles: [],
                                content:
                                    "Harder to maintain visual consistency across HubSpot’s design system.",
                            },
                        ],
                    },
                    {
                        type: "li",
                        styles: [],
                        children: [
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "Increases cognitive load if colors overlap in meaning.",
                            },
                        ],
                    },
                    {
                        type: "li",
                        styles: [],
                        children: [
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "Requires color-contrast validation for accessibility.",
                            },
                        ],
                    },
                ],
            },
            {
                style: "h3",
                children: [
                    {
                        type: "span",
                        styles: ["less-padding"],
                        content: "Design System Tag Colors",
                    },
                ],
            },
            {
                style: "normal",
                children: [
                    {
                        type: "span",
                        styles: ["strong"],
                        content: "Pros:",
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
                                styles: [],
                                content:
                                    "Fully accessible and already tested for contrast.",
                            },
                        ],
                    },
                    {
                        type: "li",
                        styles: [],
                        children: [
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "Consistent look and feel with the rest of HubSpot’s UI.",
                            },
                        ],
                    },
                    {
                        type: "li",
                        styles: [],
                        children: [
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "Easier to maintain, theme, and scale across products.",
                            },
                        ],
                    },
                ],
            },
            {
                style: "normal",
                children: [
                    {
                        type: "span",
                        styles: ["strong"],
                        content: "Cons:",
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
                                styles: [],
                                content:
                                    "Restrictive for teams that want more semantic color mapping.",
                            },
                        ],
                    },
                    {
                        type: "li",
                        styles: [],
                        children: [
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "Risk of users running out of distinct colors when managing many tags.",
                            },
                        ],
                    },
                ],
            },
            {
                style: "normal",
                children: [
                    {
                        type: "span",
                        styles: ["strong"],
                        content: "Went with the design system colors!",
                    },
                ],
            },
            {
                style: "img",
                src: Consideration2,
                alt: "Design Consideration 2",
            },
            {
                style: "h3-less-padding",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content: "Modals",
                    },
                ],
            },
            {
                style: "normal",
                children: [
                    {
                        type: "span",
                        styles: ["strong"],
                        content: "Pros:",
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
                                styles: [],
                                content: "Fast to ship for MVPs.",
                            },
                        ],
                    },
                    {
                        type: "li",
                        styles: [],
                        children: [
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "Clear focus trap and keyboard support.",
                            },
                        ],
                    },
                    {
                        type: "li",
                        styles: [],
                        children: [
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "Good for complex forms and validation.",
                            },
                        ],
                    },
                    {
                        type: "li",
                        styles: [],
                        children: [
                            {
                                type: "span",
                                styles: [],
                                content: "Consistent across breakpoints.",
                            },
                        ],
                    },
                ],
            },
            {
                style: "normal",
                children: [
                    {
                        type: "span",
                        styles: ["strong"],
                        content: "Cons:",
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
                                styles: [],
                                content:
                                    "Takes the user out of context & blocks the page behind it.",
                            },
                        ],
                    },
                    {
                        type: "li",
                        styles: [],
                        children: [
                            {
                                type: "span",
                                styles: [],
                                content: "Can feel heavy if overused.",
                            },
                        ],
                    },
                ],
            },
            {
                style: "h3",
                children: [
                    {
                        type: "span",
                        styles: ["less-padding"],
                        content: "Popovers",
                    },
                ],
            },
            {
                style: "normal",
                children: [
                    {
                        type: "span",
                        styles: ["strong"],
                        content: "Pros:",
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
                                styles: [],
                                content: "Lightweight and stays in context.",
                            },
                        ],
                    },
                    {
                        type: "li",
                        styles: [],
                        children: [
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "Great for quick edits and small forms.",
                            },
                        ],
                    },
                    {
                        type: "li",
                        styles: [],
                        children: [
                            {
                                type: "span",
                                styles: [],
                                content: "Less visual disruption.",
                            },
                        ],
                    },
                ],
            },
            {
                style: "normal",
                children: [
                    {
                        type: "span",
                        styles: ["strong"],
                        content: "Cons:",
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
                                styles: [],
                                content:
                                    "Tricky placement, scroll, and focus handling.",
                            },
                        ],
                    },
                    {
                        type: "li",
                        styles: [],
                        children: [
                            {
                                type: "span",
                                styles: [],
                                content: "Tighter space for complex UIs.",
                            },
                        ],
                    },
                ],
            },
            {
                style: "normal",
                children: [
                    {
                        type: "span",
                        styles: ["strong"],
                        content:
                            "Went with the modals for the MVP but will look towards incorporating some popovers in the future!",
                    },
                ],
            },
            {
                style: "h2",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content: "Takeaways",
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
                            "Working at HubSpot was awesome, and this was just one of my projects I was super proud of this term. Here were my key learnings:",
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
                                content:
                                    "Cross-team collaboration was everything. ",
                            },
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "I worked closely with designers, PMs, backend engineers, and even joined customer calls to clarify how teams actually organize and retrieve reports. Those conversations shaped real design decisions, like when to use modals vs popovers, whether custom tag colors were worth the trade-offs, and other bugs I met along the way (like the overwriting vs appending tags, or the bulk action being slow).",
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
                                content: "Design clarity drives scalability. ",
                            },
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "Talking through color systems, accessibility, and tag behavior with stakeholders early on helped us avoid technical debt later. By grounding design choices in user research and product consistency, we built something that fit naturally into HubSpot’s ecosystem while staying flexible for future AI integrations.",
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
                                    "Engineering and planning go hand-in-hand. ",
                            },
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "This project stretched across the full stack: from frontend interfaces & state management with React and Redux to backend APIs built in Java with Spring Boot and Dropwizard. Collaborating across teams to plan endpoints, define permissions, and optimize for performance taught me how thoughtful planning can turn a complex idea into a fast, reliable feature.",
                            },
                        ],
                    },
                ],
            },
        ],
    },
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
                            "The Overlay Editor allows for text-based overlays to be placed on the camera feed to be captured during screen recordings. It was motivated by a Norwegian fish farm company to label infrastructure defects. This feature was their deciding factor in  choosing Deep Trekker's ROV over a competitor's product. And so, under a week turnaround, I took full ownership of this feature, working closely with the product designer to ensure that I was delivering an intuitive, seamless feature. This process included: ",
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
                            "Creating endpoints in the Express server to save and retrieve text overlays in the MySQL database via Prisma.",
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
                            "The media gallery allows users to review images and videos recorded by the robot vehicle within the app. This media is stored on hard drives and disks and helps users review documented footage of their dives. My contributions included: ",
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
                            "Developing a lightbox to view and zoom in/out on photos, and play videos.",
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
                            "For the storage indicator, I followed an atomic design methodology to create the individual components in Storybook. In the app, created a backend endpoint in the Express server to retrieve storage capacities for hard drives/disks. For storage notifications, I built a hook to check if storage capacity thresholds are reached.",
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
                            "Working with the Deep Trekker team was awesome, from lake days to test the Revolution ROV, spending time at the pool before feature releases, to leading web sprints with the team. Here were my key learnings:",
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
                                content: "Ask questions. ",
                            },
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "Being in a cross-functional team allowed me to learn beyond code development and gain exposure to other aspects of product development. I grew so much as a developer by asking questions to product design, QA, and engineering.",
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
                                content: "Every problem has a solution. ",
                            },
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "I took on many new and unfamiliar tasks that allowed me to explore new design principles and systems. While some problems genuinely felt hopeless, finding a solution was always possible (and very satisfying).",
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
                                content: "Work can be fun. ",
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
                            "In a Hack the North 2023 team of 4, I worked on the frontend and the database/backend integration. Our app featured a landing page, a dashboard, and an eye-training game that allowed users to connect their Adhawk eye-tracking glasses!",
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
                            "Miso is an AI bot that detects misogynistic and harmful comments made on messaging platforms, currently compatible with Discord. This was a project built for UofT Hacks 2023.",
                    },
                ],
            },
            {
                style: "h2",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content: "The Idea",
                    },
                ],
            },
            {
                style: "video",
                src: discordDemo,
                alt: "Discord Demo of Miso",
            },
            {
                style: "less-padding",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content:
                            "In professional communication spaces–especially Discord for new startups, Miso ensures that HR is informed of misogynistic and toxic behaviour from employees. It detects sexist and toxic messages using machine learning, and warns users prior to sending. Ultimately, we hope to reduce misogyny within tech communities so that women feel more empowered to work in STEM!",
                    },
                ],
            },
            {
                style: "normal",
                children: [
                    {
                        type: "span",
                        styles: ["strong"],
                        content:
                            "We made our own custom machine learning model on Cohere. ",
                    },
                    {
                        type: "span",
                        styles: [],
                        content:
                            "We made a classify model which categorises text inputs into the labels True (misogynistic) and False (non-misogynistic). To train it, we combined various databases which took comments from social media sites, and organised them into 2 columns: message text and their associated label. In addition to our custom model, we also implemented the Cohere Toxicity Detection API into our program and checked messages against both models.",
                    },
                ],
            },
            {
                style: "normal",
                children: [
                    {
                        type: "span",
                        styles: ["strong"],
                        content:
                            "Next, we developed a Discord Bot so that users can integrate this AI into their Discord Servers.",
                    },
                    {
                        type: "span",
                        styles: [],
                        content:
                            " We built it using Python, Discord API, and JSON. If someone sends a message which is determined to be 60% likely to be sexist or 80% likely to be toxic, then the bot would delete the message and send a warning text into the channel. To log the message history of the server, we used Estuary. Whenever a message would be sent in the discord, a new text file would be created and uploaded to Estuary to be backed up.",
                    },
                ],
            },
            {
                style: "h2",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content: "The Landing",
                    },
                ],
            },
            {
                style: "youtube",
                src: "https://youtu.be/embed/9MDUfkC-FLs?si=VGBcIM_gkjdVM8GU",
                alt: "Landing site Demo of Miso",
            },
            {
                style: "less-padding",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content:
                            "We also built a landing page for users to demo and download the bot. A future feature we wanted to illustrate was an employee record system which tracks every time a message is flagged as sexist or toxic for HR.",
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
                            "We built a React frontend and with Cohere, we created an API endpoint in our model page using FastApi and created a server using Uvicorn. This allowed us to use the Fetch API to fetch the model’s prediction of the inputted sample message.",
                    },
                ],
            },
            {
                style: "h2",
                children: [
                    {
                        type: "span",
                        styles: [],
                        content: "Takeaways",
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
                                content: "Working against time. ",
                            },
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "We had to use teamwork and resources to ensure we had a functioning, high-quality product in 3 days.",
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
                                content: "Learn by doing. ",
                            },
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "We used new technologies like Cohere for machine learning and Estuary for our database. Lots of new APIs but by attending hands-on workshops and just going at it, we learned so much.",
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
                                content: "Teamwork makes the dream work. ",
                            },
                            {
                                type: "span",
                                styles: [],
                                content:
                                    "Kelly, Lecia, and Pranav were the dream team 😎.",
                            },
                        ],
                    },
                ],
            },
        ],
    },
};
