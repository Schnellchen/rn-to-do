import React from 'react';
import { TextInput as ReactNativeTextInput } from 'react-native';

export interface TextInputProps {
	value: string;
	onChangeText: (text: string) => void;
	onBlur?: (e: unknown) => void;
	placeholder?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
	value,
	onChangeText,
	onBlur,
	placeholder,
}) => (
	<ReactNativeTextInput
		value={value}
		onChangeText={onChangeText}
		onBlur={onBlur}
		placeholder={placeholder}
	/>
);
