import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const Admin = mongoose.model('Admin', new mongoose.Schema({ email: String, password: String }));

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const hashed = await bcrypt.hash('admin123', 10);
  await Admin.create({ email: 'admin@ngo.com', password: hashed });
  console.log('Admin seeded');
  process.exit();
});