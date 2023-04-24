import express from 'express';

const PORT = 3001;

const app = express();

app.listen(PORT, () =>
  console.log(`\n🔝 Server started at http://localhost:${PORT}\n`),
);
