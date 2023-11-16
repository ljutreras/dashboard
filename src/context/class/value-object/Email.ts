export class Email {

    readonly value: string;

    constructor(value: string) {
        this.value = value
    }

    static create(value: string) {
        return new Email(value)
    }
}