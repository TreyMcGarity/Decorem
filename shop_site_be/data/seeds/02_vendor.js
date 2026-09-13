
exports.seed = function(knex) {
  return knex('vendor').del()
    .then(function () {
      return knex('vendor').insert([
        {
          first_name: 'Avery',
          last_name: 'Stone',
          email: 'avery.stone@example.com',
          phone: 5551234567,
          dob: '1990-04-12',
          username: 'averystone',
          password: 'password123',
          profile_pic_id: 'vendor-avery',
          gender: 'female',
          registration_complete: true,
          user_type: 'vendor'
        },
        {
          first_name: 'Milo',
          last_name: 'Hawkins',
          email: 'milo.hawkins@example.com',
          phone: 5552345678,
          dob: '1987-09-28',
          username: 'milohawkins',
          password: 'password123',
          profile_pic_id: 'vendor-milo',
          gender: 'male',
          registration_complete: true,
          user_type: 'vendor'
        },
        {
          first_name: 'Sofia',
          last_name: 'Nguyen',
          email: 'sofia.nguyen@example.com',
          phone: 5553456789,
          dob: '1993-02-05',
          username: 'sofian',
          password: 'password123',
          profile_pic_id: 'vendor-sofia',
          gender: 'female',
          registration_complete: true,
          user_type: 'vendor'
        }
      ]);
    });
};
