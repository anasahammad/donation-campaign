import { Link } from "react-router-dom";


const Card = ({data}) => {
   const {picture, title, text_button_bg, category, card_bg, id} = data;

   const handleBtn = (data)=>{
       
   }
    return (
        <div style={{backgroundColor: card_bg}} className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        <img src={picture} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
        <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">

            <Link to={`/donation-details/${id}`}>
            
            <button onClick={()=> handleBtn(data)}  style={{backgroundColor: text_button_bg}} type="button" className={`flex btn text-white  p-3 font-semibold tracking-wide rounded-md `}>{category}</button>
            </Link>
           
                <h2 className="text-2xl font-semibold tracking-wide">{title}</h2>
             
            </div>
            
        </div>
    </div>
    );
};

export default Card;