import { Element, VibingGirl } from "../../assets/svg/export";
import {
	HeroButton,
	HeroContainer,
	HeroElement,
	HeroImage,
	HeroText,
	HeroTitle,
	TextWrapper,
} from "./styles";

export default function Hero() {
	return (
		<HeroContainer>
			<TextWrapper>
				<HeroTitle>LETS EXPLORE UNIQUE CLOTHES.</HeroTitle>
				<HeroText>Live for Influential and Innovative fashion!</HeroText>
				<HeroButton>Shop Now</HeroButton>
			</TextWrapper>
			<HeroImage src={VibingGirl} alt="vibing-girl" />
		</HeroContainer>
	);
}
