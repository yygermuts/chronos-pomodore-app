import type { ReactNode } from "react";

interface ContainerProp {
  children: ReactNode;
}

export const ContainerComponent = ({ children }: ContainerProp) => {
  return (
    <div className="container">
      <div className="content">
        <section>{children}</section>
      </div>
    </div>
  );
};
