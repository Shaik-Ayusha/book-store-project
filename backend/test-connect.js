require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.DB_URL;
if(!url){
  console.error('DB_URL not set in environment');
  process.exit(2);
}

(async ()=>{
  try{
    await mongoose.connect(url, { serverSelectionTimeoutMS: 5000 });
    console.log('MONGODB_OK');
    await mongoose.disconnect();
    process.exit(0);
  }catch(err){
    console.error('MONGODB_CONNECT_ERROR');
    console.error(err);
    process.exit(1);
  }
})();
