import Input from "./Input";
import { useState } from "react";

const Form = (props) => {
  const { order, array } = props;
  const [state, setState] = useState([...array[order].inputFields]);

  return (
    <form>
      {array[order].inputFields &&
        array[order].inputFields.map((input, inputIndex) => (
          <Input
            key={inputIndex}
            type="text"
            placeholder={input.label}
            onChange={(e) =>
              setState([
                (array[order].inputFields[inputIndex].value = e.target.value),
              ])
            }
            name={input.label}
            value={array[order].inputFields[inputIndex].value}
          />
        ))}
    </form>
  );
};

export default Form;
