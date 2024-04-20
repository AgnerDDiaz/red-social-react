import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navigate } from 'react-router-dom'; // Cambiado de Redirect a Navigate
import '../css/PageLogin.css';
import socialIcon from '../components/Logosinfondo.png';
import axios from 'axios';

const defaultTheme = createTheme();

export default function SignInSide() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get('http://localhost:44350/usuario', {
        params: {
          EMAIL: email,
          PASSWORD_USUARIO: password,
        },
      });

      if (response.data.length > 0) {
        console.log(response.data);
        setLoggedIn(true);
      } else {
        setError('Credenciales inválidas. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      setError('Ha ocurrido un error al iniciar sesión. Por favor, inténtalo de nuevo.');
    }
  };

  if (loggedIn) {
    return <Navigate to="/PageInicio" />; // Cambiado de Redirect a Navigate
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://tse2.mm.bing.net/th/id/OIG1.Yj54J4nPksYS1.jlBW_R?pid=ImgGn)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div className="icon-container">
              <img src={socialIcon} alt="Ícono de RedSocial" className="social-icon" />
              <Typography component="h2" variant="h4">
                EchoVerse
              </Typography>
            </div>

            <Typography component="h2" variant="h5">
              Inicio de Sesión
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Iniciar Sesión
              </Button>
              {error && <Typography color="error">{error}</Typography>}
              <Grid container>
                <Grid item>
                  <Link href="/PageRegistrarse" variant="body2">
                    ¿No tienes una cuenta? Regístrate
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
