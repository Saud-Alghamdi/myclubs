import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import contactUsBg from "../../assets/contactus-bg.jpg";
import ContactUsForm from "./ContactUsForm";

export default function ContactUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="fading-in relative from-transparent to-black px-5 py-16 text-gray-200 md:py-24 min-h-screen">
      <img
        className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[0.3]"
        src={contactUsBg}
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
        Contact us:
      </motion.h1>
      {/* Subheader */}
      <motion.h3
        className="text-md mt-10 text-center"
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        Need help or have suggestions? Drop us a line.
      </motion.h3>
      {/* Form */}
      <ContactUsForm />
    </section>
  );
}
