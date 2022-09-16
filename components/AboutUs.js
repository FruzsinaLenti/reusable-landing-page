const AboutUs = ({ items }) => {
  const { title, content } = items;

  return (
    <section className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
      <div className="mb-4 text-4xl lg:text-6xl leading-tight">{title}</div>
      <div className="text-lg leading-relaxed mb-4">{content}</div>
    </section>
  );
};

export default AboutUs;
