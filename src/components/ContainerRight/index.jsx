/* eslint-disable react/prop-types */
import Headers from "../Headers";
import { Container, Content } from "./styles";

function ContainerRight({ children }) {
  return (
    <>
      <Container>
        <Headers />
        <Content>{children}</Content>
      </Container>
    </>
  );
}

export default ContainerRight;
