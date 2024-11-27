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

  @media screen and (max-width: 768px) {
    width: 40vw;
    height: calc(100vh - 80px);
    top: 50px;
    left: 10px;
    border-radius: 20px;
  }

  @media screen and (max-width: 480px) {
    width: 90vw;
    height: calc(100vh - 50px);
    top: 20px;
    left: 5px;
    border-radius: 15px;
  }
`;

export const Imagem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0 40px 0;
  background-color: #343434;
  height: 10vh;
  width: 5vw;
  border-radius: 15px;

  img {
    width: 100%;
    height: auto;
    border-radius: 100px;
    box-shadow: 0 4px 15px rgba(242, 242, 242, 0.2);
  }

  @media screen and (max-width: 768px) {
    height: 8vh;
    width: 20vw;
  }

  @media screen and (max-width: 480px) {
    height: 6vh;
    width: 50vw;
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

    @media screen and (max-width: 768px) {
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

    @media screen and (max-width: 768px) {
      width: 50%;
      font-size: 12px;
    }

    @media screen and (max-width: 480px) {
      width: 80%;
      font-size: 10px;
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

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
export const Span = styled.div`

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

    @media screen and (max-width: 768px) {
      width: 6vw;
      height: 5vh;
    }

    @media screen and (max-width: 480px) {
      width: 10vw;
      height: 4vh;
    }
  }
`;
