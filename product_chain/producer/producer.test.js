//Import productChain class from productChain.js
const ProductManager = require('./producer');
const ProductChain = require('../productChain');



const mockProductChannel = jest.fn();
jest.mock('./producer', () => {
    return jest.fn().mockImplementation(() => {
        return {
            makeChannel: mockProductChannel
        };
    });
});

beforeEach(() => {
    ProductManager.mockClear();
    mockProductChannel.mockClear();
});
describe('Check if the channel called new() on ProductionChain', () => {
    it('The channel should be able to call new() on ProductChain', () => {
        //Ensure the constructor created the object:
        const producer = new ProductManager();
        expect(producer).toBeTruthy();
    });
});

describe('Check', () => {
    it('We can check if the producer called the class constructor', () => {
        const producer = new ProductManager();
        expect(ProductManager).toHaveBeenCalledTimes(1);
    });
});


// it('We can check if the producer called a method on the class instance', () => {
//     const producer = new ProductManager();
//     const channelCreate = 'I am a producer';
//     producer.createProductChannel();
//     expect(mockProductChannel.mock.calls[0][0]).toEqual(channelCreate);
// });