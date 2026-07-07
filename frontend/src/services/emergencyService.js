import API from "./axios";

export const createEmergencyRequest = (data) =>
  API.post("/emergency", data);