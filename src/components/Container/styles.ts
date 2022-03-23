import styled, { css } from "styled-components";

export const ContainerWrapper = styled.div`
  display: "flex";
  justify-content: "center";
  padding-right: "8px";
  padding-left: "8px";
  height: "calc(100vh - 37px)";
  background-color: "#f8f8f8";
`;

export const ContainerContent = styled(ContainerWrapper)`
  width: "100%";
  max-width: "1000px";
  background-color: "#ffffff";
  padding: "16px";
`;

export { styled };
