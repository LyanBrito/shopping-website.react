import {
	CommunityButton,
	CommunityContainer,
	CommunityInput,
	CommunityText,
	CommunityTitle,
	InputContainer,
} from "./styles";

export default function Community() {
	return (
		<CommunityContainer>
			<CommunityTitle>
				JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
			</CommunityTitle>
			<CommunityText>
				Type your email down below and be young wild generation
			</CommunityText>
			<InputContainer>
				<CommunityInput type="text" placeholder="Add your email here" />
				<CommunityButton type="button">SEND</CommunityButton>
			</InputContainer>
		</CommunityContainer>
	);
}
