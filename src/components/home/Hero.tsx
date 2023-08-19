import { motion } from "framer-motion";
import heroBg from "../../assets/hero-bg.jpg";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="background-radial-gradient fading-out relative h-screen overflow-hidden bg-center text-gray-200">
      <img
        className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[0.4]"
        src={heroBg}
        alt=""
      />
      <div className="mx-auto mt-32 w-10/12 sm:max-w-[500px] lg:max-w-[700px]">
        <motion.h1
          className="text-4xl font-bold lg:text-6xl"
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Stay Connected <br /> To Your Favorite Clubs!
        </motion.h1>
        <motion.p
          className="mt-8 lg:mt-10 lg:text-lg"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          We let you customize your football experience to match your
          preferences. Choose your favorite clubs and receive tailored updates,
          match schedules, and results just for you. Say goodbye to endless
          searching and hello to personalized football updates.
        </motion.p>
        <motion.a
          href="#"
          className="mt-3 block w-fit rounded-lg bg-blue-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Start Now!
        </motion.a>
      </div>
    </section>
  );
}