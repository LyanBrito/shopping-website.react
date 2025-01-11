import styled from "styled-components";

export const HeroContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background-color: #F4F6F5;
    border-radius: 59px;
    gap: 43px;
    width: 89.59%;
    height: 852px;
    `;
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 83px;
    width: 606px;
    gap: 36px;
    `;
export const HeroTitle = styled.h1`
    font: 900 96px "Poppins";       
    line-height: 120px;
    width: 474px; 
    background-image: url(https://github.com/user-attachments/assets/6ab02da8-941a-4920-a9d1-2564a5b49abe);
    background-repeat: no-repeat;
    padding-left: 20px;
    
    `;
export const HeroImage = styled.img`
    width: 784px;
    `;
export const HeroText = styled.p`
    font: 300 28px "Poppins";
    padding-left: 20px;
    `;
export const HeroButton = styled.button`
    font: 300 30px "Poppins";
    background-color: black;
    color: white;
    padding: 13px 22px;
    border-radius: 7px;
    font-size: 24px;
    border: none;
    width: fit-content;
    margin-left: 20px;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
    background-color: #414144;
  }

    `;
export const HeroElement = styled.img`
    position: absolute;
    top: 243px;
    left: 181px;

    `;
