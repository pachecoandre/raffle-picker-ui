import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import Container from "components/Container";
import Input from "components/Input";
import Section from "components/Section";
import Button from "components/Button";
import { createRaffle } from "../../state/client";

const NewRaffle: FC = () => {
  const navigate = useNavigate();
  const { campaignId = "" } = useParams();
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      quantity: "",
    },
    onSubmit: async (values) => {
      createRaffle(campaignId, values).then(() => {
        alert("Rifa criada");
      });
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
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
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
