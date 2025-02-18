import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useEffect } from "react";

export default function App() {
  const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% 
  at 50% 0%,#020617 50%,${color})`;
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror", //final to ini back
    });
  }, []);

  return (
    <>
      <motion.section
        style={{
          backgroundImage,
        }}
        className="
        relative grid min-h-screen  place-content-center 
        overflow-hidden bg-gray-950 px-4
        py-24 text-gray-200 "
      >
        hi
      </motion.section>
    </>
  );
}
