import { H2, P1, Social } from "@/components";
import { FiLinkedin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { SiDevpost } from "react-icons/si";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const goToHomePageAndScroll = async (
        selector: string,
        duration?: number,
    ) => {
        if (location.pathname !== "/home") {
            await navigate("/home");
        }
        setTimeout(
            () =>
                scroller.scrollTo(selector, {
                    duration: duration ?? 600,
                    smooth: true,
                    spy: true,
                }),
            500,
        );
    };

    return location.pathname !== "/" ? (
        <footer
            className="flex container max-w-[1200px] border-t-border py-9 pb-14 lg:px-8 sm:px-12 xs:px-8 px-6 sm:flex-row gap-12 border-t flex-col sm:justify-between"
            id="footer"
        >
            <div>
                <H2 className="select-all">Stanley Lin</H2>
                <P1
                    className="opacity-80 select-all"
                    onClick={() =>
                        (window.location.href =
                            "mailto:stanleylin82@uwaterloo.ca")
                    }
                    style={{ cursor: "pointer" }}
                >
                    s38lin@uwaterloo.ca
                </P1>
                <div className="flex gap-4 mt-5 opacity-90">
                    <Social
                        Icon={<FiLinkedin className="text-primary h-5 w-5" />}
                        link="https://www.linkedin.com/in/stanleylinuw"
                    />
                    <Social
                        Icon={<RiGithubLine className="text-primary h-5 w-5" />}
                        link="https://github.com/stanleyylin"
                    />
                    <Social
                        Icon={<SiDevpost className="text-primary h-5 w-5" />}
                        link="https://devpost.com/stanleyylin"
                    />
                </div>
            </div>
            <div className="flex justify-between lg:gap-20 md:gap-15 sm:gap-10 gap-5">
                <div className="flex flex-col gap-1.5 [&>p]:text-secondary-foreground [&>p]:opacity-80 [&>p]:cursor-pointer">
                    <H2 className="text-6 select-text">Home</H2>
                    <P1
                        className="!text-accent-foreground"
                        onClick={() => navigate("/")}
                        style={{ cursor: "pointer" }}
                    >
                        Landing
                    </P1>
                    <P1
                        className="!text-primary !opacity-95"
                        onClick={() => navigate("/home")}
                        style={{ cursor: "pointer" }}
                    >
                        Home
                    </P1>
                    <P1
                        style={{ cursor: "pointer" }}
                        onClick={() => goToHomePageAndScroll("projects")}
                    >
                        Projects
                    </P1>
                    <P1
                        style={{ cursor: "pointer" }}
                        onClick={() => goToHomePageAndScroll("experiences")}
                    >
                        Experiences
                    </P1>
                    <P1
                        style={{ cursor: "pointer" }}
                        onClick={() => goToHomePageAndScroll("footer")}
                    >
                        Contact
                    </P1>
                </div>
                <div className="flex flex-col gap-1.5 [&>p]:cursor-pointer">
                    <H2 className="text-6 select-text">Projects</H2>
                    <P1
                        onClick={() => navigate("/projects/deeptrekker")}
                        style={{ cursor: "pointer" }}
                    >
                        Deep Trekker
                    </P1>
                    <P1
                        onClick={() => navigate("/projects/visionary")}
                        style={{ cursor: "pointer" }}
                    >
                        Visionary
                    </P1>
                    <P1
                        onClick={() => navigate("/projects/mapledirect")}
                        style={{ cursor: "pointer" }}
                    >
                        Maple Direct
                    </P1>
                    <P1
                        onClick={() => navigate("/projects/miso")}
                        style={{ cursor: "pointer" }}
                    >
                        Miso
                    </P1>
                </div>
            </div>
        </footer>
    ) : null;
};

export default Footer;
