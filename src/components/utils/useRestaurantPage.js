import { useEffect,useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantPage=(resId)=>{

    const [resInfo, setresInfo] = useState(null);

    useEffect(()=>{
        fetchMenu()
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL+resId);
        const json = await data.json();

        setresInfo(json.data)

    }

    return resInfo;
    

}

export default useRestaurantPage;