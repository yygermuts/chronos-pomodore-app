// type DefaultButtonProps = {
//   id: "string";
//   abc: number;
// } & React.ComponentProps<"Button">;

import type React from "react";
import styles from "./styles.module.css";

type DefaultButtonProps = {
  icon: React.ReactNode; //react.ReactNode é qualquer coisa que o React consegue renderizar na tela...
  color?: "green" | "red";
} & React.ComponentProps<"button">; // herda tudo o que um button html tem

export const DefaultButton = ({
  icon,
  color = "green",
  ...props
}: DefaultButtonProps) => {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
};
