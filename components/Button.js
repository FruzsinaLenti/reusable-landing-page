const Button = ({ children, onClick }) => {
  return (
    <button
      className="flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-indigo-500 to-purple-400 hover:from-indigo-600 hover:to-purple-500 active:from-indigo-700 active:to-purple-600 focus-visible:ring ring-indigo-300 text-white font-semibold text-center text-sm rounded-md outline-none transition duration-100 px-5 py-2 m-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
