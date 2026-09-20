const assert = require('node:assert/strict');
const test = require('node:test');
const request = require('supertest');

process.env.JWT_SECERET = 'test-secret';

const server = require('../server');
const patronDb = require('../models/patron-model');
const vendorDb = require('../models/vendor-model');
const productDb = require('../models/product-model');

test('patron login returns 401 for an unknown username', async () => {
  const original = patronDb.getByUsername;
  patronDb.getByUsername = async () => undefined;

  try {
    const response = await request(server)
      .post('/api/auth/login?user_type=patron')
      .send({ username: 'missing-patron', password: 'password123' });

    assert.equal(response.status, 401);
    assert.match(response.body.message, /Incorrect username/);
  } finally {
    patronDb.getByUsername = original;
  }
});

test('vendor login returns 401 for an unknown username', async () => {
  const original = vendorDb.getByUsername;
  vendorDb.getByUsername = async () => undefined;

  try {
    const response = await request(server)
      .post('/api/auth/login?user_type=vendor')
      .send({ username: 'missing-vendor', password: 'password123' });

    assert.equal(response.status, 401);
    assert.match(response.body.message, /Incorrect username/);
  } finally {
    vendorDb.getByUsername = original;
  }
});

test('product listing returns products from the model', async () => {
  const original = productDb.getAllProducts;
  productDb.getAllProducts = async () => [
    { id: 'product-1', name: 'Retro Lamp', cost: 49.99 }
  ];

  try {
    const response = await request(server).get('/api/products');

    assert.equal(response.status, 200);
    assert.deepEqual(response.body, [
      { id: 'product-1', name: 'Retro Lamp', cost: 49.99 }
    ]);
  } finally {
    productDb.getAllProducts = original;
  }
});

test('empty product listing returns 404', async () => {
  const original = productDb.getAllProducts;
  productDb.getAllProducts = async () => [];

  try {
    const response = await request(server).get('/api/products');

    assert.equal(response.status, 404);
    assert.equal(response.body, 'No items found');
  } finally {
    productDb.getAllProducts = original;
  }
});
