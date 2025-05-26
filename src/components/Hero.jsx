import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import foodPng from "../assets/food/food.png";
import Spoon from "../assets/food/spoon.png";
import banana from "../assets/food/banana2.png";
import leaf from "../assets/food/leaf.png";
import { IoCartOutline } from "react-icons/io5";

export const slideup = (delay) => {
  return {
    hidden: { opacity: 0, y: "100%" },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: delay }, // default duration 0.4s
    },
  };
};

const Hero = () => {
  return (
    <>
      <main className="box">
        <div className="grid">
          {/* text content here */}
          <div className="text">
            <motion.p
              variants={slideup(0.5)}
              initial="hidden"
              whileInView="show"
              className="yummy"
            >
              YUMMY <img src={leaf} alt="" />
            </motion.p>
            <motion.p
              variants={slideup(1)}
              initial="hidden"
              whileInView="show"
              className="Breakfast"
            >
              Breakfast
            </motion.p>

            <motion.p
              variants={slideup(1.5)}
              initial="hidden"
              whileInView="show"
              className="para"
            >
              Foodies is your go-to hub for delicious recipes, honest reviews, culinary tips, and global food trends that inspire every bite.

            </motion.p>
            <motion.button
              variants={slideup(2)}
              initial="hidden"
              whileInView="show"
              className="btn"
            >
              <IoCartOutline />
              Order Now
            </motion.button>
          </div>

          {/* image content here */}
          <div className="image">
            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              src={foodPng}
              alt="plate"
              className="plate"
            />
            <motion.img
              initial={{ opacity: 0, rotate: 120, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 85, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={Spoon}
              alt="spoon"
              className="spoon"
            />
            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 1 }}
              src={banana}
              alt="banana"
              className="banana"
            />
          </div>
        </div>
        {/* background yellow */}
        <motion.div
          initial={{ opacity: 0, rotate: 60, x: 200, y: 100 }}
          whileInView={{ opacity: 1, rotate: 45, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="yellow"
        ></motion.div>
      </main>
    </>
  );
};

export default Hero;
