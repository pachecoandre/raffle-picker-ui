import { FC } from "react";

interface Props {
  name: string;
}

const Seller: FC<Props> = ({ name }) => {
  return <div>{name}</div>;
};

export default Seller;
