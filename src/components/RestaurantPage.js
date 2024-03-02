import Shimmer from './Shimmer';
import { CDN_URL } from './utils/constants';
import { useParams } from 'react-router-dom';
import useRestaurantPage from './utils/useRestaurantPage';
import RestaurantCategory from './RestaurantCategory';

const RestaurantPage = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantPage(resId);   //custom hook


    if (resInfo === null) {
        return <Shimmer />
    }

    const { name } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info;

    const resName = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;


    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.["@type"]);


    const categorize = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => (
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ));

    console.log(categorize)



    return (

        <div className="menu text-center ">
            <h1 className="font-bold text-2xl">{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
            <h2 className='font-bold text-lg'>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")}</h2>
            <h3>{resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage
            }</h3>

            {
                categorize.map((category)=>(
                    <RestaurantCategory key={category.card.card.title} data={category.card.card}/>
                ))
            }
            
        </div>
    )
}

export default RestaurantPage