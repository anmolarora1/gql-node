import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  'postgres://ebiylfcw:SHTl1Hdocq6l5cZHaIIcik2NHVpbq3vF@john.db.elephantsql.com:5432/ebiylfcw',
  {
    dialect: 'postgres'
  }
);

const models = {
  User: sequelize.import('./user'),
  Link: sequelize.import('./link')
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize, models };
