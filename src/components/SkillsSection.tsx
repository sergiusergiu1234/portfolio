import { motion,  useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const containerVariants = {
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
const SkillsSection = () => {

    const containerRef = useRef(null);

    const isInView = useInView(containerRef, { once: true })
    const controller = useAnimation();
   
    useEffect(()=>{
        if(isInView){
            controller.start('show')
        }
    },[isInView])

  return (
    <motion.section
      ref = {containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={controller}
      className="w-[80vw] flex flex-wrap text-center  justify-evenly text-white m-10"
      
    >
      <motion.div variants={childrenVariants}  transition={{show:{ duration: 2 }}} whileHover={{scale:1.1}} className="flex flex-col items-center m-[1rem]"> 
        <img src={process.env.PUBLIC_URL + "/react.svg"} />
        <p className=" font-ibm-plex font-extrabold text-xl">React</p>
      </motion.div>

      <motion.div variants={childrenVariants}  transition={{show:{ duration: 2 }}} whileHover={{scale:1.1}} className="flex flex-col items-center m-[1rem]">
        <img src={process.env.PUBLIC_URL + "/typescript.svg"} />
        <p className="font-ibm-plex font-extrabold text-xl">Typescript</p>
      </motion.div>

      <motion.div variants={childrenVariants}  transition={{show:{ duration: 2 }}} whileHover={{scale:1.1}} className="flex flex-col items-center m-[1rem]">
        <img src={process.env.PUBLIC_URL + "/java.svg"} />
        <p className="font-ibm-plex font-extrabold text-xl">Java</p>
      </motion.div>

      <motion.div variants={childrenVariants} transition={{show:{ duration: 2 }}} whileHover={{scale:1.1}} className="flex flex-col items-center m-[1rem]">
        <img src={process.env.PUBLIC_URL + "/spring.svg"} />
        <p className="font-ibm-plex font-extrabold text-xl">Spring</p>
      </motion.div>

      <motion.div variants={childrenVariants}  transition={{show:{ duration: 2 }}} whileHover={{scale:1.1}} className="flex flex-col items-center m-[1rem]">
        <img src={process.env.PUBLIC_URL + "/mysql.svg"} />
        <p className="font-ibm-plex font-extrabold text-xl">MySQL</p>
      </motion.div>

      <motion.div variants={childrenVariants}  transition={{show:{ duration: 2 }}} whileHover={{scale:1.1}} className="flex flex-col items-center m-[1rem]">
        <img src={process.env.PUBLIC_URL + "/mongodb.svg"} />
        <p className="font-ibm-plex font-extrabold text-xl">Mongo</p>
      </motion.div>

      <motion.div variants={childrenVariants}  transition={{show:{ duration: 2 }}} whileHover={{scale:1.1}} className="flex flex-col items-center m-[1rem]">
        <img src={process.env.PUBLIC_URL + "/git.svg"} />
        <p className="font-ibm-plex font-extrabold text-xl">Git</p>
      </motion.div>

    
     
    </motion.section>
  );
};

export default SkillsSection;
