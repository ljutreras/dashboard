import { IUserData } from "../shared/interface/IUserData";
import { Age } from "./value-object/Age";
import { Email } from "./value-object/Email";
import { FirstName } from "./value-object/FirstName";
import { LastName } from "./value-object/LastName";

export class UserData {

    readonly firstName: FirstName;
    readonly lastName: LastName;
    readonly age: Age;
    readonly email: Email;

    constructor(userData: IUserData) {
        this.firstName = userData.firstName
        this.lastName = userData.lastName
        this.age = userData.age
        this.email = userData.email
    }

    static create(userData: IUserData) {
        return new UserData(userData)
    }
}