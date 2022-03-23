import { FC } from "react";

import { ContainerContent, ContainerWrapper } from './styles'

const Container: FC<{}> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingRight: "8px",
        paddingLeft: "8px",
        height: "calc(100vh - 37px)",
        backgroundColor: "#f8f8f8",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          backgroundColor: "#ffffff",
          padding: "16px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
