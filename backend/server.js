import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import donorRoutes from "./routes/donorRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import hospitalRoutes from "./routes/hospitalRoutes.js";
import bloodBankRoutes from "./routes/bloodBankRoutes.js";
import campRoutes from "./routes/campRoutes.js";
import certificateRoutes from "./routes/certificateRoutes.js";
import emergencyRoutes from "./routes/emergencyRoutes.js";
import bloodRoutes from "./routes/bloodRoutes.js";


dotenv.config();


// ===============================
// DATABASE CONNECTION
// ===============================

connectDB();



const app = express();




// ===============================
// CORS CONFIGURATION
// ===============================


const allowedOrigins = [

    "http://localhost:5173",

    "http://localhost:5174",

    process.env.FRONTEND_URL

];




app.use(

    cors({

        origin: (origin, callback) => {


            // Allow Postman / Thunder Client / Server requests

            if(!origin){

                return callback(null,true);

            }



            if(
                allowedOrigins.includes(origin)
            ){

                return callback(null,true);

            }



            return callback(
                new Error(
                    "Not allowed by CORS"
                )
            );


        },


        methods:[

            "GET",
            "POST",
            "PUT",
            "DELETE",
            "PATCH"

        ],


        credentials:true


    })

);




app.use(express.json());




// ===============================
// CREATE HTTP SERVER
// ===============================


const server = http.createServer(app);




// ===============================
// SOCKET.IO SETUP
// ===============================


const io = new Server(

    server,

    {

        cors:{


            origin:allowedOrigins,


            methods:[

                "GET",
                "POST"

            ],


            credentials:true


        }


    }

);





// ===============================
// SOCKET CONNECTION
// ===============================


io.on(
"connection",

(socket)=>{


console.log(
"🟢 User Connected:",
socket.id
);





// Join User Room

socket.on(

"joinRoom",

(userId)=>{


socket.join(userId);



console.log(

`User ${userId} joined room`

);


}

);








// Blood Request Room

socket.on(

"joinRequestRoom",

(roomId)=>{


socket.join(roomId);



console.log(

`Joined request room ${roomId}`

);


}

);








socket.on(

"disconnect",

()=>{


console.log(

"🔴 User Disconnected:",

socket.id

);


}

);



}

);







// ===============================
// MAKE SOCKET AVAILABLE
// CONTROLLERS
// ===============================


app.use(

(req,res,next)=>{


req.io = io;


next();


}

);







// ===============================
// API ROUTES
// ===============================



app.use(

"/api/emergency",

emergencyRoutes

);




app.use(

"/api/auth",

authRoutes

);




app.use(

"/api/donors",

donorRoutes

);




app.use(

"/api/admin",

adminRoutes

);




app.use(

"/api/hospitals",

hospitalRoutes

);




app.use(

"/api/bloodbanks",

bloodBankRoutes

);




app.use(

"/api/camps",

campRoutes

);




app.use(

"/api/certificates",

certificateRoutes

);




app.use(

"/api/blood",

bloodRoutes

);








// ===============================
// TEST ROUTE
// ===============================


app.get(

"/",

(req,res)=>{


res.send(

"❤️ HemoMatch Backend Running..."

);


}

);







// ===============================
// ERROR HANDLER
// ===============================


app.use(

(err,req,res,next)=>{


console.log(
err.message
);



res.status(500).json({

message:
err.message || "Server Error"

});


}

);








// ===============================
// SERVER START
// ===============================


const PORT =

process.env.PORT || 5000;




server.listen(

PORT,

()=>{


console.log(

`🚀 Server Running On Port ${PORT}`

);


}

);