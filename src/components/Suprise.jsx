import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { FaGift } from "react-icons/fa";

export default function Suprise() {
  const [show, setShow] = useState(false);

 const celebrate = () => {
  setShow(true);

  const duration = 6000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 12,
      spread: 90,
      startVelocity: 45,
      origin: { x: 0, y: Math.random() },
    });

    confetti({
      particleCount: 12,
      spread: 90,
      startVelocity: 45,
      origin: { x: 1, y: Math.random() },
    });

    confetti({
      particleCount: 10,
      spread: 360,
      startVelocity: 35,
      origin: {
        x: Math.random(),
        y: Math.random() * 0.5,
      },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();

  setTimeout(() => setShow(false), 6200);
};

  return (
    <>
      {/* Gift Button */}

      <motion.button
        whileHover={{ scale: 1.15, rotate: -8 }}
        whileTap={{ scale: 0.9 }}
        onClick={celebrate}
        className="fixed bottom-8 right-8 z-[999]
        w-16 h-16 rounded-full px-4
        bg-gradient-to-r
        from-pink-500
        via-purple-500
        to-cyan-500
        text-white
        text-3xl
        shadow-[0_0_40px_rgba(168,85,247,.6)]"
      >
        <FaGift />
      </motion.button>

      {/* Celebration Popup */}

    <AnimatePresence>
  {show && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[998] overflow-hidden pointer-events-none"
    >

      {/* Background Blur */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      {/* Welcome Box */}

      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.6, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="rounded-3xl bg-[#08101f]/80 backdrop-blur-xl border border-cyan-400/30 p-12 shadow-[0_0_80px_rgba(6,182,212,.4)] text-center">

          <motion.h1
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="text-7xl mb-6"
          >
            🎉
          </motion.h1>

          <motion.h2
            initial={{ y: -40 }}
            animate={{ y: 0 }}
            className="text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
          >
           WARM WELCOME
          </motion.h2>

          <h3 className="text-2xl mt-3 text-white">
            KEEP STRIVING FOR EXCELLENCE
          </h3>

          <p className="mt-6 text-gray-300 text-lg">
           ONE DAY YOU WILL ACHIVE IT ❤️
          </p>

          <p className="text-cyan-400 mt-2">
            - SANJU
          </p>

        </div>
      </motion.div>

      {/* Floating Stars */}

      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.4, 1.3, 0.4],
            rotate: 360,
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
          }}
          className="absolute text-yellow-300 text-xl"
        >
          ⭐
        </motion.div>
      ))}

      {/* Balloons Left */}

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={"l" + i}
          initial={{
            x: -120,
            y: 700 + i * 80,
          }}
          animate={{
            x: 200,
            y: -200,
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
          }}
          className="absolute text-6xl"
        >
          🎈
        </motion.div>
      ))}

      {/* Balloons Right */}

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={"r" + i}
          initial={{
            x: window.innerWidth + 100,
            y: 700 + i * 80,
          }}
          animate={{
            x: window.innerWidth - 250,
            y: -200,
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
          }}
          className="absolute text-6xl"
        >
          🎈
        </motion.div>
      ))}

    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}