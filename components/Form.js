import { useState } from "react";
import Button from "./Button";
import XIcon from "./XIcon";

export const HeaderForm = ({
  links,
  onAdd,
  onChange,
  onClickRemove,
  onSubmit,
}) => {
  return (
    <form className="p-6 space-y-2 w-full border-2">
      {links &&
        links.map((link, index) => {
          return (
            <div key={index}>
              <button onClick={onClickRemove(index)}>
                <XIcon className="text-red-700 w-4 h-4" />
              </button>
              <textarea
                rows={1}
                onChange={onChange(index)}
                value={link.label}
                className="form-control px-3 py-1.5 w-full text-gray-800 border border-solid border-gray-300 transition ease-in-out"
              />
            </div>
          );
        })}
      <div className="space-x-2">
        {onAdd && <Button onClick={onAdd}>Add Link</Button>}
        {onSubmit && <Button onClick={onSubmit}>Save</Button>}
      </div>
    </form>
  );
};

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

export const CardForm = ({
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

  const handleChangeTitle = (index) => (event) => {
    const newArr = [...content];
    newArr[index].title = event.target.value;
    setState(newArr);
  };
  const handleChangeText = (index) => (event) => {
    const newArr = [...content];
    newArr[index].text = event.target.value;
    setState(newArr);
  };

  return (
    <form className="p-6 space-y-2 w-full border-2">
      {content &&
        content.map((input, index) => {
          return (
            <div key={index}>
              {index === 0 ? (
                <textarea
                  rows={1}
                  onChange={handleChangeTitle(index)}
                  value={input.title}
                  className="form-control px-3 py-1.5 w-full text-gray-800 border border-solid border-gray-300 transition ease-in-out"
                />
              ) : (
                <>
                  <textarea
                    rows={1}
                    onChange={handleChange(index)}
                    value={input.label}
                    className="form-control px-3 py-1.5 w-full text-gray-800 border border-solid border-gray-300 transition ease-in-out"
                  />
                  <textarea
                    rows={1}
                    onChange={handleChangeText(index)}
                    value={input.text}
                    className="form-control px-3 py-1.5 w-full text-gray-800 border border-solid border-gray-300 transition ease-in-out"
                  />
                </>
              )}
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
