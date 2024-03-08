import { Button } from "react-bootstrap";

import CopyComp from "./CopyComp";
import AnimatedButton from "./AnimatedButton";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const ProjectSection = () => {
  const handleNavToProject = () => {
    window.open("https://slope-emporium.vercel.app/");
  };
  const handleNavToGithub = () => {
    window.open("https://github.com/sergiusergiu1234?tab=repositories");
  };

  const containerRef = useRef(null);
  const isInView = useInView(containerRef,{once:true})
  const controls = useAnimation();
  useEffect(()=>{
    if(isInView){
      controls.start('visible');
    }
  },[isInView])


  return (
    <motion.div ref={containerRef} variants={{hidden:{opacity:0}, visible:{opacity:1}}} transition={{duration: 2, delay: 0.5}} initial='hidden' animate={controls} className="bg-[#2e2e2d] h-max font-rubik_mono_one_two">
      <h4 className="text-[#02e394] lg:text-2lg text-lg p-[5vw] lg:p-[2vw] ml-[5vw] mt-[5vw]  font-rubik-mono">
        Slope Emporium - Online shop sample
      </h4>

      <div className="flex flex-col lg:flex-row w-full overflow-hidden ">
        <div className="flex flex-col lg:w-[50vw] ">
          <p className="text-white  pt-[2vw] p-[5vw] pb-0 ">
            This is a online shop sample that has basic shop features, such as
            product filtering, personal customer accounts, wishlist, shopping
            carts and order placement functionality, and the products data is
            controlled through an admin interface.
            <br />
            <br />
            For this project i used React Typescript for the frontend and Java
            Spring Boot for backend, while the data was stored in a MySql
            database. Images are stored on Amazon S3.
            <br />
            <br />
          </p>
          <CopyComp />
          <div className="flex sm:flex-row flex-col lg:gap-[5vw]   items-center justify-center mb-[5vw] gap-[3vh]">
            <AnimatedButton
              onClick={handleNavToProject}
              text="Live Demo"
              width={150}
              height={40}
            />
            <AnimatedButton
              onClick={handleNavToGithub}
              text="Github"
              width={150}
              height={40}
            />
          </div>
        </div>

        <div className="lg:w-1/2 p-[15vw] relative mt-[5vw] ml-[5vw] h-[70vw] lg:h-max lg:p-[5vw] lg:mt-0">
          <img
            src={"./online-sop3.jpeg"}
            alt="Profile Picture"
            className="w-[70%] absolute top-0 left-0"
          />
          <img
            src={"./online-shop.jpeg"}
            alt="Profile Picture"
            className="w-[70%] absolute  "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSection;
