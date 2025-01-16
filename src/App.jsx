// import Arrivals from "./components/arrivals/index.jsx";
// import Carousel from "./components/carousel/index.jsx";
// import Header from "./components/header/index.jsx";
// import Hero from "./components/hero/index.jsx";

import Banner from "./components/banner/index.jsx";
import Favourites from "./components/favourites/index.jsx";
import HeroWrapper from "./components/hero-wrapper/index.jsx";
import VoucherComponent from "./components/voucher/index.jsx";
import { AppContainer } from "./styles.js";

function App() {
	return (
		<AppContainer>
			{/* <>
			<Header />
			<Hero />
			<Carousel />
			<Arrivals />
			</> */}
			<HeroWrapper />
			<Banner />
			<Favourites />
			<VoucherComponent/>
		</AppContainer>
	);
}

export default App;
