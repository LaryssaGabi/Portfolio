import ContainerLeft from "../../components/ContainerLeft"
import ContainerRight from "../../components/ContainerRight"
import { TitlePorti } from "../../components/Title/styles"
import { Container, ConteinerAbout, Line } from "./styles"

function Resume() {
  return (
    <>
       <Container>
        <ContainerLeft />
        <ContainerRight>
          <ConteinerAbout>
            <TitlePorti>Resume</TitlePorti>
          </ConteinerAbout>
          <Line />
        </ContainerRight>
      </Container>
    </>
  )
}

export default Resume
