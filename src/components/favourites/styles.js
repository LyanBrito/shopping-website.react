import styled from "styled-components";

export const FavouritesSection = styled.div`
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
    width: 48.54%;
    gap: 28px;
    justify-content: space-between;
    align-items: center;
`;

export const CardImage = styled.img`
    width: 100%;

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
    cursor: pointer;
    transition: 0.3s ease;

    `;

export const ArrowImage = styled.img`
    width: 32px;

`;
export const FavouritesTitle = styled.div`
    width: 511px;
    height: 73.96px;
    background-image: url(https://github.com/user-attachments/assets/281214e7-5f00-4ff1-91f5-49601f672cc9);
    background-repeat: no-repeat;
    background-position-x: -56px;
    background-position-y: 10px;
    `;

export const TitleH3 = styled.h3`
    font: 900 48px "Poppins";

`
export const DescriptionTitle = styled.h6`
    font: 500 32px "Poppins";
`;

export const DescriptionSubTitle = styled.p`
    font: 500 24px "Poppins";    
    color: #7F7F7F;
`;
