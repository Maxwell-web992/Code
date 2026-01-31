import React from 'react';

class Customer extends React.Component {

  render() {

    return <h2>I am from {this.props.city}!</h2>;

  }

}

class Details extends React.Component {

  render() {

    return (

      <div>

        <h1>Hello</h1>

        <Customer city="Chennai" />

      </div>

    );

  }

}

export default Details;