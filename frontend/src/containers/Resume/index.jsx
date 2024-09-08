import ContainerLeft from "../../components/ContainerLeft"
import ContainerRight from "../../components/ContainerRight"
import { TitlePorti } from "../../components/Title/styles"
import { Container, ConteinerAbout } from "./styles"

function Resume() {
  return (
    <>
       <Container>
        <ContainerLeft />
        <ContainerRight>
          <ConteinerAbout>
            <TitlePorti>Resume</TitlePorti>
          </ConteinerAbout>
        </ContainerRight>
      </Container>
    </>
  )
}

export default Resume
