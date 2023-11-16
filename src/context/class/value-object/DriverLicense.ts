export class DriverLicense {

    readonly value: boolean;

    constructor(value: boolean) {
        this.value = value
    }

    static create(value: boolean) {
        return new DriverLicense(value)
    }
}