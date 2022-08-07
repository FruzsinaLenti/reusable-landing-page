import Input from "./Input";
import { useState } from "react";

const Form = (props) => {
  const { order, array, isEditView } = props;
  const [state, setState] = useState([...array[order].inputFields]);

  const handleOnChange = (inputIndex) => (e) => {
    array[order].inputFields[inputIndex].label = e.target.value;
  };

  return (
    <form className="">
      {array[order].inputFields &&
        array[order].inputFields.map((input, inputIndex) => {
          return (
            <div key={inputIndex}>
              {isEditView ? (
                <Input
                  key={inputIndex}
                  type="textarea"
                  placeholder={input.label}
                  onChange={handleOnChange(inputIndex)}
                  value={state.value}
                  style={input.style}
                />
              ) : (
                <div key={inputIndex} className={`${input.style}`}>
                  {input.label}
                </div>
              )}
            </div>
          );
        })}
    </form>
  );
};

export default Form;
