import { IUserData } from "../shared/interface/IUserData";
import { Age } from "./value-object/Age";
import { DriverLicense } from "./value-object/DriverLicense";
import { Email } from "./value-object/Email";
import { FirstName } from "./value-object/FirstName";
import { Gender } from "./value-object/Gender";
import { LastName } from "./value-object/LastName";

export class UserData {

    readonly firstName: FirstName;
    readonly lastName: LastName;
    readonly age: Age;
    readonly email: Email;
    readonly gender?: Gender;
    readonly driver_license?: DriverLicense;

    constructor(userData: IUserData) {
        this.firstName = userData.firstName
        this.lastName = userData.lastName
        this.age = userData.age
        this.email = userData.email
        this.gender = userData.gender
        this.driver_license = userData.driver_license
    }

    static create(userData: IUserData) {
        return new UserData(userData)
    }
}