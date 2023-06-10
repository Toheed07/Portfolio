import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-row justify-center items-center gap-5`}
      >
        <div className="text-center animate-fade-in">
          <h1 className={`${styles.heroHeadText} text-white`}>Toheed Jamaal</h1>

        </div>
      </div>
    </section>
  );
};

export default Hero;
