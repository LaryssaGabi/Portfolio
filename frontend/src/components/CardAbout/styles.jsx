import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    background: transparent;
    color: #dcdada;
    justify-content: center; /* Centraliza o Card dentro do CardAbout */
`;

export const Cards = styled.div`
    display: flex;
    flex-direction: row; 
    background: #1313138f;
    width: 25vw;
    padding: 30px;
    border-radius: 20px;
    border: 1px solid #ffffff51;
    box-shadow: 0px 8px 10px rgba(20, 20, 20, 0.974);
    transition: transform 0.4s ease, box-shadow 0.4s ease, background 0.4s ease;
    
    img {
        width: 30%; 
        height: 80%; 
        border-radius: 15px; 
        margin-right: 20px;
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
    }

    p {
        font-size: 0.9rem;
        background: transparent;
    }

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0px 12px 20px rgba(20, 20, 20, 1);
        background: #131313c7;
    }
`;
