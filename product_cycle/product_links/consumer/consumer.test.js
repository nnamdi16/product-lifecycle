// Import the fs, Consumer class, instance of the moveProduct method and ExecuteOperation class
const fs = require('fs');
const Consumer = require('./consumer');
const transfer = require('../../helper/moveProduct/moveProduct');
const ExecuteOperation = require('../../helper/productFlow/productFlow');

// Test case to check if the consumer class was instantiated.
describe('Check if the instance of the consumer class is created', () => {
  it('Should create an instance of Consumer class', () => {
    const consumer = new Consumer();
    const result = {};
    expect(consumer).toEqual(result);
  })

  it('Check if the Object created is an instance of the Consumer  Constructor', () => {
    const consumer = new Consumer();
    expect(consumer).toBeInstanceOf(Consumer);
  });
});


