import React from 'react';
import { SafeAreaView } from 'react-native';

import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

import styles from './stylesApp.js';

const App = () => {

	const { container } = styles;

	return (
		<SafeAreaView style={container}>

			<Header />

			<Main />

			<Footer />

		</SafeAreaView>
	);

}

export default App;