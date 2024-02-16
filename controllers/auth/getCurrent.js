import { status } from '../../const/index.js';

export const getCurrent = async (req, res) => {
  const { _id, email, name } = req.user;

  res.json({
    ...status.USER_CURRENT,
    user: {
      _id,
      email,
      name,
    },
  });
};
