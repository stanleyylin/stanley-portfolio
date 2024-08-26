import { FC, ReactNode } from "react";

type SocialProps = {
    Icon: ReactNode;
    link: string;
};
const Social: FC<SocialProps> = ({ Icon, link }) => {
    return (
        <div
            className="h-10 w-10 border-[1px] border-primary rounded-2 shadow-btn-preglow hover:shadow-btn-glow cursor-pointer flex justify-center items-center transition-all duration-300 ease"
            style={{ cursor: "pointer" }}
        >
            <a
                href={link}
                className="flex"
                rel="noreferrer noopener"
                target="_blank"
            >
                {Icon}
            </a>
        </div>
    );
};

export default Social;
