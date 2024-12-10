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

  @media screen and (max-width: 980px) {
      font-size: 0.57rem;
      padding-right: 5px;
      width: 45vw;
    }

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
    @media screen and (max-width: 1250px) {
      font-size: 0.8rem;
    }
    @media screen and (max-width: 980px) {
      font-size: 0.8rem;
    }
  }

  p {
    font-size: 0.9rem;
    background: transparent;

    @media screen and (max-width: 1900px) {
      font-size: 0.7rem;
      padding-right: 8px;
    }

    @media screen and (max-width: 1250px) {
      font-size: 0.6rem;
      padding-right: 5px;
    }

    @media screen and (max-width: 980px) {
      font-size: 0.7rem;
      padding-right: 5px;
    }

  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 12px 20px #04001b;
    background: #04001b;
  }

  @media screen and (max-width: 770px) {
    flex-direction: column;
    align-items: center;
    width: 65%;

    img {
      width: 40%;
      height: auto;
      margin: 20px 0;
    
    }
    
    .content {
      width: 100%;
      text-align: center;
      padding: 0 0 5px 5px;
    }
  }
`;
