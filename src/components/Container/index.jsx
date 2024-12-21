import styled from "styled-components";
import ContainerLeft from "../ContainerLeft";
import ContainerRight from "../ContainerRight";

function Centralizar() {
  return (
    <MainContainer>
      <ContainerLeft />
      <ContainerRight />
    </MainContainer>
  );
}

export default Centralizar;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  min-height: 100vh;
  background-color: #f5f5f5;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;