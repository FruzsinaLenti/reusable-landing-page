const Cards = (props) => {
  const { items } = props;

  console.log("items", items);

  return (
    <section className="">
      <div className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Cards title
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {items.map((item, i) => (
          <div key={i} className="border-2 bg-red-100">
            <div className="text-3xl mb-3 leading-snug">{item.title}</div>
            <div className="text-lg leading-relaxed mb-4">{item.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
