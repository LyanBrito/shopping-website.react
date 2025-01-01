import { Logo } from "../../assets/svg/export";
import { HeaderContainer, HeaderLogo, HeaderNav, LogoImg, LogoTitle, NavButton, NavText } from "./styles";

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderLogo className="logo">
                <LogoImg src={Logo} alt="branch-logo" />
                <LogoTitle>FASHION</LogoTitle>
            </HeaderLogo>
            <HeaderNav>
                <NavText href="#">CATALOG</NavText>
                <NavText href="#">FASHION</NavText>
                <NavText href="#">FAVOURITE</NavText>
                <NavText href="#">LIFESTYLE</NavText>
                <NavButton>SING UP</NavButton>
            </HeaderNav>
        </HeaderContainer>

    )

}