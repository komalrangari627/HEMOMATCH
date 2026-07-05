import API from "./axios";

export const getDashboardStats = () =>

    API.get("/dashboard/stats");

export const getDashboardCharts = () =>

    API.get("/dashboard/charts");

export const getDashboardActivity = () =>

    API.get("/dashboard/activity");