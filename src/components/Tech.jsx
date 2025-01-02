import { useRef, useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2
          className={`${styles.sectionHeadText} text-center`}
          style={{ paddingBottom: "50px" }}
        >
          Skills
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div
            className="w-36 h-20 flex items-center justify-center"
            key={technology.name}
          >
            <div className="flex items-center gap-3 bg-gray-800 text-white px-4 py-3 rounded-lg min-w-max">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-8 h-8 object-contain"
              />
              <span className="font-medium text-center max-w-[120px] truncate">
                {technology.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-14" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(Tech, "");
