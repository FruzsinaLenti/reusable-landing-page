const FloatingButton = ({ children, isDisabled, onClick, color, styles }) => {
  const computedStyle = () => {
    if (color === "blue") {
      return "bg-blue-600";
    } else {
      return "bg-black";
    }
  };

  const isActive = () => {
    return isDisabled && `bg-gray-200 focus:outline-none hover:none`;
  };

  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={`${computedStyle()} ${styles} ${isActive()} fixed z-90 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-xl hover:drop-shadow-4xl hover:bg-blue-700`}
    >
      {children}
    </button>
  );
};

export default FloatingButton;
