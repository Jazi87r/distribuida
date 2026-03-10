import app from './src/app.js';  // note: extension required with ESM

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

