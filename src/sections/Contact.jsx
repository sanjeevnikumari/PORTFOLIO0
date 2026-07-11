import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mt-2 text-4xl md:text-5xl font-black text-yellow-400">
            Let's <span className="text-white">Connect</span>
          </h2>

          <p className="mt-3 max-w-xl mx-auto text-sm md:text-base text-gray-300 leading-6">
            Have a project, internship opportunity, or just want to connect?
            Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-yellow-200">
              Contact Information
            </h3>

            <div className="space-y-5">

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                  <FaEnvelope className="text-yellow-400 text-lg" />
                </div>

                <div>
                  <p className="text-gray-400 text-xs">Email</p>
                  <p className="text-sm text-white">
                    sanjeevnikumari984@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                  <FaPhoneAlt className="text-yellow-400 text-lg" />
                </div>

                <div>
                  <p className="text-gray-400 text-xs">Phone</p>
                  <p className="text-sm text-white">
                    +91 6299381049
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-yellow-400 text-lg" />
                </div>

                <div>
                  <p className="text-gray-400 text-xs">Location</p>
                  <p className="text-sm text-white">
                    India
                  </p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-7">

              <a
                href="https://github.com/sanjeevnikumari"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-yellow-500 hover:scale-110"
              >
                <FaGithub className="text-lg" />
              </a>

              <a
                href="https://linkedin.com/in/sanzuuu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-yellow-500 hover:scale-110"
              >
                <FaLinkedin className="text-lg" />
              </a>

            </div>
          </motion.div>
                    {/* Right Form */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-yellow-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-yellow-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-yellow-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full resize-none rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-yellow-400"
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-300 py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;