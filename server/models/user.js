import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const userModel = Schema({
  // createdAt: {
  //   type: Date,
  //   default: new Date(),
  // }
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  firstname: {type: String, required: true},
  lastname: {type: String, required: true},
  email: {type: String, required: true, match: /.+\@.+\..+/, unique: true},
  files: [{type: ObjectId}]
});

const UserModel = mongoose.model('User', userModel);

export default UserModel;
