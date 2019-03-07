
const fs = require('fs');
const ProductChainFactory = require('./productChainFactory');
const main = require('../../../main');
// const transfer = require('../helper/moveProduct/moveProduct');

describe("Check if the instance of the productChainFactory class is created",() => {
    it("Should create an instance of the productChainFactory class",() => {
        const productChainFactory = new ProductChainFactory.ProductChainFactory();
        console.log(productChainFactory);
        expect(productChainFactory).toEqual({"objConstructors": {}});
    });
  
    it("Check if the Object created is an instance of the ProductChainFactory  Constructor", () => {
        const productChainFactory = new ProductChainFactory.ProductChainFactory();
        expect(productChainFactory).toBeInstanceOf( ProductChainFactory.ProductChainFactory);
      });

    
});


describe("Register classes ", () => {
    it("Should create an object containing the classes", () => {
    
      const productChain  = new ProductChainFactory.ProductChainFactory();

      productChain.register('Producer', main.Producer);
      expect(productChain.objConstructors['Producer']).toEqual(main.Producer);
    });
  });

  describe("Get Product link  ", () => {
    it("Should create an object containing the classes", () => {
    
      const producerChain  = new ProductChainFactory.ProductChainFactory();
      producerChain.register('Producer', main.Producer);
      producerChain.getProductLink('Producer');
      console.log(producerChain);

      expect(producerChain.objConstructors['Producer']).toEqual(main.Producer);
    });

    it("Should  not create an object containing the classes", () => {
    
        const producerChain  = new ProductChainFactory.ProductChainFactory();
        producerChain.register('Producer', main.Producer);
        producerChain.getProductLink('Retailer');
  
        expect(producerChain.objConstructors['Retailer']).not.toEqual(main.Producer);
      });
  });

