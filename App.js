import React from "react";

import './index.css';
class MyForm extends React.Component {

  state = {

    result: 0

  };

  op1Ref = React.createRef();

  op2Ref = React.createRef();

  mysubmit = () => {

    const op1 = Number(this.op1Ref.current.value);

    const op2 = Number(this.op2Ref.current.value);

    this.setState({

      result: op1 * op2

    });

  };

  render() {

    return (

      <form>

        <div className="container">

          <h1>Multiply</h1>

          <div className="form-group">

            <label>Enter Operand 1</label>

            <input

              type="number"

              ref={this.op1Ref}

              placeholder="Enter Operand 1"

            />

          </div>

          <div className="form-group">

            <label>Enter Operand 2</label>

            <input

              type="number"

              ref={this.op2Ref}

              placeholder="Enter Operand 2"

            />

          </div>

          <p>Result: {this.state.result}</p>

          <button type="button" className="btn" onClick={this.mysubmit}>

            Multiply

          </button>

        </div>

      </form>

    );

  }

}
export default MyForm;