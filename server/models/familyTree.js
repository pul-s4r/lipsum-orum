import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;


const familyTree = Schema({
  id: {type: ObjectId},
  members: {type: [String], required: false},
  users: {type: Map, of: String}, 
});

const FamilyTree = mongoose.model('FamilyTree', familyTree);

export default FamilyTree;
