import ContainerLeft from "../../components/ContainerLeft";
import ContainerRight from "../../components/ContainerRight";
import { TitlePorti } from "../../components/Title/styles";
import Jokenpo from "../../assets/jokenpo.png"
import Cyberpunk from "../../assets/cyberpunk.png"
import CafeDev from "../../assets/cafeDev.png"
import DevMovies from "../../assets/devmovies.png"
import ToDoList from "../../assets/toDoList.png"
import Iphone from "../../assets/iphone.png"
import Starbucks from "../../assets/starbucks.png"
import Flappy from "../../assets/flappy.png"
import Itau from "../../assets/itau.png"
import DevBills from "../../assets/devbills.png"
import DevBurguer from "../../assets/devBurguer.png"
import Translation from "../../assets/translation.png"
import Tweet from "../../assets/tweet.png"

import { Container, ConteinerAbout, Line, ProjectContainer, ProjectCard } from "./styles";

const projects = [
  {
    title: 'DevMovies',
    link: 'https://dev-movies-nine.vercel.app/',
    description: 'Seu portal para filmes inesquecíveis.',
    image: DevMovies,
  },
  {
    title: 'DevBills',
    link: 'https://dev-bills-interface.vercel.app/',
    description: 'Simplificando o controle financeiro com praticidade e inovação!',
    image: DevBills,
  },
  {
    title: 'DevBurguer',
    link: 'https://dev-burguer-web.vercel.app',
    description: 'O cardápio dos seus favoritos, sempre ao seu alcance!',
    image: DevBurguer,
  },
  {
    title: 'Cyberpunk 2077 Ciborgue',
    link: 'https://cyberpunk-2077-ciborgue.netlify.app',
    description: 'Uma aplicação relacionada ao universo de Cyberpunk 2077.',
    image: Cyberpunk,
  },
  {
    title: 'Cafeteria do Dev',
    link: 'https://cafe-do-dev.netlify.app',
    description: 'Um site pra quem é apaixonado por café.',
    image: CafeDev,
  },
  {
    title: 'FlappyDev',
    link: 'https://flappy-dev.vercel.app/',
    description: 'Rumo à diversão sem limites!',
    image: Flappy,
  },
  {
    title: 'Tranlation',
    link: 'https://translation-dev.vercel.app/',
    description: 'Simplificando a comunicação sem barreiras, uma palavra de cada vez!',
    image: Translation,
  },
  {
    title: 'Tweet-Clone',
    link: 'https://tweet-gray.vercel.app/',
    description: 'Tweet na sua tela!',
    image: Tweet,
  },
  {
    title: 'Mestre do Jokenpo',
    link: 'https://mestre-do-jokenpo.netlify.app',
    description: 'Uma versão divertida do jogo Jokenpo (Pedra, Papel e Tesoura).',
    image: Jokenpo,
  },
  {
    title: 'ToDo - List',
    link: 'https://to-do-list-umber-three-27.vercel.app/',
    description: 'Lista  de tarefas para você se organizar.',
    image: ToDoList,
  },
  {
    title: 'AplleDev',
    link: 'https://i-phone-aplle-dev.vercel.app/',
    description: 'Site Apple.',
    image: Iphone,
  },
  {
    title: 'Starbucks',
    link: 'https://star-bucks-dev.vercel.app/',
    description: 'Starbucks na sua tela.',
    image: Starbucks,
  },
  {
    title: 'Itau',
    link: 'https://banco-itau-dev.vercel.app/',
    description: 'Seu banco na palma da mão.',
    image: Itau,
  },
];

function Project() {
  return (
    <>
      <ContainerLeft />
      <Container>
        <ContainerRight>
          <ConteinerAbout>
            <TitlePorti>Projects</TitlePorti>
          </ConteinerAbout>
          <Line />

          <ProjectContainer>
            {projects.map((project, index) => (
              <ProjectCard key={index} onClick={() => window.open(project.link, '_blank')}>
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </ProjectCard>
            ))}
          </ProjectContainer>

        </ContainerRight>
      </Container>
    </>
  );
}

export default Project;
