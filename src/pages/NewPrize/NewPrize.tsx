import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import Container from "components/Container";
import Input from "components/Input";
import Section from "components/Section";
import Title from "components/Title";
import FileInput from "components/FileInput";
import Button from "components/Button";
import { createPrize } from "client";
import Content from "components/Content";

const NewPrize: FC = () => {
  const { campaignId = "" } = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      image: "",
      quantity: 1,
    },
    onSubmit: (values) => {
      createPrize(campaignId, values).then(() => {
        setTimeout(() => {
          navigate(-1);
        }, 1500);
      });
    },
  });
  const handleCancel = () => navigate(-1);

  return (
    <Container>
      <Section>
        <Title backLink={`/campaigns/${campaignId}/prizes`}>
          Cadastrar novo prêmio na campanha {campaignId}
        </Title>
      </Section>
      <Content justifyCenter>
        <Section>
          <form onSubmit={formik.handleSubmit}>
            <Input
              name="name"
              label="Name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <Input
              name="description"
              label="Descrição"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
            <FileInput
              name="image"
              label="Foto"
              type="file"
              accept="image/*"
              onChange={formik.handleChange}
              value={formik.values.image}
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
            <Button type="submit">Cadastrar</Button>
          </form>
        </Section>
      </Content>
    </Container>
  );
};

export default NewPrize;
