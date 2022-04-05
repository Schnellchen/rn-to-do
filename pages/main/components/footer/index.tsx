import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useAppDispatch } from 'store';
import { FiltrationType } from 'types';
import { removeCompleted } from 'slices/items-slice';
import { FooterStyles } from './styles';

const Footer: React.FC<{
	filtrationType: FiltrationType;
	setFiltrationType: (type: FiltrationType) => void;
}> = ({ filtrationType, setFiltrationType }) => {
	const dispatch = useAppDispatch();

	const removeCompletedItems = () => dispatch(removeCompleted());

	return (
		<View style={FooterStyles.wrapper}>
			{Object.values(FiltrationType).map((type) => (
				<TouchableOpacity
					onPress={() => setFiltrationType(type)}
					key={type}
					style={
						filtrationType === type
							? FooterStyles.activeButton
							: FooterStyles.button
					}
				>
					<Text>{type}</Text>
				</TouchableOpacity>
			))}

			<TouchableOpacity onPress={removeCompletedItems}>
				<Text>Remove completed</Text>
			</TouchableOpacity>
		</View>
	);
};

export { Footer };
