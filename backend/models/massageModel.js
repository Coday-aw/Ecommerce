import mongoose from "mongoose";

const massageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Massage = mongoose.model("Massage", massageSchema);
export default Massage;
