import Arrivals from "./arrivals/index.jsx";
import Carousel from "./carousel/index.jsx";
import Header from "./header";
import Hero from "./hero";
import { WrapperContainer } from "./styles.js";

export default function HeroWrapper() {
	return (
		<WrapperContainer>
			<Header />
			<Hero />
			<Carousel />
			<Arrivals />
		</WrapperContainer>
	);
}
