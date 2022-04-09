import CheckBox from '@react-native-community/checkbox';
import React, { useEffect, useState } from 'react';
import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { changeStatus, removeItem, changeContent } from 'slices/items-slice';
import { Store, useAppDispatch } from 'store';
import { FiltrationType, Item } from 'types';
import { ListStyles, ListItemStyles } from './styles';
import DeleteIcon from 'assets/icons/delete.svg';

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
					<DeleteIcon width={15} height={15} fill={'gray'} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const List: React.FC<{
	filtrationType: FiltrationType;
	setAllCompleted: (value: boolean) => void;
}> = ({ filtrationType, setAllCompleted }) => {
	const { items } = useSelector((state: Store) => state.itemsReducer);

	const hasActive = items.some((item) => !item.status);

	const filteredItems = items.filter((item) =>
		filterItem(filtrationType, item),
	);

	useEffect(() => {
		setAllCompleted(!hasActive);
	}, [hasActive, setAllCompleted]);

	return (
		<ScrollView contentContainerStyle={ListStyles.wrapper}>
			{filteredItems.map((item) => (
				<ListItem key={item.id} {...item} />
			))}
		</ScrollView>
	);
};

export { List };
