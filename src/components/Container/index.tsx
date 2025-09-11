import type { ReactNode } from "react";
import styles from "./styles.module.css";

interface ContainerProp {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProp) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section>{children}</section>
      </div>
    </div>
  );
};
