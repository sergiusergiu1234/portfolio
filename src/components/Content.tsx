import * as Scroll from "react-scroll";
import { useBlurContext } from "../Context/BlurContext";
import { SiScrollreveal } from "react-icons/si";
import { BiChevronDown } from "react-icons/bi";
import {
  delay,
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { IconContext } from "react-icons";


import { scrollTo } from "../scrolTo";
import ProjectSection from "./ProjectSection";
import { Button } from "react-bootstrap";
import Footer from "./Footer";
import ProjectSection2 from "./ProjectSection2";
import ProjectSection3 from "./ProjectSection3";
import { useEffect, useRef } from "react";
import AnimatedButton from "./AnimatedButton";
import Contact from "./Contact";
import SkillsSection from "./SkillsSection";
import Title from "./Title";

export const Content = () => {
  const Element = Scroll.Element;
  const { blurred } = useBlurContext();

  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className={`font-rubik_mono_one_two ${blurred ? "blur-xl" : ""}`}>

      <Element
        className=" bg-gray-900 flex flex-col   h-screen content-center items-center sm:text-4xl text-lg  justify-center z-10"
        name="landing"
      >

        <motion.div
          initial={{ opacity: 0, }}
          animate={{ opacity: 1, }}
          transition={{ duration: 3 }}
          className="text-white m-2.5"
        >
          Hello!
        </motion.div>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,

            },
            visible: {
              opacity: 1,

              transition: {
                duration: 3,
              },
            },
          }}
          initial="hidden"
          animate="visible"
          className="flex flex-row mt-5 mb-10"
        >
          <div className="text-white mr-5">I am </div>
          <div className="text-[#d44706]  font-extrabold"> Sergiu</div>
          <div className="text-white"> ,</div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            show: { opacity: 1, y: 0, z: 100, transition: { duration: 3, delay: 1 } },
          }}
          initial="hidden"
          animate="show"
          className="flex flex-row font-extrabold"
        >
          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, z: 100 } }}
            className="text-white m-5"
          >
            Junior
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, z: 100 } }}
            className="text-white m-5"
          >
            Web
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, z: 100 } }}
            className="text-white m-5"
          >
            Developer
          </motion.div>
        </motion.div>

        <div className="mt-28">
          <IconContext.Provider value={{ size: "40" }}>
            <SiScrollreveal color="white" />
            <motion.div
              animate={{
                y: [0, 20, 0, 20, 0],
              }}
              transition={{
                repeat: Infinity,
                ease: "easeInOut",
                duration: 2,
                repeatDelay: 1,
              }}
            >
              <BiChevronDown color="white" />
            </motion.div>
          </IconContext.Provider>

        </div>

      </Element>

      <Element name="about"></Element>
      <br />
      <div
        className="flex flex-col justify-center items-center"
        ref={containerRef}
      >
        <motion.h2
          className="text-[#d44706] text-4xl font-extrabold"
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,

            },
            visible: {
              opacity: 1,

            },
          }}
          transition={{ duration: 3 }}
        >
          About me
        </motion.h2>
        <div className="flex md:flex-row flex-col items-center justify-center md:m-10 relative overflow-x-hidden">
          <img
            src={process.env.PUBLIC_URL + "/pfp.jpeg"}
            alt="Profile Picture"
            className="w-96 h-96  p-10"
          />

          <motion.div
            animate={mainControls}
            initial="hidden"
            variants={{
              hidden: {

                opacity: 0,
                y: 75,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{ duration: 1 }}
            ref={containerRef}
            className="text-white md:p-10 sm:text-xl md:w-3/4 w-[85vw] mb-5"
          >
            <p>I'm a junior web developer based in Targu Mures, Romania.</p>
            <p>
              {" "}
              I enjoy creating seamless experiences using all the different
              tools that i can get my hands on.
            </p>
            <p>
              My experience consists of personal projects where i used React
              Typescript, Java Spring Boot, MySQL, MongoDB.
            </p>
            <br />
            <p>
              {" "}
              Other than writing code i enjoy playing video games and watching
              movies. My favorite movie is Interstellar, while my favorite
              director is Quentin Tarantino.
            </p>
          </motion.div>
        </div>

        <section className="flex flex-col md:flex-row md:w-[80vw] justify-center items-center md:gap-[10vw] gap-[3vh]">
          <a
            href="CV-Stefan-Sergiu--Catalin.pdf"
            download="CV-Stefan-Sergiu--Catalin.pdf"
          >
            <AnimatedButton onClick={() => { }} width={150} height={50} text="Résumé" />
          </a>
          <a>
            <AnimatedButton
              onClick={() => scrollTo("contact")} width={150} height={50} text="Hire Me"
            /></a>
        </section>
        <SkillsSection />
      </div>


      <Element name="projects"></Element>
      <Title text="Projects" />
      <ProjectSection />
      <ProjectSection2 />
      <ProjectSection3 />
      <Element name="contact"></Element>
      <Contact />
      <Footer />
    </div>
  );
};
