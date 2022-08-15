import { View } from 'react-native';

import FooterTab from './FooterTab.js';

import styles from './styles/stylesFooter.js';

const Footer = () => {

	const { footer } = styles;

	return (
		<View style={footer}>

			<FooterTab tabLabel="Explore" accessLabel="Explore Writers" />

			<FooterTab tabLabel="Favourites" accessLabel="View Your Favourite" />

			<FooterTab tabLabel="Search" accessLabel="Search For Writers" />

			<FooterTab tabLabel="Settings" accessLabel="Explore Adjust App Settings" />

		</View>
	)
}

export default Footer;