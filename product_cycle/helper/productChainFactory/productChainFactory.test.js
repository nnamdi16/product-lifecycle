//Import the fs, ProductChainFactory and main class.
const fs = require('fs');
const ProductChainFactory = require('./productChainFactory');
const main = require('../../main');


//Test case to check if the productChainFactory class is instantiated
describe("Check if the instance of the productChainFactory class is created", () => {
  it("Should create an instance of the productChainFactory class", () => {
    const productChainFactory = new ProductChainFactory.ProductChainFactory();
    console.log(productChainFactory);
    expect(productChainFactory).toEqual({
      "objConstructors": {}
    });
  });

  it("Check if the Object created is an instance of the ProductChainFactory  Constructor", () => {
    const productChainFactory = new ProductChainFactory.ProductChainFactory();
    expect(productChainFactory).toBeInstanceOf(ProductChainFactory.ProductChainFactory);
  });


});

//Test case to check if the register method registers various product link classes in the factory.
describe("Register classes ", () => {
  it("Should create an object containing the classes", () => {

    const productChain = new ProductChainFactory.ProductChainFactory();

    productChain.register('Producer', main.Producer);
    expect(productChain.objConstructors['Producer']).toEqual(main.Producer);
  });
});

//Test case to check if  getProductLink method creates an instance of the productLink specified
describe("Get Product link  ", () => {
  it("Should create an object containing the classes", () => {

    const producerChain = new ProductChainFactory.ProductChainFactory();
    producerChain.register('Producer', main.Producer);
    producerChain.getProductLink('Producer');

    expect(producerChain.objConstructors['Producer']).toEqual(main.Producer);
  });

  it("Should  not create an object containing the classes", () => {
    const producerChain = new ProductChainFactory.ProductChainFactory();
    producerChain.register('Producer', main.Producer);
    producerChain.getProductLink('Retailer');

    expect(producerChain.objConstructors['Retailer']).not.toEqual(main.Producer);
  });
});


//Check if getProductNextLink method changes the state of the product and instantiates the class
describe("Get Next product link  ", () => {
  it("Should create an array containing the next state and its next class", () => {

    const producerChain = new ProductChainFactory.ProductChainFactory();
    producerChain.register('Producer', main.Producer);
    producerChain.register('Retailer', main.Retailer);
    producerChain.register('Consumer', main.Consumer);
    producerChain.register('Recycler', main.Recycler);


    producerChain.getProductLink('Producer');
    let output = producerChain.getNextProductLink(producerChain, 'Producer');
    let result = ['Retailer', main.Retailer];


    expect(output).toEqual(result);
  });

  it("Should create an object containing its next state and the next class for Recycler", () => {

    const producerChain = new ProductChainFactory.ProductChainFactory();
    producerChain.register('Producer', main.Producer);
    producerChain.register('Retailer', main.Retailer);
    producerChain.register('Consumer', main.Consumer);
    producerChain.register('Recycler', main.Recycler);


    producerChain.getProductLink('Recycler');
    let output = producerChain.getNextProductLink(producerChain, 'Recycler');
    let result = ['Producer', main.Producer];


    expect(output).toEqual(result);
  });
});