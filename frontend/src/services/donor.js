import API from "./axios";

export const getAllDonors = () =>

    API.get("/donors");

export const getDonorById = (id) =>

    API.get(`/donors/${id}`);

export const searchDonors = (params) =>

    API.get("/donors/search", {

        params

    });

export const updateDonor = (id, data) =>

    API.put(`/donors/${id}`, data);

export const deleteDonor = (id) =>

    API.delete(`/donors/${id}`);