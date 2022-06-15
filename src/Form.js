import React, { useState } from "react";
import './Form.css';
import { Link } from "react-router-dom";
const Form = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = data;
  const [link, setLink] = useState(false);

  const changeHandler = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: [e.target.value] });
  };
  const submitHandle = (e) => {
    e.preventDefault();
    if (username[0].length >= 5) {
      if (password[0].length >=8) {
      setLink(true);
      }
      else{
        alert("Password must be above 8 characters");
      }

    }
    else{
      alert("username must be above 5 character");
    }
  };

  return (
    <div className="login">
    <div className='Form'>
      <h1 className="head">Log In</h1>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={changeHandler}
        />
        <br></br>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={changeHandler}
        />
        <br></br>
        {link ? (
          <Link to="todolist">
            <button type="submit">Submit</button>
          </Link>
        ) : (
          <button type="submit">Submit</button>
        )}
      </form>
    </div>
    </div>
  );
};

export default Form;
