import { OPERATORS } from "../../constants";
import "./Select.css";
interface SelectProps {
  id: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const Select = ({ id, state, setState }: SelectProps) => {
  return (
    <>
      <label htmlFor={id}>
        {"Please, select the operation:"}
      </label>
      <select
        className={"Select__text_position"}
        id={id}
        value={state}
        onChange={(e) => setState(e.currentTarget.value)}
      >
        <option disabled={true} value='0'>
          Math operators
        </option>
        {OPERATORS.map((operator) => (
          <option key={operator} value={operator}>
            {operator}
          </option>
        ))}
      </select>
    </>
  );
};
export default Select;
