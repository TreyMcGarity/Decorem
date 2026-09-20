
const bcrypt = require('bcrypt');

exports.seed = async function(knex) {
  await knex('patron').del();
  const password = await bcrypt.hash('password123', 10);

  return knex('patron').insert([
    {
      first_name: 'Jamie',
      last_name: 'Reed',
      email: 'jamie.reed@example.com',
      phone: 5554567890,
      dob: '1992-06-18',
      username: 'jamiereed',
      password,
      gender: 'nonbinary',
      registration_complete: true,
      user_type: 'patron'
    }
  ]);
};
