import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.status(200).send("The API is running. Send a POST request to /bfhl to use it.");
});

export default app;
