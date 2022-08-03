const Button = ({ children, onClick, color }) => {
  const style = () => {
    if (color === "red") {
      return "bg-gradient-to-tr from-pink-500 to-red-400 hover:from-pink-600 hover:to-red-500 active:from-pink-700 active:to-red-600 ring-pink-300";
    } else if (color === "green") {
      return "bg-green-500 hover:bg-green-600 active:bg-green-700 focus-visible:ring ring-green-300";
    } else if (color === "blue") {
      return "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus-visible:ring ring-blue-300";
    }

    return "bg-gradient-to-tr from-indigo-500 to-purple-400 hover:from-indigo-600 hover:to-purple-500 active:from-indigo-700 active:to-purple-600 ring-indigo-300";
  };
  return (
    <button
      className={`flex sm:inline-flex justify-center items-center ${style()} focus-visible:ring text-white font-semibold text-center text-sm rounded-md outline-none transition duration-100 px-5 py-2 m-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
