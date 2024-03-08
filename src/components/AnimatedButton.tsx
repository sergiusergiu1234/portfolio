import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Button } from "react-scroll";

interface AnimatedButtonInterface {
  width: number;
  height: number;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string
}

const svgVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(0, 10, 72, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(0, 10, 72, 1)",
    duration: 1,
  },
};
const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const AnimatedButton: React.FC<AnimatedButtonInterface> = ({
  width,
  height,
  text,
  onClick,
  href
}: AnimatedButtonInterface) => {
  const buttonRef = useRef(null);
  const isButtonInView = useInView(buttonRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isButtonInView) {
      mainControls.start("visible");
    }
  }, [isButtonInView]);

  return (
    <a href={href}>
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      
    >
      <motion.svg
        ref={buttonRef}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        
      >
        <motion.path
          d={`M0 0 H${width} V${height} H0 Z`}
          variants={svgVariants}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 2,
            ease: "easeIn", delay: 0.2
          }}
          stroke="white"
          strokeWidth={3}
        />
        <motion.text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
          variants={textVariants}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 0.4,
            ease: "easeIn",
            delay: 1,
          }}
         
        >
         
          {text}
          
        </motion.text>
      </motion.svg>
    </motion.button>
    </a>
  );
};

export default AnimatedButton;
