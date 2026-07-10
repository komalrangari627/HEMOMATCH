import API from "./axios";


export const getBloodBanks = () =>
API.get("/bloodbanks/all");



export const getBloodStock = () =>
API.get("/bloodbanks/stock");



export const updateBloodStock = (data)=>
API.put("/bloodbanks/stock",data);



export const searchBlood = async(data)=>{

 const response = await API.get(
    "/blood/search",
    {
      params:data
    }
 );

 return response.data;

};