import { mongoose } from "mongoose";

const connectToDb = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.atlasUser}:${process.env.atlasPassword}@whatappclone.428egr8.mongodb.net/?retryWrites=true&w=majority`
  );
  console.log("DataBase connected Successfully.");
};

export default connectToDb;
