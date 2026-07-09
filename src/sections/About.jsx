import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const About = () => {

  const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institute: "government women engineering college, Ajmer",
    year: "2023 - 2027",
    cgpa: "CGPA: 9.2 / 10",
    desc: "Focused on Full Stack Development, Artificial Intelligence, Machine Learning, Data Structures and Algorithms."
  },

  {
    degree: "Higher Secondary Education (12th)",
    field: "Science Stream (PCM)",
    institute: "st karens high school, Patna",
    year: "2022 - 2023",
    cgpa: "Percentage: 85%",
    desc: "Built strong foundation in Mathematics, Physics, Chemistry, Computer Science and logical problem solving."
  },

  {
    degree: "Secondary Education (10th)",
    field: "General Education",
    institute: "st karens high school, Patna",
    year: "2019 - 2020",
    cgpa: "Percentage: 91%",
    desc: "Developed strong fundamentals in mathematics, science and analytical thinking."
  }
];


  return (
    <section
      id="about"
      className="
      relative
      py-24
      px-6
      overflow-hidden
      "
    >

      {/* Background Glow */}

     <div
className="
absolute
top-20
left-1/2
-translate-x-1/2
w-[600px]
h-[350px]
bg-gradient-to-r
from-red-700/20
via-red-400/10
to-white/10
blur-[120px]
rounded-full
"
/>


      <div className="max-w-6xl mx-auto relative">


        {/* Heading */}

        <motion.h2
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:.6}}
     
className="
text-5xl
md:text-9xl
font-black
text-center
bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_50%,#ea580c_50%,#ea580c_100%)]
bg-clip-text
text-transparent
drop-shadow-[0_0_30px_rgba(249,115,22,0.4)]
"
        >
          Education
        </motion.h2>



        <p className="
        text-center
        text-gray-400
        mt-4
        ">
          My academic journey and learning path
        </p>




        {/* Timeline */}

        <div className="
        mt-16
        relative
        border-l
        border-orange-400/30
        ml-5
        space-y-12
        ">


        {
          education.map((item,index)=>(

          <motion.div
          key={index}
          initial={{
            opacity:0,
            x:-40
          }}
          whileInView={{
            opacity:1,
            x:0
          }}
          transition={{
            duration:.6,
            delay:index*0.2
          }}
          className="
          relative
          pl-10
          "
          >


          {/* Dot */}

          <div
          className="
          absolute
          -left-[13px]
          top-5
          w-6
          h-6
          rounded-full
          bg-orange-400
          shadow-[0_0_25px_#fb923c]
          "
          />



          {/* Card */}

         <div
className="
rounded-3xl
border
border-orange-400/20
bg-white/5
backdrop-blur-xl
p-8

transition-all
duration-500

hover:border-orange-400/60
hover:bg-orange-400/5
hover:-translate-y-2

hover:shadow-[0_0_50px_rgba(249,115,22,0.35)]
"
>


          <div className="
          flex
          items-center
          gap-4
          ">

          <div
          className="
          w-14
          h-14
          rounded-2xl
          bg-orange-400/10
          flex
          items-center
          justify-center
          "
          >
            <FaGraduationCap
            className="
            text-3xl
            text-orange-400
            "
            />
          </div>


          <div>

          <h3
          className="
          text-2xl
          font-bold
          text-white
          "
          >
            {item.degree}
          </h3>

          <p className="
          text-orange-400
          ">
            {item.field}
          </p>

          </div>

          </div>



          <div className="mt-5 flex justify-between items-start flex-wrap gap-3">
  <div>
    <p className="text-gray-300 font-medium">
      {item.institute}
    </p>

    <p className="mt-2 text-orange-300 font-semibold">
      {item.cgpa}
    </p>
  </div>

  <span
    className="
    text-sm
    px-4
    py-2
    rounded-full
    bg-orange-400/10
    text-orange-300
    "
  >
    {item.year}
  </span>
</div>



          <p className="
          mt-5
          text-gray-400
          leading-relaxed
          ">
            {item.desc}
          </p>



          </div>


          </motion.div>

          ))
        }


        </div>


      </div>


    </section>
  );
};

export default About;