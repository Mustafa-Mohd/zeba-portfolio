import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API route
app.get('/api/skills', (req, res) => {
  res.json([
    { name: "React", icon: "https://img.icons8.com/color/48/000000/react-native.png" },
    { name: "Node.js", icon: "https://img.icons8.com/color/48/000000/nodejs.png" },
    { name: "Express", icon: "https://img.icons8.com/color/48/000000/express-js.png" },
    { name: "MongoDB", icon: "https://img.icons8.com/color/48/000000/mongodb.png" },
    { name: "HTML5", icon: "https://img.icons8.com/color/48/000000/html-5--v1.png" },
    { name: "CSS3", icon: "https://img.icons8.com/color/48/000000/css3.png" },
    { name: "JavaScript", icon: "https://img.icons8.com/color/48/000000/javascript--v1.png" }
  ]);
});

// Serve the statically built Vite app when deployed
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
