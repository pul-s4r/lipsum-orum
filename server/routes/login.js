import LoginController from '../controller/loginController.js';

const loginRoutes = [
  {
    method: 'POST',
    url: '/user/login',
    handler: LoginController.login,
  },
];

export default loginRoutes; 
