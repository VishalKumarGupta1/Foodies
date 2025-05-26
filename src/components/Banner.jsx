import React from "react";
import "./Banner.css";
import { motion } from "framer-motion";
import Bannerpng from "../assets/food/banner.png";
import { slideup } from "./Hero";
import { IoCartOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <>
      <div className="container2">
        <div className="half left">
          <motion.img
            initial={{ opacity: 0, x: -100, y: 100 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            whileHover={{ scale: 1.2, rotate: 15, x: 50, y: -50 }}
            transition={{ duration: 0.8, delay: 0.5, scale: { duration: 0.5 } }}
            className="image1"
            src={Bannerpng}
            alt="banner"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="circle"
          ></motion.div>
        </div>
        <div className="half right">
          <motion.h1
            variants={slideup(1)}
            initial="hidden"
            whileInView="show"
            className="txt1"
          >
            The Best yummy food <br />
            in the town
          </motion.h1>
          <motion.p
            variants={slideup(1.3)}
            initial="hidden"
            whileInView="show"
            className="txt2"
          >
            Foodies brings you the best yummy food in town—top recipes, local hotspots, and tasty tips every food lover craves!
          </motion.p>
          <motion.button
            variants={slideup(1.6)}
            initial="hidden"
            whileInView="show"
            className="btn"
          >
            <IoCartOutline />
            Order Now
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Banner;
