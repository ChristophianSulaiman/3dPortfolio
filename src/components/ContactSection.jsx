import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaDownload } from "react-icons/fa";

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className="min-h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-center justify-center"
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

const ContactSection = () => {
  return (
    <Section>
      {/* Contact Information Card */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-3xl p-8 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out mb-8"
        whileHover={{ scale: 1.03 }}
      >
        {/* Contact Info Section */}
        <div className="text-white text-center md:text-left mb-6 md:mb-0 flex flex-col items-center md:items-start">
          <h2 className="text-5xl font-bold mb-4">Contact Me</h2>
          <div className="mt-4">
            <p className="text-xl font-medium mb-2 flex items-center">
              <FaEnvelope className="mr-2" />
              Email:
            </p>
            <a
              href="mailto:sulaimanphian@gmail.com"
              className="text-lg bg-white text-teal-700 p-2 rounded-lg shadow-md hover:bg-teal-600 hover:text-white transition duration-300"
            >
              sulaimanphian@gmail.com
            </a>
          </div>
          <div className="mt-4">
            <p className="text-xl font-medium mb-2 flex items-center">
              <FaPhoneAlt className="mr-2" />
              Phone:
            </p>
            <a
              href="tel:+14254808442"
              className="text-lg bg-white text-teal-700 p-2 rounded-lg shadow-md hover:bg-teal-600 hover:text-white transition duration-300"
            >
              +1 (425) 480-8442
            </a>
          </div>
          <div className="mt-4">
            <p className="text-xl font-medium mb-2 flex items-center">
              <FaLinkedin className="mr-2" />
              LinkedIn:
            </p>
            <a
              href="https://www.linkedin.com/in/christophian-austin-sulaiman-895a76258/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg bg-white text-teal-700 p-2 rounded-lg shadow-md hover:bg-teal-600 hover:text-white transition duration-300"
            >
              Connect with me!
            </a>
          </div>
        </div>
        
        {/* Profile Image */}
        <motion.div
          className="w-40 h-40 md:w-48 md:h-48 bg-white rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mt-8 md:mt-0"
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <img
            src="icons/Phian.jpg" // Update this path to match your image's location
            alt="Profile Image"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Resume Display Card */}
      <motion.div
        className="w-full max-w-3xl p-6 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mt-8 flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h3 className="text-3xl font-bold mb-4 text-white">My Resume</h3>
        
        {/* Inline PDF Viewer */}
        <div className="w-full h-96 border border-gray-300 rounded-lg overflow-hidden shadow-md mb-6">
            <iframe
                src="Christophian_s_Resume.pdf" // Confirm the path is correct
                className="w-full h-full"
                title="Resume"
                type="application/pdf"
                frameBorder="0"
            ></iframe>
        </div>


        {/* Download Button */}
        <a
          href="Christophian_s_Resume.pdf" // Ensure this path is correct for download
          download="Christophian_Sulaiman_Resume"
          className="bg-teal-700 text-white py-3 px-6 rounded-full shadow-md hover:bg-teal-800 transition duration-300 flex items-center space-x-3"
        >
          <FaDownload className="text-2xl" />
          <span>Download Resume</span>
        </a>
      </motion.div>
    </Section>
  );
};

export default ContactSection;
