import { useEffect, useState } from "react";

const Background = () => {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">
      {/* Animation */}
      <style>
        {`
          @keyframes movePinkLines {
            0% {
              transform: translateY(-150px);
            }
            100% {
              transform: translateY(150px);
            }
          }
        `}
      </style>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(#ffffff 1px, transparent 1px),
            linear-gradient(90deg, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Mesh Gradient */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, #2563eb 0%, transparent 35%),
            radial-gradient(circle at 80% 30%, #9333ea 0%, transparent 35%),
            radial-gradient(circle at 50% 80%, #06b6d4 0%, transparent 35%)
          `,
        }}
      />

      {/* Moving Pink Lines */}
      <div
        className="absolute inset-[-200px] opacity-40 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              120deg,
              transparent 0px,
              transparent 35px,
              rgba(236,72,153,0.35) 38px,
              transparent 42px
            )
          `,
          animation: "movePinkLines 8s linear infinite alternate",
        }}
      />

      {/* Mouse Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              circle at ${mouse.x}% ${mouse.y}%,
              rgba(236,72,153,0.45),
              transparent 25%
            )
          `,
          transition: "background .15s ease",
        }}
      />
    </div>
  );
};

export default Background;