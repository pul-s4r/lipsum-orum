import mongoose from 'mongoose';

import UserModel from '../models/user.js';

const ObjectId = mongoose.Types.ObjectId;

/*
  TODO: Return token instead of userId
  Change all endpoints to accept token instead of userId directly
*/
const LoginController = {
  login: async (req) => {
    try {
      var email = req.body === undefined ? req.email : req.body.email;
      var password = req.body === undefined ? req.password : req.body.password;

      // console.log(`Email: ${email}/PW: ${password}`);
      // Connect to DB (probably not necessary - handled by mongoose)
      // Check user exists (has email)
      const userProfile = await UserModel.findOne({ email: email }).exec();
      const storedPw = userProfile ? userProfile.password : undefined;
      // Check if password correct
      const matchPw = password === storedPw;
      if (userProfile && matchPw) {
        // return username, user id, token, message
        return {userId: userProfile._id, token: null, message: 'Login successful'};
      } else if (userProfile) {
        return {statusCode: 401, error: 'Bad Request', message: 'Incorrect password'};
      } else {
        return {statusCode: 401, error: 'Bad Request', message: 'User does not exist'};
      }
      // Close DB connection
    } catch (error) {
      return new Error(error);
    }
  },
};

export default LoginController;
