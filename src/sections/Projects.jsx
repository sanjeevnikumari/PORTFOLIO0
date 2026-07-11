import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Powered Job Portal",
    description:
      "A full-stack AI-powered job portal where candidates can search and apply for jobs, recruiters can post openings, and AI recommends jobs based on user skills.",
    image: "/projects/jobportal.jpg",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "OpenAI API"],
    github: "https://github.com/sanjeevnikumari/job_hunts",
    live: "https://job-hunts-ptki.onrender.com/",
  },
  {
    title: "AI Powered Code Editor",
    description:
      "A collaborative online code editor with AI code generation, debugging, syntax highlighting and real-time execution.",
    image: "/projects/codeeditor.jpg",
    tech: ["React", "Node.js", "Socket.io", "Monaco", "OpenAI API"],
    github: "https://github.com/sanjeevnikumari/code-reveiwer",
    live: "https://your-codeeditor.vercel.app",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A chat application featuring messaging, group chats, typing indicators, emoji support and authentication.",
    image: "/projects/chatapp.jpg",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    github: "https://github.com/sanjeevnikumari/chatapplication",
    live: "https://chatapplication-x3ju.onrender.com/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-white">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>

          <p className="mt-3 text-sm text-gray-400 max-w-xl mx-auto">
            A collection of full-stack applications built with modern
            technologies and clean UI.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="group flex h-[350px] flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]"
            >
              {/* Image */}
              <div className="relative h-36 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-base font-semibold text-emerald-400">
                  {project.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-gray-400">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex gap-2 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-md border border-white/10 px-3 py-2 text-xs font-medium text-white transition hover:border-emerald-400 hover:bg-white/5"
                  >
                    <FolderGit2 size={13} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-md bg-gradient-to-r from-emerald-500 to-emerald-600 px-3 py-2 text-xs font-medium text-white transition hover:scale-105"
                  >
                    <ExternalLink size={13} />
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://github.com/sanjeevnikumari?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-white/5 px-5 py-2 text-xs font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-500/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]"
          >
            <FolderGit2
              size={14}
              className="text-emerald-400"
            />

            Explore More

            <ExternalLink
              size={12}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
