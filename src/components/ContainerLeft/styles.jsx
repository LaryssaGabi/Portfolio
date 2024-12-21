import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 70px;
  left: 70px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  background-color: #b0b6b6;
  height: calc(100vh - 100px); 
  width: 25vw;
  border-radius: 30px;
  box-shadow: 0px 0px 22px rgba(189, 189, 189, 0.5); 
  background: rgba(51, 51, 51, 0.342);

  @media screen and (max-width: 1024px) {
    width: 30vw;
    left: 20px;
  }
    @media screen and (max-width: 800px) {
      position: static; 
      width: 90%;    
      margin: 0 auto;   
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 40px;
  }
`;

export const Imagem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0 20px 0;
  height: 14vh;
  width: 8vw;

  img {
    width: 100%;
    height: auto;
    border-radius: 100px;
    box-shadow: 0 4px 15px rgba(242, 242, 242, 0.2);
  }

    @media screen and (max-width: 1900px) {
      height: 15vh;
      width: 8vw;
    }
    @media screen and (max-width: 800px) {
      height: 15vh;
      width: 15vw;
      margin: 10px 0 20px 0;
    }

`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  text-align: center; 
  width: 100%; 
  background: transparent; 
  margin-top: 20px;

  h3 {
    color: #fff;
    background: transparent; 
    margin-bottom: 20px;
    font-size: 1.5rem;

    @media screen and (max-width: 1900px) {
      font-size: 1.2rem;
    }

    @media screen and (max-width: 1200px) {
      font-size: 1.2rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: transparent; 
    font-size: 15px;
    margin-bottom: 30px;
    width: 8vw;
    height: 2.5vh;
    border-radius: 5px;
    background-color: #3434347a;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    @media screen and (max-width: 1900px) {
      font-size: 0.8rem;
      width: 12vw;
    }

    @media screen and (max-width: 900px) {
      width: 42%;
      font-size: 12px;
    }

    @media screen and (max-width: 800px) {
      width: 25%;
      font-size: 12px;
    }

  }
`;

export const Line = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%; 
  height: 2px;
  background-color: #4b4b4b;
  margin: 10px 0px 35px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);


`;

export const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Span = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1rem;

  @media screen and (max-width: 1900px) {
      font-size: 0.8rem;
      width: 12vw;
    }

    span,label{
      @media screen and (max-width: 900px) {
        display: none; 
      }
    }
`;

export const ContainInfor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  color: #fff;
  background: transparent;



  div {
    display: flex;
    gap: 10px;
    background: transparent;
  }

  a {
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3434342c;
    height: 6vh;
    width: 4vw;
    border: #ffffff16 solid 1px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }

    &:active {
      box-shadow: 0 4px 8px rgba(252, 252, 252, 0.2);
      background-color: #6a69692c;
    }

    @media screen and (max-width: 1900px) {
      width: 3vw;
      height: 5vh;
    }

    @media screen and (max-width: 900px) {
      width: 6vw;
      height: 5vh;
    }


    @media screen and (max-width: 480px) {
      width: 10vw;
      height: 4vh;
    }
  }
`;
