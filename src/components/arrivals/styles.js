import styled from "styled-components";

export const ArrivalsSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 89.58%;
    height: fit-content;
    gap: 101px;

`;

export const Cards = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    justify-content: space-between;
    align-items: center;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 26.20%;
    gap: 28px;
    justify-content: space-between;
    align-items: center;
`;

export const CardImage = styled.img`
    width: 484px;

`;
export const CardDescription = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    `;

export const DescriptionText = styled.div`
    display: flex;
    flex-direction: column;
    `;

export const CardButton = styled.button`
    border: 0;
    width: 32px;
    background-color: transparent;
    `;

export const ArrowImage = styled.img`
    width: 32px;

`;
export const ArrivalsTitle = styled.h3`
    font: 900 48px "Poppins";
    width: 24.67%;
    height: 57.94px;
    background-image: url(https://github.com/user-attachments/assets/917fcf6a-063f-45d6-b43b-6b0f239a9c95);
    `;

export const DescriptionTitle = styled.h6`
    font: 500 32px "Poppins";
`;

export const DescriptionSubTitle = styled.p`
    font: 500 24px "Poppins";    
    color: #7F7F7F;
`;
