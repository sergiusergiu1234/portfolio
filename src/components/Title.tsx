import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";


interface TitleInterface {
    text: string
}

const Title:React.FC<TitleInterface> = ({text}) =>{

    const titleRef = useRef(null);
    
    const isInView = useInView(titleRef, {once:true});

    const controls= useAnimation();

    useEffect(()=>{
        if(isInView){
            controls.start('visible');
        }
    },[isInView])






    return <section className="flex flex-row items-center justify-center" ref={titleRef}>
        <motion.h2
          className="text-teal-500 text-4xl font-extrabold overflowy-x-hidden "
          animate={controls}
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
              
            },
            visible: {
              opacity: 1,
             
              
            },
          }}
          transition={{ delay: 0.5 , duration: 3}}
        >
          {text}
        </motion.h2>
    </section>
}

export default Title;