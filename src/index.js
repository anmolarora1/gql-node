var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
const { models, sequelize } = require('./models');
import schema from './schemas';
import root from './root';
import context from './context';
import createUsersWithLinks from './seed';

var app = express();

app.use(
  '/graphql',
  graphqlHTTP(async (request, response, graphQLParams) => ({
    schema,
    rootValue: root,
    graphiql: true,
    context
  }))
);

const resetDB = true;

sequelize
  .sync({ force: resetDB })
  .then(async () => {
    if (resetDB) {
      createUsersWithLinks().catch(err => console.log('caught - ', err));
    }

    app.listen(4000, () =>
      console.log(
        'Express GraphQL Server Now Running On localhost:4000/graphql'
      )
    );
  })
  .catch(err => console.log('error', err));
