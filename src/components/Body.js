import { useEffect, useState, useOnlineStatus, useContext } from "react";
import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import resList from "./utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext2 from "./utils/context/UserContext2";


const Body = () => {

    const { loggedInUser, setUserName} = useContext(UserContext2);
    const ABC=useContext(UserContext2);
    console.log(ABC)

   


    const [newRestaurants, setnewRestaurants] = useState([]);
    const [copyRestaurants, setcopyRestaurants] = useState([]);
    const [searchText, setsearchText] = useState("");

    const RestaurantOpened = withOpenLabel(RestaurantCard);   //Higher-order component


    useEffect(() => {
        fetchData()
    }, [])

    const onlineStatus = useOnlineStatus();  //custom hook




    const fetchData = async () => {

        
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4256613&lng=87.3198819&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        // console.log(json)
        setnewRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setcopyRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        

    }



    if (onlineStatus == false)
        return (
            <h1>You are offline ! Check your internet connection </h1>
        );



    return copyRestaurants && copyRestaurants.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter flex items-center">

                <div className="search m-5">
                    <input type="text" className="search-box border-solid border-black border-2" value={searchText} onChange={(e) => {
                        setsearchText(e.target.value);
                    }}
                    />

                    <button className="px-3 py-1 ml-3  bg-green-500 rounded-lg" onClick={() => {
                        console.log(searchText)
                        const filteredRestaurants = newRestaurants.filter((res) => (res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        ));

                        setcopyRestaurants(filteredRestaurants);
                    }}>search</button>
                </div>

                {/* <div className="">
                    <button className="filter-btn px-3 py-1 ml-3  bg-gray-300" onClick={() => {
                        const newList = newRestaurants.filter((res) => (
                            res.info.avgRating >= 4
                        )
                        );
                        setcopyRestaurants(newList);
                    }}>Top Rated Restaurants </button>
                </div> */}

                <div className="inputBox">
                    <label>UserName</label>
                    <input
                        className="border border-black"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
            </div>
            <div className="res-container flex flex-wrap justify-center">
                {/* RestaurantCard */}
                {

                    copyRestaurants.map((restuarant) => (

                        <Link to={"/restaurants/" + restuarant.info.id} key={restuarant.info.id}>

                            {
                                restuarant.info.isOpen ? (<RestaurantOpened resData={restuarant} />) : (<RestaurantCard resData={restuarant} />)
                            }


                            {/* <RestaurantOpened resData={restuarant} /> */}


                        </Link>
                    ))

                }
            </div>
        </div>


    )
}

export default Body;