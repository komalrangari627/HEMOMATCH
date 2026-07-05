import API from "./axios";

export const getHospitals = () =>

    API.get("/hospitals");

export const getHospitalInventory = () =>

    API.get("/hospitals/inventory");

export const updateHospitalInventory = (data) =>

    API.put("/hospitals/inventory", data);