// Import the fs, Consumer class, instance of the moveProduct method and ExecuteOperation class
const fs = require('fs');
const ProductChain = require('./productChain');
const factory = require('../../helper/productChainFactory/productChainFactory');

// Test case to check if the productChain class is instantiated.
describe('Check if the instance of the productChain class is created', () => {
  it('Should create an instance of the productChain class', () => {
    const productChain = new ProductChain();
    const result = {};
    expect(productChain).toEqual(result);
  });

  it('Check if the Object created is an instance of the ProductChain Constructor', () => {
    const productChain = new ProductChain();
    expect(productChain).toBeInstanceOf(ProductChain);
  });
});

test(`move 'test' to equal 'TEST'`, done => {
  const productChain = new ProductChain();
  productChain.start('test', (state, prop) => {
    expect((state, prop)).toBe('TEST');
    done();
  });
});
