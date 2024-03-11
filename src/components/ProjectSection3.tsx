import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedButton from "./AnimatedButton";

const ProjectSection3 = () =>{
    const containerRef = useRef(null);
    const isInView = useInView(containerRef,{once:true})
    const controls = useAnimation();

    useEffect(()=>{
      if(isInView){
        controls.start('visible');
      }
    },[isInView])
  
  

    return ( <motion.div ref={containerRef} variants={{hidden:{opacity:0}, visible:{opacity:1}}} transition={{duration: 2, delay: 0.5}} initial='hidden' animate={controls} className="bg-[#2e2e2d] h-max font-rubik_mono_one_two">
      <h4 className="text-[#02e394] lg:text-2lg text-lg p-[5vw] lg:p-[2vw] ml-[5vw] mt-[5vw]  font-rubik-mono">
        Web scrapper
      </h4>

            
                <p className="text-white  pt-[2vw] p-[5vw] pb-0 ">
                    Web scraper designed to extract exhibitor data from <a className="whitespace-pre-wrap" href="https://ecommerceberlin.com/exhibitors">https://ecommerceberlin.com/exhibitors</a>
                   <br/><br/>
                    Loops through all exhibitor's pages and extracts their information and saves it to a database.
                    
                    <ul className="m-[1vw]">
                        <li>Next.js</li>
                        <li>Puppeteer - simulating user input and extracting data</li>
                        <li>Prisma - database management </li>
                        <li>Docker + docker-compose</li>
                    </ul>
                    <AnimatedButton  text="Visit GitHub repository" width={200} height={40} href="https://github.com/sergiusergiu1234/web-scrapper" />
                </p>
                
            
    </motion.div>)
}

export default ProjectSection3;