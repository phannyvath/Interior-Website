"use client";

import React from "react";
// import { motion } from "framer-motion";

// // Hooks
// import useScrollProgress from "../hooks/useScrollProgress";

// // Variants
// const variants = {
//   hidden: { opacity: 0 },
//   enter: { opacity: 1 },
// };

const Template = ({ children }) => {
  // const completion = useScrollProgress();

  // console.log("Scroll completion:", completion); // Debugging log

  return (
    <>
      {/* <h1>hello</h1>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      > */}
      {children}
      {/* </motion.main>
      <span
        style={{ transform: `translateY(${completion}%)` }} // Adjusted transform
        className="fixed z-50 bg-primary w-2 top-0 right-0 bottom-0 transition-all duration-700"
      ></span> */}
    </>
  );
};

export default Template;
