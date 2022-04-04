import React from 'react';
import { Button as ReactNativeButton } from 'react-native';

interface ButtonProps {
	title: string;
	onPress: () => void;
	disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ title, disabled, onPress }) => (
	<ReactNativeButton title={title} disabled={disabled} onPress={onPress} />
);
