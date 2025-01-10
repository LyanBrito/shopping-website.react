import {
	BannerButton,
	BannerComponent,
	BannerText,
	BannerTextContainer,
	BannerTitle,
	TextWeight,
} from "./styles";

export default function Banner() {
	return (
		<BannerComponent>
			<BannerTextContainer>
				<BannerTitle>PAYDAY SALE NOW</BannerTitle>
				<BannerText>
					Spend minimal $100 get 30% off voucher code for your next purchase
				</BannerText>
				<BannerText>
					<TextWeight>1 June - 10 June 2021 </TextWeight>
					<br />
					*Terms & Conditions apply
				</BannerText>
				<BannerButton href="">SHOP NOW</BannerButton>
			</BannerTextContainer>
		</BannerComponent>
	);
}
