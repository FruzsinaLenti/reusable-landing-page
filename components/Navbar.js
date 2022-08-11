const Navbar = (props) => {
  const { items } = props;

  return (
    <nav className="w-full border-b-2">
      {items.map((item, index) => (
        <div key={index} className="text-sm m-4 underline inline max-w-max">
          {item.label}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
