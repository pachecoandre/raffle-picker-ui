import { FC, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import Container from "components/Container";
import TextArea from "components/TextArea";
import Section from "components/Section";
import Title from "components/Title";
import ModalBase from "components/ModalBase";

const SellerInvitation: FC = () => {
  const { campaignId } = useParams();
  const navigate = useNavigate();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
      setModalIsOpen(true);
    },
  });

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Section>
        <Title backButton={true}>
          Convidar Vendedores - Campanha {campaignId}
        </Title>
      </Section>
      <Section>
        <form onSubmit={formik.handleSubmit}>
          <TextArea
            name="email"
            label="Emails (separados por espaço)"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <button type="submit">Convidar</button>
        </form>
      </Section>
      <Section>Convites em aberto:</Section>
      <ModalBase open={modalIsOpen} handleClose={() => setModalIsOpen(false)}>
        <h1>Convite enviado</h1>
        <button onClick={handleBack}>Voltar</button>
      </ModalBase>
    </Container>
  );
};

export default SellerInvitation;
