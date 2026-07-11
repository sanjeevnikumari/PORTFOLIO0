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
    <section id="skills" className="relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-red-500">
            Technology <span className="text-white">Stack</span>
          </h2>

          <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-gray-300 leading-6 sm:leading-7">
            Technologies I use to build modern, scalable and high-performance
            web applications.
          </p>
        </motion.div>

        {/* Honeycomb */}
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          {rows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: rowIndex * 0.1,
                duration: 0.6,
              }}
              className="flex justify-center gap-2 sm:gap-3"
              style={
                rowIndex % 2 !== 0
                  ? { marginLeft: "clamp(20px, 5vw, 45px)" }
                  : undefined
              }
            >
              {row.map((item) => {
                if (item === "center") {
                  return (
                    <motion.div
                      key="center"
                      animate={{
                        y: [0, -4, 0],
                        scale: [1, 1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                      className="hex center-hex"
                    >
                      <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">⚡</div>
                      <h3 className="text-lg sm:text-xl font-black">SKILLS</h3>
                      <p className="mt-1 text-xs sm:text-sm text-gray-700 font-medium">
                        24 Technologies
                      </p>
                    </motion.div>
                  );
                }

                const skill = skills[item];
                if (!skill) return null;

                return (
                  <Hexagon key={skill.name} icon={skill.icon} name={skill.name} />
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
