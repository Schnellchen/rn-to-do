import { StyleSheet } from 'react-native';

const FooterStyles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		height: 70,
		alignItems: 'center',
	},
	button: { paddingLeft: 10, paddingRight: 10, borderRadius: 7 },
	inactiveButton: { backgroundColor: 'white' },
	activeButton: { backgroundColor: 'black' },
	removeButton: { borderColor: 'black', borderWidth: 1 },
	activeButtonText: { color: 'white' },
});

export { FooterStyles };
