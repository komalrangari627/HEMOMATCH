import API from "./axios";

export const registerUser = (data) =>

    API.post("/auth/register", data);

export const loginUser = (data) =>

    API.post("/auth/login", data);

export const logoutUser = () =>

    API.post("/auth/logout");

export const getCurrentUser = () =>

    API.get("/auth/profile");

export const updateProfile = (data) =>

    API.put("/auth/profile", data);