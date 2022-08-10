import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import styles from './stylesApp.js';

const App = () => {

	const { container } = styles;

	return (
		<SafeAreaView style={container}>

			<View><Text>Famous Writers</Text></View>

		</SafeAreaView>
	);

}

export default App;