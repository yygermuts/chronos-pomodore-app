export interface DefaultInputProps {
  type: string;
}

export const DefaultInput = ({ type }: DefaultInputProps) => {
  return (
    <>
      <label htmlFor="myInput">task</label>
      <input id="myInput" type={type} />
    </>
  );
};
