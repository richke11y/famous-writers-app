import { View } from 'react-native';

import Header from './Header.js';
import Footer from './Footer.js';
import AppText from './AppText.js';

import styles from './styles/stylesMain.js';

const Main = () => {

	const { main, mainView } = styles;

	return (
		<View style={main}>

			<Header />

			<View style={mainView}>

				<AppText text={'William Shakespeare (bapt. 26 April 1564 – 23 April 1616) was an English playwright, poet and actor. He is widely regarded as the greatest writer in the English language and the worlds greatest dramatist. He is often called Englands national poet and the "Bard of Avon" (or simply "the Bard").'}>
			</AppText>

			</View>

			<Footer />

		</View>
	);

}

export default Main;