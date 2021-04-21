import React from "react";

class myComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
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
  render() {
    return (
      <div className="col">
        <h1>Items</h1>
        {this.state.items.map((items) => (
          <div>{items.name}</div>
        ))}
      </div>
    );
  }
}
export default myComponent;
