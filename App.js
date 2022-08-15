import React from 'react';
import { SafeAreaView } from 'react-native';

import Main from './components/Main.js';

import styles from './stylesApp.js';

const App = () => {

	const { container } = styles;

	return (
		<SafeAreaView style={container}>

			<Main />

		</SafeAreaView>
	);

}

export default App;