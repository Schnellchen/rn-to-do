import React, { useState } from 'react';
import { View } from 'react-native';
import { FiltrationType } from 'types';
import { Header } from './components/header';
import { List } from './components/list';
import { Footer } from './components/footer';
import { MainStyles } from './styles';

export const Main = () => {
	const [isAllCompleted, setAllCompleted] = useState(false);
	const [filtrationType, setFiltrationType] = useState(FiltrationType.ALL);

	return (
		<View style={MainStyles.wrapper}>
			<Header
				isAllCompleted={isAllCompleted}
				setAllCompleted={setAllCompleted}
			/>

			<List filtrationType={filtrationType} setAllCompleted={setAllCompleted} />

			<Footer
				filtrationType={filtrationType}
				setFiltrationType={setFiltrationType}
			/>
		</View>
	);
};
