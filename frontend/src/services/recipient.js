import API from "./axios";

export const createBloodRequest = (data) =>

    API.post("/recipients/request", data);

export const getRecipientRequests = () =>

    API.get("/recipients/requests");

export const cancelRequest = (id) =>

    API.delete(`/recipients/request/${id}`);