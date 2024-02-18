import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  aud: {
    type: String,
  },
  azp: {
    type: String,
  },
  email: {
    type: String,
  },
  email_verified: {
    type: Boolean,
  },
  exp: {
    type: Number,
  },
  given_name: {
    type: String,
    required: true,
  },
  iat: {
    type: Number,
  },
  iss: {
    type: String,
  },
  jti: {
    type: String,
  },
  locale: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  nbf: {
    type: Number,
  },
  picture: {
    type: String,
    required: true,
  },
  sub: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
