import { experiences } from "../constants/site";
import { styles } from "../styles";

const Experience = () => {
  return (
    <section id="work" className={`${styles.section} scroll-mt-24 pb-24 sm:pb-32`}>
      <h2 className={styles.sectionHead}>Work</h2>
      <div className="mt-10">
        {experiences.map((job) => (
          <article
            key={`${job.company}-${job.date}`}
            className="border-t border-ink/10 py-8 first:border-t-0 first:pt-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-serif text-2xl font-medium tracking-tight">
                {job.href ? (
                  <a
                    href={job.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
              </h3>
              <p className="text-base text-ink/60">{job.date}</p>
            </div>
            <p className="mt-1.5 text-xl text-ink/80">{job.title}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-lg leading-relaxed text-ink/90 marker:text-ink/35">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
