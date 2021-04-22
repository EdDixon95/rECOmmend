import React, { useReducer } from "react";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

function RegisterUser() {
  const [formInfo, setFormInfo] = useReducer(formReducer, {});

  const handleSubmit = (event) => {
    event.preventDefault();

    var formdata = new FormData();
    formdata.append("username", formInfo.username);
    formdata.append("first_name", formInfo.first_name);
    formdata.append("last_name", formInfo.lastName);
    formdata.append("email", formInfo.email);
    formdata.append("password1", formInfo.password);
    formdata.append("password2", formInfo.password2);

    console.log(formdata);
    var requestOptions = {
      method: "POST",
      body: formInfo,
    };

    fetch("http://127.0.0.1:8000/register/", requestOptions)
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
          <label>First Name: </label>
          <input
            type="text"
            name="first_name"
            placeholder="John"
            value={formInfo.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label>Last Name: </label>
          <input
            type="text"
            name="last_name"
            placeholder="Doe"
            value={formInfo.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label>Email: </label>
          <input
            type="text"
            name="email"
            placeholder="example@email.com"
            value={formInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label>Password: </label>
          <input
            type="text"
            name="password1"
            placeholder="YourPassword123"
            value={formInfo.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label>Password Confirmation: </label>
          <input
            type="text"
            name="password2"
            placeholder="YourPassword123"
            value={formInfo.password2}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Sign Up" className="btn" />
      </form>
    </div>
  );
}
export default RegisterUser;

// import { useState } from "react";

// const RegisterUser = () => {
//   const [username, setUsername] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [password2, setPassword2] = useState("");

//   const onSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !username ||
//       !firstName ||
//       !lastName ||
//       !email ||
//       !password ||
//       !password2
//     ) {
//       alert("Please fill out all fields");
//       return;
//     }
//     console.log(username, typeof username);

//     var formdata = new FormData();
//     formdata.append("username", "username");
//     formdata.append("first_name", "firstName");
//     formdata.append("last_name", "lastName");
//     formdata.append("email", "email@email.com");
//     formdata.append("password1", "password");
//     formdata.append("password2", "password");

//     console.log(formdata);

//     var requestOptions = {
//       method: "POST",
//       body: formdata,
//       redirect: "follow",
//     };

//     fetch("http://127.0.0.1:8000/register/", requestOptions)
//       .then((response) => response.text())
//       .then((result) => console.log(result))
//       .catch((error) => console.log("error", error));
//   };

//   // setUsername("");
//   // setFirstName("");
//   // setLastName("");
//   // setEmail("");
//   // setPassword("");
//   // setPassword2("");

//   return (
//     <div>
//       <form className="register-form" onSubmit={onSubmit}>
//         <div className="form-control">
//           <label>Username: </label>
//           <input
//             type="text"
//             placeholder="JohnDoe123"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="form-control">
//           <label>First Name: </label>
//           <input
//             type="text"
//             placeholder="John"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//         </div>
//         <div className="form-control">
//           <label>Last Name: </label>
//           <input
//             type="text"
//             placeholder="Doe"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//           />
//         </div>
//         <div className="form-control">
//           <label>Email: </label>
//           <input
//             type="text"
//             placeholder="example@email.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="form-control">
//           <label>Password: </label>
//           <input
//             type="text"
//             placeholder="YourPassword123"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="form-control">
//           <label>Password Confirmation: </label>
//           <input
//             type="text"
//             placeholder="YourPassword123"
//             value={password2}
//             onChange={(e) => setPassword2(e.target.value)}
//           />
//         </div>
//         <input type="submit" value="Register" className="drop-btn" />
//       </form>
//     </div>
//   );
// };

// export default RegisterUser;
