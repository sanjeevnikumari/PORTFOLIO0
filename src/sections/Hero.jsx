import confetti from "canvas-confetti";
import { motion, useSpring } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiMongodb, SiTensorflow } from "react-icons/si";
import Suprise from "../components/Suprise";

const Hero = () => {
  const handleSurprise = () => {
    const duration = 5000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 8,
        angle: 60,
        spread: 60,
        origin: { x: 0 },
      });

      confetti({
        particleCount: 8,
        angle: 120,
        spread: 60,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const rotateX = useSpring(0, { stiffness: 150, damping: 15 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    rotateY.set((x / rect.width - 0.5) * 40);
    rotateX.set(-((y / rect.height - 0.5) * 40));
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-20 py-24 text-white overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm">Available for Internships</span>
            </motion.div>

            {/* Intro */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl md:text-2xl font-medium text-gray-300"
            >
              Hi, I'm
            </motion.h2>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
                mt-2
                text-4xl
                sm:text-5xl
                md:text-6xl
                font-black
                leading-tight
                tracking-tight
                bg-gradient-to-r
                from-white
                via-cyan-400
                to-purple-500
                bg-clip-text
                text-transparent
              "
            >
              SANJEEVNI
            </motion.h1>

            {/* Role */}
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-4 text-2xl sm:text-3xl md:text-4xl font-black leading-snug"
            >
              Full Stack Developer
              <br />
              <span className="text-cyan-400">AI / ML Enthusiast</span>
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-5 text-base sm:text-lg leading-7 text-gray-400"
            >
              Building Beautiful Fast &amp; Intelligent Web Experiences
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              <a
                href="#projects"
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm sm:text-base font-semibold flex items-center gap-2 hover:scale-105 transition"
              >
                Explore Projects
                <FaArrowRight />
              </a>

              <a
                href="/_RESUME.pdf"
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-3 text-sm sm:text-base flex items-center gap-2 hover:border-cyan-400 transition"
              >
                <FaDownload />
                Resume
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-[380px] h-[380px] flex items-center justify-center">
              {/* Glow */}
              <div className="absolute w-[380px] h-[380px] rounded-full bg-cyan-400/20 blur-[120px]" />

              {/* OUTER RING */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 27, repeat: Infinity, ease: "linear" }}
                className="absolute w-[420px] h-[420px] rounded-full border border-cyan-400/15"
              />

              {/* MIDDLE RING */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 27, repeat: Infinity, ease: "linear" }}
                className="absolute w-[360px] h-[360px] rounded-full border border-blue-400/20"
              />

              {/* INNER RING */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 27, repeat: Infinity, ease: "linear" }}
                className="absolute w-[320px] h-[320px] rounded-full border border-purple-400/20"
              />

              {/* Orbiting dot */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute w-[420px] h-[420px] z-30"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute w-[360px] h-[360px] z-30"
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_15px_#8b5cf6]" />
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute w-[300px] h-[300px] z-30"
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_15px_#3b82f6]" />
                </div>
              </motion.div>

              {/* Small sparkles - reduced count */}
              {[...Array(14)].map((_, i) => (
                <motion.span
                  key={i}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                  className="absolute rounded-full bg-cyan-400"
                  style={{
                    width: `${2 + Math.random() * 3}px`,
                    height: `${2 + Math.random() * 3}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    boxShadow: "0 0 10px #22d3ee",
                  }}
                />
              ))}

              {/* -------------------- TECH ICONS -------------------- */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-[420px] h-[420px]"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                  <div className="w-11 h-11 rounded-full bg-[#111827] border border-cyan-400/30 flex items-center justify-center shadow-xl">
                    <FaReact className="text-xl text-cyan-400" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="absolute w-[360px] h-[360px]"
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  <div className="w-11 h-11 rounded-full bg-[#111827] border border-green-500/30 flex items-center justify-center shadow-xl">
                    <FaNodeJs className="text-xl text-green-400" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute w-[300px] h-[300px]"
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                  <div className="w-11 h-11 rounded-full bg-[#111827] border border-green-500/30 flex items-center justify-center shadow-xl">
                    <SiMongodb className="text-xl text-green-500" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute w-[380px] h-[380px]"
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2">
                  <div className="w-11 h-11 rounded-full bg-[#111827] border border-yellow-500/30 flex items-center justify-center shadow-xl">
                    <FaPython className="text-xl text-yellow-400" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
                className="absolute w-[400px] h-[400px]"
              >
                <div className="absolute bottom-8 right-8">
                  <div className="w-11 h-11 rounded-full bg-[#111827] border border-orange-400/30 flex items-center justify-center shadow-xl">
                    <SiTensorflow className="text-xl text-orange-400" />
                  </div>
                </div>
              </motion.div>

              {/* Floating energy balls */}
              <motion.div
                animate={{ y: [0, -25, 0], x: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute right-16 bottom-16 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_25px_#22d3ee]"
              />

              <motion.div
                animate={{ y: [0, 20, 0], x: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute left-10 bottom-10 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_18px_#a855f7]"
              />

              {/* Reduced floating space balls */}
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, Math.random() * 14 - 7, 0],
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 5,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: "easeInOut",
                  }}
                  className="absolute rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]"
                  style={{
                    width: `${2 + Math.random() * 4}px`,
                    height: `${2 + Math.random() * 4}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                />
              ))}

              {/* ---------------- PHOTO ---------------- */}
              <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateX,
                  rotateY,
                  perspective: 1500,
                  transformStyle: "preserve-3d",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="relative z-30"
              >
                <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse blur-md opacity-80"></div>

                <div className="relative rounded-[30px] overflow-hidden border border-white/10 bg-[#0B1220] p-3 shadow-[0_0_60px_rgba(6,182,212,.35)]">
                  <img
                    src="/p2.jpeg"
                    alt="Sanjeevni"
                    className="w-[300px] h-[400px] rounded-[22px] object-cover"
                  />
                  <div className="absolute inset-0 rounded-[22px] bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </div>
              </motion.div>

              {/* CARD 1 */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-0 z-40"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-green-400/30 blur-2xl rounded-2xl animate-pulse" />
                  <div className="relative px-4 py-3 rounded-2xl bg-[#111827]/80 backdrop-blur-xl border border-green-400/30 shadow-[0_0_30px_rgba(34,197,94,0.25)]">
                    <p className="text-xs text-gray-400">DSA</p>
                    <h2 className="text-xl font-bold text-white">500+</h2>
                    <p className="text-green-400 text-xs">Problems Solved</p>
                  </div>
                </div>
              </motion.div>

              {/* CARD 2 */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-4 left-0 z-40"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-400/30 blur-2xl rounded-2xl animate-pulse" />
                  <div className="relative px-4 py-3 rounded-2xl bg-[#111827]/80 backdrop-blur-xl border border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.25)]">
                    <p className="text-gray-400 text-xs">Open To</p>
                    <h2 className="text-base font-bold text-white">Internships 🚀</h2>
                    <p className="text-cyan-400 text-xs">Full Stack • AI/ML</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <Suprise />
      </div>
    </section>
  );
};

export default Hero;
