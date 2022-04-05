type Item = { id: string; status: boolean; content: string };

type InitialState = { items: Item[] };

enum FiltrationType {
	ALL = 'All',
	ACTIVE = 'Active',
	COMPLETED = 'Completed',
}

export type { Item, InitialState };

export { FiltrationType };
