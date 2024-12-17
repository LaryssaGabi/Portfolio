import { Container, ContainerDiv, ContainInfor, Imagem, Line, Section, Span } from "./styles";
import { Github, Linkedin, Mails, Smartphone } from 'lucide-react';
import Perfil from '../../assets/perfil.jpeg'

function ContainerLeft() {
  return (
    <>
      <Container>

        <Imagem>
          <img src={Perfil} alt="" />
        </Imagem>

        <Section>
          <h3>Laryssa Gabriela</h3>
          <p>Web Developer</p>
        </Section>

        <Line />

        <ContainInfor>

          <ContainerDiv>
            <a href="mailto:lary.gabriela85@gmail.com" target="_blank" rel="noopener noreferrer">
              <Mails style={{ color: '#42a1aa', background: 'transparent' }} size={30} />
            </a>
            <Span>
              <span>Email</span>
              <label>lary.gabriela85@gmail.com</label>
            </Span>
          </ContainerDiv>

          <ContainerDiv>
            <a href="tel:+5531971026619">
              <Smartphone style={{ color: '#42a1aa', background: 'transparent' }} size={30} />
            </a>
            <Span>
              <span>Telefone</span>
              <label>+55 31 97102-6619</label>
            </Span>
          </ContainerDiv>

          <ContainerDiv>
            <a href="https://www.linkedin.com/in/laryssa-gabriela-alves/" target="_blank" rel="noopener noreferrer">
              <Linkedin style={{ color: '#42a1aa', background: 'transparent' }} size={30} />
            </a>
            <Span>
              <span>LinkedIn</span>
              <label>laryssa-gabriela-alves</label>
            </Span>
          </ContainerDiv>

          <ContainerDiv>
            <a href="https://github.com/LaryssaGabi" target="_blank" rel="noopener noreferrer">
              <Github style={{ color: '#42a1aa', background: 'transparent' }} size={30} />
            </a>
            <Span>
              <span>GitHub</span>
              <label>LaryssaGabi</label>
            </Span>
          </ContainerDiv>

        </ContainInfor>
      </Container>
    </>
  );
}

export default ContainerLeft;
