import { Container, ContainInfor, Imagem, Line, Section } from "./styles";
import { Github, Linkedin, Mails, Smartphone, User } from 'lucide-react';

function ContainerLeft() {
  return (
    <>
      <Container>
        
        <Imagem>
          <User style={{ color: '#fff', fontSize: '40px', background: 'transparent' }} />
        </Imagem>

        <Section>
          <h3>Laryssa Gabriela</h3>
          <p>Web Developer</p>
        </Section>

        <Line />

        <ContainInfor>

          <div>
            <a href="mailto:lary.gabriela85@gmail.com" target="_blank" rel="noopener noreferrer">
              <Mails style={{ color: '#95610d', fontSize: '24px', background: 'transparent' }} />
            </a>
            <span>Email</span>
          </div>

          <div>
            <a href="tel:+5531971026619">
              <Smartphone style={{ color: '#95610d', fontSize: '24px', background: 'transparent' }} />
            </a>
            <span>Telefone</span>
          </div>

          <div>
            <a href="https://www.linkedin.com/in/laryssa-gabriela-alves/" target="_blank" rel="noopener noreferrer">
              <Linkedin style={{ color: '#95610d', fontSize: '24px', background: 'transparent' }} />
            </a>
            <span>LinkedIn</span>
          </div>

          <div>
            <a href="https://github.com/LaryssaGabi" target="_blank" rel="noopener noreferrer">
              <Github style={{ color: '#95610d', fontSize: '24px', background: 'transparent' }} />
            </a>
            <span>GitHub</span>
          </div>
        </ContainInfor>
      </Container>
    </>
  );
}

export default ContainerLeft;
