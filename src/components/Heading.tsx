import ClassesOfHeadingModules from "./Heading.module.css";

interface HeadingProps {
  children: string;
}

export const Heading = ({ children }: HeadingProps) => {
  return <h1 className={ClassesOfHeadingModules.heading}>{children}</h1>;
};
