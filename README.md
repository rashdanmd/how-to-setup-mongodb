# How to setup mongoDB and Mongoose with React

This React app has been created as a guide and reference for creating a full-stack application using MongoDB and Mongoose on the backend.

## Technologies and dependencies
**Frontend:** React, React-Router-DOM,

**Backend:** express, nodemon, cors, mongoose

  


## Installation - server
To install dependencies needed for the server, cd into the server directory and run the following:

```bash
npm install
```

## Installation - client
To install required dependencies and run the front-end, cd into the client directory and run the following:

```bash
npm install
npm start
```

## Setup - BACKEND
cd into the server directory and create the following 3 folders:

```bash
~ mkdir models routes controllers
```
Next, create the following files:
```bash
~ touch index.js models/ArticleModel.js routes/ArticleRoute.js controllers/ArticleController.js
```

In index.js setup express and ensure server is up and running. We will return to this once other files have been setup
```javascript
const express = require("express");
const PORT = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

```

Run the command below in the terminal, and you should see the message `App is listening on port 5000` in the console as well as 'hello world' in the browser.
```bash
nodemon index.js
```

