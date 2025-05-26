import React from "react";
import "./Footer.css";
import logo from "../assets/food/logo.png";
import { slideup } from "./Hero";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <motion.div
            variants={slideup(0.3)}
            initial="hidden"
            whileInView="show"
            className="footer-column"
          >
            <img className="footer-logo" src={logo} alt="" />
            <p className="footer-description">
              Taste the world on one plate. Explore, savor, and share your food
              journey with us.
            </p>
            <div className="footer-socials">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">YouTube</a>
            </div>
          </motion.div>

          <motion.div
            variants={slideup(0.6)}
            initial="hidden"
            whileInView="show"
            className="footer-column"
          >
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Recipes</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={slideup(0.9)}
            initial="hidden"
            whileInView="show"
            className="footer-column"
          >
            <h3>Subscribe</h3>
            <form className="footer-form">
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
            </form>
          </motion.div>
        </div>
        <motion.p 
        variants={slideup(1.2)}
        initial="hidden"
        whileInView="show"
        className="footer-bottom">
          © {new Date().getFullYear()} Foodies' Hub. All rights reserved.
        </motion.p>
      </footer>
    </>
  );
};

export default Footer;
