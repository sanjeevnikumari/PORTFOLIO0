import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroModel() {
  const [loading, setLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      className="relative flex items-center justify-center w-full h-[650px]"
    >
      {/* Glow */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Card */}
      <div className="relative w-full h-full overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

        {/* Loader */}
        {loading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#111827]">
            <div className="flex flex-col items-center gap-5">
              <div className="h-12 w-12 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin"></div>
              <p className="text-gray-300">Loading 3D Model...</p>
            </div>
          </div>
        )}

        <iframe
          title="Hero Model"
          className="w-full h-full"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src="https://sketchfab.com/models/689fea65ba734b90ab32ed5f687c8f9a/embed?autostart=1&transparent=1&ui_infos=0&ui_controls=0&ui_watermark=0&ui_watermark_link=0&ui_help=0&ui_settings=0&ui_annotations=0&ui_inspector=0"
          onLoad={() => setLoading(false)}
        />
      </div>
    </motion.div>
  );
}