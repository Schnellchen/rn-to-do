import { StyleSheet } from 'react-native';

const ListStyles = StyleSheet.create({
	wrapper: {
		alignItems: 'center',
	},
});

const ListItemStyles = StyleSheet.create({
	wrapper: {
		width: '95%',
		marginTop: 5,
		marginBottom: 5,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
	},
	content: { flex: 2 },
	side: { flex: 1, alignItems: 'center' },
});

export { ListStyles, ListItemStyles };
