const { models, sequelize } = require('../models');

const createUsersWithLinks = async () => {
  const user = await models.User.create(
    {
      name: 'anmola'
    },
    {
      include: [models.Link]
    }
  );

  const userId = user.get({ plain: true }).id;

  const link = await models.Link.create({
    url: 'https://www.google.com',
    description: 'Google (Mock Link)',
    updatedAt: Date.now(),
    postedBy: userId
  });
  link.setUser(user);

  const links = await models.Link.findAll({ raw: true });
};

export default createUsersWithLinks;
