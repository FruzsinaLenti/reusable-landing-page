const Pricing = ({ items }) => {
  return (
    <section className="">
      <div className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        {items[0].title}
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {items &&
          items.map((item, i) => {
            return (
              i > 0 && (
                <div className="border-2 bg-red-100">
                  <div className="text-3xl mb-3 leading-snug">{item.label}</div>
                  <div className="text-lg leading-relaxed mb-4">
                    {item.text}
                  </div>
                </div>
              )
            );
          })}
      </div>
    </section>
  );
};

export default Pricing;
