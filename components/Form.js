import { useState } from "react";
import Button from "./Button";

export const Form = ({
  content,
  onSubmit,
  onClickMoveUp,
  onClickMoveDown,
  onClickRemove,
  onAdd,
  onAddCard,
}) => {
  const [state, setState] = useState([]);

  const handleChange = (index) => (event) => {
    const newArr = [...content];
    newArr[index].label = event.target.value;
    setState(newArr);
  };

  return (
    <form className="p-6 space-y-2 w-full border-2">
      {content &&
        content.map((input, index) => {
          return (
            <div key={index}>
              <textarea
                rows={1}
                onChange={handleChange(index)}
                value={input.label}
                className="form-control px-3 py-1.5 w-full text-gray-800 border border-solid border-gray-300 transition ease-in-out"
              />
            </div>
          );
        })}
      <div className="space-x-2">
        {onSubmit && <Button onClick={onSubmit}>Save</Button>}
        {onClickMoveUp && <Button onClick={onClickMoveUp}>↑</Button>}
        {onClickMoveDown && <Button onClick={onClickMoveDown}>↓</Button>}
        {onAdd && <Button onClick={onAdd}>Add Link</Button>}
        {onAddCard && <Button onClick={onAddCard}>Add Card</Button>}
        <Button onClick={onClickRemove}>x</Button>
      </div>
    </form>
  );
};

export default Form;
