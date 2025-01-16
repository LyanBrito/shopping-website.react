import styled from "styled-components";

export const CommunityContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 43px;
    width: 100%;
    height: 623px;
    background-color: #E5C643;
`;
export const InputContainer = styled.div`
    display: flex;
    background-color: #FFF;
    border-radius: 10px;
    padding: 10px 27px;
    gap: 90px;
`;
export const CommunityTitle = styled.h2`
    font: 900 55px "Poppins";
    color: #FFF;
    width: 997px;
    text-align: center;
    line-height: 70px;
    
    `;
export const CommunityText = styled.p`
    font: 400 32px "Poppins";
    line-height: 35px;
    color: #FFF;
    
    `;
export const CommunityInput = styled.input`
    font: 400 24px "Poppins";
    color : #767676;
    background-color: transparent;
    border: none;
    `;
export const CommunityButton = styled.button`
    font: 500 33px "Poppins";
    background-color: black;
    color: white;
    padding: 16px 37px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: 0.3s ease;
`;
