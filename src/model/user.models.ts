import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcryptjs'
import {
  AvailableUserRoles,
  UserRolesEnum,
} from "../constants";
import { Cart } from "./cart.models";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: AvailableUserRoles,
      default: UserRolesEnum.USER,
      required: true,
    },
    password: {
      type: String,
      required: true
    }

  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password: string) {
  console.log("inside isPasswordCorrect=>",password)
  const result = await bcrypt.compare(password, this.password);
  console.log(result)
  return result
};


export const User = mongoose.models.users || mongoose.model("users", userSchema)
