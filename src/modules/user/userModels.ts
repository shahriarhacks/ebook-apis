import { model, Schema } from "mongoose";
import { IUser } from "./userInterface";

const userSchema = new Schema<IUser>(
   {
      name: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         unique: true,
         required: true,
      },
      password: {
         type: String,
      },
   },
   {
      timestamps: true,
   }
);

const User = model<IUser>("User", userSchema);

export default User;
