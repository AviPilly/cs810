// aliases vs interfaces
interface InterfaceTree<T> {
	value: T;
	left: InterfaceTree<T>;
	right: InterfaceTree<T>;
}

let tree: InterfaceTree<number> = { value: 1, left: null, right: null };

type AliasTree<T> = {
	value: TemplateStringsArray;
	left: AliasTree<T>;
	right: AliasTree<T>;
};

interface ExtendedInterfaceTree<T> extends InterfaceTree<T> {
	deleted: boolean;
}

// cant extend alias
// type ExtendedAliasTree<T> extends AliasTree = {
//     deleted: boolean
// }

//literal type

type Money = 'cash' | 'bitcoin' | 'credit';

interface Coin {
	type: Money;
	amount: number;
}

const coins: Coin[] = [
	{ type: 'bitcoin', amount: 0 },
	{ type: 'cash', amount: 2 }
];

//this wont work
// const coin: Coin = {type: 'debt', amount: 2};

// interesting example of alias
type LinkedList<T> = T & { next: LinkedList<T> };

const ll: LinkedList<Coin> = {
	type: 'bitcoin',
	amount: 0,
	next: {
		type: 'cash',
		amount: 2,
		next: null
	}
};

console.log(ll.amount);
console.log(ll.next.amount);
console.log(ll.next.next);

// illegal case to note about aliases

// type CustomAliasArray = Array<CustomAliasArray>
