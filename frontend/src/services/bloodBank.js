import API from "./axios";

export const getBloodBanks = () =>

    API.get("/bloodbanks");

export const getBloodStock = () =>

    API.get("/bloodbanks/stock");

export const updateBloodStock = (data) =>

    API.put("/bloodbanks/stock", data);