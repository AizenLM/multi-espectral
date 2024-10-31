import mongoose from "mongoose";
import bcrypt, { hash } from "bcrypt";
import {generateAccessToken} from '../auth/generateToken.js'
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (this.isModified("password") || this.isNew) {
    const document = this;
    bcrypt.hash(document.password, 10, (err, hash) => {
      if (err) {
        next(err);
      } else {
        document.password = hash;
        next();
      }
    });
  }
});

userSchema.methods.emailExist = async (email) => {
  const result = await mongoose.model("User").find({ email });
  return result.length > 0;
};
userSchema.methods.commparePassword = async (password, hash) => {
  const same = await bcrypt.compare(password, hash);
  return same;
};

userSchema.methods.createAccessToken = ()=>{
    return generateAccessToken(getUserInfo(this))
}
userSchema.methods.createRefreshToken = ()=>{
  
}

const User = mongoose.model("User", userSchema);

export default User;
