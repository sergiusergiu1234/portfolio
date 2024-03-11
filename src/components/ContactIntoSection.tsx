import { motion } from "framer-motion";
import { useState } from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const listVariants = {
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const childrenVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

const ContactInfoSection = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <section className="flex flex-col gap-[1rem] justify-center items-center fixed top-20 right-0  z-[100]">
      <motion.svg
        onClick={() => setToggle(!toggle)}
        width={100}
        height={100}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 2 }}
        fill="transparent"
        className={"hover:cursor-pointer"}
      >
        <path id="curve" d="M 20 50 A 30 30 0 1 1 20 51"></path>
        <text fill="#d44706" className="text-md">
          <textPath href="#curve" startOffset="0%">
            Let's connect
          </textPath>
          <textPath href="#curve" startOffset="50%">
            Let's connect
          </textPath>
        </text>
      </motion.svg>
      {toggle && (
        <section>
          <motion.ul
            variants={listVariants}
            initial="hidden"
            animate="show"
            className="text-3xl flex flex-col gap-[1rem]"
          >
            <motion.li variants={childrenVariants} whileHover={{scale:1.7}}>
              <a href="https://github.com/sergiusergiu1234">
                <FaGithub className="text-white" />
              </a>
            </motion.li>

            <motion.li variants={childrenVariants}  whileHover={{scale:1.7}}>
              <a href="https://www.instagram.com/sergiuc.stefan/">
                <FaInstagram className="text-white" />
              </a>
            </motion.li>

            <motion.li variants={childrenVariants}  whileHover={{scale:1.7}}>
              <a href="https://www.linkedin.com/in/sergiu-catalin-stefan-a5553a196/">
                <FaLinkedinIn className="text-white" />
              </a>
            </motion.li>
          </motion.ul>
        </section>
      )}
    </section>
  );
};

export default ContactInfoSection;
