import { motion } from "framer-motion";
import Hexagon from "./Hexagon";
import { skills } from "../components/skills";
import "./Hexagon.css";

const rows = [
  [0, 1, 2],
  [3, 4, 5, 6],
  [7, 8, "center", 9, 10],
  [11, 12, 13, 14],
  [19, 20, 21],
  
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-32 px-6"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          

          <h2 className="mt-5 text-5xl md:text-7xl font-black text-red-500">
            Honeycomb{" "}
            <span className="text-white">
              Stack
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-200 leading-8">
            Technologies I use to build modern, scalable and high-performance
            web applications.
          </p>
        </motion.div>

        {/* Honeycomb */}
        <div className="flex flex-col items-center gap-6">

          {rows.map((row, rowIndex) => (

            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: rowIndex * 0.12,
                duration: 0.7,
              }}
              className={`
                flex
                justify-center
                gap-6
                ${rowIndex % 2 !== 0 ? "ml-20" : ""}
              `}
            >

              {row.map((item) => {

                if (item === "center") {
                  return (
                    <motion.div
                      key="center"
                      animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.04, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                      className="hex center-hex"
                    >
                      <div className="text-5xl mb-3">
                        ⚡
                      </div>

                      <h3 className="text-2xl font-black">
                        SKILLS
                      </h3>

                      <p className="mt-2 text-sm text-gray-700 font-medium">
                        24 Technologies
                      </p>
                    </motion.div>
                  );
                }

                const skill = skills[item];

                if (!skill) return null;

                return (
                  <Hexagon
                    key={skill.name}
                    icon={skill.icon}
                    name={skill.name}
                  />
                );
              })}
            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;