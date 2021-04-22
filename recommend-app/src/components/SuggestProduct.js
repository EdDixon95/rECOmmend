import React, { useReducer, useState } from "react";
import "./SuggestProduct.css";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

function SuggestProduct() {
  const [formInfo, setFormInfo] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    var formdata = new FormData();
    formdata.set("username", formInfo.username);
    formdata.set("first_name", formInfo.first_name);
    formdata.set("last_name", formInfo.last_name);

    fetch("http://127.0.0.1:8000/new_product/", {
      method: "POST",
      body: formdata,
    });
  };

  const handleChange = (event) => {
    setFormInfo({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div className="wrapper">
      <h3>Suggest A Product</h3>
      {submitting && (
        <div className="Submission">
          You are submitting the following:
          <ul>
            {Object.entries(formInfo).map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong>:{value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Product name</p>
            <input
              name="Name"
              onChange={handleChange}
              value={formInfo.Name || " "}
            />
          </label>

          <label>
            <p>Description</p>
            <input
              name="Description"
              onChange={handleChange}
              value={formInfo.Description || " "}
            />
          </label>

          <label>
            <p>What Item Does This Replace?</p>
            <input
              name="Replacement"
              onChange={handleChange}
              value={formInfo.Replacement || " "}
            />
          </label>
        </fieldset>

        <button className="Submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SuggestProduct;
