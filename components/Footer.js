import { Text, View } from 'react-native';

import styles from './styles/stylesFooter.js';

const Footer = () => {

	const { footer, footerText } = styles;

	return (
		<View style={footer}>

			<Text style={footerText}>Footer</Text>

		</View>
	)
}

export default Footer;