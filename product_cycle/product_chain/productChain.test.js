//Import productChain class from productChain.js
// const ProductManager = require('../product_chain/producer/producer');
const ProductChain = require('./productChain');
const ExecuteOperation = require('../../product_cycle/app');



const mockProductChain = jest.fn();
jest.mock('./productChain', () => {
    return jest.fn().mockImplementation(() => {
        return {
            start: mockProductChain
        };
    });
});

beforeEach(() => {
    ProductChain.mockClear();
    mockProductChain.mockClear();
});
describe('Check if the channel called new() on ProductionChain', () => {
    it('The channel should be able to call new() on ProductChain', () => {
        //Ensure the constructor created the object:
        const product = new ProductChain();
        expect(product).toBeTruthy();
    });
});

describe('Check', () => {
    it('We can check if the producer called the class constructor', () => {
        const product = new ProductChain();
        expect(ProductChain).toHaveBeenCalledTimes(1);
    });
});

// it('works', () => {
//     const produce = new ProductChain('Lucas Menefee', 'Producer');
//     const result = {
//         product:'Lucas Menefee',
//         state: 'Consumer'
//     }
//     expect(result).toBe(produce);
    
//   });
// describe('Check', () => {
//     it('Should create an instance of the ProductChain class', () => {
//         const product = new ProductChain('Calista Na');
//         const result = {'product':'Calista Na'};
//         expect(product).toEqual(result);
//     });
// });


// it('We can check if the producer called a method on the class instance', () => {
//     const producer = new ProductManager();
//     const channelCreate = 'I am a producer';
//     producer.createProductChannel();
//     expect(mockProductChannel.mock.calls[0][0]).toEqual(channelCreate);
// });