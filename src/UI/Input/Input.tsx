interface InputProps {
  labelText: string;
  id: string;
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}
const Input = ({
  labelText,
  id,
  state,
  setState,
}: InputProps) => {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        type={"number"}
        value={state}
        onChange={(e) => {
          setState(Number(e.currentTarget.value));
        }}
      ></input>
    </>
  );
};
export default Input;
