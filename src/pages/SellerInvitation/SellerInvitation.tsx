import { FC } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import Container from "components/Container";
import Input from "components/Input";
import Section from "components/Section";
import Title from "components/Title";

const SellerInvitation: FC = () => {
  const { campaignId } = useParams();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container>
      <Section>
        <Title backButton={true}>
          Convidar Vendedor - Campanha {campaignId}
        </Title>
      </Section>
      <Section>
        <form onSubmit={formik.handleSubmit}>
          <Input
            name="email"
            label="Email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <button type="submit">Convidar</button>
        </form>
      </Section>
      <Section>Convites em aberto:</Section>
    </Container>
  );
};

export default SellerInvitation;
