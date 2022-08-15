import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	footer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center',
		paddingHorizontal: 30,
		paddingVertical: 15,
		backgroundColor: '#FFFFFF'
	},
	footerTab: {
		paddingVertical: 15
	},
	footerTabLabel: {
		fontFamily: 'Menlo',
		fontSize: 12,
		lineHeight: 24,
		textTransform: 'uppercase'
	}
});