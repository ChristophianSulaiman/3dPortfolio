import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const ResumeSection = () => {
  return (
    <motion.section
      className="flex flex-col items-center w-full max-w-screen-lg mx-auto my-12 p-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Resume Title */}
      <h3 className="text-4xl font-bold text-white mb-6">My Resume</h3>

      {/* Resume PDF Viewer */}
      <div className="w-full h-96 border border-gray-300 rounded-lg overflow-hidden shadow-md mb-6">
        <iframe
          src="/resume.pdf" // Update this path to your actual PDF file location
          className="w-full h-full"
          title="Resume"
        ></iframe>
      </div>

      {/* Download Button */}
      <a
        href="/resume.pdf" // Update this path to your actual PDF file location
        download="Christophian_Sulaiman_Resume"
        className="flex items-center justify-center bg-white text-teal-500 hover:bg-teal-500 hover:text-white py-3 px-6 rounded-full shadow-md transition duration-300"
      >
        <FaDownload className="text-xl mr-2" />
        <span>Download Resume</span>
      </a>
    </motion.section>
  );
};

export default ResumeSection;
