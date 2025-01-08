import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    width: 89.58%;
    height: 62px;
    padding-top: 46px;
    justify-content: space-between;
    align-items: center;
`;
export const HeaderLogo = styled.div`
    display: flex;
    gap: 14px;
    align-items: center;

`;
export const LogoTitle = styled.h1`
    font: 900 40px "Poppins";
    `;
export const LogoImg = styled.img`
    width: 31px;
    height: 29px;
    `;
export const HeaderNav = styled.nav`
    display: flex;
    gap: 65px;
    align-items: center;
    
    `;
export const NavText = styled.a`
    font: 400 22px "Poppins";
    text-decoration: none;
    color: black;
    `;
export const NavButton = styled.button`
    font: 300 24px "Poppins";
    background-color: black;
    color: white;
    padding: 13px 22px;
    border-radius: 7px;
    border: none;

`;
