/* eslint-disable react/prop-types */
import Headers from "../Headers";
import { Container, Content } from "./styles";

function ContainerRight({ children }) {
  return (
    <>
      <Container>
        <Content>
          {children}
        </Content>
        <Headers />
      </Container>
    </>
  );
}

export default ContainerRight;
