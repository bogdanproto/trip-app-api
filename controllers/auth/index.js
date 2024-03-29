import { ctrlDecorator } from '../../helpers/index.js';
import { register } from './register.js';
import { login } from './login.js';
import { logout } from './logout.js';
import { getCurrent } from './getCurrent.js';
import { googleAuth } from './googleAuth.js';
import { googleAuthRedirect } from './googleAuthRedirect.js';

export default {
  register: ctrlDecorator(register),
  login: ctrlDecorator(login),
  logout: ctrlDecorator(logout),
  getCurrent: ctrlDecorator(getCurrent),
  googleAuth: ctrlDecorator(googleAuth),
  googleAuthRedirect: ctrlDecorator(googleAuthRedirect),
};
