const AboutUs = (props) => {
  const { items } = props;

  return (
    <section className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
      <div className="mb-4 text-4xl lg:text-6xl leading-tight">
        {items[0].label}
      </div>
      <div className="text-lg leading-relaxed mb-4">{items[1].label}</div>
    </section>
  );
};

export default AboutUs;
