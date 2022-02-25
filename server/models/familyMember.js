import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const familyMember = Schema({
  id: {type: ObjectId},
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  sex: {type: String, required: true},
  date_of_birth: {type: Date, required: false, default: new Date()},
  date_of_death: {type: Date, required: false, default: new Date()},
  residence: {type: String}, // address type?
  description: {type: String},
  relations: {type: Map, of: [ObjectId]},
  content: {type: Array, of: [ObjectId]}
});

const FamilyMember = mongoose.model('FamilyMember', familyMember);

export default FamilyMember;
