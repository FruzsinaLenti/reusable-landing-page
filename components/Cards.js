const Cards = (props) => {
  const { items } = props;

  return (
    <section className="">
      <div className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Title
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        <div className="border-2 bg-red-300">
          <div className="text-3xl mb-3 leading-snug">{items[0].label}</div>
          <div className="text-lg leading-relaxed mb-4">{items[1].label}</div>
        </div>
        <div className="border-2 bg-red-300">
          <div className="text-3xl mb-3 leading-snug">{items[0].label}</div>
          <div className="text-lg leading-relaxed mb-4">{items[1].label}</div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
