import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function LoginForm() {
  const {login} =useContext(AuthContext)
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const history = useHistory();
  

  const handleSubmit =  (e) => {
    e.preventDefault();
    login(form);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="loginFormMainDiv">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <h2 htmlFor="username">UserName</h2>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <h2 htmlFor="password">Password</h2>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit" onClick={handleSubmit}>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
