import API from "./axios";


export const getHospitals = ()=>{

return API.get(
"/hospitals/all"
);

};



export const searchHospitals = (params)=>{

return API.get(
"/hospitals/search",
{
params
}
);

};

export const getHospitalInventory = () =>

    API.get("/hospitals/inventory");

export const updateHospitalInventory = (data) =>

    API.put("/hospitals/inventory", data);