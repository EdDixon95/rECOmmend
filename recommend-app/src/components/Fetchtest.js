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

  render() {
    return (
      <div className="col">
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
        <h1>Alternatives</h1>
        {this.state.itemsAlts.map((itemsAlts) => (
          <div>
            <h5>{itemsAlts.name}</h5>
            {itemsAlts.description}
            <br /> Stock: {itemsAlts.stock} Price: {itemsAlts.price}{" "}
          </div>
        ))}
      </div>
    );
  }
}
export default myComponent;
