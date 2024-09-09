import ContainerLeft from "../../components/ContainerLeft"
import ContainerRight from "../../components/ContainerRight"
import { TitlePorti } from "../../components/Title/styles"
import { Container, ConteinerAbout, Line } from "./styles"

function Project() {

  return (
    <>
      <Container>
        <ContainerLeft />
        <ContainerRight>
          <ConteinerAbout>
            <TitlePorti>Portfolio</TitlePorti>
          </ConteinerAbout>
          <Line />
        </ContainerRight>
      </Container>
    </>
  )
}

export default Project
