import { H2, P1, Social } from "@/components";
import { FiLinkedin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { SiDevpost } from "react-icons/si";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return location.pathname !== "/" ? (
        <footer
            className="flex container max-w-[1200px] border-t-border py-9 pb-14 lg:px-8 sm:px-12 xs:px-8 px-6 sm:flex-row gap-12 border-t flex-col sm:justify-between"
            id="footer"
        >
            <div>
                <H2>Stanley Lin</H2>
                <P1 className="opacity-80">s38lin@uwaterloo.ca</P1>
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
                    <H2 className="text-6">Home</H2>
                    <P1
                        className="!text-accent-foreground"
                        onClick={() => navigate("/")}
                    >
                        Landing
                    </P1>
                    <P1
                        className="!text-primary !opacity-95"
                        onClick={() => navigate("/home")}
                    >
                        Home
                    </P1>
                    <P1>Projects</P1>
                    <P1>Experiences</P1>
                    <P1>Contact</P1>
                </div>
                <div className="flex flex-col gap-1.5 [&>p]:cursor-pointer">
                    <H2 className="text-6">Projects</H2>
                    <P1 onClick={() => navigate("/projects/deeptrekker")}>
                        Deep Trekker
                    </P1>
                    <P1 onClick={() => navigate("/projects/visionary")}>
                        Visionary
                    </P1>
                    <P1 onClick={() => navigate("/projects/mapledirect")}>
                        Maple Direct
                    </P1>
                    <P1 onClick={() => navigate("/projects/miso")}>Miso</P1>
                </div>
            </div>
        </footer>
    ) : null;
};

export default Footer;
