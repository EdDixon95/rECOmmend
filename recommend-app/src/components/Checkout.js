import { useState } from "react";

const Checkout = () => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      !fullName ||
      !address ||
      !city ||
      !state ||
      !postalCode ||
      !phoneNumber
    ) {
      alert("Please fill out all fields");
      return;
    }

    // fetch("http://127.0.0.1:8000/register/", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username: { username },
    //     first_name: { firstName },
    //     last_name: { lastName },
    //     email: { email },
    //     password1: { password },
    //     password2: { password2 },
    //   }),
    // });

    // setUsername("");
    // setFirstName("");
    // setLastName("");
    // setEmail("");
    // setPassword("");
    // setPassword2("");
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form className="checkout-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Full Name: </label>
          <input
            type="text"
            name="full name"
            placeholder="John Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Address Line One: </label>
          <input
            type="text"
            name="address"
            placeholder="example address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>City: </label>
          <input
            type="text"
            name="city"
            placeholder="example city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>State/County: </label>
          <input
            type="text"
            name="state/county"
            placeholder="example state/county"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Postal Code: </label>
          <input
            type="text"
            name="postalcode"
            placeholder="example postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Please enter your mobile phone number: </label>
          <input
            type="text"
            name="phonenumber"
            placeholder="example phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <input type="submit" value="Checkout" className="btn" />
      </form>
    </div>
  );
};

export default Checkout;
