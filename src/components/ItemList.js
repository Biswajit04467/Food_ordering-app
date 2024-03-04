import { CDN_URL } from "./utils/constants";

const ItemList = ({ items }) => {
    return (
        <div>
            {
                items.map((item) => (

                    <div key={item.card.info.id} className=" border-gray-400 border-b-2 my-5 text-left flex justify-between">

                        <div className="9/12">
                            <div className="py-4">
                                <span>{item.card.info.name}</span>
                                <span> - ₹{item.card.info.price / 100}</span>
                            </div>
                            <div className="text-xs">
                                <p>{item.card.info.description}</p>
                            </div>
                        </div>

                        <div className="w-3/12  h-32 flex justify-center" >
                            <div className="absolute">
                                <button className="px-2 bg-black text-white">Add+</button>
                            </div>

                            {
                                item?.card?.info?.imageId !== undefined ? (<img className=" rounded-lg max-w-[60%] max-h-[79%] " src={CDN_URL + item.card.info.imageId} alt="item image" />) : null
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList;