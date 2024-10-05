import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 87px 80px 42px 80px;
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
  margin-bottom: 20px;  
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 0 8px rgba(49, 162, 162, 0.6); 
  transition: box-shadow 0.3s ease-in-out; 
  
  &:hover {
    box-shadow: 0 0 15px rgba(49, 162, 162, 1); 
  }
`;

export const ContainerParagrafo = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  padding: 0 20px;
`;

export const Pragrafo = styled.p`
  background: transparent;
  color: #c3baba;
  margin-bottom: 20px;
  font-size: 16px;
  padding: 0 20px;
  `;

export const Doing = styled.div`
  margin-top: 28px;
  background: transparent;

  h2{
    background: transparent;
    color: #dddddd;
    font-weight: 700;
  
  }
`;

export const Card = styled.div`
  background: transparent;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  padding: 40px;
`;

export const ContainerSkil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;

h2{

  color: #dddddd;
  margin-bottom: 20px;
}

img{
  
  width: 50vw;
}
`;
