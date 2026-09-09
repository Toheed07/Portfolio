import { styles } from "../styles";

const About = () => {
  return (
    <section id="about" className={`${styles.section} scroll-mt-24 pb-24 sm:pb-32`}>
      <h2 className={styles.sectionHead}>About</h2>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/90">
        <p>
          Backend engineer building scalable systems, currently at BoardCerts,
          an EdTech platform for nursing board certification exam preparation.
          Day to day I design backend services, automate operational workflows,
          and improve platform performance and reliability in production.
        </p>
        <p>
          Before that I built AI video generation at PanduAI and scaled backend
          systems at Dispatch For You.
        </p>
        <p>
          Alongside that work I am building depth in generative AI
          engineering - RAG, multi-LLM system design, fine-tuning, agentic
          architectures, and MCP-based tool orchestration - through coursework
          and independent projects. I care as much about evaluation,
          observability, guardrails, and cost-aware architecture as about the
          features themselves.
        </p>
      </div>
    </section>
  );
};

export default About;
