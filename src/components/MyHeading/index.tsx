import type React from "react";
import styles from "./MyHeading.module.css";

interface MyHeadingProps {
  children: React.ReactNode;
}

export const MyHeading = ({ children }: MyHeadingProps) => {
  return <h1 className={styles.heading}>{children}</h1>;
};
