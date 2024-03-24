import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Card from "../Components/Card";


const Home = () => {
    const allData = useLoaderData();
  
    return (
        <div className="max-w-7xl mx-auto">
           <Banner></Banner>
           <div className="grid grid-cols-4 gap-6 mt-20">
           {
            allData.map(data=> <Card key={data.id} data={data}></Card>)
           }
           </div>
          
           
        </div>
    );
};

export default Home;