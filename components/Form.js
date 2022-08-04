import Input from "./Input";
import { useState } from "react";

const Form = (props) => {
  const { order, array, isEditView } = props;
  const [state, setState] = useState([...array[order].inputFields]);

  return (
    <form className="">
      {array[order].inputFields &&
        array[order].inputFields.map((input, inputIndex) => {
          return (
            <>
              {isEditView ? (
                <Input
                  key={inputIndex}
                  type="text"
                  placeholder={input.label}
                  onChange={(e) =>
                    setState([
                      (array[order].inputFields[inputIndex].value =
                        e.target.value),
                    ])
                  }
                  name={input.label}
                  value={array[order].inputFields[inputIndex].value}
                  style={input.style}
                />
              ) : (
                <div key={inputIndex} className={`${input.style}`}>
                  {input.label}
                </div>
              )}
            </>
          );
        })}
    </form>
  );
};

export default Form;
