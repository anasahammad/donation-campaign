
import { useEffect, useState } from "react";
import { getDonate } from "../Utilities/Storage";
import Donations from "../Components/Donations";


const Donation = () => {
const [donation, setDonation] = useState([])

useEffect(()=>{
    const storeDonate = getDonate();
    setDonation(storeDonate)
    console.log(storeDonate);
}, [])


   
    return (
<>
<div className="grid gap-6 max-w-7xl mx-auto grid-cols-2">
        {
            donation.map(item=> <Donations key={item.id} item={item}></Donations>)
        }
        
</div>

       

       </>
    );
};

export default Donation;