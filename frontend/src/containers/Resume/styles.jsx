import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  margin: 70px 80px 386px 80px;
  gap: 40px;
`;

export const ConteinerAbout = styled.div`
  display: flex;
  background: transparent;
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

export const Title = styled.h2`
  margin-top: 35px;
  margin-left: 20px;
  background: transparent;
  color: #fff;
`;

export const ContainerEducation = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  color: #fff;
  background: transparent;
`;

export const ContainerExperiencia = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  color: #fff;
  background: transparent;
  width: 50vw;
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
  display: flex;
  justify-content: center;
  margin: 10px;
  gap: 20px;
`;
export const CertificadoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  color: #fff;
  

  &:hover img {
    transform: scale(1.05);  
    transition: transform 0.3s ease;  
  }
`;

export const CertificadoImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  cursor: pointer;  
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
  z-index: 1000;
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

  img {
    max-width: 80%;
    max-height: 100%;
    border-radius: 10px;
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
