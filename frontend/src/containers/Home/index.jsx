/* eslint-disable react/no-unescaped-entities */
import ContainerLeft from "../../components/ContainerLeft"
import ContainerRight from "../../components/ContainerRight"
import { TitlePorti } from "../../components/Title/styles"
import { Container, ConteinerAbout, Line, ContainerParagrafo, Pragrafo, Doing, Card } from "./styles"
import CardAbout from "../../components/CardAbout/index"

import webDevImage from '../../assets/biblioteca.png';
import prototypingImage from '../../assets/wireframe.png'; 
import fullStackImage from '../../assets/software-de-impressao-3d.png'; 
import apiIntegrationImage from '../../assets/api.png';

function Home() {

  return (
    <>
      <Container>
        <ContainerLeft />
        <ContainerRight>
          <ConteinerAbout>
            <TitlePorti>Sobre Mim</TitlePorti>
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
          <Doing>
            <h2>O que eu faço:</h2>
            <Card>
              <CardAbout
                title="Web Development"
                description="Desenvolvo aplicações web modernas utilizando React, Node.js e Styled Components. Foco em criar interfaces interativas e responsivas, priorizando a acessibilidade."
                image={webDevImage}
              />
              <CardAbout
                title="Prototyping"
                description="Utilizo ferramentas como Figma para criar protótipos de alta fidelidade, garantindo uma experiência do usuário otimizada antes da implementação."
                image={prototypingImage}
              />
              <CardAbout
                title="Full Stack Development"
                description="Desenvolvo aplicações full stack integrando o front-end com o back-end, utilizando tecnologias como React, Node.js e bancos de dados."
                image={fullStackImage}
              />
              <CardAbout
                title="API Integration"
                description="Especialista em integrar APIs RESTful para conectar o front-end ao back-end, criando soluções dinâmicas e eficientes."
                image={apiIntegrationImage}
              />
            </Card>
          </Doing>
        </ContainerRight>
      </Container>
    </>
  )
}

export default Home
