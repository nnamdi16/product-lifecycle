
const fs = require('fs');
const Observable = require('./observable');
// const transfer = require('../helper/moveProduct/moveProduct');

describe("Check if the instance of the observable class is created",() => {
    it("Should create an instance of the Observable class",() => {
        const observable = new Observable();
        const result = {
            "observers" : []
        };
        expect(observable).toEqual(result);
    });
  
    it("Check if the Object created is an instance of the Observable  Constructor", () => {
        const observable = new Observable();
        expect(observable).toBeInstanceOf(Observable);
      });

    
});

// test(`move 'test' to equal 'TEST'`,(done) =>{
//     const producer = new Producer();
//     consumer.move('test',(state,prop) => {
//         expect((state,prop)).toBe('TEST');
//         done();
//     });
// });

// describe("Move product from the state specified to the next state", () => {
//     it("Should create an array of object showing the product moved from one state to the other", () => {
//       const consumer = new Consumer();
//       let method = consumer.move('Producer','Calista Na');
      
//       const result = {};
//       expect(method).toEqual(`Calista Na Product moved from Producer to Retailer`);
//     });
//   });