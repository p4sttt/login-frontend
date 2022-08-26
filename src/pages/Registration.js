import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Registration() {
  const [data, setData] = useState({ username: "", password: "" });

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ username: data.username, password: data.password });
    axios
      .post("http://localhost:4000/registration", {
        username: data.username,
        passwordHash: data.password,
      })
      .then(function (response) {
        console.log(response);
        alert(response.data.msg);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="Registration">
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          id="username"
          name="username"
          placeholder="username"
          value={data.username}
          onChange={handleChange}
        />
        <input
          type={"password"}
          id="password"
          name="password"
          placeholder="password"
          value={data.password}
          onChange={handleChange}
        />
        <button className="btn-reg">Зарегестрироваться</button>
      </form>
      <Link to="/">Назад</Link>
    </div>
  );
}

export default Registration;
