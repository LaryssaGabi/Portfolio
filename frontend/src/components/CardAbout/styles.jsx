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
    }

    p {
        font-size: 0.9rem;
        background: transparent;
    }

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0px 12px 20px #04001b;
        background: #04001b;
    }
`;
