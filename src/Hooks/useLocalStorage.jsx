import { getItem } from "localforage";
import { useEffect, useState } from "react";


const useLocalStorage = () => {
    const [localData, setLocalData] = useState([]);

    useEffect(()=>{
  setLocalData(getItem());
    },[])
    console.log(localData);
    return {localData};
};

export default useLocalStorage;