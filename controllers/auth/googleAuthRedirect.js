import axios from 'axios';
import queryString from 'query-string';
import { User } from '../../models/index.js';
import { createToken } from '../../helpers/index.js';

export const googleAuthRedirect = async (req, res) => {
  const newUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;

  const objURL = new URL(newUrl);

  const urlParams = queryString.parse(objURL.search);
  const { code } = urlParams;

  const tokenData = await axios({
    url: `https://oauth2.googleapis.com/token`,
    method: 'post',
    data: {
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: `${process.env.BASE_URL_BACKEND}/auth/google-redirect`,
      grant_type: 'authorization_code',
      code,
    },
  });

  const userData = await axios({
    url: 'https://www.googleapis.com/oauth2/v2/userinfo',
    method: 'get',
    headers: {
      Authorization: `Bearer ${tokenData.data.access_token}`,
    },
  });

  const { _id } = await User.findOne({
    email: userData.data.email,
  });

  const mainUser = { _id };

  if (!_id) {
    const { _id } = await User.create({
      email: userData.data.email,
      name: userData.data.name || 'noname',
      password: 'google',
    });
    mainUser._id = _id;
  }

  const token = createToken(mainUser._id);

  const user = await User.findByIdAndUpdate(
    mainUser._id,
    { token },
    { new: true, select: 'name email' }
  );

  return res.redirect(
    `${process.env.BASE_URL_FRONT}/?email=${user.email}&name=${user.name}&token=${token}`
  );
};
