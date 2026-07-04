const path = require('path');
const mongoose = require('mongoose');

// ensure we load backend/.env explicitly
require('dotenv').config({ path: path.join(__dirname, '.env') });

const booksPath = path.join(__dirname, '..', 'frontend', 'public', 'books.json');
const books = require(booksPath);

(async () => {
  const url = process.env.DB_URL;
  if (!url) {
    console.error('DB_URL not set in backend/.env');
    process.exit(2);
  }

  try {
    await mongoose.connect(url, { serverSelectionTimeoutMS: 5000 });
    console.log('Connected to MongoDB, starting upserts...');

    const col = mongoose.connection.collection('books');
    let i = 0;
    for (const b of books) {
      i++;
      const filter = { title: b.title };
      const update = { $set: b };
      const res = await col.updateOne(filter, update, { upsert: true });
      console.log(`Upserted #${i}: title="${b.title}" (matched=${res.matchedCount}, upsertedId=${res.upsertedId})`);
    }

    console.log('Import complete');
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('IMPORT_ERROR');
    console.error(err);
    process.exit(1);
  }
})();
