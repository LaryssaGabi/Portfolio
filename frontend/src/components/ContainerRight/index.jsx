/* eslint-disable react/prop-types */
import Headers from "../Headers";
import { Container, Content, Line } from "./styles";

function ContainerRight({ children }) {
  return (
    <>
      <Container>
        <Content>
          {children}
          <Line />
        </Content>
        <Headers />
      </Container>
    </>
  );
}

export default ContainerRight;
