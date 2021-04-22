import React from 'react';
import { myComponent } from "./Fetchtest.js";

export default function Cart(props) {
  const { itemsAltsName} = props;

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        
      </div>
    </aside>
  );
}

//const itemsAlts.price = itemsAlts.name.reduce((a, c) => a + c.qty * c.price, 0);
//const totalPrice = itemsAlts.price