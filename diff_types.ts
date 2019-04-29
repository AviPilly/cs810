// figure out basic type

// type of example
const test = 'asdf';

if (typeof test === 'string') {
	console.log('test is type string');
} else {
	console.log('test is not type string');
}

// instance of example
class Person {
	constructor(protected name: String) {}

	get Name() {
		return this.name;
	}
}

class Student extends Person {
	constructor(protected name: String, private grade: String) {
		super(name);
	}
	get Grade() {
		return this.grade;
	}
}

const student = new Student('bob', 'freshman');
const person = new Person('alice');

if (student instanceof Student) {
	console.log('student is type Student');
} else {
	console.log('student is not type Student');
}

if (person instanceof Student) {
	console.log('person is type Student');
} else {
	console.log('person is not type Student');
}

if (student instanceof Person) {
	console.log('student is type Person');
} else {
	console.log('student is not type Person');
}

if (person instanceof Person) {
	console.log('person is type Person');
} else {
	console.log('person is not type Person');
}

interface Car {
	name: String;
	year: String;
}

interface Sudan extends Car {
	roof: Boolean;
}

function isSudan(car: Car): car is Sudan {
	return (<Sudan>car).roof !== undefined;
}

const car = { name: 'car1', year: '2019' };
const sudan = { name: 'car2', year: '2019', roof: true };

if (isSudan(car)) {
	console.log('car is sudan');
} else {
	console.log('car is not sudan');
}
if (isSudan(sudan)) {
	console.log('sudan is sudan');
} else {
	console.log('sudan is not sudan');
}

//interestingly tho

const house = { roof: true, name: 'house1', year: '1990', new: false };
if (isSudan(house)) {
	console.log('house is sudan');
} else {
	console.log('house is not sudan');
}
