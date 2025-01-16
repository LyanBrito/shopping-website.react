import {
	DownloadAndroid,
	DownloadApple,
	MobilePreview,
} from "../../assets/svg/export";
import {
	DownloadFrames,
	TextWrapper,
	VoucherContainer,
	VoucherText,
	VoucherTitle,
} from "./styles";

export default function VoucherComponent() {
	return (
		<VoucherContainer>
			<TextWrapper>
				<VoucherTitle>DOWNLOAD APP & GET THE VOUCHER!</VoucherTitle>
				<VoucherText>
					Get 30% off for first transaction using Rondovision mobile app for
					now.
				</VoucherText>
				<DownloadFrames>
					<img src={DownloadApple} alt="download-apple-img" />
					<img src={DownloadAndroid} alt="download-android-img" />
				</DownloadFrames>
			</TextWrapper>
			<img src={MobilePreview} alt="" />
		</VoucherContainer>
	);
}
