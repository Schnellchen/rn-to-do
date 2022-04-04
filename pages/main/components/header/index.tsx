import { generateUid } from 'helpers/generate-uid';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, TextInput, Button } from 'react-native';
import { addItem } from 'slices/items-slice';
import { useAppDispatch } from 'store';

const Header: React.FC = () => {
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
		dispatch(addItem({ id: generateUid(), content: value, status: true }));

	return (
		<View>
			<Controller
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
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

			<Button
				title={'Add'}
				disabled={!!errors?.input}
				onPress={handleSubmit(({ input }) => addNewItem(input))}
			/>
		</View>
	);
};

export { Header };
