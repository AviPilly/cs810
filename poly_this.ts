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


class ScientificCalculator extends BasicCalculator {
    public constructor(value = 0) {
        super(value);
    }
    public sin() {
        this.value = Math.sin(this.value);
        return this;
    }
    // ... other operations go here ...
}

let v = new ScientificCalculator(2)
        .multiply(5)
        .sin()
        .add(1)
        .currentValue();
