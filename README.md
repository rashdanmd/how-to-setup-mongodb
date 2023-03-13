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
~ mkdir index.js models/ArticleModel.js routes/ArticleRoute.js controllers/ArticleController.js
```
For the purpose if this demo, we are basing our model on articles.
