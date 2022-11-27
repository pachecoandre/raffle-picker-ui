import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Container from "components/Container";
import Input from "components/Input";
import Section from "components/Section";
import Button from "components/Button";
import { createCampaign, getCampaign, editCampaign } from "client";
import Content from "components/Content";

interface Props {
  isEdit?: boolean;
}

const NewCampaign: FC<Props> = ({ isEdit }) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      drawDate: "",
    },
    onSubmit: (values) => {
      if (isNaN(Number(values.price))) {
        return alert("Por favor, informe um preço válido");
      }
      if (isEdit) {
        editCampaign();
      } else {
        createCampaign({
          name: values.name,
          rafflePrice: Number(values.price),
          estimatedDrawDate: values.drawDate,
        }).then(() => alert("Campanha criada"));
      }
    },
  });
  const handleCancel = () => navigate(-1);

  useEffect(() => {
    if (isEdit) {
      getCampaign().then((data) => {
        formik.setFieldValue("name", data.name);
        formik.setFieldValue("name", data.rafflePrice);
        formik.setFieldValue("drawDate", data.estimatedDrawDate);
      });
    }
  }, []);

  return (
    <Container>
      <Content justifyCenter>
        <Section>
          <h1>{isEdit ? "Editar campanha" : "Nova campanha"}</h1>
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
            <Button type="submit">{isEdit ? "Salvar" : "Criar"}</Button>
          </form>
        </Section>
      </Content>
    </Container>
  );
};

export default NewCampaign;
