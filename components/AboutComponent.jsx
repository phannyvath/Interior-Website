"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { desVariants } from "../utils/animation";

const AboutComponent = () => {
  return (
    <div className=" container py-12 xl:py-24 h-[auto]">
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={desVariants}
        className=" grid lg:grid-cols-2 place-items-center"
      >
        <div>
          <Image
            src="/image/aboutfront.png"
            width={900}
            height={500}
            alt="About"
            // className=" max-md:hidden"
          />
        </div>
        <div className=" items-center">
          <h2 className=" px-12 py-4 text-3xl font-extrabold">
            We are award Winning Company
          </h2>
          <p className=" px-12 tracking-wider uppercase text-orange-300 mt-3">
            World Award
          </p>
          <p className=" px-12 pb-4 mt-4">
            Interior design companies have a unique ability to transform
            ordinary spaces into extraordinary environments. Their expertise in
            blending aesthetics with functionality ensures that each project not
            only looks stunning but also serves the practical needs of its
            occupants.
          </p>
          <p className=" px-12 pb-4 mt-4">
            Their commitment to quality craftsmanship and innovative solutions
            makes them invaluable partners in creating homes and workplaces that
            inspire comfort, creativity, and joy.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutComponent;
