import { IUser } from "./userInterface";
import User from "./userModels";

const readUserByEmail = async (email: string): Promise<IUser | null> => {
   const user = await User.findOne({ email });
   return user;
};

export const UserServices = { readUserByEmail };
