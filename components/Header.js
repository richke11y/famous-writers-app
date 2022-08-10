import { Text, View } from 'react-native';

import styles from './styles/stylesHeader.js';

const Header = () => {

	const { header, headerTitle } = styles;

	return (
		<View style={header}>
			
			<Text style={headerTitle}>Famous Writers</Text>
			
		</View>
	)

}

export default Header;