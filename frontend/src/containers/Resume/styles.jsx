import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  margin: 70px 80px 28px 80px;
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
  background-color: #31a2a2;
  box-shadow: 0 0 10px rgba(49, 162, 162, 0.6);
  transition: box-shadow 0.3s ease-in-out;
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
