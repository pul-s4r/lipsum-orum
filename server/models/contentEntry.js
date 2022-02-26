import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const contentEntry = Schema({
  timelineId: {type: ObjectId, required: true},
  title: {type: String, required: true},
  description: {type: String, required: false},
  attachments: {type: [String], required: false},
});

const ContentEntrySchema = contentEntry;
const ContentEntryModel = mongoose.model('ContentEntry', contentEntry);

export { ContentEntryModel, ContentEntrySchema };
