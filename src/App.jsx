import Banner from "./components/banner/index.jsx";
import Community from "./components/community/index.jsx";
import Favourites from "./components/favourites/index.jsx";
import PageFooter from "./components/footer/index.jsx";
import HeroWrapper from "./components/hero-wrapper/index.jsx";
import VoucherComponent from "./components/voucher/index.jsx";
import { AppContainer } from "./styles.js";

function App() {
	return (
		<AppContainer>
			<HeroWrapper />
			<Banner />
			<Favourites />
			<VoucherComponent />
			<Community />
			<PageFooter />
		</AppContainer>
	);
}

export default App;
