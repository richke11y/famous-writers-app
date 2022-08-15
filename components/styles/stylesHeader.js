import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	header: {
		height: 80,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		backgroundColor: '#FFFFFF'
	},
	headerTitle: {
		height: 80,
		flexDirection: 'column',
		justifyContent: 'center'
	},
	headerTitleText: {
		fontFamily: 'Menlo',
		fontSize: 26,
		fontWeight: '800',
		lineHeight: 28,
		textTransform: 'uppercase'
	}
});