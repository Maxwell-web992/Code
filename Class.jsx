import React from "react";
import ReactDom from "react-dom";

class Student extends React.Component {
    render(){
        <h2>Hi am Maxwell</h2>
    }
}

ReactDOM.render(<Student/>, document.getElementById("root"));
import React from "react";  import ReactDOM from "react-dom";

class Student extends React.Component {
    render(){
        return <h2>Hi am Maxwell</h2>
    }
}

ReactDom.render(<Student/>, document.getElementById("root"));
