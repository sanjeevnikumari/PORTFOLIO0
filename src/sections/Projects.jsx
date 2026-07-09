
import { motion } from "framer-motion";
import { FolderGit2 , ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Powered Job Portal",
    description:
      "A full-stack AI-powered job portal where candidates can search and apply for jobs, recruiters can post openings, and AI recommends jobs based on user skills and resume. Includes authentication, resume upload, dashboards, and application tracking.",
    image: "/projects/jobportal.jpg",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "OpenAI API"
    ],
    github: "https://github.com/sanjeevnikumari/job_hunts",
    live: " https://job-hunts-ptki.onrender.com/",
  },

  {
    title: "AI Powered Code Editor",
    description:
      "A collaborative online code editor with real-time code execution, AI code generation, debugging assistance, syntax highlighting, multiple language support, and live collaboration.",
    image: "/projects/codeeditor.jpg",
    tech: [
      "React",
      "Node.js",
      "Socket.io",
      "Monaco Editor",
      "OpenAI API"
    ],
    github: "https://github.com/sanjeevnikumari/code-reveiwer",
    live: "https://your-codeeditor.vercel.app",
  },

  {
    title: "Real-Time Chat Application",
    description:
      "A modern real-time chat application featuring one-to-one messaging, group chats, typing indicators, online status, emoji support, image sharing, notifications, and secure authentication.",
    image: "/projects/chatapp.jpg",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "JWT"
    ],
    github: "https://github.com/sanjeevnikumari/chatapplication",
    live: " https://chatapplication-x3ju.onrender.com/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-28 px-6 lg:px-20 text-white"
    >
      <div className="absolute inset-0 -z-10">
  <div className="absolute top-40 left-1/4 h-80 w-80 rounded-full bg-emerald-500/15 blur-[140px]" />
  <div className="absolute bottom-20 right-1/4 h-80 w-80 rounded-full bg-orange-500/15 blur-[140px]" />
</div>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
        
<h2 className="mt-4 text-5xl font-black">
  Featured <span className="text-emerald-400">Projects</span>
</h2>

<p className="mt-6 max-w-2xl mx-auto text-gray-300 leading-8">
  A selection of projects showcasing my experience in Full Stack
  Development, AI/ML and modern web technologies.
</p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-emerald-700">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-7">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-emerald-500/10 border border-emerald-400/20 px-3 py-1 text-xs text-emerald-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 transition hover:border-emerald-400"
                  >
                    <FolderGit2 size={18} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-white-600 px-4 py-3 font-medium transition hover:scale-105"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Explore More Button */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.3 }}
  className="mt-16 flex justify-center"
>
  <a
    href="https://github.com/sanjeevnikumari?tab=repositories"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group
      flex
      items-center
      gap-3
      rounded-2xl
      border
      border-emerald-400/30
      bg-white/5
      backdrop-blur-xl
      px-8
      py-4
      text-lg
      font-semibold
      text-white
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-orange-400
      hover:bg-emerald-500/10
      hover:shadow-[0_0_30px_rgba(16,185,129,0.35)]
    "
  >
    <FolderGit2
      size={22}
      className="text-emerald-400 group-hover:text-emerald-400 transition"
    />

    Explore More Projects

    <ExternalLink
      size={20}
      className="group-hover:translate-x-1 transition-transform"
    />
  </a>
</motion.div>
      </div>
    </section>
  );
};

export default Projects;
