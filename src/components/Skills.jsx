import { skillGroups } from "../constants/site";
import { styles } from "../styles";

const Skills = () => {
  return (
    <section
      id="skills"
      className={`${styles.section} scroll-mt-24 pb-24 sm:pb-32`}
    >
      <h2 className={styles.sectionHead}>Skills</h2>
      <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.heading}>
            <h3 className="font-serif text-2xl font-medium tracking-tight">
              {group.heading}
            </h3>
            <ul className="mt-4 space-y-1.5 text-lg text-ink/80">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
