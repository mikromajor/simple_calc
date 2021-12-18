import React, { useState } from "react";
import Input from "./UI/Input/Input";
import "./App.css";
import Select from "./UI/Select/Select";

function App() {
  const [input_1, setInput_1] = useState(0);
  const [input_2, setInput_2] = useState(0);
  const [selectedOperator, setSelectedOperator] =
    useState("0");

  return (
    <div className='App'>
      <Select
        state={selectedOperator}
        setState={setSelectedOperator}
      />

      <form>
        <Input
          labelText={"Input first number"}
          id={"input_1"}
          state={input_1}
          setState={setInput_1}
        />
        <Input
          labelText={"Input second number"}
          id={"input_2"}
          state={input_2}
          setState={setInput_2}
        />
        <input type={"submit"} value={"Submit"} />
      </form>
    </div>
  );
}

export default App;
