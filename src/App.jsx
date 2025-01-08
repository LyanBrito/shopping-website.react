import Carousel from "./components/carousel/index.jsx";
import Header from "./components/header/index.jsx";
import Hero from "./components/hero/index.jsx";
import { AppContainer } from "./styles.js";

function App() {
	return (
		<AppContainer>
			<Header />
			<Hero />
			<Carousel />
		</AppContainer>
	);
}

export default App;
