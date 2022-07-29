import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

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
    <Container component="main" maxWidth="xs">
      {isError && tosty()}
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
     
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            pattern='/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i'
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <NavLink to="/register">
                "Don't have an account? Sign Up"
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;



// import { TellContainer } from '../GlobalStyled.styled';
// import Title from '../Title/Title';
// import style from '../Form/Form.module.css';
// import styled from './LoginPage.style.css';

// import { NavLink } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { newToken } from 'redux/sliceToken';
// import { useLoginUserMutation } from 'server/contacts';
// import { isAuth } from 'redux/sliceAuth';
// import { toast } from 'react-toastify';

// const LoginPage = () => {
//   const dispatch = useDispatch();
//   const [createUser, { isError }] = useLoginUserMutation();
//   const tosty = () => {
//     toast.error('Error login');
//   };

//   const handleSubmit = async event => {
//     event.preventDefault();

//     const data = new FormData(event.currentTarget);
//     const send = {
//       email: data.get('email'),
//       password: data.get('password'),
//     };
//     const responsToken = await createUser(send);
//     if (responsToken.data) {
//       dispatch(newToken(responsToken.data.token));
//       dispatch(isAuth(responsToken.data.user.name));
//     }
//   };
//   return (
//     <div className="styled.form">
//       <TellContainer>
//         {isError && tosty()}
//         <Title text={'Email Address'} />
//         <input
//           className={style.inputLogin}
//           margin="normal"
//           pattern='/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i'
//           required
//           id="email"
//           label="Email Address"
//           name="email"
//           autoComplete="email"
//           autoFocus
//           onSubmit={handleSubmit}
//         />
//         <Title text={'Password'} />
//         <input
//           className={style.inputLogin}
//           margin="normal"
//           required
//           name="password"
//           label="Password"
//           type="password"
//           id="password"
//           autoComplete="current-password"
//           onSubmit={handleSubmit}
//         />

//         <button className={style.button} type="submit" variant="contained">
//           Sign In
//         </button>
//         <div className={style.navigation}>
//           <NavLink to="/register">"Don't have an account? Sign Up"</NavLink>
//         </div>
//       </TellContainer>
//     </div>
//   );
// };

// export default LoginPage;
