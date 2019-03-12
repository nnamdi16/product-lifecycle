//Import the fs, Producer class, instance of the moveProduct method and ExecuteOperation class
const fs = require('fs');
const Producer = require('./producer');
const transfer = require('../../helper/moveProduct/moveProduct');


//Test case to check if producer class was instantiated.
describe("Check if the instance of the producer class is created",() => {
    it("Should create an instance of the Producer class",() => {
        const producer = new Producer();
        const result = {};
        expect(producer).toEqual(result);
    });
  
    it("Check if the Object created is an instance of the Consumer  Constructor", () => {
        const producer = new Producer();
        expect(producer).toBeInstanceOf(Producer);
      });

    
});

//Test the move method to check the flow of the product from the it states to the next state.
test(`move 'Producer,Calista Na' to equal 'Calista Na Product moved from Producer to Retailer`,(done) =>{
    const producer = new Producer();
    producer.move('Producer','Lucas Na',(state,prop) => {
        expect((state,prop)).toBe(`Lucas Na Product moved from Producer to Retailer`);
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