const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-black hover:bg-indigo-600 flex sm:inline-flex justify-center items-center focus-visible:ring text-white text-center text-sm outline-none transition duration-100 px-4 py-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
