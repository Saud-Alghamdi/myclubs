import { motion } from "framer-motion";

export default function LinkedinLogo() {
  return (
    <motion.a
      href="#!"
      type="button"
      className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white  hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      data-te-ripple-init=""
      data-te-ripple-color="light"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileFocus={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto h-full w-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    </motion.a>
  );
}
