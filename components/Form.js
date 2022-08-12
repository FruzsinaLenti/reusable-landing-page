import { useRef, useState, useEffect } from "react";
import Button from "./Button";

const useAutosizeTextArea = (textAreaRef, value) => {
  useEffect(() => {
    if (textAreaRef) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      textAreaRef.style.height = "0px";
      const scrollHeight = textAreaRef.scrollHeight;

      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      textAreaRef.style.height = scrollHeight + "px";
      console.log("textAreaRef", textAreaRef.style.height);
    }
  }, [textAreaRef, value]);
};

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

export const NavForm = ({ content, onSubmit, onAdd, onDelete }) => {
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
    <form className="p-6 space-y-2 w-full border-2">
      {content &&
        content.map((input, index) => {
          return (
            <div key={index} className="">
              <input
                onChange={handleChange(index)}
                value={input.label}
                className=" form-control px-3 py-1.5 w-full text-gray-800 border border-solid border-gray-300 transition ease-in-out"
              />
            </div>
          );
        })}
      <div className="space-x-2">
        <Button onClick={handleClick}>Save</Button>
        <Button onClick={onAdd}>Add</Button>
        <Button onClick={onDelete}>Delete</Button>
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
}) => {
  const [state, setState] = useState({});

  const textAreaRef = useRef(null);

  useAutosizeTextArea(textAreaRef.current, state);

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
    <form className="p-6 space-y-2 w-full border-2">
      {content &&
        content.map((input, index) => {
          return (
            <div key={index} className="">
              <textarea
                rows={1}
                onChange={handleChange(index)}
                ref={textAreaRef}
                value={input.label}
                className="form-control px-3 py-1.5 w-full text-gray-800 border border-solid border-gray-300 transition ease-in-out"
              />
            </div>
          );
        })}
      <div className="space-x-2">
        <Button onClick={handleClick}>Save</Button>
        <Button onClick={onClickMoveUp}>↑</Button>
        <Button onClick={onClickMoveDown}>↓</Button>
        <Button onClick={onClickRemove}>X</Button>
      </div>
    </form>
  );
};

// const Form = (props) => {
//   const { order, content, isEditView } = props;
//   const [state, setState] = useState([...content[order].inputFields]);

//   const handleOnChange = (inputIndex) => (e) => {
//     content[order].inputFields[inputIndex].label = e.target.value;
//   };

//   return (
//     <form>
//       {content[order].inputFields &&
//         content[order].inputFields.map((input, inputIndex) => {
//           return (
//             <div key={inputIndex}>
//               {isEditView ? (
//                 <input
//                   key={inputIndex}
//                   type="textarea"
//                   placeholder={input.label}
//                   onChange={handleOnChange(inputIndex)}
//                   value={state.value}
//                   style={input.style}
//                 />
//               ) : (
//                 <div key={inputIndex} className={`${input.style}`}>
//                   {input.label}
//                 </div>
//               )}
//             </div>
//           );
//         })}
//     </form>
//   );
// };

export default Form;
