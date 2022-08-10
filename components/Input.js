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
      className={`${style} outline-none w-full`}
      id={id}
      placeholder={placeholder}
      value={value}
      {...rest}
    />
  );
};

export default Input;
