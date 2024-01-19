import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full mx-auto lg:py-96 mt-24 py-32`}>
      <div
        className={`absolute inset-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-row justify-center items-center gap-5`}
      >
        <div className="text-center  animate-fade-in">
          <h1 className={`${styles.heroHeadText} subpixel-antialiased  text-white`}>Toheed Jamaal</h1>
          <p className={`${styles.heroSubText} font-mono animate-pulse italic mt-2`}>
            Full-Stack Web Developer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
