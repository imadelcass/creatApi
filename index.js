import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors';

// App confige
const app = express();

const PORT = process.env.PORT || 8001;

const connection_url = `mongodb+srv://admin:Z8EV8F9XgWqqJqvC@cluster0.ac51o.mongodb.net/demodb?retryWrites=true&w=majority`;

// Middlewares
app.use(express.json());
app.use(Cors());
// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API endpoint
//app.get('/', (req, res) => res.status(200).send('yes now '));

app.post('/demo/users', (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get('/demo/users', (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Listener
app.listen(PORT, () => console.log(`server run on ${PORT}`));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// const express = require('express');

// const app = express();

// let url = {
//   host: '/api/customers',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
// };

// app.get('/api/customers', (req, res) => {
//   const customers = [
//     { id: 1, firstName: 'John', lastName: 'Doe' },
//     { id: 2, firstName: 'Brad', lastName: 'Traversy' },
//     { id: 3, firstName: 'Mary', lastName: 'Swanson' },
//   ];
//   res.setHeader('Content-Type', 'application/json');
//   res.json(customers);
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => `Server running on port ${PORT}`);

// get all users
// get single user
// app.get('/api/users/:id', (req, res) => {
//   users.forEach(user => {
//     if (req.params.id == user.id) {
//       res.json(user);
//     }
//   });
// });

// set static folder
// app.use(express.static(path.join(__dirname, 'public')));

// [
//     {
//       "id": 1,
//       "name": "Leanne Graham",
//       "username": "Bret",
//       "email": "Sincere@april.biz",
//     },
//     {
//       "id": 5,
//       "name": "Chelsey Dietrich",
//       "username": "Kamren",
//       "email": "Lucio_Hettinger@annie.ca",
//     },
//     {
//       "id": 6,
//       "name": "Mrs. Dennis Schulist",
//       "username": "Leopoldo_Corkery",
//       "email": "Karley_Dach@jasper.info",
//     },
//     {
//       "id": 7,
//       "name": "Kurtis Weissnat",
//       "username": "Elwyn.Skiles",
//       "email": "Telly.Hoeger@billy.biz",
//     },
//     {
//       "id": 8,
//       "name": "Nicholas Runolfsdottir V",
//       "username": "Maxime_Nienow",
//       "email": "Sherwood@rosamond.me",
//     },
//     {
//       "id": 9,
//       "name": "Glenna Reichert",
//       "username": "Delphine",
//       "email": "Chaim_McDermott@dana.io",
//     },
//     {
//       "id": 10,
//       "name": "Clementina DuBuque",
//       "username": "Moriah.Stanton",
//       "email": "Rey.Padberg@karina.biz",
//     }
//   ]
