import { StyleSheet } from 'react-native';

const HeaderStyles = StyleSheet.create({
	wrapper: {
		alignItems: 'center',
		justifyContent: 'space-around',
		height: 120,
	},
	inputWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '95%',
		backgroundColor: 'white',
		borderRadius: 10,
	},
	input: { flex: 2 },
	button: { width: '95%', marginTop: 10, marginBottom: 10 },
});

export { HeaderStyles };
