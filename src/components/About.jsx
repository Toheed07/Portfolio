import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full steel-gray-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Introduction</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray-200 text-[17px] max-w-3xl leading-[30px]"
      >
        Full-Stack Web Developer with a solid foundation in JavaScript, Python, and
        C++. Proficient in ReactJS, Next.js, Express, Node.js, MongoDB, MySQL,
        and Firestore. Skilled in version control with GIT, cloud platforms like
        Firebase, API testing with Postman, and payment integration using
        Stripe. Excels in designing and implementing end-to-end solutions,
        translating business needs into technical success. Seeking an
        opportunity to leverage my skills and contribute to innovative projects
        as a Full Stack Developer within a technology-driven organization.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
