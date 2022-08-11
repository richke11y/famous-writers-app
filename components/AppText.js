import { StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';

const styles = StyleSheet.create({
	textBody: {
		color: '#000000',
		fontFamily: 'Menlo',
		fontSize: 18,
		lineHeight: 18 * 1.6
	}
});

const AppText = ({ text }) => {

	const [loaded] = useFonts({
		Menlo: require('../assets/fonts/Menlo.ttf'),
	});

	if (!loaded) return null;

	const { textBody } = styles;

	return <Text style={textBody}>{ text }</Text>;

}

export default AppText;