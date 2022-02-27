import mongoose from 'mongoose';
// import UserModel from './user.js';
import {ContentEntrySchema} from './contentEntry.js';

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const timeline = Schema({
  userId: {type: ObjectId, required: true},
  title: {type: String, required: true},
  image: {type: String, required: false},
  content: {type: [ContentEntrySchema], required: false},
});

const TimelineModel = mongoose.model('Timeline', timeline);

export default TimelineModel;
