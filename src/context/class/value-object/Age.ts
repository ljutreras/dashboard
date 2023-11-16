export class Age {

    constructor(readonly value: number) {
        this.value = value
    }

    isValid(value: number) {
        return value && value >= 1 ? value : 0
    }

    static create(value: number) {
        return new Age(value)
    }
}