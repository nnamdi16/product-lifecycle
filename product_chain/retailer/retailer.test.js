//Import productChain class from productChain.js
const RetailerManager = require('./retailer');
const ProductChain = require('../productChain');



const mockProductChannel = jest.fn();
jest.mock('./retailer', () => {
    return jest.fn().mockImplementation(() => {
        return {
            makeChannel: mockProductChannel
        };
    });
});

beforeEach(() => {
    RetailerManager.mockClear();
    mockProductChannel.mockClear();
});
describe('Check if the channel called new() on ProductionChain', () => {
    it('The channel should be able to call new() on ProductChain', () => {
        //Ensure the constructor created the object:
        const retailer = new RetailerManager();
        expect(retailer).toBeTruthy();
    });
});

describe('Check', () => {
    it('We can check if the producer called the class constructor', () => {
        const retailer = new RetailerManager();
        expect(RetailerManager).toHaveBeenCalledTimes(1);
    });
});


// it('We can check if the producer called a method on the class instance', () => {
//     const producer = new ProductManager();
//     const channelCreate = 'I am a producer';
//     producer.createProductChannel();
//     expect(mockProductChannel.mock.calls[0][0]).toEqual(channelCreate);
// });