import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const userModel = Schema({
  // createdAt: {
  //   type: Date,
  //   default: new Date(),
  // }
  email: {type: String, required: true, match: /.+\@.+\..+/, unique: true},
  password: {type: String, required: true},
  firstname: {type: String, required: true},
  lastname: {type: String, required: true},
  files: [{type: ObjectId}]
});

const UserModel = mongoose.model('User', userModel);

export default UserModel;
