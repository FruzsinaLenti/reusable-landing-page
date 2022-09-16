const Hero = ({ items }) => {
  const { title, text } = items;
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="text-center font-bold text-8xl mt-5">
        {title && title}
      </div>
      <div className="text-center md:text-left text-lg mt-5 md:pl-8">
        {text && text}
      </div>
    </section>
  );
};

export default Hero;
