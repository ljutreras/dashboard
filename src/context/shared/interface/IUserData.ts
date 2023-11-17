import { Age } from "../../class/value-object/Age";
import { Email } from "../../class/value-object/Email";
import { FirstName } from "../../class/value-object/FirstName";
import { LastName } from "../../class/value-object/LastName";


export interface IUserData {
    firstName: FirstName
    lastName: LastName;
    age: Age;
    email: Email;
}