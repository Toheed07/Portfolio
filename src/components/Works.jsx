import { projects, socials } from "../constants/site";
import { styles } from "../styles";

const Works = () => {
  return (
    <section
      id="projects"
      className={`${styles.section} scroll-mt-24 pb-24 sm:pb-32`}
    >
      <h2 className={styles.sectionHead}>Projects</h2>
      <div className="mt-10">
        {projects.map((project) => (
          <article
            key={project.name}
            className="border-t border-ink/10 py-8 first:border-t-0 first:pt-0"
          >
            <h3 className="font-serif text-2xl font-medium tracking-tight">
              {project.name}
            </h3>
            <p className="mt-3 text-lg leading-relaxed text-ink/90">
              {project.description}
            </p>
            {project.tags?.length > 0 && (
              <p className="mt-3 text-base text-ink/55">
                {project.tags.join(" · ")}
              </p>
            )}
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg text-accent transition-colors hover:text-ink"
                >
                  Visit site
                </a>
              )}
              {project.source && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg text-accent transition-colors hover:text-ink"
                >
                  View source
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      <a
        href={socials.github}
        target="_blank"
        rel="noreferrer"
        className="mt-2 inline-block text-lg text-ink/70 transition-colors hover:text-accent"
      >
        More on GitHub
      </a>
    </section>
  );
};

export default Works;
