import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 70px 80px 28px 80px;
    gap: 40px;
`
export const ConteinerAbout = styled.div`
    display:flex;
    background: transparent;
`
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

export const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 30px;
`;

export const ProjectCard = styled.div`
  cursor: pointer; 
  width: 300px; 
  border: 1px solid #1d1c1c; 
  border-radius: 8px;
  overflow: hidden; 
  transition: transform 0.2s; 
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.05); 
    background-color: #3b3b3b;
  }

  img {
    width: 100%; 
    height: 200px; 
    object-fit: cover; 
    transition: opacity 0.3s ease;
  }
  
  &:hover img {
        opacity: 0.9; 
    }

  h3 {
    margin: 10px; 
    color: #fff;
  }

  p {
    margin: 0 10px 10px; 
    font-size: 14px; 
    color: #c3baba;
  }

`;
