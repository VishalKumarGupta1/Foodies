import React from 'react'
import "./Popular.css"
import { motion } from "framer-motion";
import food1 from "../assets/food/food.png";
import food2 from "../assets/food/food2-plate.png";
import food3 from "../assets/food/banner.png";
import { slideup } from "./Hero";


const populardessertdata = [
  {
    id: 1,
    name: "Hot Dessert",
    img: food1,
    price: "$5.99",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Hot Breakfast",
    img: food2,
    price: "$5.00",
    delay: 0.8,
  },
  {
    id: 3,
    name: "Hot Cake",
    img: food3,
    price: "$7.99",
    delay: 1.2,
  },
];


const Popularrecipe = () => {
  return (
    <>
       <section>
               <div className="container3">
                 <motion.h3
                 variants={slideup(0.5)}
                 initial="hidden"
                 whileInView="show"
                 className="head">Our Popular Recipe</motion.h3>
                 <div className="grid1">
                   {populardessertdata.map((item) => {
                     return (
                       <motion.div
                         key={item.id}
                         className="box3"
                       >
                         <img className="img2" src={item.img} alt="" />
                         <button className='buy'>Buy Now</button>
                         <div className="text2">
                           <h3 className="name">{item.name}</h3>
                           <p className="price">{item.price}</p>
                         </div>
                       </motion.div>
                     );
                   })}
                 </div>
               </div>
             </section>
    </>
  )
}

export default Popularrecipe
