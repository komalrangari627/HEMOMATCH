import API from "./axios";


export const getDonationCamps = () =>
API.get("/camps/all");



export const registerCamp = (id) =>
API.post(`/camps/${id}/register`);



export const createCamp = (data) =>
API.post("/camps/create", data);