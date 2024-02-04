import mongoose from "mongoose";

const ECGSchema = new mongoose.Schema({
  values: { type: [Number], required: true },
  heartCond: { type: Number, required: true },
});

const ECGModel = mongoose.model("ECG", ECGSchema);
export default ECGModel;
