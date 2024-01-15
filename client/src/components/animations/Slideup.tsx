import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

type TSlideUpProps = {
  children: React.ReactNode;
  duration: number;
};

const Slideup = ({ children, duration = 0.5 }: TSlideUpProps) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(divRef);
  const mainControl = useAnimation();

  const variants = {
    hidden: {
      y: 200,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: duration,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      mainControl.start("animate");
    }
  }, [isInView, mainControl]);

  return (
    <motion.div
      ref={divRef}
      variants={variants}
      initial="hidden"
      animate={mainControl}
      className="z-50"
    >
      {children}
    </motion.div>
  );
};
export default Slideup;
