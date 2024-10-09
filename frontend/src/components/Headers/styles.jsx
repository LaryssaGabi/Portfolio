import styled from "styled-components";

export const Header = styled.header`
  position: absolute; 
  top: 80;
  right: 86px; 
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: rgba(51, 51, 51, 0.4);
  border-top-right-radius: 30px;
  border-bottom-left-radius: 20px;
  width: 25vw;
  height: 6vh;

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
