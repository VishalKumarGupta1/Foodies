import React from "react";
import logo from "../assets/food/logo.png";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
  const navmenu = [
    { id: 1, title: "Home", path: "/", delay: 0.1 },
    { id: 2, title: "About", path: "/about", delay: 0.2 },
    { id: 3, title: "Menu", path: "/menu", delay: 0.3 },
    { id: 4, title: "Delivery", path: "/delivery", delay: 0.4 },
    { id: 5, title: "Contact Us", path: "/contact", delay: 0.5 },
  ];

  const slideDown = (delay) => {
    return {
      initial: { opacity: 0, y: "-300%" },
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: delay }, // default duration 0.4s
      },
    };
  };

  return (
    <nav>
      <div className="main">
        {/* logo section */}
        <div className="logobox">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            src={logo}
            alt="logo"
            className="logo"
          />
        </div>

        {/* menu section  */}
        <div>
          <ul className="menu-ul">
            {navmenu.map((menu) => (
              <motion.li
                variants={slideDown(menu.delay)}
                initial="initial"
                animate="animate"
                key={menu.id}
                className="menu-li    "
                data-delay={menu.delay}
              >
                <Link to={menu.path} className="menu-link">
                  {menu.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* button section */}
        <motion.div
          variants={slideDown(0.9)}
          initial="initial"
          animate="animate"
        >
          <button className="cart">
            <IoCartOutline />
          </button>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
