
const fs = require('fs');
const ExecuteOperation = require('./app');
const Product = require('../product_cycle/app');

describe("Check if the instance of the ExecuteOperation class is created",() => {
    it("Should create an instance of the ExecuteOperation class",() => {
        const executeOperation = new ExecuteOperation();
        const result = {};
        expect(executeOperation).toEqual(result);
    });
  
    it("Check if the Object created is an instance of the Consumer  Constructor", () => {
        const executeOperation = new ExecuteOperation();
        expect(executeOperation).toBeInstanceOf(ExecuteOperation);
      });

    
});

// describe("Executes the movement of the product from one product link to the other ", () => {
//     it("Should move product from one product link to the other ", () => {
    
//       const executeMovement  = new ExecuteOperation();
//       console.log(executeMovement.execute());

      
//       expect(executeMovement.execute()).toEqual(main.Producer);
//     });
//   });

//   describe("Executes the movement of the product from one product link to the other  ", () => {
//     it("Should move product from one product link to the other ", () => {
    
//       const producerChain  = new ProductChainFactory.ProductChainFactory();
//       producerChain.register('Producer', main.Producer);
//       producerChain.getProductLink('Producer');
//       console.log(producerChain);

//       expect(producerChain.objConstructors['Producer']).toEqual(main.Producer);
//     });

//     it("Should  not create an object containing the classes", () => {
    
//         const producerChain  = new ProductChainFactory.ProductChainFactory();
//         producerChain.register('Producer', main.Producer);
//         producerChain.getProductLink('Retailer');
  
//         expect(producerChain.objConstructors['Retailer']).not.toEqual(main.Producer);
//       });
//   });
