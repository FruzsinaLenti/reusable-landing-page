const Navbar = (props) => {
  const { items } = props;

  return (
    <nav className="w-full border-b-2 h-20 flex items-center ">
      {items.map((item, index) => (
        <div key={index} className="text-lg m-4 underline inline max-w-max">
          {item.label}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
