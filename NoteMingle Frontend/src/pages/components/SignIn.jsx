import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useNavigate } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn(props) {
  const nav = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    props.handleLogin(email, password);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ m: 1, bgcolor: "secondary.main" }}
            style={{ backgroundColor: "#f5ba13" }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <p className="homeHeading" style={{ fontSize: "3rem" }}>
            Sign In !
          </p>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <input
              type="text"
              margin="normal"
              required
              id="email"
              placeholder="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              className="inputField"
            />
            <input
              type="password"
              margin="normal"
              required
              name="password"
              placeholder="Password"
              id="password"
              autoComplete="current-password"
              className="inputField"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: "#f5ba13",
                color: "#fff",
                fontFamily: "McLaren",
              }}
            >
              Sign In
            </Button>
            <Grid
              container
              style={{
                padding: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Grid item>
                <Link
                  onClick={() => {
                    nav("/register");
                  }}
                  variant="body2"
                  style={{
                    color: "hsla(260, 2%, 25%, 0.7)",
                    fontFamily: "McLaren",
                  }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
