import queryString from 'query-string';
import { authPath } from '../../const/index.js';

export const googleAuth = async (req, res) => {
  const params = queryString.stringify({
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: `${process.env.BASE_URL_BACKEND}${authPath.ROOT}${authPath.GOOGLE_REDIRECT}`,
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ].join(' '),
    response_type: 'code',
    access_type: 'offline',
    prompt: 'consent',
  });
  return res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${params}`);
};
