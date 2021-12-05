import axios from 'axios';
import { BlogContext } from '../context/BlogContext';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const { setislogin, logininfo, setlogininfo } = useContext(BlogContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let infologin = {};
    data.forEach(function (value, key) {
      infologin[key] = value;
    });
    console.log('LOGIN INFO', infologin);

    axios
      .post(
        'http://127.0.0.1:8000/user/auth/login/',
        infologin
        // headers: {
        //   Authorization: `Token ${token}`,
        // },
      )
      .then((res) => {
        setlogininfo(res.data);
        setislogin(true);
        history.push('/');
      });
  };
  console.log('---->', logininfo);

  return (
    <div className='container col-6'>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Email address</label>
          <input
            name='email'
            type='email'
            className='form-control'
            aria-describedby='emailHelp'
          />
          <div className='form-text'>OR</div>

          <label className='form-label'>User Name</label>
          <input
            name='username'
            type='text'
            className='form-control'
            aria-describedby='emailHelp'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Password</label>
          <input name='password' type='password' className='form-control' />
        </div>

        <button type='submit' className='btn btn-primary'>
          SIGN IN
        </button>
      </form>
    </div>
  );
};

export default Login;
