import { TellContainer } from '../GlobalStyled.styled';
import Title from '../Title/Title';
import { NavLink } from 'react-router-dom';
import { useRegistrationUserMutation } from 'server/contacts';
import { useDispatch } from 'react-redux';
import { newToken } from 'redux/sliceToken';
import { isAuth } from 'redux/sliceAuth';
import style from '../Form/Form.module.css';

import { toast } from 'react-toastify';
const RegisterPage = () => {
  const dispatch = useDispatch();
  const [createUser, { isError }] = useRegistrationUserMutation();
  const tosty = () => {
    toast.error('Error Registration');
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const send = {
      name: data.get('fullName'),
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
    <>
      <TellContainer>
        {isError && tosty()}
        <Title text={'Full Name'} />
        <input
          className={style.inputLogin}
          autoComplete="given-name"
          name="fullName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          fullWidth
          id="firstName"
          label="Full Name"
          autoFocus
          onSubmit={handleSubmit}
        />
        <Title text={'Email Address'} />
        <input
          className={style.inputLogin}
          pattern='/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i'
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          onSubmit={handleSubmit}
        />
        <Title text={'Password'} />
        <input
          className={style.inputLogin}
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
          onSubmit={handleSubmit}
        />
        <button
          className={style.button}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </button>
        <div><NavLink to="/login">Already have an account? Sign in</NavLink></div>
      </TellContainer>
    </>
  );
};

export default RegisterPage;
