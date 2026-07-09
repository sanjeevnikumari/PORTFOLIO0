import confetti from "canvas-confetti";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";
import {
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
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

  rotateY.set(((x / rect.width) - 0.5) * 40);
  rotateX.set(-((y / rect.height) - 0.5) * 40);
};

const handleMouseLeave = () => {
  rotateX.set(0);
  rotateY.set(0);
};
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 lg:px-20 text-white"
    >
<div className="w-full max-w-[2000px] mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-1 mb-10"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

              <span className="text-sm py-2">
                Available for Internships
              </span>
            </motion.div>

            {/* Intro */}

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
className="text-3xl md:text-4xl font-medium text-gray-300"            >
              Hi, I'm
            </motion.h2>

            {/* Name */}

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .2 }}
className="
mt-3
text-7xl
md:text-8xl
xl:text-[8.5rem]
2xl:text-[9.5rem]
leading-none
font-black
tracking-tight
bg-gradient-to-r
from-white
via-cyan-400
via-blue-500
to-purple-500
bg-clip-text
text-transparent
"           >
              SANJEEVNI
            </motion.h1>

            {/* Role */}

            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .35 }}
className="
mt-8
text-5xl
md:text-6xl
xl:text-7xl
font-black
leading-[1.1]
"            >
              Full Stack Developer
              <br />
              <span className="text-cyan-400">
                AI / ML Enthusiast
              </span>
            </motion.h3>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .5 }}
className="
mt-8
max-w-2xl
text-2xl
leading-10
text-gray-400
"            >
              Building Beautiful Fast & Intelligent Web Experience
            </motion.p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#projects"
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold flex items-center gap-3 hover:scale-105 transition"
              >
                Explore Projects
                <FaArrowRight />
              </a>

              <a
                href="/_RESUME.pdf"
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-4 flex items-center gap-3 hover:border-cyan-400 transition"
              >
                <FaDownload />
                Resume
              </a>

              

            </div>

            {/* Tech */}

          
            {/* Stats */}

            {/* Social */}

          

          </div>

{/* RIGHT */}
{/* RIGHT */}

{/* RIGHT */}

{/* ================= RIGHT ================= */}

{/* ================= RIGHT ================= */}

{/* ===================== RIGHT ===================== */}

<motion.div
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="hidden lg:flex justify-center"
>
  <div className="relative w-[850px] h-[850px] flex items-center justify-center overflow-visible">

    {/* Glow */}
<div className="absolute w-[520px] h-[520px] rounded-full bg-cyan-400/20 blur-[170px]" />

    {/* OUTER RING */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 27,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute w-[960px] h-[760px] rounded-full border border-cyan-400/15"
    />

    {/* MIDDLE RING */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{
        duration: 27,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute w-[720px] h-[620px] rounded-full border border-blue-400/20"
    />

    {/* INNER RING */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 27,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute w-[620px] h-[590px] rounded-full border border-purple-400/20"
    />
    {/*------------------------------------------*/}
    <motion.div
  animate={{
    rotate: 360,
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute w-[760px] h-[760px] z-30"
>
  <div className="absolute top-0 left-1/2 -translate-x-1/2">
    <div className="w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_30px_#22d3ee]" />
  </div>
</motion.div>
<motion.div
  animate={{
    rotate: 360,
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute w-[760px] h-[760px] z-30"
>
  <div className="absolute top-0 left-1/2 -translate-x-1/2">
    <div className="w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_30px_#22d3ee]" />
  </div>
</motion.div>
<motion.div
  animate={{
    rotate: 360,
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute w-[760px] h-[760px] z-30"
>
  <div className="absolute top-0 left-1/2 -translate-x-1/2">
    <div className="w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_30px_#22d3ee]" />
  </div>
</motion.div>
<motion.div
  animate={{
    rotate: 360,
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute w-[760px] h-[760px] z-30"
>
  <div className="absolute top-0 left-1/2 -translate-x-1/2">
    <div className="w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_30px_#22d3ee]" />
  </div>
</motion.div>
<motion.div
  animate={{ rotate: -360 }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute w-[620px] h-[620px] z-30"
>
  <div className="absolute right-0 top-1/2 -translate-y-1/2">
    <div className="w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_25px_#8b5cf6]" />
  </div>
</motion.div>
<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute w-[500px] h-[500px] z-30"
>
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
    <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_25px_#3b82f6]" />
  </div>
</motion.div>
{[0, 90, 180, 270].map((deg) => (
  <motion.div
    key={deg}
    animate={{ rotate: 360 }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute w-[760px] h-[760px]"
  >
    <div
      className="absolute left-1/2 top-0"
      style={{
        transform: `translateX(-50%) rotate(${deg}deg) translateY(-380px)`,
      }}
    >
      <div className="w-2 h-2 rounded-full bg-cyan-300" />
    </div>
  </motion.div>
))}
{[...Array(25)].map((_, i) => (
  <motion.span
    key={i}
    animate={{
      y: [0, -20, 0],
      opacity: [0.3, 1, 0.3],
      scale: [1, 1.4, 1],
    }}
    transition={{
      duration: 2 + Math.random() * 3,
      repeat: Infinity,
      delay: Math.random() * 2,
    }}
    className="absolute rounded-full bg-cyan-400"
    style={{
      width: `${2 + Math.random() * 4}px`,
      height: `${2 + Math.random() * 4}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      boxShadow: "0 0 15px #22d3ee",
    }}
  />
))}


    {/* -------------------- ICONS -------------------- */}

    {/* React */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 40,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute w-[760px] h-[760px] "
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <div className="w-16 h-16 rounded-full bg-[#111827] border border-cyan-400/30 flex items-center justify-center shadow-xl">
          <FaReact className="text-4xl text-cyan-400" />
        </div>
      </div>
    </motion.div>

    {/* Node */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{
        duration: 28,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute w-[620px] h-[620px]"
    >
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <div className="w-16 h-16 rounded-full bg-[#111827] border border-green-500/30 flex items-center justify-center shadow-xl">
          <FaNodeJs className="text-4xl text-green-400" />
        </div>
      </div>
    </motion.div>

    {/* Mongo */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute w-[500px] h-[500px]"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <div className="w-16 h-16 rounded-full bg-[#111827] border border-green-500/30 flex items-center justify-center shadow-xl">
          <SiMongodb className="text-4xl text-green-500" />
        </div>
      </div>
    </motion.div>

    {/* Python */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{
        duration: 24,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute w-[680px] h-[680px]"
    >
      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <div className="w-16 h-16 rounded-full bg-[#111827] border border-yellow-500/30 flex items-center justify-center shadow-xl">
          <FaPython className="text-4xl text-yellow-400" />
        </div>
      </div>
    </motion.div>

    {/* Tensorflow */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 34,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute w-[700px] h-[700px]"
    >
      <div className="absolute bottom-16 right-16">
        <div className="w-16 h-16 rounded-full bg-[#111827] border border-orange-400/30 flex items-center justify-center shadow-xl">
          <SiTensorflow className="text-4xl text-orange-400" />
        </div>
      </div>
    </motion.div>
    {/* PLANETS + SPACE BALLS */}


{/* Big Planet Top Right */}
<motion.div
  animate={{
    y: [0, -20, 0],
    rotate: [0, 360]
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut"
  }}
  className="
    absolute 
    right-10 
    top-20
    w-28 h-28
    rounded-full
    bg-gradient-to-br from-cyan-300/40 to-blue-600/20
    shadow-[0_0_60px_rgba(34,211,238,0.5)]
    blur-[1px]
  "
/>




{/* Floating Energy Balls */}

<motion.div
  animate={{
    y:[0,-40,0],
    x:[0,20,0]
  }}
  transition={{
    duration:5,
    repeat:Infinity
  }}
  className="
    absolute
    right-40
    bottom-28
    w-8 h-8
    rounded-full
    bg-cyan-400
    shadow-[0_0_35px_#22d3ee]
  "
/>


<motion.div
  animate={{
    y:[0,30,0],
    x:[0,-20,0]
  }}
  transition={{
    duration:6,
    repeat:Infinity
  }}
  className="
    absolute
    left-24
    bottom-20
    w-5 h-5
    rounded-full
    bg-purple-500
    shadow-[0_0_25px_#a855f7]
  "
/>


{/* Tiny Space Balls */}

{/* 50 FLOATING SPACE BALLS */}

{Array.from({ length: 70 }).map((_, i) => (
  <motion.div
    key={i}
    animate={{
      y: [0, -30, 0],
      x: [0, Math.random() * 20 - 10, 0],
      scale: [1, 1.4, 1],
      opacity: [0.3, 1, 0.3],
    }}
    transition={{
      duration: 3 + Math.random() * 5,
      repeat: Infinity,
      delay: Math.random() * 3,
      ease: "easeInOut",
    }}
    className="
      absolute
      rounded-full
      bg-cyan-300
      shadow-[0_0_20px_#22d3ee]
    "
    style={{
      width: `${3 + Math.random() * 6}px`,
      height: `${3 + Math.random() * 6}px`,
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
      whileHover={{
        scale: 1.05,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 20,
      }}
      className="relative z-30"
    >
      {/* Animated Border */}
      <div className="absolute -inset-1 rounded-[42px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse blur-md opacity-80"></div>

      <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-[#0B1220] p-4 shadow-[0_0_80px_rgba(6,182,212,.35)]">

        <img
          src="/p2.jpeg"
          alt="Sanjeevni"
          className="w-[500px] h-[650px] rounded-[30px] object-cover"
        />

        <div className="absolute inset-0 rounded-[30px] bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

      </div>
    </motion.div>

    {/* CARD 1 */}

   {/* CARD 1 */}

<motion.div
  animate={{ y: [0, -15, 0] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute top-20 right-10 z-40"
>
  <div className="relative">

    {/* Glow Background */}
    <div className="absolute inset-0 bg-green-400/30 blur-3xl rounded-2xl animate-pulse" />

    <div className="relative px-6 py-4 rounded-2xl 
      bg-[#111827]/80 backdrop-blur-xl 
      border border-green-400/30 
      shadow-[0_0_40px_rgba(34,197,94,0.25)]">

      <p className="text-sm text-gray-400">
        DSA
      </p>

      <h2 className="text-3xl font-bold text-white">
        500+
      </h2>

      <p className="text-green-400 text-sm">
        Problems Solved
      </p>

    </div>

  </div>
</motion.div>



{/* CARD 2 */}

<motion.div
  animate={{ y: [0, 15, 0] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 0.5,
  }}
  className="absolute bottom-20 left-6 z-40"
>
  <div className="relative">

    {/* Glow Background */}
    <div className="absolute inset-0 bg-cyan-400/30 blur-3xl rounded-2xl animate-pulse" />

    <div className="relative px-6 py-4 rounded-2xl 
      bg-[#111827]/80 backdrop-blur-xl 
      border border-cyan-400/30 
      shadow-[0_0_40px_rgba(34,211,238,0.25)]">

      <p className="text-gray-400 text-sm">
        Open To
      </p>

      <h2 className="text-xl font-bold text-white">
        Internships 🚀
      </h2>

      <p className="text-cyan-400 text-sm">
        Full Stack • AI/ML
      </p>

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