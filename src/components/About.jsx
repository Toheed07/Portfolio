import { styles } from "../styles";

const About = () => {
  return (
    <section id="about" className={`${styles.section} scroll-mt-24 pb-24 sm:pb-32`}>
      <h2 className={styles.sectionHead}>About</h2>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/90">
        <p>
          I work at the intersection of production backends and generative AI.
          At BoardCerts I shipped a multi-LLM question generation pipeline -
          Gemini, Claude, and Bedrock - that cut manual content work by 40%
          and sped generation 3× for a U.S. nursing exam platform.
        </p>
        <p>
          Before that I built AI video generation at PanduAI and scaled backend
          systems at Dispatch For You. I work primarily in Python and
          JavaScript, across FastAPI, Postgres, MongoDB, and AWS/Azure.
        </p>
        <p>
          Right now I am focused on RAG, agentic systems, and the
          infrastructure that makes them reliable in production.
        </p>
      </div>
    </section>
  );
};

export default About;
