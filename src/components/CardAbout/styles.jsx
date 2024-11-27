import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  background: transparent;
  color: #dcdada;
  justify-content: center; 
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  background: #0f002336;
  width: 25vw;
  border-radius: 20px;
  border: 1px solid #ffffff51;
  box-shadow: 0px 5px 8px rgba(101, 101, 101, 0.974);
  transition: transform 0.4s ease, box-shadow 0.4s ease, background 0.4s ease;
  cursor: pointer;

  img {
    width: 20%; 
    height: 50%; 
    margin: 40px;
    background: transparent;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    background: transparent;
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 10px;
    background: transparent;

    @media screen and (max-width: 1900px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 1400px) {
      font-size: 0.2rem;
    }
  }

  p {
    font-size: 0.9rem;
    background: transparent;

    @media screen and (max-width: 1900px) {
      font-size: 0.7rem;
      padding-right: 8px;
    }
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 12px 20px #04001b;
    background: #04001b;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 90%;
    img {
      width: 50%;
      height: auto;
      margin: 20px 0;
    }

    .content {
      width: 100%;
      text-align: center;
    }
  }
`;
