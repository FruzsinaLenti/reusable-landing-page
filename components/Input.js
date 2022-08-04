// https://dev.to/ms_yogii/form-inputs-with-react-and-tailwind-57o2
const Input = (props) => {
  const {
    id,
    placeholder = "",
    type = "textarea",
    required = false,
    value,
    style,
    ...rest
  } = props;

  return (
    <div className="transition duration-150 ease-in-out">
      {/* <label
          htmlFor={id}
          className="hidden text-xs text-primary font-light placeholder-gray-gray4 px-2 pt-1.5"
        ></label> */}
      <input
        type={type}
        className={`${style} outline-none`}
        id={id}
        placeholder={placeholder}
        value={value}
        {...rest}
      />
    </div>
  );
};

export default Input;
