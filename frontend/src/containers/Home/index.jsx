import ContainerLeft from "../../components/ContainerLeft"
import ContainerRight from "../../components/ContainerRight"
import { TitlePorti } from "../../components/Title/styles"
import { Container, ConteinerAbout } from "./styles"

function Home() {

  return (
    <>
      <Container>
        <ContainerLeft />
        <ContainerRight>
          <ConteinerAbout>
            <TitlePorti>About Me</TitlePorti>
          </ConteinerAbout>
        </ContainerRight>
      </Container>
    </>
  )
}

export default Home
