import { Container, ContainInfor, Imagem, Line, Section, Span } from "./styles";
import { Github, Linkedin, Mails, Smartphone, User } from 'lucide-react';

function ContainerLeft() {
  return (
    <>
      <Container>

        <Imagem>
          <User style={{ color: '#fff', background: 'transparent' }} size={30} />
        </Imagem>

        <Section>
          <h3>Laryssa Gabriela</h3>
          <p>Web Developer</p>
        </Section>

        <Line />

        <ContainInfor>

          <div>
            <a href="mailto:lary.gabriela85@gmail.com" target="_blank" rel="noopener noreferrer">
              <Mails style={{ color: '#4a9e8f', background: 'transparent' }} size={30} />
            </a>
            <Span>
              <span>Email</span>
              <label>lary.gabriela85@gmail.com</label>
            </Span>
          </div>

          <div>
            <a href="tel:+5531971026619">
              <Smartphone style={{ color: '#4a9e8f', background: 'transparent' }} size={30} />
            </a>
            <Span>
              <span>Telefone</span>
              <label>+55 31 97102-6619</label>
            </Span>
          </div>

          <div>
            <a href="https://www.linkedin.com/in/laryssa-gabriela-alves/" target="_blank" rel="noopener noreferrer">
              <Linkedin style={{ color: '#4a9e8f', background: 'transparent' }} size={30} />
            </a>
            <Span>
              <span>LinkedIn</span>
              <label>laryssa-gabriela-alves</label>
            </Span>
          </div>

          <div>
            <a href="https://github.com/LaryssaGabi" target="_blank" rel="noopener noreferrer">
              <Github style={{ color: '#4a9e8f', background: 'transparent' }} size={30} />
            </a>
            <Span>
              <span>GitHub</span>
              <label>LaryssaGabi</label>
            </Span>
          </div>

        </ContainInfor>
      </Container>
    </>
  );
}

export default ContainerLeft;
