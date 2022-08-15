import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';

import styles from './styles/stylesHeader.js';

const Header = () => {

	const [loaded] = useFonts({
		Menlo: require('../assets/fonts/Menlo.ttf'),
	});

	if (!loaded) return null;

	const { header, headerTitle, headerTitleText } = styles;

	return (
		<View style={header}>
			
			<View style={headerTitle}>

				<Text style={headerTitleText}>Famous Writers</Text>

			</View>
			
		</View>
	);

}

export default Header;