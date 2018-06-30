import express from 'express';
import schema from './schema/schema';
import graphqlHTTP from 'express-graphql';
import notifer from 'node-notifier';
import dbConnect from './db';

const app = express();
const PORT = 4000;

dbConnect();

app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: process.env.NODE_ENV !== 'production'
}));

app.get('/', (req, res) => res.redirect('/graphql'));

app.listen(PORT, () => {
  let m = `Server running at port ${PORT} on ${process.env.NODE_ENV || 'development'} environment.`;

  notifer.notify({
    title: "Server Status",
    message: m
  });

  console.log(m);
});
