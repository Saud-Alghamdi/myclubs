import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import contactUsBg from "../../assets/contactus-bg.jpg";

export default function ContactUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="fading-in relative from-transparent to-black px-5 py-16 text-gray-200 md:py-24">
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
      <motion.form
        className="md:text-md mx-auto mt-10 max-w-[500px] space-y-6 rounded-lg bg-slate-300 px-5 py-8 text-sm md:mt-16 md:space-y-8"
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div>
          <label
            htmlFor="name"
            className="mb-2 block  font-medium text-gray-600"
          >
            Name:
          </label>
          <input
            type="name"
            name="name"
            id="name"
            className="w-full rounded-lg border-2 p-2.5 text-neutral-900 outline-none outline focus:border-blue-500 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block  font-medium text-gray-600"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full rounded-lg border-2 p-2.5 text-neutral-900 outline-none outline focus:border-blue-500 focus:ring-blue-500"
            placeholder="name@company.com"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="mb-2 block  font-medium text-gray-600"
          >
            Message:
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full rounded-lg border-2 p-2.5 text-neutral-900 outline-none outline focus:border-blue-500 focus:ring-blue-500"
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-3 text-center  font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </motion.form>
    </section>
  );
}
