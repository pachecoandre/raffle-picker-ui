import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "state";
import { login } from "client";
import Container from "components/Container";
import Button from "components/Button";
import Section from "components/Section";
import { useFormik } from "formik";
import Input from "components/Input";

type GoogleCredentialResponse = google.accounts.id.CredentialResponse;

const LoginPage: FC<{}> = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setState({ isLogged: true });
    navigate("/");
  };
  const { setState } = useGlobalContext();

  const handleGoogleSignIn = (response: GoogleCredentialResponse) => {
    login(response.credential).then((payload) => {
      console.log(payload);
    });
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID!,
      callback: handleGoogleSignIn,
    });
    google.accounts.id.renderButton(
      document.getElementById("google-sign-in-button")!,
      { type: "standard", theme: "outline" }
    );
  }, []);

  return (
    <Container>
      <Section>
        <h1>LogIn</h1>
      </Section>
      <Section>
        <div id="google-sign-in-button" />
      </Section>
      <Section>
        <Button onClick={handleLogin}>Login</Button>
      </Section>
    </Container>
  );
};

export default LoginPage;
