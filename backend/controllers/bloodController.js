import BloodBank from "../Schema/BloodBank.js";



const bloodFields={


"A+": "inventory.A_Positive",

"A-": "inventory.A_Negative",

"B+": "inventory.B_Positive",

"B-": "inventory.B_Negative",

"AB+": "inventory.AB_Positive",

"AB-": "inventory.AB_Negative",

"O+": "inventory.O_Positive",

"O-": "inventory.O_Negative"


};






export const searchBlood = async(req,res)=>{


try{


const {

bloodGroup,

location,

hospital,

urgent

}=req.query;



let query={};





// Blood group availability

if(bloodGroup){


query[
bloodFields[bloodGroup]
]
={
$gt:0
};


}






// Search city

if(location){


query.$or=[


{
city:{
$regex:location,
$options:"i"
}
},


{
district:{
$regex:location,
$options:"i"
}
},


{
state:{
$regex:location,
$options:"i"
}
},


{
address:{
$regex:location,
$options:"i"
}
}


];


}






// Search hospital/blood bank name

if(hospital){


query.name={

$regex:hospital,

$options:"i"

};


}







const result=

await BloodBank.find(query);





res.status(200).json(result);



}



catch(error){


console.log(error);


res.status(500).json({

message:"Blood search failed",

error:error.message

});


}



};