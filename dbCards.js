import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
  id: String,
  name: String,
  idUser: String,
  email: String,
  image: String,
  age: String,
});

export default mongoose.model('cards', cardSchema);
// friendRequest : {
//   userId : {
//     name : String,
//     age : String,
//     email : String,
//   }