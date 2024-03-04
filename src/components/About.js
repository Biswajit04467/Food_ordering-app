import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext2 from "./utils/context/UserContext2";
class About extends React.Component {
    constructor(props) {
        super(props)

        // console.log("Parent constructor() ---> called")
    }

    componentDidMount(){
        // console.log("parent component did mount")
    }
    render() {
        // console.log("Parent render() ---> called");
        return (
            <div className="about">
                <h1>This is about section</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, blanditiis? Amet provident alias sunt velit ex libero voluptas, sit aliquam.</p>
                
                  <UserContext2.Consumer>
                    {(data)=>{console.log(data)}}
                  </UserContext2.Consumer>
                <UserClass name={"Biswajit(class-based)"} />
                {/* <User name={"Biswajit(functional)"}/> */}
                
            </div>

        );

    }

}


export default About;