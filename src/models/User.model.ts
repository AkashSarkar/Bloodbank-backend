import { Document, Model, Schema, model } from "mongoose";

export interface IUser {
  firstName: string;
  lastName: string;
  age: number;
  dateOfEntry?: Date;
  lastUpdated?: Date;
}
const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  dateOfEntry: {
    type: Date,
    default: new Date(),
  },
  lastUpdated: {
    type: Date,
    default: new Date(),
  },
});

export interface IUserDocument extends IUser, Document {}
export interface IUserModel extends Model<IUserDocument> {}

export const UserModel = model<IUserDocument>("user", UserSchema);
