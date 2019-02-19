//Import productChain class from productChain.js
const Retailer= require('./retailer');
const ProductChain = require('../productChain');



const mockRetailer = jest.fn();
jest.mock('./retailer', () => {
    return jest.fn().mockImplementation(() => {
        return {
            move: mockRetailer
        };
    });
});

beforeEach(() => {
    Retailer.mockClear();
    mockRetailer.mockClear();
});
describe('Check if the state of the productionChain called new() on Retailer', () => {
    it(' should be able to call new() on Retailer', () => {
        //Ensure the constructor created the object:
        const retailer = new Retailer();
        expect(retailer).toBeTruthy();
    });
});

describe('Check if the constructor of the Retailer class was called', () => {
    it('should check if the class constructor was called', () => {
        const retailer = new Retailer();
        expect(Retailer).toHaveBeenCalledTimes(1);
    });
});


// it('We can check if the producer called a method on the class instance', () => {
//     const producer = new ProductManager();
//     const channelCreate = 'I am a producer';
//     producer.createProductChannel();
//     expect(mockProductChannel.mock.calls[0][0]).toEqual(channelCreate);
// });