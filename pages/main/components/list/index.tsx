import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import {
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { changeStatus, removeItem, changeContent } from 'slices/items-slice';
import { Store, useAppDispatch } from 'store';
import { FiltrationType, Item } from 'types';
import { ListItemStyles } from './styles';

const filterItem = (filtrationType: FiltrationType, item: Item) => {
	switch (filtrationType) {
		case FiltrationType.ACTIVE:
			return !item.status;
		case FiltrationType.COMPLETED:
			return item.status;
		default:
			return item;
	}
};

const ListItem: React.FC<Item> = ({ id, content, status }) => {
	const [input, setInput] = useState(content);
	const dispatch = useAppDispatch();

	const changeListItemStatus = (id: string) => dispatch(changeStatus(id));

	const removeListItem = (id: string) => dispatch(removeItem(id));

	const changeListItemContent = (id: string, content: string) =>
		dispatch(changeContent({ id, content }));

	return (
		<View style={ListItemStyles.wrapper}>
			<View style={ListItemStyles.side}>
				<CheckBox
					value={status}
					onValueChange={() => changeListItemStatus(id)}
				/>
			</View>

			<View style={ListItemStyles.content}>
				<TextInput
					value={input}
					onChangeText={(value) => setInput(value)}
					onBlur={() => changeListItemContent(id, input)}
				/>
			</View>

			<View style={ListItemStyles.side}>
				<TouchableOpacity onPress={() => removeListItem(id)}>
					<Text>X</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const List: React.FC<{ filtrationType: FiltrationType }> = ({
	filtrationType,
}) => {
	const { items } = useSelector((state: Store) => state.itemsReducer);

	const filteredItems = items.filter((item) =>
		filterItem(filtrationType, item),
	);

	return (
		<ScrollView>
			{filteredItems.map((item) => (
				<ListItem key={item.id} {...item} />
			))}
		</ScrollView>
	);
};

export { List };
