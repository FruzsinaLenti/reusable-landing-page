// https://dev.to/ms_yogii/form-inputs-with-react-and-tailwind-57o2
const Input = (props) => {
  const {
    id,
    placeholder = "",
    type = "text",
    required = false,
    value,
    ...rest
  } = props;

  return (
    <div className="mb-3">
      <div className="transition duration-150 ease-in-out">
        <label
          htmlFor={id}
          className="hidden text-xs text-primary font-light placeholder-gray-gray4 px-2 pt-1.5"
        ></label>
        <input
          type={type}
          className="h-9 w-full px-2 text-primary outline-none text-base font-light rounded-md"
          id={id}
          placeholder={placeholder}
          value={value}
          {...rest}
        />
      </div>
    </div>
  );
};

export default Input;
