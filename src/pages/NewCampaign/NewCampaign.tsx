import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import Container from "components/Container";
import Input from "components/Input";
import Section from "components/Section";
import Button from "components/Button";
import { createCampaign, getCampaign, updateCampaign } from "client";
import Content from "components/Content";

interface Props {
  isEdit?: boolean;
}

const NewCampaign: FC<Props> = ({ isEdit = false }) => {
  const navigate = useNavigate();
  const { campaignId = "" } = useParams();
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
        return updateCampaign(campaignId, {
          name: values.name,
          estimatedDrawDate: values.drawDate,
        }).then(() => {
          setTimeout(() => {
            navigate(`/campaigns/${campaignId}`);
          }, 500);
        });
      }
      createCampaign({
        name: values.name,
        rafflePrice: Number(values.price),
        estimatedDrawDate: values.drawDate,
      }).then(({ id }) =>
        setTimeout(() => {
          navigate(`/campaigns/${id}`);
        }, 500)
      );
    },
  });
  const handleCancel = () => navigate(-1);

  useEffect(() => {
    if (isEdit) {
      getCampaign(campaignId).then((data) => {
        console.log(data);
        formik.setFieldValue("name", data.name);
        formik.setFieldValue("price", data.rafflePrice);
        formik.setFieldValue("drawDate", data.estimatedDrawDate?.split("T")[0]);
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
              disabled={isEdit}
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
