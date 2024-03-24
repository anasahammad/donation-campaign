
import { useEffect, useState } from "react";
import { getDonate } from "../Utilities/Storage";
import Donations from "../Components/Donations";


const Donation = () => {
const [donation, setDonation] = useState([])
const [showAll, setShowAll] = useState(false);

const handleToggle = ()=>{
    setShowAll(!showAll)
}

useEffect(()=>{
    const storeDonate = getDonate();
    setDonation(storeDonate)
    
}, [])


   
    return (
<>
<div className="grid gap-6 max-w-7xl mx-auto grid-cols-2">
        {
            donation.slice(0, showAll ? donation.length : 4).map(item=> <Donations key={item.id} item={item}></Donations>)
        }
        
</div>

       {
        donation.length > 4 ? (<div className="text-center mt-6">
        <button onClick={handleToggle} className="btn btn-secondary">
            {!showAll ? "Show All" : "Show Less"}
        </button>
    </div> ): null
       }

       </>
    );
};

export default Donation;