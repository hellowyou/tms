import express from 'express';
import schema from './schema/schema';
import graphqlHTTP from 'express-graphql';

const app = express();
const PORT = 4000;

app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: process.env.NODE_ENV !== 'production'
}));

app.listen(PORT, () => {
  let m = `Server running at port ${PORT}`;
  console.log(m)
});
