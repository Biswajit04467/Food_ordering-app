import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext2 from "./utils/context/UserContext2";
import { useSelector } from "react-redux";

const Header = () => {
    let btnName = "login";

    const { loggedInUser, setUsername } = useContext(UserContext2);
    const [newBtn, setnewBtn] = useState(["login"]);
    const onlineStatus = useOnlineStatus();

    // Subscribing to the store using a selector 
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems);


    return (
        <div className="flex justify-between  shadow-xl mb-3
        backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">

            <div className="logo-container  ">
                <img className="w-28  " src={LOGO_URL} alt="logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex ">
                    <li className="px-3">online status:{onlineStatus === true ? "🟢" : "🔴"}</li>
                    <li className="px-3"><Link to="/grocery">Instamart</Link></li>
                    <li className="px-3"><Link to="/">Home</Link></li>
                    <li className="px-3"><Link to="/about" >About Us</Link></li>
                    <li className="px-3"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-3 font-bold"><Link to="/cart">Cart-({cartItems.length} items)</Link></li>
                    <button onClick={() => {
                        newBtn === "login" ? setnewBtn("logout") : setnewBtn("login");
                    }} className="px-3">{newBtn}</button>
                    <li className="px-3">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;