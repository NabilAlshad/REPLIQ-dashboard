import React from "react";
import Image from "next/image";
import Styles from './card.module.css';



export const Card = ({ image, title, price, rating, category }) => {
  return (
    <div className="flex flex-col items-center w-[30%] mb-10 h-auto border-2 border-white shadow shadow-slate-400 hover:shadow-2xl hover:bg-slate-400">
      <div className={Styles.imgContainer}>
      <Image src={image} layout="fill" className={Styles.img} alt="products" />
      </div>
      
      {/* card container  */}
      <div className="w[100%] flex flex-col items-center my-6 h-auto p-3">
        <h5 className="text-xl text-gray-600 mb-6 text-center">{title}</h5>
        <h4 className="text-lg text-white bg-gray-600 rounded-xl p-2">
          Category - {category}</h4>
        <div className="flex flex-col justify-around items-center my-3">
        <p className="text-lg text-white rounded-lg p-2  bg-gray-800 text-center w-[19rem]">Price:{price}$ </p>
        <p className="text-lg w-[19rem] text-center rounded-lg p-1.5 text-gray-800 bg-yellow-400 ">Rating: {rating.rate}*</p>
        </div>
        <p className="text-md w-[19rem] bg-orange-400 text-slate-100 p-3 text-center" >Total{rating.count}</p>
        
      </div>
    </div>
  );
};
