import React from 'react';
import { View } from 'react-native';
import { Header } from './components/header';
import { List } from './components/list';
import { MainStyles } from './styles';

export const Main = () => {
	return (
		<View style={MainStyles.wrapper}>
			<Header />

			<List />
		</View>
	);
};
