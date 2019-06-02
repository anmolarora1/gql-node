const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    createdAt: {
      type: DataTypes.DATE(6),
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE(6),
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  });

  User.associate = models => {
    User.hasMany(models.Link, {
      foreignKey: {
        name: 'postedBy',
        notNull: true
      },
      onDelete: 'CASCADE'
    });
  };

  // User.findByLogin = async login => {
  //   let user = await User.findOne({
  //     where: { username: login }
  //   });

  //   if (!user) {
  //     user = await User.findOne({
  //       where: { email: login }
  //     });
  //   }

  //   return user;
  // };

  return User;
};

export default user;
