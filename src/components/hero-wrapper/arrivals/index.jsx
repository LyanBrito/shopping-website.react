import GirlPuttingCloath from "../../../assets/imgs/girl-putting-cloath.png";
import GirlUsingPhone from "../../../assets/imgs/girl-using-phone.png";
import GirlWithGlasses from "../../../assets/imgs/girl-with-glasses.png";

import { RightArrow } from "../../../assets/svg/export";
import {
	ArrivalsSection,
	ArrivalsTitle,
	ArrowImage,
	Card,
	CardButton,
	CardDescription,
	CardImage,
	Cards,
	DescriptionSubTitle,
	DescriptionText,
	DescriptionTitle,
} from "./styles";

export default function Arrivals() {
	return (
		<ArrivalsSection>
			<ArrivalsTitle>NEW ARRIVALS</ArrivalsTitle>
			<Cards>
				<Card>
					<CardImage src={GirlPuttingCloath} alt="girl-putting-cloath" />
					<CardDescription>
						<DescriptionText>
							<DescriptionTitle>Hoodies & Sweatshirt</DescriptionTitle>
							<DescriptionSubTitle>Explore Now!</DescriptionSubTitle>
						</DescriptionText>
						<CardButton>
							<ArrowImage src={RightArrow} alt="right-arrow" />
						</CardButton>
					</CardDescription>
				</Card>
				<Card>
					<CardImage src={GirlUsingPhone} alt="girl-using-phone" />
					<CardDescription>
						<DescriptionText>
							<DescriptionTitle>Coats & Parkas</DescriptionTitle>
							<DescriptionSubTitle>Explore Now!</DescriptionSubTitle>
						</DescriptionText>
						<CardButton>
							<ArrowImage src={RightArrow} alt="right-arrow" />
						</CardButton>
					</CardDescription>
				</Card>
				<Card>
					<CardImage src={GirlWithGlasses} alt="girl-with-glasses" />
					<CardDescription>
						<DescriptionText>
							<DescriptionTitle>Tees & T-Shirt</DescriptionTitle>
							<DescriptionSubTitle>Explore Now!</DescriptionSubTitle>
						</DescriptionText>
						<CardButton>
							<ArrowImage src={RightArrow} alt="right-arrow" />
						</CardButton>
					</CardDescription>
				</Card>
			</Cards>
		</ArrivalsSection>
	);
}
