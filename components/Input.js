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
    <input
      type={type}
      className=" form-control
        block
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      // className={`${style} outline-none w-full`}
      id={id}
      placeholder={placeholder}
      value={value}
      {...rest}
    />
  );
};

export default Input;
