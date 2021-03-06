import CheckBox from '@react-native-community/checkbox';
import { generateUid } from 'helpers/generate-uid';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, TextInput, Button } from 'react-native';
import { addItem, changeStatuses } from 'slices/items-slice';
import { useAppDispatch } from 'store';
import { HeaderStyles } from './styles';

const Header: React.FC<{
	isAllCompleted: boolean;
	setAllCompleted: (value: boolean) => void;
}> = ({ isAllCompleted, setAllCompleted }) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			input: '',
		},
	});

	const dispatch = useAppDispatch();

	const addNewItem = (value: string) =>
		dispatch(addItem({ id: generateUid(), content: value, status: false }));

	const changeItemsStatuses = (value: boolean) => {
		setAllCompleted(value);
		dispatch(changeStatuses(value));
	};

	return (
		<View style={HeaderStyles.wrapper}>
			<View style={HeaderStyles.inputWrapper}>
				<CheckBox
					value={isAllCompleted}
					onValueChange={(value) => changeItemsStatuses(value)}
				/>

				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							style={HeaderStyles.input}
							onBlur={onBlur}
							onChangeText={(value) => onChange(value)}
							value={value}
							placeholder={'Add something'}
						/>
					)}
					name="input"
					rules={{ required: true }}
					defaultValue=""
				/>
			</View>

			<View style={HeaderStyles.button}>
				<Button
					color={'black'}
					title="Add"
					disabled={!!errors?.input}
					onPress={handleSubmit(({ input }) => addNewItem(input))}
				/>
			</View>
		</View>
	);
};

export { Header };
