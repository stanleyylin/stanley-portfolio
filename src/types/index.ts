import { SVGProps } from "react";
import { type IconType } from "react-icons";

export type LinkProps = {
    id: string;
    title: string;
    href: string;
    Icon: IconType;
};

export type IconProps = SVGProps<SVGSVGElement> & {
    svg?: boolean;
    color?: string;
};

export type ProjectCardProps = {
    image: string;
    description: string;
    title: string;
    link: string;
    index: number;
    projectType: string;
};

export type TextBoxChildren = {
    type: "span" | "a";
    styles: string[];
    link?: string;
    content: string;
};

export type TextBox =
    | {
          style: "normal" | "h2" | "h3";
          children: TextBoxChildren[];
      }
    | {
          style: "img";
          alt: string;
          src: string;
      };

export type ProjectPageProps = {
    id: string;
    title: string;
    type: string;
    description: string;
    mockups: string[];
    technologies: string[];
    skills: string[];
    buttons: LinkProps[];
    content: TextBox[];
};
