import express from "express";
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

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

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

app.get("/", (req, res) => {
  res.send(
    "HemoMatch Backend Running..."
  );
});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server Running On Port ${PORT}`
  );
});