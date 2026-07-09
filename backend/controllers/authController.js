import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../Schema/User.js";


// =========================
// Generate JWT
// =========================

const generateToken = (id, role) => {

    return jwt.sign(

        {
            id,
            role
        },

        process.env.JWT_SECRET,

        {
            expiresIn:"7d"
        }

    );

};




// =========================
// REGISTER
// =========================

export const register = async (req,res)=>{

    try{


        const {
            name,
            email,
            phone,
            password,
            role

        } = req.body;



        console.log("REGISTER DATA:",req.body);



        if(
            !name ||
            !email ||
            !phone ||
            !password ||
            !role
        ){

            return res.status(400).json({

                success:false,

                message:
                "All fields are required"

            });

        }




        const existingUser =
        await User.findOne({
            email
        });



        if(existingUser){

            return res.status(400).json({

                success:false,

                message:
                "User already exists"

            });

        }




        const hashedPassword =
        await bcrypt.hash(
            password,
            10
        );




        const newUser =
        await User.create({

            name,

            email,

            phone,

            password:
            hashedPassword,

            role:
            role.toLowerCase()

        });





        const token =
        generateToken(

            newUser._id,

            newUser.role

        );





        res.status(201).json({

            success:true,

            message:
            "Registration Successful",

            token,

            user:{

                id:newUser._id,

                name:newUser.name,

                email:newUser.email,

                phone:newUser.phone,

                role:newUser.role

            }

        });



    }

    catch(error){


        console.log(
            "REGISTER ERROR:",
            error
        );


        res.status(500).json({

            success:false,

            message:
            "Registration Failed",

            error:error.message

        });


    }


};







// =========================
// LOGIN
// =========================


export const login = async(req,res)=>{


    try{


        const {
            email,
            password

        } = req.body;




        if(
            !email ||
            !password
        ){

            return res.status(400).json({

                success:false,

                message:
                "Email and password required"

            });

        }




        const existingUser =
        await User.findOne({
            email
        });





        if(!existingUser){


            return res.status(404).json({

                success:false,

                message:
                "User not found"

            });


        }





        const isMatch =
        await bcrypt.compare(

            password,

            existingUser.password

        );





        if(!isMatch){


            return res.status(401).json({

                success:false,

                message:
                "Invalid Credentials"

            });


        }





        const token =
        generateToken(

            existingUser._id,

            existingUser.role

        );






        res.status(200).json({

            success:true,

            message:
            "Login Successful",

            token,

            user:{

                id:
                existingUser._id,

                name:
                existingUser.name,

                email:
                existingUser.email,

                phone:
                existingUser.phone,

                role:
                existingUser.role

            }

        });



    }

    catch(error){


        console.log(
            "LOGIN ERROR:",
            error
        );



        res.status(500).json({

            success:false,

            message:
            "Login Failed",

            error:error.message

        });


    }


};









// =========================
// GET PROFILE
// =========================


export const getProfile = async(
req,
res
)=>{


    try{


        const currentUser =
        await User.findById(
            req.user.id
        )
        .select("-password");





        if(!currentUser){

            return res.status(404).json({

                success:false,

                message:
                "User not found"

            });

        }





        res.status(200).json({

            success:true,

            user:
            currentUser

        });



    }

    catch(error){


        res.status(500).json({

            success:false,

            message:
            error.message

        });


    }


};









// =========================
// UPDATE PROFILE
// =========================


export const updateProfile =
async(req,res)=>{


    try{


        const {
            name,
            phone

        } = req.body;





        const updatedUser =
        await User.findByIdAndUpdate(

            req.user.id,

            {

                name,

                phone

            },

            {

                new:true

            }

        )
        .select("-password");






        res.status(200).json({

            success:true,

            message:
            "Profile Updated Successfully",

            user:
            updatedUser

        });




    }

    catch(error){


        res.status(500).json({

            success:false,

            message:
            error.message

        });


    }


};









// =========================
// CHANGE PASSWORD
// =========================


export const changePassword =
async(req,res)=>{


    try{


        const {

            oldPassword,

            newPassword


        } = req.body;





        const currentUser =
        await User.findById(
            req.user.id
        );





        const isMatch =
        await bcrypt.compare(

            oldPassword,

            currentUser.password

        );





        if(!isMatch){


            return res.status(400).json({

                success:false,

                message:
                "Old Password Incorrect"

            });


        }





        const hashedPassword =
        await bcrypt.hash(

            newPassword,

            10

        );





        currentUser.password =
        hashedPassword;



        await currentUser.save();





        res.status(200).json({

            success:true,

            message:
            "Password Changed Successfully"

        });




    }

    catch(error){


        res.status(500).json({

            success:false,

            message:
            error.message

        });


    }


};









// =========================
// DELETE ACCOUNT
// =========================


export const deleteAccount =
async(req,res)=>{


    try{


        await User.findByIdAndDelete(

            req.user.id

        );





        res.status(200).json({

            success:true,

            message:
            "Account Deleted Successfully"

        });




    }

    catch(error){


        res.status(500).json({

            success:false,

            message:
            error.message

        });


    }


};