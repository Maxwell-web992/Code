import React  from "react";

class MyStyling extends React.Component {
  render() {
    const myheaderstyle = {
      color: "blue",
      backgroundColor: "SeaGreen",
      fontfamily: "Arial",
      padding: "5px",

    };
  
    const mystyle = {
      color:"red",
    backgroundColor: "LemonChiffon",
      fontfamily: "Times New Roman  ",
      padding: "10px",
    };

    return (
      <div>
        <h1 style={myheaderstyle}>Hi!</h1>
         <p style={mystyle}>How are you?</p>
      </div>
    );
  }
}

export default MyStyling;