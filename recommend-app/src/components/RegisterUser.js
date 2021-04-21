import { useState } from "react";

const RegisterUser = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      !username ||
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !password2
    ) {
      alert("Please fill out all fields");
      return;
    }

    fetch("http://127.0.0.1:8000/register/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: { username },
        first_name: { firstName },
        last_name: { lastName },
        email: { email },
        password1: { password },
        password2: { password2 },
      }),
    });

    // setUsername("");
    // setFirstName("");
    // setLastName("");
    // setEmail("");
    // setPassword("");
    // setPassword2("");
  };

  return (
    <div>
      <form className="register-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Username: </label>
          <input
            type="text"
            placeholder="JohnDoe123"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>First Name: </label>
          <input
            type="text"
            placeholder="John"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Last Name: </label>
          <input
            type="text"
            placeholder="Doe"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Email: </label>
          <input
            type="text"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Password: </label>
          <input
            type="text"
            placeholder="YourPassword123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Password Confirmation: </label>
          <input
            type="text"
            placeholder="YourPassword123"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
        <input type="submit" value="Register" className="drop-btn" />
      </form>
    </div>
  );
};

export default RegisterUser;
