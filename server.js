import doetenv from "dotenv";
import path from "path";
import express from "express";
import connectToDB from "./database/db.js";
import authRoutes from "./routes/auth-routes.js";
import homeRoutes from "./routes/home-routes.js";
import adminRoutes from "./routes/admin-routes.js";
import uploadImageRoutes from "./routes/image-routes.js";
import { fileURLToPath } from "url";

// Recreate __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectToDB();

doetenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Middlewares
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/image", uploadImageRoutes);

app.listen(PORT, () => {
  console.log("Server is now listening to the port", PORT);
});
