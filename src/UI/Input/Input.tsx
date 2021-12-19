import "./Input.css";

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
    <div className={"Input"}>
      <label htmlFor={id}>{labelText}</label>
      <input
        step={"any"}
        id={id}
        type={"number"}
        value={state}
        onChange={(e) => {
          setState(Number(e.currentTarget.value));
        }}
      ></input>
    </div>
  );
};
export default Input;
