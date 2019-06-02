import { models } from '../models';

export const addLink = async (description, url, postedBy) => {
  const userId = await models.User.findOne({
    raw: true,
    where: { id: postedBy }
  });
  if (!userId) {
    throw new Error('Invalid user id');
  }
  const link = await models.Link.create({
    description,
    url,
    updatedAt: Date.now(),
    postedBy
  });
  return link;
};

export const getLink = async id => {
  return await models.Link.findAll({ raw: true, where: { id: id } });
};

export const getLinks = async () => {
  return await models.Link.findAll({ raw: true });
};

export const getUsers = async () => {
  return await models.User.findAll({ raw: true });
};
