import { Age } from "@context/class/value-object/Age";
import { Email } from "@context/class/value-object/Email";
import { FirstName } from "@context/class/value-object/FirstName";
import { Gender } from "@context/class/value-object/Gender";
import { LastName } from "@context/class/value-object/LastName";
import { Password } from "@context/class/value-object/Password";

export interface IUserData {
    firstName: FirstName
    lastName: LastName;
    age: Age;
    email: Email;
    password: Password;
    gender: Gender;
}