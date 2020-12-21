import express from './config/express';

// const port = process.env.PORT;
const port = 3000;

express.listen(port, () => {
  console.log(`Your app is listening on port ${port} 🌿`);
});
