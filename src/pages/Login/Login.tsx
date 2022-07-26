import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "state";
import Container from "components/Container";
import Button from "components/Button";
import Section from "components/Section";
import { useFormik } from "formik";
import Input from "components/Input";

const LoginPage: FC<{}> = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      setState({ isLogged: true });
      navigate("/");
    },
  });
  const { setState } = useGlobalContext();

  return (
    <Container>
      <Section>
        <h1>LogIn</h1>
      </Section>
      <Section>
        <form onSubmit={formik.handleSubmit}>
          <Input
            name="username"
            label="Email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
          />

          <Input
            name="password"
            label="Senha"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Button type="submit">Login</Button>
        </form>
      </Section>
    </Container>
  );
};

export default LoginPage;
