import mongoose from 'mongoose';

export const dbConn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Connect to database');
  }
  catch (e) {
    console.error(e)
  }
}
