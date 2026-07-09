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
    <section
      id="contact"
      className="relative py-28 px-6 lg:px-20 text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >

          <h2 className="mt-4 text-5xl font-black text-yellow-400">
            Let's <span className="text-white">Connect</span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-300 leading-8">
            Have a project, internship opportunity, or just want to connect?
            Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >
            <h3 className="text-3xl font-bold mb-8 text-yellow-200">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                  <FaEnvelope className="text-yellow-400 text-xl" />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p>sanjeevnikumari984@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                  <FaPhoneAlt className="text-yellow-400 text-xl" />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p>+91 6299381049</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-yellow-400 text-xl" />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p>India</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-5 mt-10">
              <a
                href="https://github.com/sanjeevnikumari"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-500 hover:scale-110 transition-all duration-300"
              >
                <FaGithub className="text-2xl" />
              </a>

              <a
                href="https://linkedin.com/in/sanzuuu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-600 hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 outline-none focus:border-cyan-400"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 outline-none focus:border-cyan-400 resize-none"
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-yellow-500 to-white py-4 font-semibold hover:scale-[1.02] transition-all duration-300 text-black"
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