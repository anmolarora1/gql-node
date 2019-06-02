const link = (sequelize, DataTypes) => {
  const Link = sequelize.define('link', {
    url: DataTypes.STRING,
    description: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE(6),
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE(6),
      defaultValue: DataTypes.NOW
    },
    updatedAt: DataTypes.DATE(6),
    votes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    linkID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    }
  });

  Link.associate = models => {
    Link.belongsTo(models.User, {
      foreignKey: {
        name: 'postedBy',
        field: 'postedBy'
      }
    });
  };

  return Link;
};

export default link;
