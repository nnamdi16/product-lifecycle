//Import productChain class from productChain.js
const ProductChain = require('./productChain');

const mockProductChannel = jest.fn();
jest.mock('./productChain', () => {
    return jest.fn().mockImplementation(() =>{
        return {productChannel:mockProductChannel};
    });
});

beforeEach(() =>{
    ProductChain.mockClear();
    mockProductChannel.mockClear();
});

it('The channel should be able to call new() on ProductChain', () => {
    //Ensure the constructor created the object:
    const producer = new ProductChain();
    expect(producer).toBeTruthy();
});

it('We can check if the producer called the class constructor',() => {
    const producer = new ProductChain();
    expect(producer).toHaveBeenCalledTimes(1);
});

// it('We can check if the producer called a method on the class instance', () => {
//     const producer = new ProductChain();
// });
