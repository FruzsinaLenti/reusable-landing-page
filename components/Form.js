import Input from "./Input";
import { useState } from "react";
import Button from "./Button";

export const InlineEdit = ({ value, setValue }) => {
  const [editingValue, setEditingValue] = useState(value);

  const onChange = (event) => setEditingValue(event.target.value);

  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  };

  const onBlur = (event) => {
    setValue(event.target.value);
  };

  return (
    <input
      type="text"
      aria-label="Field name"
      value={editingValue}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
  );
};

export const NavForm = (props) => {
  const { content, onSubmit } = props;
  const [state, setState] = useState({});

  const handleChange = (index) => (event) => {
    const newArr = [...content];
    newArr[index].label = event.target.value;
    setState(newArr);
  };

  const handleClick = (event) => {
    event.preventDefault();
    onSubmit(state);
  };

  return (
    <form className="bg-gray-200 border-2">
      {content &&
        content.map((input, index) => {
          return (
            <div key={index} className="">
              <Input
                type="textarea"
                onChange={handleChange(index)}
                value={input.label}
              />
            </div>
          );
        })}
      <Button onClick={handleClick}>Save</Button>
    </form>
  );
};

const Form = (props) => {
  const { order, content, isEditView } = props;
  const [state, setState] = useState([...content[order].inputFields]);

  const handleOnChange = (inputIndex) => (e) => {
    content[order].inputFields[inputIndex].label = e.target.value;
  };

  return (
    <form>
      {content[order].inputFields &&
        content[order].inputFields.map((input, inputIndex) => {
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
