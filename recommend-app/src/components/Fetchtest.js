import React from "react";

class myComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemsAlts: [],
    };
  }
  componentDidMount() {
    const apiUrl = "http://127.0.0.1:8000/products/";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          items: data,
        });
        console.log(this.state.items);
      });
    //then((response) =>response.json()).then((data) => this.setState({items: data}));
  }

  searchItems = ({ items }) => {
    const apiURL = `http://127.0.0.1:8000/products/search?item_id=${items.id}`;
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          itemsAlts: data,
        });
      });
  };

  addToCart = ({ itemsAlts }) => {
    const apiURL2 = `http://127.0.0.1:8000/update_item`;
    fetch(apiURL2, {
      method: "POST",
      body: {
        productID: itemsAlts.id,
        action: "add",
        customer: "bob",
        product: itemsAlts,
      },
    });
    console.log("attempted to add to cart");
  };

  render() {
    return (
      <div className="container">
        <div className="shop">
          <h1>Items</h1>
          <p>Click an item so we can rECOmmend you an alternative!</p>
          {this.state.items.map((items) => (
            <div>
              <button
                className="fetch-button"
                onClick={() => {
                  this.searchItems({ items });
                }}
              >
                {items.id}. {items.name}
              </button>
            </div>
          ))}
        </div>
        <div className="shop">
          <h1>Alternatives</h1>
          {this.state.itemsAlts.map((itemsAlts) => (
            <div>
              <h3>{itemsAlts.name}</h3>
              {itemsAlts.description}
              <br /> Stock: {itemsAlts.stock} Price: £{itemsAlts.price}
              <br />
              <button
                className="fetch-button"
                onClick={() => {
                  this.addToCart({ itemsAlts });
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default myComponent;
