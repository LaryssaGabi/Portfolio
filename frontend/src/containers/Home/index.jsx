import ContainerLeft from "../../components/ContainerLeft"
import ContainerRight from "../../components/ContainerRight"
import { TitlePorti } from "../../components/Title/styles"
import { Container, ConteinerAbout, Line,ContainerParagrafo, Pragrafo } from "./styles"

function Home() {

  return (
    <>
      <Container>
        <ContainerLeft />
        <ContainerRight>
          <ConteinerAbout>
            <TitlePorti>About Me</TitlePorti>
          </ConteinerAbout>
          <Line />
          <ContainerParagrafo>
            <Pragrafo>
              Sou desenvolvedora web e atuo no suporte de sistemas. Tenho 20 anos e experiência em React, JavaScript, Node.js, Banco de Dados, APIs, Git, Styled Components e acessibilidade.
              Meu objetivo é melhorar a experiência do usuário, aliando minhas habilidades técnicas à resolução de problemas. Além disso, possuo conhecimentos em TypeScript e Java, o que
              complementa minha versatilidade no desenvolvimento full stack, permitindo a criação de interfaces mais robustas e atraentes.
            </Pragrafo>
            <Pragrafo>
            Minha paixão pela inovação e meu desejo de me tornar uma Tech Lead me impulsionam constantemente. Estou ansiosa por novas oportunidades e desafios que me permitam expandir
            meu conhecimento e fazer contribuições significativas para projetos desafiadores.
            </Pragrafo>
          </ContainerParagrafo>
        </ContainerRight>
      </Container>
    </>
  )
}

export default Home
