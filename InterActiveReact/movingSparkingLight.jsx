import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [x, setX] = useState(-20);
  const [y, setY] = useState(-20);
  const [siz, setSiz] = useState(100);
  useEffect(() => {
    let aniFrame;
    const motion = () => {
      setX((a) => (a >= 120 ? (a = 0) : (a += 0.1)));
      setY((a) => (a >= 120 ? (a = 0) : (a += 0.1)));
      setSiz((a) => (a >= 700 ? (a = 100) : (a += 2)));
      aniFrame = requestAnimationFrame(motion);
    };
    motion();

    return () => cancelAnimationFrame(motion);
  }, []);
  return (
    <>
      <section
        className="duration-300 ease-linear
        h-[100vh] "
        style={{
          backgroundImage: `radial-gradient(circle ${siz}px at ${x}% ${y}%,white,red)`,
        }}
      >
        hi
      </section>
    </>
  );
}
