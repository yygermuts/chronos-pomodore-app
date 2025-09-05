import type React from "react";
import styles from "./Heading.module.css";

interface HeadingProps {
  children: React.ReactNode;
}

export const Heading = ({ children }: HeadingProps) => {
  return <h1 className={styles.heading}>{children}</h1>;
};
