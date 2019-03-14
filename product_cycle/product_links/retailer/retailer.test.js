// Import instance of MoveProduct class and the observer object
const fs = require('fs')
const Retailer = require('./retailer')
const transfer = require('../../helper/moveProduct/moveProduct')

// Test case to check if recycler class was instantiated.
describe('Check if the instance of the producer class is created', () => {
  it('Should create an instance of the Producer class', () => {
    const retailer = new Retailer();
    const result = {};
    expect(retailer).toEqual(result);
  });

  it('Check if the Object created is an instance of the Consumer  Constructor', () => {
    const retailer = new Retailer()
    expect(retailer).toBeInstanceOf(Retailer)
  });
});

test(`move 'test' to equal 'TEST'`, done => {
  const retailer = new Retailer();
  retailer.move('test', (state, prop) => {
    expect((state, prop)).toBe('TEST');
    done();
  });
});


