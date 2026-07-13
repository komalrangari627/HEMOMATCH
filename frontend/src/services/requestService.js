import API from "./axios";

/* ===========================
   CREATE REQUEST
=========================== */

export const createRequest = (data) =>
  API.post("/requests", data);

/* ===========================
   GET ALL REQUESTS
=========================== */

export const getAllRequests = () =>
  API.get("/requests");

/* ===========================
   GET MY REQUESTS
=========================== */

export const getMyRequests = () =>
  API.get("/requests/my");

/* ===========================
   GET EMERGENCY REQUESTS
=========================== */

export const getEmergencyRequests = () =>
  API.get("/requests/emergency");

/* ===========================
   GET SINGLE REQUEST
=========================== */

export const getRequest = (id) =>
  API.get(`/requests/${id}`);

/* ===========================
   UPDATE REQUEST
=========================== */

export const updateRequest = (id, data) =>
  API.put(`/requests/${id}`, data);

/* ===========================
   UPDATE STATUS
=========================== */

export const updateRequestStatus = (id, status) =>
  API.put(`/requests/${id}/status`, {
    status,
  });

/* ===========================
   DELETE REQUEST
=========================== */

export const deleteRequest = (id) =>
  API.delete(`/requests/${id}`);

/* ===========================
   DASHBOARD STATS
=========================== */

export const getRequestStats = () =>
  API.get("/requests/stats");