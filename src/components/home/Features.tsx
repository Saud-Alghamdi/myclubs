import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import featuresBg from "../../assets/features-bg.jpg";
import PersonalizedExperienceIcon from "../svg/PersonalizedExperienceIcon";
import LightningIcon from "../svg/LightningIcon";
import NotificationsIcon from "../svg/NotificationsIcon";

export default function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="fading-in fading-out relative  py-16 text-gray-200 md:py-24">
      <img
        className="absolute inset-0 -z-10 h-full w-full object-center brightness-[0.4]"
        src={featuresBg}
        alt=""
      />
      {/* Header */}
      <motion.h1
        className=" text-center text-3xl font-bold md:text-4xl lg:text-5xl"
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        Features:
      </motion.h1>
      {/* Grid */}
      <div className="mx-auto mt-12 grid  w-fit items-center justify-center justify-items-center gap-x-28 gap-y-10 md:mt-24 md:grid-cols-2 xl:grid-cols-3">
        {/* Grid item 1 */}
        <motion.div
          className="justif-center flex h-64 w-72 flex-col items-center gap-y-5 px-4 py-10 outline outline-blue-300"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h3>
            <PersonalizedExperienceIcon twStyles="h-8 fill-white" />
          </h3>
          <h3 className="font-bold">Personalized Experience</h3>
          <p>
            Select your favorite clubs and get schedules of their upcoming
            matches. No need to sift through matches that don’t interest you.
          </p>
        </motion.div>
        {/* Grid item 2 */}
        <motion.div
          className="justif-center flex h-64 w-72 flex-col items-center gap-y-5 px-4 py-10 outline outline-blue-300"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <LightningIcon twStyles="h-8 fill-white" />
          <h3 className="font-bold">Real-time</h3>
          <p>
            Stay updated with real-time scores, match statistics, and other
            related news.
          </p>
        </motion.div>
        {/* Grid item 3 - (Has an additional style "span")*/}
        <motion.div
          className="justif-center flex h-64 w-72 flex-col items-center gap-y-5 px-4 py-10 outline outline-blue-300 md:col-span-full xl:col-auto"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <NotificationsIcon twStyles="h-8 fill-white" />
          <h3 className="font-bold">Match Notifications</h3>
          <p>
            Never miss a match again. Get notified when your favorite club's
            matches are about to start.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
