import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  margin: 7vh 0.1vw 90vh;
  gap: 40px;

  @media screen and (max-width: 1900px) {
      margin: 8vh 4vw;
      height: 100%;
  }

  @media screen and (max-width: 535px) {
    margin: 8vh 4vw; 
  
  }

`;

export const ConteinerAbout = styled.div`
  display: flex;
  width: 60%;
`;



export const Line = styled.div`
  height: 5px;
  width: 10%;
  margin-top: 10px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 0 8px rgba(49, 162, 162, 0.6); 
  transition: box-shadow 0.3s ease-in-out; 

  &:hover {
    box-shadow: 0 0 15px rgba(49, 162, 162, 1); 
  }

`;

export const Curriculo = styled.a`
  margin-top: 20px;
  width: 12vw;
`;  

export const Title = styled.h2`
  margin-top: 35px;
  margin-left: 20px;
  background: transparent;
  color: #fff;

  @media screen and (max-width: 1900px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 500px) {
    margin-left: 30px;
  }
`;

export const ContainerEducation = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  color: #fff;
  width: 80%;
  background: transparent;
`;

export const ContainerExperiencia = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  color: #fff;
  background: transparent;
  width: 82%;
`;

export const TimelineItem = styled.div`
  margin-bottom: 20px;
  padding-left: 10px;
  border-left: 2px solid #1b5b5b;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: -2px;
    top: 0;
    height: 100%;
    width: 2px;
    background: linear-gradient(to bottom, #31a2a2, #10577e); 
    z-index: -1;
  }

  &:before {
    content: '';
    position: absolute;
    left: -7px;
    top: 5px;
    height: 12px;
    width: 12px;
    background: radial-gradient(circle, #0077b6 60%, #31a2a2 100%); 
    border-radius: 50%;
  }
`;

export const ContainerCertificado = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  gap: 20px;
  justify-content: center;
  margin: 10px;

  @media screen and (max-width: 1900px) {
    grid-template-columns: repeat(3, 1fr); 
    width: 100%;
  }

  @media screen and (max-width: 1500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    width: 105%;
    margin: 0 auto;
  }
`;

export const CertificadoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  color: #fff;
  

  &:hover img {
    transform: scale(1.02);  
    transition: transform 0.3s ease;  
  }
`;

export const CertificadoImage = styled.img`
  width: 92%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  cursor: pointer;  

  @media screen and (max-width: 1900px) {
    width: 80%;
  }
  @media screen and (max-width: 1500px) {
    width: 60%;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
    margin: 0 auto;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  `;

export const ModalContent = styled.div`

  position: relative;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  max-width: 60%;
  max-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    max-width: 90%;
    max-height: 100%;
    border-radius: 10px;
  }

  @media screen and (max-width: 1900px) {
    max-width: 40%;
    max-height: 100%;
  }

`;

export const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  color: #000;
  transition: color 0.2s;

  &:hover {
    color: #f00;
  }
`;
