import mongoose from 'mongoose';

const connect = () => {
  const db = mongoose.connection;
  db.on('error', (err) => console.log(`An Erro has occured: ${err}.`));
  db.once('open', (err) => console.log(`MongoDB Ready.`));

  mongoose.connect('mongodb://localhost/tms');
};

export default connect;
