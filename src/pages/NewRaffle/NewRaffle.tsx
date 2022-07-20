import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Container from "components/Container";
import Input from "components/Input";
import Section from "components/Section";
import Button from "components/Button";

const NewRaffle: FC = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      participantName: "",
      phone: "",
      email: "",
      quantity: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const handleCancel = () => navigate(-1);
  return (
    <Container>
      <Section>
        <h1>Nova rifa</h1>
      </Section>
      <Section>
        <form onSubmit={formik.handleSubmit}>
          <Input
            label="Nome do participante"
            id="participantName"
            name="participantName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.participantName}
          />
          <Input
            label="Telefone"
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          <Input
            label="E-mail"
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <Input
            name="quantity"
            label="Quantidade"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.quantity}
          />
          <Button type="button" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button type="submit">Criar</Button>
        </form>
      </Section>
    </Container>
  );
};

export default NewRaffle;
