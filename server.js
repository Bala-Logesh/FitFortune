import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import ECGModel from "./ecg.model.js";
import VitalsModel from "./vitals.model.js";

import ecg_x from "./ecg_x.js";
import ecg_y from "./ecg_y.js";
import vitals_x from "./vitals_x.js";
import vitals_y from "./vitals_y.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

mongoose.connect(process.env.MONGODB_URI);

app.get("/vitals", async (request, response) => {
  let count = 0;
  for (let i = 0; i < vitals_x.length; i++) {
    const vitals = new VitalsModel({
      values: vitals_x[i],
      points: vitals_y[i],
    });

    try {
      await vitals.save();
      count += 1;
    } catch (error) {
      response.status(500).send(error);
    }
  }

  if (count == vitals_x.length) {
    response.sendStatus(200);
  }
});

app.get("/ecg", async (request, response) => {
  let count = 0;
  for (let i = 0; i < ecg_x.length; i++) {
    const ecg = new ECGModel({
      values: ecg_x[i],
      heartCond: ecg_y[i],
    });
    try {
      await ecg.save();
      count += 1;
    } catch (error) {
      response.status(500).send(error);
    }
  }
  if (count == ecg_x.length) {
    response.sendStatus(200);
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
