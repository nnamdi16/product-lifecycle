
const fs = require('fs');
const ProductChain = require('./productChain');
const factory = require('/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/product_links/helper/productChainFactory/productChainFactory.js')
// const transfer = require('../helper/moveProduct/moveProduct');

describe("Check if the instance of the productChain class is created",() => {
    it("Should create an instance of the productChain class",() => {
        const productChain = new ProductChain();
        const result = {};
        expect(productChain).toEqual(result);
    });
  
    it("Check if the Object created is an instance of the Consumer  Constructor", () => {
        const productChain = new ProductChain();
        expect(productChain).toBeInstanceOf(ProductChain);
      });

    
});


test(`move 'test' to equal 'TEST'`,(done) =>{
    const productChain = new ProductChain();
    productChain.start('test',(state,prop) => {
        expect((state,prop)).toBe('TEST');
        done();
    });
});
      
//       const result = {
//           'Producer' : {},
//       };
//       expect(result).toEqual(method);
//     });
//   });