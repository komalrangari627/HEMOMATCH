import API from "./axios";

export const getNotifications = () =>

    API.get("/notifications");

export const markAsRead = (id) =>

    API.put(`/notifications/${id}`);

export const deleteNotification = (id) =>

    API.delete(`/notifications/${id}`);