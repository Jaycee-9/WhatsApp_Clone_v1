import mongoose from "mongoose";

const ConservationSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const conservation = mongoose.model("Conversation", ConservationSchema);
export default conservation;
