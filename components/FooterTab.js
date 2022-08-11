import { Alert, Pressable, Text } from 'react-native';
import { useFonts } from 'expo-font';

import styles from './styles/stylesFooter.js';

const { footerTab, footerTabLabel } = styles;

const FooterButton = ({ tabLabel, accessLabel }) => {

	const [loaded] = useFonts({
		Menlo: require('../assets/fonts/Menlo.ttf'),
	});

	if (!loaded) return null;

	const onPressFunc = () => Alert.alert(`${tabLabel}`)

	return (
		<Pressable style={footerTab} onPress={onPressFunc}>

			<Text style={footerTabLabel} accessibilityLabel={accessLabel}>{tabLabel}</Text>

		</Pressable>
	)

}

export default FooterButton;