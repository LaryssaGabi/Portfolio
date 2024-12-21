import styled from "styled-components";

export const Header = styled.header`
  position: absolute; 
  top: 67px;
  right: 92px; 
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: rgba(51, 51, 51, 0.4);
  border-top-right-radius: 30px;
  border-bottom-left-radius: 20px;
  width: 25vw;
  height: 6vh;

  @media screen and (max-width: 1900px) {
    right: 73px; 
    top: 60px;
  }

  @media screen and (max-width: 1200px) {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 800px) {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 0px;
    position: absolute;
    width: 92%; 
    right: 4%;
    top: 60.3%;
    margin: 0;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 800px) and (resolution: 96dpi) {
  /* Estilos para escala de 100% */
  border-top-left-radius: 30px;
  border-bottom-left-radius: 0px;
  position: absolute;
  width: 92%;
  right: 4%;
  top: 62%;
  margin: 0;
  justify-content: space-evenly;
  align-items: center;
}

  @media screen and (max-width: 480px) {
    top: 45%;
  }
  

  button {
    background: transparent;
    border: none;
    color: #9f9f9f;
    cursor: pointer;
    font-size: 18px;
    transition: color 0.3s ease, box-shadow 0.3s ease;

    &.active {
      color: white;
      font-weight: bold; 
      text-shadow: 0 0 8px rgba(255, 255, 255, 0.4); 
    }

    &:hover {
      color: #ffffff; 
    }
  }
`;
