import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { BackgroundGradient } from "../components/ui/background-gradient";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  showDelay = false,
}) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", showDelay ? (index * 0.5) : 0, 0.75)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-gray-400 text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_DISPLAY_COUNT = 3;

  const initialProjects = projects.slice(0, INITIAL_DISPLAY_COUNT);
  const extraProjects = projects.slice(INITIAL_DISPLAY_COUNT);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-7">
        {/* Initial projects always shown */}
        {initialProjects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index} 
            {...project}
            showDelay={true}
          />
        ))}
        
        {/* Extra projects with AnimatePresence */}
        <AnimatePresence>
          {showAll && extraProjects.map((project, index) => (
            <ProjectCard
              key={`extra-project-${index}`}
              index={index + INITIAL_DISPLAY_COUNT}
              {...project}
            />
          ))}
        </AnimatePresence>
      </div>

      {projects.length > INITIAL_DISPLAY_COUNT && (
        <motion.div 
          className="w-full flex justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-opacity-90 transition-all"
          >
            {showAll ? "Show Less" : "Show More Projects"}
          </button>
        </motion.div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "");

{
  /* <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-gray-400 text-[17px] max-w-3xl leading-[30px]"
        >
          I have several projects that demonstrate my skills and experience with
          real-world examples of my work. Each project is briefly described and
          includes links to both the code repository and a live demo. These
          projects showcase my ability to solve complex problems, work with
          different technologies, and manage projects effectively.
        </motion.p>
      </div> */
}
