
exports.seed = function(knex) {
  return knex('product').del()
    .then(function () {
      return knex('product').insert([
        {
          name: 'Mid-Century Table Lamp',
          category: 'lighting',
          details: 'Warm brass lamp with a sculptural shade.',
          cost: 89.99,
          stock: 12,
          product_pic_id: 'table-lamp'
        },
        {
          name: 'Retro Lounge Chair',
          category: 'furniture',
          details: 'Low-profile accent chair in burnt orange fabric.',
          cost: 249.99,
          stock: 5,
          product_pic_id: 'lounge-chair'
        }
      ])
    });
};
