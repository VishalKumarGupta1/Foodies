import React from "react";
import "./Testimonial.css";
import { motion } from "framer-motion";
import { slideup } from "./Hero";
import Bannerpng from "../assets/food/banner.png";
import leaf from "../assets/food/leaf.png";

const Testimonial = () => {
  return (
    <>
      <div className="container4">
        <div className="half right">
          <motion.p
            variants={slideup(1)}
            initial="hidden"
            whileInView="show"
            className="txt2"
          >
           "Foodies is my favorite go-to site! Their recipes are easy to follow, and I’ve discovered the best yummy food in town thanks to their amazing reviews. It truly brings the joy of food right to my kitchen!"
          </motion.p>
          <motion.div
            variants={slideup(1.3)}
            initial="hidden"
            whileInView="show"
          >
            <div className="profile-card">
             <img  className="logo" src={leaf} alt="" />
              <motion.div
               variants={slideup(1.6)}
               initial="hidden"
               whileInView="show"
              >
                <h2>John Cena</h2>
                <p>Designation</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* image section */}
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
      </div>
    </>
  );
};

export default Testimonial;
