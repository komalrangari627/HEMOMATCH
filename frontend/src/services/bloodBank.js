import API from "./axios";


export const getBloodBanks = () =>
API.get("/bloodbanks/all");



export const getBloodStock = () =>
API.get("/bloodbanks/stock");



export const updateBloodStock = (data)=>
API.put("/bloodbanks/stock",data);



export const searchBlood = (criteria)=>
API.post("/blood/search",criteria);