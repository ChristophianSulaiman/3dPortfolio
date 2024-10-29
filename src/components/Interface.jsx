import { motion } from "framer-motion";
import { useEffect } from "react";
import ContactSection from "./ContactSection";
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import ResumeSection from "./ResumeSection";

// import AnimatedBackground from "./AnimatedBackground";
// import CustomCursor from "./CustomCursor";
// import FloatingActionButton from "./FloatingActionButton";
// import ParallaxBackground from "./ParallaxBackground";


const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start justify-center
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

const ProjectsSection = () => {
  return (
    <Section>
      <motion.div 
        whileInView={"visible"}
        className="mt-40" // Adjusted top margin to add more space
      >
        <h2 className="text-5xl font-bold mb-8">Projects</h2>
        <div className="mt-8 space-y-8">
          {/* Project 1 - Pantry Pal */}
          <div className="project-card bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-8 rounded-xl shadow-xl border border-white hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex items-start">
              <img
                src="icons/PantryPal.jpg" // Placeholder icon, replace with actual image path
                alt="Pantry Pal Icon"
                className="w-16 h-16 mr-6 rounded-full shadow-md"
              />
              <div>
                <h3 className="text-3xl font-semibold">Pantry Pal</h3>
                <p className="mt-4 text-lg">
                  Pantry Pal is a mobile-first web application designed to help users manage their pantry inventory. With a focus on helping college students come up with quick recipes following available ingredients to save costs, and reducing food waste, users can add items to their pantry, track expiration dates, and receive notifications when products are nearing expiration.
                </p>
                <p className="mt-2 text-lg">
                  Built using JavaFX and MongoDB for real-time data storage, Pantry Pal offers a clean and intuitive interface that makes organizing food items easy and efficient. Utilizing Generative AI via OpenAI's model API, users are provided with an abundant selection of available recipes, followed by an AI-generated image of how the complete dish would look like.
                </p>
                <a
                  href="https://github.com/ChristophianSulaiman/pantrypal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-white font-semibold hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Other projects follow... */}
          {/* Project 2 - Portfolio Website */}
          <div className="project-card bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-8 rounded-xl shadow-xl border border-white hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex items-start">
              <img
                src="icons/Portfolio.jpg" // Placeholder icon, replace with actual image path
                alt="Portfolio Website Icon"
                className="w-16 h-16 mr-6 rounded-full shadow-md"
              />
              <div>
                <h3 className="text-3xl font-semibold">3D Portfolio Website</h3>
                <p className="mt-4 text-lg">
                  This portfolio website demonstrates my expertise in modern web development and 3D design. Built using Three.js and React Three Fiber, it combines 3D modeling with advanced front-end skills to create immersive, interactive environments.
                </p>
                <p className="mt-2 text-lg">
                  It features an interactive 3D room with a virtual character that represents me, showcasing my proficiency in tools like Blender and integrating complex 3D assets into a live web environment.
                </p>
                <a
                  href="https://github.com/ChristophianSulaiman" // Placeholder URL - replace with your portfolio GitHub repo URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-white font-semibold hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 - Traffic Injury Prediction Model */}
          <div className="project-card bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-8 rounded-xl shadow-xl border border-white hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex items-start">
              <img
                src="icons/TrafficPredction.jpg" // Placeholder icon, replace with actual image path
                alt="Traffic Injury Prediction Model Icon"
                className="w-16 h-16 mr-6 rounded-full shadow-md"
              />
              <div>
                <h3 className="text-3xl font-semibold">Traffic Injury Prediction Model (Machine Learning)</h3>
                <p className="mt-4 text-lg">
                  This project focuses on predicting the likelihood of personal injury in car accidents based on various details, aiming to reduce risks and improve road safety. Emphasizing high recall, the model prioritizes minimizing false negatives to ensure potential injuries are not overlooked.
                </p>
                <p className="mt-2 text-lg">
                  Utilizing data preprocessing, feature engineering, and techniques like logistic regression, neural networks, and SVM, the model effectively identifies patterns that can help in understanding and reducing accident-related injuries.
                </p>
                <a
                  href="https://github.com/ChristophianSulaiman/Traffic-Injury-Prediction-Model"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-white font-semibold hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
          {/* Project 4 - Gun Violence Project */}
          <div className="project-card bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-8 rounded-xl shadow-xl border border-white hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex items-start">
              <img
                src="icons/GunViolenceProject.jpg" // Placeholder icon, replace with actual image path
                alt="Gun Violence Project Icon"
                className="w-16 h-16 mr-6 rounded-full shadow-md"
              />
              <div>
                <h3 className="text-3xl font-semibold">Gun Violence Prediction Model</h3>
                <p className="mt-4 text-lg">
                  This project analyzes patterns in gun violence incidents across the United States, aiming to identify predictive factors and reduce the occurrence of these tragic events. By employing data analysis and machine learning techniques, the model uncovers correlations that can inform policy decisions.
                </p>
                <p className="mt-2 text-lg">
                  Through thorough data preprocessing, feature engineering, and the application of algorithms like logistic regression and neural networks, this project provides valuable insights into factors contributing to gun violence, enabling proactive measures to be developed.
                </p>
                <a
                  href="https://github.com/ChristophianSulaiman/Gun-Violence-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-white font-semibold hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};






export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen min-h-screen">
      
      <AboutSection />
      <SkillsSection />
      <ProjectsSection /> {/* Include the Projects section here */}
      
      <ContactSection />
      <ResumeSection />
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic">
          Christophian <br />
          A. <br />
          Sulaiman
        </span>
      </h1>
      <motion.p
        className="text-lg text-gray-600 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        I am a UC San Diego graduate
        <br />
        in Computer Science and Engineering.
        <br />
        My passion lies in software/web
        <br />
        development, and continuously trying to
        <br />
        learn new, developing technologies!
      </motion.p>
      <motion.button
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact me
      </motion.button>
    </Section>
  );
};

const skills = [
  {
    title: "Three.js / React Three Fiber",
    level: 70,
  },
  {
    title: "React / React Native",
    level: 90,
  },
  {
    title: "Nodejs",
    level: 90,
  },
  // {
  //   title: "Typescript",
  //   level: 60,
  // },
  // {
  //   title: "3D Modeling",
  //   level: 30,
  // },
  {
    title: "Java",
    level: 100,
  },
  {
    title: "C++",
    level: 70,
  },
  {
    title: "Python",
    level: 80,
  },
  {
    title: "Machine Learning",
    level: 80,
  },
  {
    title: "Front-End",
    level: 90,
  },
  {
    title: "Back-End",
    level: 60,
  },
];

const nonTechnicalSkills = [
  {
    title: "Leadership",
    level: 100,
  },
  {
    title: "Teamwork",
    level: 85,
  },
  {
    title: "Time Management",
    level: 80,
  },
  {
    title: "Problem Solving",
    level: 100,
  },
  {
    title: "Communication",
    level: 85,
  },
  {
    title: "Creativity",
    level: 100,
  },
];

const languages = [
  {
    title: "🇺🇸 English",
    level: 100,
  },
  {
    title: "🇮🇩 Bahasa Indonesia",
    level: 100,
  },
  // {
  //   title: "🇺🇸 English",
  //   level: 100,
  // },
  // {
  //   title: "🇯🇵 Japanese",
  //   level: 20,
  // },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className="text-5xl font-bold">Skills</h2>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-xl font-bold text-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full"
                  style={{ width: `${skill.level}%` }}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Non-Technical Skills Section */}
        <div>
          <h2 className="text-5xl font-bold mt-10">Non-Technical Skills</h2>
          <div className="mt-8 space-y-4">
            {nonTechnicalSkills.map((skill, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-gray-800"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                >
                  {skill.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div>
          <h2 className="text-5xl font-bold mt-10">Languages</h2>
          <div className="mt-8 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-gray-800"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2 + index * 0.2 }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full"
                    style={{ width: `${lng.level}%` }}
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 2 + index * 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};


