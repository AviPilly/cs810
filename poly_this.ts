// polymorphic this type
class BasicCalculator {
	public constructor(protected value: number = 0) {}
	public currentValue(): number {
		return this.value;
	}
	public add(operand: number): this {
		this.value += operand;
		return this;
	}
	public multiply(operand: number): this {
		this.value *= operand;
		return this;
	}
	public sub(operand: number): this {
		this.value -= operand;
		return this;
	}
	public div(operand: number): this {
		this.value /= operand;
		return this;
	}
}

const calc = new BasicCalculator(3);
const res = calc
	.add(2)
	.multiply(10)
	.div(6);
console.log(res);
