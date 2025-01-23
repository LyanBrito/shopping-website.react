import {
	FaceIcon,
	InstaIcon,
	LinkedinIcon,
	TwitterIcon,
} from "../../assets/svg/export";

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
    InfoWrapper,
} from "./styles";

export default function PageFooter() {
	return (
		<FooterContainer>
			<TitleFooter>
				<FooterLogo>FASHION</FooterLogo>
				<FooterText href="#">Complete your style with awesome clothes from us.</FooterText>
				<ButtonWrapper>
					<FooterButton type="button">
						<img src={FaceIcon} alt="face-icon" />
					</FooterButton>
					<FooterButton type="button">
						<img src={InstaIcon} alt="insta-icon" />
					</FooterButton>
					<FooterButton type="button">
						<img src={TwitterIcon} alt="twitter-icon" />
					</FooterButton>
					<FooterButton type="button">
						<img src={LinkedinIcon} alt="linkedin-icon" />
					</FooterButton>
				</ButtonWrapper>
			</TitleFooter>
            <InfoWrapper>
			<CompanyWrapper>
				<InfoTitle>Company</InfoTitle>
				<FooterText href="#">About</FooterText>
				<FooterText href="#">Contact us</FooterText>
				<FooterText href="#">Support</FooterText>
				<FooterText href="#">Careers</FooterText>
			</CompanyWrapper>
			<QuickWrapper>
				<InfoTitle>Quick Link</InfoTitle>
				<FooterText href="#">Share Location</FooterText>
				<FooterText href="#">Orders Tracking</FooterText>
				<FooterText href="#">Size Guide</FooterText>
				<FooterText href="#">FAQs</FooterText>
			</QuickWrapper>
			<LegalWrapper>
				<InfoTitle>Link</InfoTitle>
				<FooterText href="#">Terms & conditions</FooterText>
				<FooterText href="#">Privacy Policy</FooterText>
			</LegalWrapper>
            </InfoWrapper>
		</FooterContainer>
	);
}
