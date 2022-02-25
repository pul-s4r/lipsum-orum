import UserModel from '../models/user.js';
import mongoose from 'mongoose';

const UserController = {
  getUserById: async (req, res) => {
    try {
      const id = req.params === undefined ? req.id : req.params.id;
      const result = UserModel.findById(id);
      return result ? result : {};
    } catch (error) {
      throw new Error(error);
    }
  },
  getUsers: async (req, res) => {
    try {
      return await UserModel.find();
    } catch (error) {
      throw new Error(error);
    }
  },
  addUser: async (req, res) => {
    try {
      const body = req.body;
      const newUser = new UserModel(body);
      const existing = await UserModel.findOne({ username: body.username });

      if (existing) {
        return new Error('User already exists');
      } else {
        return await newUser.save();
      }
    } catch (error) {
      throw new Error(error);
    }
  },
  editUser: async (req, res) => {
    try {
      const id = req.params === undefined ? req.id : req.params.id;
      const body = req.body;
      const found = UserModel.findOne({ id: id });

      if (found) {
        return await UserModel.findByIdAndUpdate(id, body, { new: true });
      } else {
        return new Error('User does not exist');
      }

    } catch (error) {
      throw new Error(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const id = req.params === undefined ? req.id : req.params.id;
      const found = UserModel.findOne({ id: id });

      if (found) {
        return await UserModel.findByIdAndRemove(id);
      } else {
        return new Error('User does not exist');
      }

    } catch (error) {
      throw new Error(error);
    }
  },
};

export default UserController;
