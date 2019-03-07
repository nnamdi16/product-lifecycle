// const fs = require('fs');
// const MoveProduct = require('./moveProduct');
// const factory = require('/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/product_links/helper/productChainFactory/productChainFactory.js');


// describe("Check if the instance of moveProduct class is created",() => {
//     it("Should create an instance of the moveProduct class",() => {
//         const moveProduct = new MoveProduct.MoveProduct();
//         const result = {};
        
//         expect(moveProduct).toEqual(result);
//     });
  
//     it("Check if the Object created is an instance of the ProductChainFactory  Constructor", () => {
//         const moveProduct = new MoveProduct.MoveProduct();
//         expect(moveProduct).toBeInstanceOf(MoveProduct.MoveProduct);
//       });

    
// });

// describe("Move product from one state to the other ", () => {
//     it("Should move products from one point to the other", () => {
    
//         const moveProduct = new MoveProduct.MoveProduct();

//         moveProduct.moveOutput('Producer','Calista Na');
//       expect(moveProduct.moveOutput('Producer','Calista Na')).toEqual(output);
//     });
//   });

// describe("Register classes ", () => {
//     it("Should create an object containing the classes", () => {
    
//       const productChain  = new ProductChainFactory.ProductChainFactory();

//       productChain.register('Producer', main.Producer);
//       expect(productChain.objConstructors['Producer']).toEqual(main.Producer);
//     });
//   });

//   describe("Get Product link  ", () => {
//     it("Should create an object containing the classes", () => {
    
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

