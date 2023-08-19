import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ContactUsForm() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorState, setErrorState] = useState({
    name: false,
    email: false,
    message: false,
  });

  const validateField = (name: string, value: string) => {
    let error = false;

    switch (name) {
      case "name":
        error = value === "";
        break;
      case "email":
        error = !/\S+@\S+\.\S+/.test(value);
        break;
      case "message":
        error = value === "";
        break;
      default:
        break;
    }

    setErrorState((prevState) => ({
      ...prevState,
      [name]: error,
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });

    validateField(name, value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = {
      name: formState.name === "",
      email: !/\S+@\S+\.\S+/.test(formState.email),
      message:
        formState.message === "" || !/^[a-zA-Z\s]*$/.test(formState.message),
    };

    setErrorState(errors);
    if (!Object.values(errors).some((error) => error)) {
      console.log("Form is valid");
      // handle form submission here
    }
  };

  return (
    <motion.form
      className="md:text-md mx-auto mt-10 max-w-[500px] space-y-6 rounded-2xl bg-slate-300 px-5 py-8 text-sm md:mt-16 md:space-y-8"
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name" className="mb-2 block font-medium text-gray-600">
          Name:
        </label>
        <input
          type="name"
          name="name"
          id="name"
          className="w-full rounded-lg border-2 p-2.5 text-neutral-900 outline-none outline focus:border-blue-500 focus:ring-blue-500"
          placeholder="Your name"
          onChange={handleInputChange}
          value={formState.name}
        />
        {errorState.name && (
          <small className="font-bold text-red-400">* Name is required</small>
        )}
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block font-medium text-gray-600">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full rounded-lg border-2 p-2.5 text-neutral-900 outline-none outline focus:border-blue-500 focus:ring-blue-500"
          placeholder="name@company.com"
          onChange={handleInputChange}
          value={formState.email}
        />
        {errorState.email && (
          <small className="font-bold text-red-400">* Email is not valid</small>
        )}
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-medium text-gray-600"
        >
          Message:
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          className="w-full rounded-lg border-2 p-2.5 text-neutral-900 outline-none outline focus:border-blue-500 focus:ring-blue-500"
          placeholder="Write your message here..."
          onChange={handleInputChange}
          value={formState.message}
        ></textarea>
        {errorState.message && (
          <small className="font-bold text-red-400">
            * Message should contain only letters
          </small>
        )}
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-700 px-5 py-3 text-center  font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </motion.form>
  );
}
