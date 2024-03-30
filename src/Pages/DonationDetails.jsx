import { getItem } from "localforage";
import { useLoaderData, useParams } from "react-router-dom";
import { saveItem } from "../Utilities/Storage";


const DonationDetails = () => {
    const donation = useLoaderData();
    const {id} = useParams();
    const donate = donation.find(item=> item.id === parseInt(id));

    const handleDonate = (donate)=>{
       saveItem(donate);
    }
   
    return (
        <div className="max-w-7xl mx-auto rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        <img data-aos="zoom-out" data-aos-duration="1000" src={donate.picture} alt="" className="object-cover object-center w-full rounded-t-md h-[500px] dark:bg-gray-500" />
        <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
                <h2 data-aos="fade-down-left" data-aos-duration="1100" data-aos-delay="50" className="text-3xl font-semibold tracking-wide">{donate.title}</h2>
                <p data-aos="fade-right" data-aos-duration="500" className="dark:text-gray-800">{donate.description}</p>
            </div>
            <div>
            <button onClick={()=>handleDonate(donate)} style={{backgroundColor: donate.text_button_bg}} type="button" className=" btn   p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Donate ${donate.price}</button>
            </div>
         
        </div>
    </div>
    );
};

export default DonationDetails;