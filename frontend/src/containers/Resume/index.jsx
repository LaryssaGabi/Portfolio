import { useState } from "react";
import ContainerLeft from "../../components/ContainerLeft";
import ContainerRight from "../../components/ContainerRight";
import Education from "../../components/Education";
import Experiencia from "../../components/Experiencia";
import { TitlePorti } from "../../components/Title/styles";
import { Container, ConteinerAbout, Line, Title, ContainerEducation, ContainerExperiencia, TimelineItem, ContainerCertificado, CertificadoItem, CertificadoImage, Modal, ModalContent, CloseButton } from "./styles";

import pythonCertificate from "../../assets/certificates/python.jpg";
import typescriptCertificate from "../../assets/certificates/typerScript.png";
import fullstackCertificate from "../../assets/certificates/figma.jpg";

function Resume() {
  const [selectedImage, setSelectedImage] = useState(null);

  const educationData = [
    { year: "2021", school: "Escola Elizabeth Kalil", description: "Ensino médio completo." },
    { year: "2022 - 2024", school: "Universidade UNA Contagem", description: "Em curso: Análise e Desenvolvimento de Sistemas." },
    { year: "2023 - 2024", school: "Dev Club", description: "Em Curso: Especialização em Desenvolvimento Full Stack." }
  ];

  const experienceData = [
    { year: "2019", title: "Atendimento ao cliente - Garçonete", description: "Trabalhei como garçonete em um restaurante de sushi nos Estados Unidos, no Hidden Sushi, onde era responsável por realizar o atendimento ao cliente, assegurando que todos os pedidos fossem servidos de maneira eficiente e satisfatória" },
    { year: "2022", title: "Atendente - McDonald's", description: "Trabalhei como atendente no McDonald's, onde inicialmente realizava atendimentos aos clientes e participava da preparação dos alimentos. Com o tempo, devido à minha habilidade em lidar com a rotina dinâmica e a alta rotatividade de funcionários, fui encarregada de treinar novos colaboradores. Auxiliei a equipe de novatos para garantir que o fluxo de trabalho fosse eficiente e para aliviar a sobrecarga dos gerentes, contribuindo para um ambiente de trabalho mais organizado e produtivo." },
    { year: "2022", title: "Telemarketing - Jovem Aprendiz", description: "Na Zap Gráfica, atuei no atendimento ativo e receptivo aos clientes, onde recebia suas solicitações e realizava a abertura de chamados no sistema Sankhya.Meu papel incluía contato direto com os clientes para tratar de questões cadastrais, logísticas, orçamentárias e de atendimento de qualidade, além de encaminhar as demandas para os setores responsáveis, garantindo que as necessidades fossem atendidas de forma eficiente." },
    { year: "2023", title: "Suporte - Rede Odonto", description: "Atualmente, trabalho como suporte de sistema na rede Odonto, onde sou responsável por atender chamados via help desk. As clínicas utilizam nosso sistema, que está em constante aprimoramento, o que pode ocasionar dificuldades ou problemas de uso. Nessas situações, sou acionada para oferecer suporte técnico e, quando necessário, realizar ajustes operacionais no software para garantir seu funcionamento adequado. Minha função é essencial para manter a satisfação dos usuários e garantir a continuidade dos serviços." }
  ];

  const certificatesData = [
    { title: "Certificação em Python", image: pythonCertificate },
    { title: "Certificação em TypeScript", image: typescriptCertificate },
    { title: "Certificação em Ui Design", image: fullstackCertificate }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Container>
        <ContainerLeft />
        <ContainerRight>
          <ConteinerAbout>
            <TitlePorti>Resume</TitlePorti>
          </ConteinerAbout>
          <Line />
          <Title>Educação</Title>

          <ContainerEducation>
            {educationData.map((edu, index) => (
              <TimelineItem key={index}>
                <Education year={edu.year} school={edu.school} description={edu.description} />
              </TimelineItem>
            ))}
          </ContainerEducation>

          <Title>Experiência</Title>
          <ContainerExperiencia>
            {experienceData.map((exp, index) => (
              <TimelineItem key={index}>
                <Experiencia year={exp.year} title={exp.title} description={exp.description} />
              </TimelineItem>
            ))}
          </ContainerExperiencia>

          <Title>Certificados</Title>
          <ContainerCertificado>
            {certificatesData.map((cert, index) => (
              <CertificadoItem key={index} onClick={() => openModal(cert.image)}>
                <CertificadoImage src={cert.image} alt={cert.title} />
                <p>{cert.title}</p>
              </CertificadoItem>
            ))}
          </ContainerCertificado>
          
        </ContainerRight>
      </Container>

      {selectedImage && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <img src={selectedImage} alt="Certificado Ampliado" />
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

export default Resume;
