import {
    FaceIcon,
    InstaIcon,
    LinkedinIcon,
    TwitterIcon
} from "../../assets/svg/export"

import {
    FooterContainer,
    TitleFooter,
    FooterText,
    ButtonWrapper,
    CompanyWrapper,
    QuickWrapper,
    LegalWrapper,
    FooterLogo,
    InfoTitle,
    FooterButton,
} from "./styles";

export default function Footer() {
    return (
        <FooterContainer>
            <TitleFooter>
                <FooterLogo>FASHION</FooterLogo>
                <FooterText>About</FooterText>
                <ButtonWrapper>
                    <FooterButton type="button"><img src={FaceIcon} alt="face-icon" /></FooterButton>
                    <FooterButton type="button"><img src={InstaIcon} alt="insta-icon" /></FooterButton>
                    <FooterButton type="button"><img src={TwitterIcon} alt="twitter-icon" /></FooterButton>
                    <FooterButton type="button"><img src={LinkedinIcon} alt="linkedin-icon" /></FooterButton>
                </ButtonWrapper>
            </TitleFooter>
            <CompanyWrapper>
                <InfoTitle>Company</InfoTitle>
                <FooterText>About</FooterText>
                <FooterText>About</FooterText>
                <FooterText>About</FooterText>
                <FooterText>About</FooterText>
            </CompanyWrapper>
            <QuickWrapper>
                <InfoTitle>Quick Link</InfoTitle>
                <FooterText>About</FooterText>
                <FooterText>About</FooterText>
                <FooterText>About</FooterText>
                <FooterText>About</FooterText>
            </QuickWrapper>
            <LegalWrapper>
                <InfoTitle>Link</InfoTitle>
                <FooterText>About</FooterText>
                <FooterText>About</FooterText>
            </LegalWrapper>
            About
        </FooterContainer>
    );
}
