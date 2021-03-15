import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import Cards from './dbCards.js';

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
// add user to users
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
// get all users
app.get('/demo/users', (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
// get specific user
app.get('/demo/users/:userId', async (req, res) => {
  const user = await Cards.findById(req.params.userId);
  res.json(user);
});

// Listener
app.listen(PORT, () => console.log(`server run on ${PORT}`));
