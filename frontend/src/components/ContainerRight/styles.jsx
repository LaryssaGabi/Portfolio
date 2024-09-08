import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: calc(25vw + 80px);
  height: 100vh;
  width: calc(65vw - 80px);
  border-radius: 30px;
  background: rgba(51, 51, 51, 0.4);
  box-shadow: 0px 0px 22px rgba(189, 189, 189, 0.5);
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  margin-top: 50px;
  padding: 0 20px;
  background: transparent;
`;
export const Line = styled.div`
  height: 5px;
  width: 10%;
  margin-top: 10px;
  border-radius: 5px;
  background-color: #31a2a2;
  box-shadow: 0 0 10px rgba(49, 162, 162, 0.6); 
  transition: box-shadow 0.3s ease-in-out; 
  
  &:hover {
    box-shadow: 0 0 15px rgba(49, 162, 162, 1); 
  }
`;