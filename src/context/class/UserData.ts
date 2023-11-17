import { IUserData } from "../shared/interface/IUserData";
import { Age } from "./value-object/Age";
import { Email } from "./value-object/Email";
import { FirstName } from "./value-object/FirstName";
import { Gender } from "./value-object/Gender";
import { LastName } from "./value-object/LastName";
import { Password } from "./value-object/Password";

export class UserData {

    readonly firstName: FirstName;
    readonly lastName: LastName;
    readonly age: Age;
    readonly email: Email;
    readonly password: Password;
    readonly gender: Gender;

    constructor(userData: IUserData) {
        this.firstName = userData.firstName
        this.lastName = userData.lastName
        this.age = userData.age
        this.email = userData.email
        this.password = userData.password
        this.gender = userData.gender
    }

    static create(userData: IUserData) {
        return new UserData(userData)
    }
}