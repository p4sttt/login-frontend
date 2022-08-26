import React from "react";
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className="Home">
      <h1>Welcome</h1>
      <div className="btnBlock">
        <Link to='/registration' className="registration">Зарегистрироваться</Link>
        <Link to='/login' className="login">Войти</Link>
      </div>
    </div>
  );
}

export default Home