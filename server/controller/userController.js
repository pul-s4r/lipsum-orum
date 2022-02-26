import mongoose from 'mongoose';

import UserModel from '../models/user.js';

const ObjectId = mongoose.Types.ObjectId;

const UserController = {
  getUserById: async (req) => {
    try {
      var id = req.params === undefined ? req.id : req.params.id;
      if (mongoose.isValidObjectId(id)) {
        const result = await UserModel.findById(id);
        return result;
      } else {
        return {statusCode: 400, error: 'Bad Request', message: 'Invalid object ID'};
      }
    } catch (error) {
      return new Error(error);
    }
  },
  getUsers: async () => {
    try {
      const result = await UserModel.find();
      return result;
    } catch (error) {
      return new Error(error);
    }
  },
  addUser: async (req, res) => {
    try {
      const body = {... req.body, _id: new ObjectId()};
      console.log("Body: " , body)
      const newUser = new UserModel(body);
      const existing = await UserModel.findOne({ username: body.username });

      if (existing) {
        return {statusCode: 400, error: 'Bad Request', message: 'User already exists'};
      } else {
        const result = await newUser.save();
        return result;
      }
    } catch (error) {
      return new Error(error);
    }
  },
  editUser: async (req, res) => {
    try {
      const id = req.params === undefined ? req.id : req.params.id;
      const body = req.body;
      const found = UserModel.findOne({ id: id });

      if (mongoose.isValidObjectId(id) && found) {
        const result = await UserModel.findByIdAndUpdate(id, body, { new: true });
        return result;
      } else {
        return {statusCode: 400, error: 'Bad Request', message: 'User does not exist or ObjectId is invalid'};
      }

    } catch (error) {
      return new Error(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const id = req.params === undefined ? req.id : req.params.id;
      const found = UserModel.findOne({ id: id });

      if (mongoose.isValidObjectId(id) && found) {
        const result = await UserModel.findByIdAndRemove(id);
        return result;
      } else {
        return {statusCode: 400, error: 'Bad Request', message: 'User does not exist or ObjectId is invalid'};
      }

    } catch (error) {
      return new Error(error);
    }
  },
};

export default UserController;
