import { MouseEvent, useEffect, useRef } from "react";
import { Button } from "./Button";
import { motion, useAnimation, useInView } from "framer-motion";
import AnimatedButton from "./AnimatedButton";

const ProjectSection2 = ()=>{
    
    const containerRef = useRef(null);
    const isInView = useInView(containerRef,{once:true})
    const controls = useAnimation();
    useEffect(()=>{
      if(isInView){
        controls.start('visible');
      }
    },[isInView])
  
  
    
    return (
        <motion.div ref={containerRef} variants={{hidden:{opacity:0}, visible:{opacity:1}}} 
            transition={{duration: 2, delay: 0.5}} initial='hidden' animate={controls} 
            className="bg-[#2e2e2d] h-max font-rubik_mono_one_two">
    
     <h4 className="text-[#02e394] xl:text-2xl text-xl p-[5vw] md:p-[2vw] ml-[5vw] mt-[5vw]  font-rubik-mono">
        Real-time chat application - sample
      </h4>
        
   
        <div className="flex xl:flex-row flex-col items-center justify-center w-[90vw] text-white pb-[5vh]">
           
            
            <p className="xl:w-[50vw] w-[90vw] pt-[2vw] p-[5vw] pb-0 ">
                This is a chat application similar to Whatsapp or Telegram.

        
                <br/>
                The backend uses Java Spring Boot, and the frontend is written using React Typescript. 
                <br/>
                The communication with the backend uses a combination of REST endpoints and SockJS. 
                <br/>
                Users and assiociated conversations are stored in a Mongo database.
                <br/><br/>
           
                <AnimatedButton  text="Visit GitHub repository" width={200} height={40} href="https://github.com/sergiusergiu1234/chat-12" onClick={()=>{}}/>
                <br/><br/>
                 While the project has achieved its intednded purpose, there are plans to
                incorporate new features and improvements in the future.
            </p>
            <video className="xl:w-1/2 w-[85vw] ml-[5vw] mt-[5vw]" src={"./chat-showcase.mp4"}  controls autoPlay />

            </div>
               
            
    
        
    </motion.div>)

}

export default ProjectSection2;