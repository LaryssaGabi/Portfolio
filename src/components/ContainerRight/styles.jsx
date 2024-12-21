import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: calc(25vw + 80px);
  min-height: 100vh;
  width: calc(65vw - 90px);
  border-radius: 30px;
  background: rgba(51, 51, 51, 0.342);
  box-shadow: 0px 0px 22px rgba(189, 189, 189, 0.5);

  @media screen and (max-width: 800px) {
    position: static; 
    width: 100%;       
    margin: 0 auto;   
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 1900px) and (resolution: 96dpi) {
    position: static; 
    
}

`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 60px 20px 0 20px;
  border-top-right-radius: 30px;
  background: transparent;
`;
