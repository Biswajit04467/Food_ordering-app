import { useEffect, useState } from "react";

const User = (props) => {

    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         console.log("Hey folks")
    //     }, 1000)



    //     return () => {
    //         clearInterval(timer)
    //     }
    // }, []);

    return (
        <div className="user-card">
            <h2>{props.name}</h2>
           
            <h3>Location: Midnapore</h3>
            <h4>Conatct: @biswajit04467</h4>

            <button onClick={()=>{
                setCount(count+1)
            }}>count:{count}</button>
        </div>
    );

};

export default User;