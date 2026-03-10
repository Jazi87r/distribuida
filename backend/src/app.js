import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import authroutes from "./routes/authroutes.js";

const app = express();

// Needed because __dirname doesn't exist in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "frontend" , "public" )));

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// --- Middlewares ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Routes ---
app.use("/", authroutes);



// import userRoutes from './routes/userRoutes.js';
// app.use('/api/users', userRoutes);

// --- Fallback ---
/*app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/views/index.html'));
});*/

export default app;