import mongoose from 'mongoose';

import UserModel from '../models/user.js';
import ContentEntryModel from '../models/contentEntry.js';

const ObjectId = mongoose.Types.ObjectId;

const ContentEntryController = {
  getEntryById: async (req) => {
    try {
      var id = req.params === undefined ? req.id : req.params.id;
      if (mongoose.isValidObjectId(id)) {
        const result = await ContentEntryModel.findById(id);
        return result;
      } else {
        return {statusCode: 400, error: 'Bad Request', message: 'Invalid object ID'};
      }
    } catch (error) {
      return new Error(error);
    }
  },
  getEntryByUserId: async (req) => {
    try {
      var userId = req.params === undefined ? req.id : req.params.userId;
      if (mongoose.isValidObjectId(userId)) {
        const result = await ContentEntryModel.find({ userId: userId });
        return result;
      } else {
        return {statusCode: 400, error: 'Bad Request', message: 'Invalid object ID'};
      }
    } catch (error) {
      return new Error(error);
    }
  },
  getEntries: async () => {
    try {
      return await ContentEntryModel.find();
    } catch (error) {
      return new Error(error);
    }
  },
  createEntry: async (req) => {
    try {
      const body = {... req.body};
      const newEntry = new ContentEntryModel(body);
      const userExists = UserModel.findOne({ id: body.userId });

      if (mongoose.isValidObjectId(body.userId) && userExists) {
        return await newEntry.save();
      } else {
        return {statusCode: 400, error: 'Bad Request', message: 'User not in database or ObjectId is invalid'};
      }

    } catch (error) {
      return new Error(error);
    }
  },
  editEntry: async (req) => {
    try {
      const id = req.params === undefined ? req.id : req.params.id;
      const body = req.body;
      const found = ContentEntryModel.findOne({ id: id });

      if (mongoose.isValidObjectId(id) && found) {
        return await ContentEntryModel.findByIdAndUpdate(id, body, { new: true });
      } else {
        return {statusCode: 400, error: 'Bad Request', message: 'Post/entry does not exist or ObjectId is invalid'};
      }
    } catch (error) {
      return new Error(error);
    }
  },
  deleteEntry: async (req) => {
    try {
      const id = req.params === undefined ? req.id : req.params.id;
      const found = ContentEntryModel.findOne({ id: id });

      if (mongoose.isValidObjectId(id) && found) {
        return await ContentEntryModel.findByIdAndRemove(id);
      } else {
        return {statusCode: 400, error: 'Bad Request', message: 'User does not exist or ObjectId is invalid'};
      }
    } catch (error) {
      return new Error(error);
    }
  }
};

export default ContentEntryController;
