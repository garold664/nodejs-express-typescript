import express from 'express';

const app = express();

const port = 3000;

let helloMessage = 'Hello World';

app.get('/', (req: express.Request, res: express.Response) => {
  // debugger; // 12:30
  res.send(helloMessage);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
