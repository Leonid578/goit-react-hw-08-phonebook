import { TellContainer } from '../GlobalStyled.styled';
import Title from '../Title/Title';
import style from '../Form/Form.module.css';
import styled from './LoginPage.style.css'

import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { newToken } from 'redux/sliceToken';
import { useLoginUserMutation } from 'server/contacts';
import { isAuth } from 'redux/sliceAuth';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [createUser, { isError }] = useLoginUserMutation();
  const tosty = () => {
    toast.error('Error login');
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const send = {
      email: data.get('email'),
      password: data.get('password'),
    };
    const responsToken = await createUser(send);
    if (responsToken.data) {
      dispatch(newToken(responsToken.data.token));
      dispatch(isAuth(responsToken.data.user.name));
    }
  };
  return (
    <div className="styled.form">
      <TellContainer>
        {isError && tosty()}
        <Title text={'Email Address'} />
        <input
          className={style.inputLogin}
          margin="normal"
          pattern='/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i'
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onSubmit={handleSubmit}
        />
        <Title text={'Password'} />
        <input
          className={style.inputLogin}
          margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password" 
            onSubmit={handleSubmit}         
        />

        <button
          type="submit"
          fullWidth
          variant="contained"
        //   sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </button>
        <p container justifyContent="flex-end">
          <p item>
            <NavLink to="/register">
              "Don't have an account? Sign Up"
            </NavLink>
          </p>
        </p>
      </TellContainer>
    </div>
  );
};

export default LoginPage;
