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
			{Object.values(FiltrationType).map((type) => {
				const isActive = filtrationType === type;

				return (
					<TouchableOpacity
						onPress={() => setFiltrationType(type)}
						key={type}
						style={{
							...FooterStyles.button,
							...(isActive
								? FooterStyles.activeButton
								: FooterStyles.inactiveButton),
						}}
					>
						<Text style={isActive ? FooterStyles.activeButtonText : {}}>
							{type}
						</Text>
					</TouchableOpacity>
				);
			})}

			<TouchableOpacity
				onPress={removeCompletedItems}
				style={{ ...FooterStyles.button, ...FooterStyles.removeButton }}
			>
				<Text>Remove completed</Text>
			</TouchableOpacity>
		</View>
	);
};

export { Footer };
