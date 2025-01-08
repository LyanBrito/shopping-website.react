import {
	AmazonIcon,
	HMIcon,
	LacosteIcon,
	LevisIcon,
	ObeyIcon,
	ShopfyIcon,
} from "../../assets/svg/export";

import { CarouselContainer, CarouselItens, CarouselSection } from "./styles";

export default function Carousel() {
	return (
		<CarouselSection>
			<CarouselContainer>
				<CarouselItens src={HMIcon} alt="hm-icon" />
				<CarouselItens src={ObeyIcon} alt="obey-icon" />
				<CarouselItens src={ShopfyIcon} alt="shopfy-icon" />
				<CarouselItens src={LacosteIcon} alt="lacoste-icon" />
				<CarouselItens src={LevisIcon} alt="levis-icon" />
				<CarouselItens src={AmazonIcon} alt="amazon-icon" />
			</CarouselContainer>
		</CarouselSection>
	);
}
