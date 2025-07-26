const bcrypt = require('bcryptjs');
const db = require('./db');

async function createUser() {
  const email = 'test@example.com';
  const plainPassword = 'test123';
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  db.query(
    'INSERT INTO users (email, password) VALUES (?, ?)',
    [email, hashedPassword],
    (err, result) => {
      if (err) throw err;
      console.log('✅ Test user created');
      process.exit();
    }
  );
}

createUser();
