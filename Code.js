namechange = () => {
    const newname = this.state.name === "DarKchocolate"
        ? "WhiteChocolate" : "DarKchocolate";
    const newprice = this.state.price === "Dark chocolate" ? "$5" : "$10";
    const newtoppings = this.state.price === "Dark chocolate" ? "No" : "Fruit and nut";
    this.setState({ name: newname, price: newprice, toppings: newtoppings });

}

<h1>Details{this.state.name}</h1>,
    <p>Price: {this.state.price}</p>,
    <p>Toppings: {this.state.toppings} toppings</p>,
    <p>im from {this.state.brand}</p>

export default chocolate;
