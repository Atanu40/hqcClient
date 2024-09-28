export interface Patient {
  id?: number;
  uhid: string;
  firstName: string;
  lastName: string;
  sex: string;
  dateOfBirth: Date | string;
  dateTimeOfDeath?: Date;
  createdAt?: Date;
  modifiedAt?: Date;
}
