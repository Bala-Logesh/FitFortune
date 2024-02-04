import mongoose from "mongoose";

const VitalsSchema = new mongoose.Schema({
  values: { type: [Number], required: true },
  points: { type: Number, required: true },
});

const VitalsModel = mongoose.model("Vitals", VitalsSchema);
export default VitalsModel;
