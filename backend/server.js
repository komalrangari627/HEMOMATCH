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


dotenv.config();

// Database Connection
connectDB();


const app = express();


// Middleware
app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(express.json());


// Create HTTP Server
const server = http.createServer(app);


// Socket.IO Setup
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true,
    },
});


// Socket Connection
io.on("connection", (socket) => {

    console.log(" User Connected:", socket.id);


    // Join user specific room
    socket.on("joinRoom", (userId) => {

        socket.join(userId);

        console.log(
            `User ${userId} joined room`
        );

    });


    socket.on("disconnect", () => {

        console.log(
            "🔴 User Disconnected:",
            socket.id
        );

    });

});


// Make Socket.IO available inside controllers
app.use((req, res, next) => {

    req.io = io;

    next();

});


// API Routes

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


// Test Route
app.get("/", (req, res) => {

    res.send(
        " HemoMatch Backend Running..."
    );

});


// Server Port
const PORT =
    process.env.PORT || 5000;


// Start Server
server.listen(PORT, () => {

    console.log(
        ` Server Running On Port ${PORT}`
    );

});