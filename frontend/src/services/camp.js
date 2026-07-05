import API from "./axios";

export const getDonationCamps = () =>

    API.get("/camps");

export const registerCamp = (id) =>

    API.post(`/camps/${id}/register`);

export const createCamp = (data) =>

    API.post("/camps", data);