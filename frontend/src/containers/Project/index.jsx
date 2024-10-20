import ContainerLeft from "../../components/ContainerLeft";
import ContainerRight from "../../components/ContainerRight";
import { TitlePorti } from "../../components/Title/styles";
import Jokenpo from "../../assets/jokenpo.png"
import Cyberpunk from "../../assets/cyberpunk.png"
import CafeDev from "../../assets/cafeDev.png"
import DevMovies from "../../assets/devmovies.png"
import ToDoList from "../../assets/toDoList.png"
import Iphone from "../../assets/iphone.png"
import { Container, ConteinerAbout, Line, ProjectContainer, ProjectCard } from "./styles";

const projects = [
  {
    title: 'Mestre do Jokenpo',
    link: 'https://mestre-do-jokenpo.netlify.app',
    description: 'Uma versão divertida do jogo Jokenpo (Pedra, Papel e Tesoura).',
    image: Jokenpo,
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
    title: 'DevMovies',
    link: 'https://dev-movies-nine.vercel.app/',
    description: 'Seu portal para filmes inesquecíveis.',
    image: DevMovies,
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
