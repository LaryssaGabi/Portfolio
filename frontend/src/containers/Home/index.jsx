import ContainerLeft from "../../components/ContainerLeft"
import ContainerRight from "../../components/ContainerRight"
import { Container } from "./styles"

function Home() {

  return (
    <>
      <Container>
        <ContainerLeft/>
        <ContainerRight />
      </Container>
    </>
  )
}

export default Home
