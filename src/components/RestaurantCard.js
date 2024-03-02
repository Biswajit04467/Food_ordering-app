import { CDN_URL } from "./utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, costForTwo, avgRating } = resData.info;
    const { slaString } = resData.info.sla;

    return (
        <div className="res-card w-[15rem] m-2 h-[24rem] cursor-pointer text-center rounded-xl
        bg-gray-0 shadow-xl
        
        backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">

            <img className="h-[15rem] m-auto  mb-5 p-2 rounded-xl" src={CDN_URL + cloudinaryImageId
            } />


            <h3>{name}</h3>
            <h4>{costForTwo}</h4>
            <h4>Ratings- {avgRating}★ </h4>
            <h4>{slaString}</h4>
        </div>
    );
}

export const withOpenLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>

                <label>Open</label>
                <RestaurantCard {...props}/>
            </div>


        )
    }
}

export default RestaurantCard;