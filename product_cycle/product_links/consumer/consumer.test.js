
const fs = require('fs');
const Consumer = require('./consumer');
const transfer = require('../helper/moveProduct/moveProduct');

describe("Check if the instance of the consumer class is created",() => {
    it("Should create an instance of Consumer class",() => {
        const consumer = new Consumer();
        const result = {};
        expect(consumer).toEqual(result);
    });
  
    it("Check if the Object created is an instance of the Consumer  Constructor", () => {
        const consumer = new Consumer();
        expect(consumer).toBeInstanceOf(Consumer);
      });

    
});

// const consumer = new Consumer();

//     test(`move 'test' to equal 'TEST'`,() =>{
//         return consumer.move('test').then((state,prop) =>{
//             expect((state,prop)).toBe('TEST');
//         });
//     });

