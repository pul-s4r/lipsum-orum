import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const contentEntry = Schema({
  userId: {type: ObjectId},
  title: {type: String, required: true},
  description: {type: String, required: false},
  attachments: {type: [String], required: false},
});

const ContentEntryModel = mongoose.model('ContentEntry', contentEntry);

export default ContentEntryModel;
