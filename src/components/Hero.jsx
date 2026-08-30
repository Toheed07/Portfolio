import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`${styles.section} pt-32 pb-20 sm:pt-40 sm:pb-28`}>
      <h1 className="font-serif text-[2.6rem] font-medium leading-[1.12] tracking-tight text-ink sm:text-6xl">
        Toheed Jamaal
      </h1>
      <p className="mt-6 max-w-xl font-serif text-[1.35rem] italic leading-snug text-ink sm:text-[1.75rem] sm:leading-snug">
        I build production GenAI systems - the pipelines, the agents, and the
        backends they run on.
      </p>
      <p className="mt-8 font-sans text-2xl text-ink sm:text-3xl">
        Backend Engineer at BoardCerts
      </p>
      <p className="mt-3 font-sans text-lg text-ink/60 sm:text-xl">
        Hyderabad · Open to remote · US/EU overlap
      </p>
    </section>
  );
};

export default Hero;
