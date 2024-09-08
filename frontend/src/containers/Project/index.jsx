import ContainerLeft from "../../components/ContainerLeft"
import ContainerRight from "../../components/ContainerRight"
import { TitlePorti } from "../../components/Title/styles"
import { Container, ConteinerAbout } from "./styles"

function Project() {

  return (
    <>
      <Container>
        <ContainerLeft />
        <ContainerRight>
          <ConteinerAbout>
            <TitlePorti>Portfolio</TitlePorti>
          </ConteinerAbout>
        </ContainerRight>
      </Container>
    </>
  )
}

export default Project
