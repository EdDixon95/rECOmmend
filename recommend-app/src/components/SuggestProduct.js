import React, { useReducer, useState } from "react";
import "./SuggestProduct.css";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

function SuggestProduct() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    fetch("http://127.0.0.1:8000/new_product/", {
      method: "POST",
      body: formData,
    });
  };

  const handleChange = (event) => {
    setFormData({
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
            {Object.entries(formData).map(([name, value]) => (
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
              value={formData.Name || " "}
            />
          </label>

          <label>
            <p>Description</p>
            <input
              name="Description"
              onChange={handleChange}
              value={formData.Description || " "}
            />
          </label>

          <label>
            <p>What Item Does This Replace?</p>
            <input
              name="Replacement"
              onChange={handleChange}
              value={formData.Replacement || " "}
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
