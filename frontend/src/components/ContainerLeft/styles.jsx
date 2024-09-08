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
    box-shadow: 0px 0px 22px rgba(123, 123, 123, 0.5); 
    background: rgba(51, 51, 51, 0.4); 
`


export const Imagem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px 0 40px 0;
    background-color: #343434;
    height: 10vh;
    width: 5vw;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
`

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    text-align: center; 
    width: 100%; 
    background: transparent; 
    margin-top: 20px;

    h3{
        color: #fff;
        background: transparent; 
        margin-bottom: 20px;
    }

    p{
        color: #fff;
        background: transparent; 
        margin-bottom: 30px;
    }
`
export const Line = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%; 
    height: 2px;
    background-color: #4b4b4b;
    margin: 10px 0px;
`

export const ContainInfor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #fff;
  background: transparent; 
  margin-top: 40px;
  width: 60%;

  div {
    display: flex;
    align-items:center;
    gap: 20px; 
    background: transparent; 
  }

  a {
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3434342c;
    height: 4vh;
    width: 2.5vw;
    border: #ffffff16 solid 1px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); 
    }
  }

  span {
    font-size: 16px;
    color: #fff;
    background: transparent; 
  }
`;
