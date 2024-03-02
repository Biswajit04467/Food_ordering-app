import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo:{
                name:"dummy",
                location:"dummy",
                avatar_url:"",
            }
        }

        // console.log("child constructor() ---> called");

    }


    async componentDidMount(){
        // console.log("child component did mount")""
        const data= await fetch("https://api.github.com/users/biswajit04467");
        const json=await data.json();
        

        this.setState({
            userInfo:json
        })

       
    }

    componentDidUpdate(){
    //    this.timer=setInterval(()=>{
    //         console.log("I am Biswa")
    //     },1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    
    render() {
        // console.log("child render() ---> called");
        const {name,location,avatar_url}=this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url} alt="" />
                <h2>{name}</h2>
                <h3>{location}</h3>
                <h4>Conatct: @biswajit04467</h4>

            </div>
        )
    }
}

export default UserClass;