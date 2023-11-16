import { Age } from "@context/class/value-object/Age";
import { DriverLicense } from "@context/class/value-object/DriverLicense";
import { Email } from "@context/class/value-object/Email";
import { FirstName } from "@context/class/value-object/FirstName";
import { Gender } from "@context/class/value-object/Gender";
import { LastName } from "@context/class/value-object/LastName";

export interface IUserData {
    firstName: FirstName
    lastName: LastName;
    age: Age;
    email: Email;
    gender?: Gender;
    driver_license?: DriverLicense
}