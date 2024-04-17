import React, { FC } from "react";

import { Button, H2, P1, P2 } from "../..";

export type ProjectCardProps = {
    image: string;
    description: string;
    title: string;
    link: string;
    index: number;
};
const ProjectCard: FC<ProjectCardProps> = ({
    image,
    description,
    title,
    link,
    index,
}) => {
    return (
        <div>
            <div>
                <P2>{index}</P2>
                <H2>{title}</H2>
                <P1>{description}</P1>
                <Button>Explore</Button>
            </div>
            <img src={image} />
        </div>
    );
};

export default ProjectCard;
