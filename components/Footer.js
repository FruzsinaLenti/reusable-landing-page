const Footer = (props) => {
  const { items } = props;

  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <div className="container mx-auto px-5">
        <div className="py-14 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Website.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            {items &&
              items.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="mx-3 font-bold hover:underline"
                >
                  {item.label}
                </a>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
