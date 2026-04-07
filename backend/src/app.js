import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import authroutes from "./routes/authroutes.js";
import vehiculosRoutes from "./routes/vehiculosRoutes.js";
import propietariosRoutes from "./routes/propietariosRoutes.js";
import infraccionesRoutes from "./routes/infraccionesRoutes.js";
import reporteRoutes from "./routes/reporteRoutes.js";
import supabase from './config/supabase.js';

import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express4';
import cors from 'cors';

import { propietarioTypeDefs } from './graphql/propietarioSchema.js';
import { propietarioResolver} from './graphql/propietarioResolver.js';

import { vehiculoTypeDefs } from './graphql/vehiculoSchema.js';
import { vehiculoResolver } from './graphql/vehiculoResolver.js';

import { infraccionTypeDefs } from './graphql/infraccionSchema.js';
import { infraccionResolver } from './graphql/infraccionResolver.js';


const app = express();

// Needed because __dirname doesn't exist in ESM
const __filename = fileURLToPath(import.meta.url);  
const __dirname = path.dirname(__filename);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "../../frontend/public")));

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// --- Middlewares ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Routes ---
app.use("/", authroutes);
app.use("/vehiculos", vehiculosRoutes);
app.use("/propietarios", propietariosRoutes);

app.use("/infracciones", infraccionesRoutes);
app.use("/reporte", reporteRoutes);

app.get('/test-db', async (req, res) => {
  const { data, error } = await supabase.from('users').select('*').limit(3);
  
  if (error) return res.status(500).json({ error: error.message });
  res.json({ success: true, data });
  console.log("DB Test Result:", data);
});


// --- Fallback ---
/*app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/views/index.html'));
});*/

// --- GraphQL Setup ---


const server = new ApolloServer({
  typeDefs: [propietarioTypeDefs, vehiculoTypeDefs, infraccionTypeDefs],
  resolvers: [propietarioResolver, vehiculoResolver, infraccionResolver]
});
await server.start();

app.use(
  '/graphql',
  cors(),
  express.json(),
  expressMiddleware(server)
);

export default app;