import React, { useReducer } from "react";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

function LogIn() {
  const [formInfo, setFormInfo] = useReducer(formReducer, {});

  const handleSubmit = (event) => {
    event.preventDefault();

    var formdata = new FormData();
    formdata.append("username", formInfo.username);
    formdata.append("password", formInfo.password);

    console.log(formdata);
    var requestOptions = {
      method: "POST",
      body: formInfo,
    };

    fetch("http://127.0.0.1:8000/login/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  const handleChange = (event) => {
    setFormInfo({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Username: </label>
          <input
            type="text"
            name="username"
            placeholder="JohnDoe123"
            value={formInfo.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label>Password: </label>
          <input
            type="text"
            name="password2"
            placeholder="YourPassword123"
            value={formInfo.password2}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Log In" className="btn" />
      </form>
    </div>
  );
}
export default LogIn;
