import HeroImg from "../../../assets/imgs/girl-with-fur-cloath.jpg";
import {
	HeroButton,
	HeroContainer,
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
			<HeroImage src={HeroImg} alt="vibing-girl" />
		</HeroContainer>
	);
}
