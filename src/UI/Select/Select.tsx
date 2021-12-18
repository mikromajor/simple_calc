import { OPERATORS } from "../../constants";

interface SelectProps {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const Select = ({ state, setState }: SelectProps) => {
  return (
    <>
      <label htmlFor='cars'>Choose math operation:</label>
      <select
        value={state}
        onChange={(e) => setState(e.currentTarget.value)}
      >
        <option disabled={true} value='0'>
          Choose math operation
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
