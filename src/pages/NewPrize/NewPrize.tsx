import { FC } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import Container from "components/Container";
import Input from "components/Input";
import Section from "components/Section";
import Title from "components/Title";
import FileInput from "components/FileInput";
import Button from "components/Button";
// import { FileInput } from "./styles";

const NewPrize: FC = () => {
  const { campaignId } = useParams();
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      image: "",
      quantity: 1,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container>
      <Section>
        <Title backButton={true}>
          Cadastrar novo prêmio na campanha {campaignId}
        </Title>
      </Section>
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
          <Button disabled type="submit">Cadastrar</Button>
        </form>
      </Section>
    </Container>
  );
};

export default NewPrize;
