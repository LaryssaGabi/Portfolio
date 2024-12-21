import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 9vh 0.1vw;
    gap: 40px;

    @media screen and (max-width: 1900px) {
      margin: 8vh 4vw;
      height: 100%;
  }

  @media screen and (max-width: 1800px) {
    margin: 8vh 4vw;
    flex-direction: column; 
  }

  @media screen and (max-width: 552px) {
    gap: 20px; 
  }

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
  width: 50vw;
`;

export const Pragrafo = styled.p`
  background: transparent;
  color: #c3baba;
  margin-bottom: 20px;
  font-size: 1rem;
  padding: 0 20px;

  @media screen and (max-width: 1900px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 1250px) {
    font-size: 0.8rem;
    width: 100%;
  }

  @media screen and (max-width: 800px) {
      padding-right: 5px;
      font-size: 0.8rem;
      width: 180%;
    }
  `;

export const Doing = styled.div`
  margin-top: 28px;
  background: transparent;

  h2{
    background: transparent;
    color: #dddddd;
    font-weight: 700;

    @media screen and (max-width: 1900px) {
        font-size: 1.4rem;
    }
    @media screen and (max-width: 1250px) {
        font-size: 1.4rem;
    }
    @media screen and (max-width: 770px) {
        font-size: 1.1rem;
    }
  }
`;

export const Card = styled.div`
  background: transparent;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  padding: 40px;

  @media screen and (max-width: 1250px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    padding: 20px;
  }

  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    padding: 10px;
  }

  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
    padding: 10px;
  }

  @media screen and (max-width: 780px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
    padding: 8px;
  }

`;

export const ContainerSkil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;

  h2 {
    color: #dddddd;
    margin-bottom: 20px;

    @media screen and (max-width: 1900px) {
      font-size: 1.8rem;
    }
    @media screen and (max-width: 1250px) {
      margin-top: 20px;
      font-size: 1.4rem;
    }
    @media screen and (max-width: 770px) {
      font-size: 1.2rem;
    }
  }

  .skills-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 90%;

  @media screen and (max-width: 1250px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-items: center;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

  img {
    width: 60px;
    height: 60px;

    @media screen and (max-width: 1900px) {
      width: 50px;
      height: 50px;
    }
    @media screen and (max-width: 770px) {
      width: 40px;
      height: 40px;
    }
  }
`;
