import API from "./axios";

export const getRequests = () =>

    API.get("/requests");

export const createRequest = (data) =>

    API.post("/requests", data);

export const updateRequest = (id, data) =>

    API.put(`/requests/${id}`, data);

export const deleteRequest = (id) =>

    API.delete(`/requests/${id}`);