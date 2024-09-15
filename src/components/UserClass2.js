import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("i am in constructor");
    super(props);
    console.log(props);

    this.state = {
      name: "Saurabh",
      city: "Mumbai",
      age: 25,
    };
  }

  componentDidMount() {
    console.log("i am in componentDidMount");
  }
  render() {
    console.log("i am in render");

    const { name, city, age } = this.state;

    const { info } = this.props;

    return (
      <div className="userCard">
        <h1>{info.name}</h1>

        <h1>User</h1>
        <h3>Name :{name}</h3>
        <h3>City :{city}</h3>
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
