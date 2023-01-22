import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "state";
import { login } from "client";
import Container from "components/Container";
import Section from "components/Section";

type GoogleCredentialResponse = google.accounts.id.CredentialResponse;

const LoginPage: FC<{}> = () => {
  const navigate = useNavigate();
  const { setState } = useGlobalContext();

  const handleGoogleSignIn = (response: GoogleCredentialResponse) => {
    login(response.credential).then(({ id, email, name }) => {
      setState({ isLogged: true, userId: id, email, name });
      navigate("/");
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
    </Container>
  );
};

export default LoginPage;
