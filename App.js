import React from 'react';

class Customer extends React.Component {

  render() {

    return <h2>Hello am Maxwell, am 9 years old and from {this.props.city}!</h2>;

  }

}

class Details extends React.Component {

  render() {

    return (

      <div>

        <h1>Hi!</h1>

        <Customer city="America" />

      </div>

    );

  }

}

export default Details;