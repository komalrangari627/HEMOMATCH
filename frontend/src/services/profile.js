import API from "./axios";

export const getProfile = () =>

    API.get("/profile");

export const updateProfile = (data) =>

    API.put("/profile", data);

export const uploadAvatar = (formData) =>

    API.post("/profile/upload", formData);