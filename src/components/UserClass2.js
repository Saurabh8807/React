import React from "react";
import Shimmer from "./Shimmer";
class UserClass extends React.Component {
  constructor(props) {
    console.log("i am in constructor");
    super(props);
    console.log(props);

    this.state = {
      name2: "Saurabh",
      city: "Mumbai",
      age: 25,
      userInfo:null
    };
  }

  async componentDidMount() {
    console.log("i am in componentDidMount");

    const data = await fetch("https://api.github.com/users/Saurabh8807");
    const json = await data.json();

    this.setState({userInfo:json})
  }
  componentDidUpdate(){
    console.log("i am in componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("i am in componentWillUnmount");
  }
  
  render() {
    console.log("i am in render");
    if (this.state.userInfo == null) {
      return <Shimmer />;
    }
    
    const { name2, city, age } = this.state;
    
    const { name, login, avatar_url } = this?.state?.userInfo;
    // console.log(this.state.userInfo);
    const { info } = this.props;
    
    
    
    // debugger;
    return (
      <div className="userCard">
        {/* <h1>{info.name}</h1> */}

        <h1>User</h1>
        <img src={avatar_url} />
        <h3>Name :{name}</h3>
        <h3>Login :{login}</h3>
        <h3>Age :{age}</h3>
        <button
          onClick={() => {
            this.setState({ age: this.state.age + 1 });
          }}
        >
          increase age
        </button>
      </div>
    );
  }
}

export default UserClass;
