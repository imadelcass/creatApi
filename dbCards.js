import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
  id: String,
  name: String,
  username: String,
  email: String,
});

export default mongoose.model('cards', cardSchema);
