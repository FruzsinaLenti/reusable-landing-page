const FloatingButton = ({ children, isDisabled, onClick, color, styles }) => {
  const computedStyle = () => {
    if (color === "blue") {
      return "bg-blue-600";
    } else {
      return "bg-black";
    }
  };

  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={`${computedStyle()} ${styles} ${
        isDisabled && `bg-gray-200 focus:outline-none hover:none`
      } fixed z-90 w-20 h-12 rounded-md drop-shadow-lg flex justify-center items-center text-white text-md hover:drop-shadow-4xl hover:bg-blue-700`}
    >
      {children}
    </button>
  );
};

export default FloatingButton;
