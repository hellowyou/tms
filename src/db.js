import mongoose from 'mongoose';

const connect = async () => {
  const db = mongoose.connection;
  db.on('error', (err) => console.error(`[mongoose]: ${err}.`));
  db.once('open', (err) => console.log(`[mongoose]: MongoDB ready.`));

  try {
    await mongoose.connect('mongodb://localhost/tms');
  } catch(e) {
    console.error(`[mongoose]: ${e.message}`);
  }
};

export default connect;
