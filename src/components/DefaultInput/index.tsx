// type DefaultInputProps = {
//   id: "string";
//   abc: number;
// } & React.ComponentProps<"input">;

import styles from "./styles.module.css";

interface DefaultInputProps extends React.ComponentProps<"input"> {
  id: string;
  abc?: number;
  labelText: string;
}

export const DefaultInput = ({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) => {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
};
