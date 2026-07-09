import { motion } from "framer-motion";
import "./Hexagon.css";

const Hexagon = ({ icon: Icon, name }) => {
  return (
    <motion.div
      className="hex"
      whileHover={{
        y: -15,
        scale: 1.08,
        rotate: 3,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 15,
      }}
    >
      <Icon className="hex-icon" />

      <p className="hex-title">{name}</p>
    </motion.div>
  );
};

export default Hexagon;