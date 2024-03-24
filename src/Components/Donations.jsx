import { Link } from "react-router-dom";
import { deleteItem, getDonate } from "../Utilities/Storage";
import { useState } from "react";


const Donations = ({item}) => {

    const {picture, price, title, text_button_bg, category, card_bg, id} = item;

    
    return (
        <div style={{backgroundColor: card_bg}} className="card lg:card-side  shadow-xl relative">
  <figure><img src={picture} alt="Album"/></figure>
  <div className="card-body">
  <div className="card-actions">
      <button style={{backgroundColor:text_button_bg }} className="btn text-white">{category}</button>
    </div>
    <h2 className="card-title">{title}</h2>
    <p style={{color:text_button_bg}} className="text-xl font-bold">${price}</p>

    <div className="card-actions">
        <Link to={`/donation-details/${id}`}> 
        
        <button style={{backgroundColor:text_button_bg }} className="btn text-white">View Details</button>
        </Link>
     
    </div>
   
  </div>

  
</div>
    );
};

export default Donations;