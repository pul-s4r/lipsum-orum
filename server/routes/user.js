import UserController from '../controller/userController.js';

const userRoutes = [
  {
    method: 'GET',
    url: '/user/:id',
    handler: UserController.getUserById,
  },
  {
    method: 'GET',
    url: '/user',
    handler: UserController.getUsers,
  },
  {
    method: 'POST',
    url: '/user',
    handler: UserController.addUser,
  },
  {
    method: 'PUT',
    handler: UserController.editUser,
    url: '/user/:id',
  },
  {
    method: 'DELETE',
    url: '/user/:id',
    handler: UserController.deleteUser,
  }
];

export default userRoutes;
