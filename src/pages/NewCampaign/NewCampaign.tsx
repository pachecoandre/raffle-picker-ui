import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Container from "components/Container";
import Input from "components/Input";
import Section from "components/Section";
import Button from "components/Button";

const NewCampaign: FC = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      drawDate: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const handleCancel = () => navigate(-1);
  return (
    <Container>
      <Section>
        <h1>Nova campanha</h1>
      </Section>
      <Section>
        <form onSubmit={formik.handleSubmit}>
          <Input
            label="Nome"
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <Input
            label="Valor da rifa"
            id="price"
            name="price"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          <Input
            label="Data prevista para o sorteio"
            id="drawDate"
            name="drawDate"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.drawDate}
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

export default NewCampaign;
