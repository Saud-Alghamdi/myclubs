import { motion } from "framer-motion";

export default function GmailLogo() {
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
        <path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z"></path>
      </svg>
    </motion.a>
  );
}
