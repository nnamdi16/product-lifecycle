//Import the fs, Recycler class, instance of the moveProduct method and ExecuteOperation class
const fs = require('fs');
const Recycler = require('./recycler');
const transfer = require('../../helper/moveProduct/moveProduct');

//Test case to check if recycler class was instantiated.
describe("Check if the instance of the recycler class is created",() => {
    it("Should create an instance of the Recycler class",() => {
        const recycler = new Recycler();
        const result = {};
        expect(recycler).toEqual(result);
    });
  
    it("Check if the Object created is an instance of the Consumer  Constructor", () => {
        const recycler = new Recycler();
        expect(recycler).toBeInstanceOf(Recycler);
      });

    
});

//Test the move method to check the flow of the product from the it states to the next state.
test(`move 'test' to equal 'TEST'`,(done) =>{
    const recycler = new Recycler();
    recycler.move('test',(state,prop) => {
        expect((state,prop)).toBe('TEST');
        done();
    });
});

// describe("Move product from the state specified to the next state", () => {
//     it("Should create an array of object showing the product moved from one state to the other", () => {
//       const consumer = new Consumer();
//       let method = consumer.move('Producer','Calista Na');
      
//       const result = {};
//       expect(method).toEqual(`Calista Na Product moved from Producer to Retailer`);
//     });
//   });