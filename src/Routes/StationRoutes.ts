import express from "express";

import {
  GetAllStations,
  GetOneMalam,
  StationAssignMalam,
  StationCreatesMalam,
} from "../Controllers/StationController";

const StationRouter = express.Router();

// Register malams:
StationRouter.route("/registermalam/:stationID").post(StationCreatesMalam);

// Station assigning tasks to malams:
StationRouter.route(
  "/assign-malam/:stationID/:malamID/:CurrentrequestID"
).patch(StationAssignMalam);

// Get a single malam:
StationRouter.route("/malam/:malamID").get(GetOneMalam);

// Get All Stations:
StationRouter.route("/all-stations").get(GetAllStations);

export default StationRouter;
