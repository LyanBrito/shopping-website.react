import styled from "styled-components";

export const BannerComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 968px;
    background-image: url(https://github.com/user-attachments/assets/5708a064-064f-4772-b0d6-0cb2ef048029);
    background-repeat: no-repeat;
    
    `;
export const BannerTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 42px;
    width: 645px;
    height: 674.21px;
    padding-right: 135px;
    
`;
export const BannerTitle = styled.h1`
    font: 900 111.61px "Poppins";
    line-height: 137.2px;
    `;

export const BannerText = styled.p`
    font: 500 36.04px "Poppins";
    line-height: 52.3px;
    width: 680px;
`;

export const TextWeight = styled.b`
    font: 700 36.04px "Poppins";  
`;

export const BannerButton = styled.a`
    font: 600 27.9px "Poppins";    
    color: #FFF;
    background-color: black;
    width: fit-content;
    padding: 32.55px 51.26px;
    border-radius: 7px;
    border: none;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
    background-color: #414144;
  }

`;
