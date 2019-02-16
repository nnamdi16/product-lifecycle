//Import productChain class from productChain.js
const ConsumerManager = require('./consumer');
const ProductChain = require('../productChain');



const mockProductChannel = jest.fn();
jest.mock('./consumer', () => {
    return jest.fn().mockImplementation(() => {
        return {
            makeChannel: mockProductChannel
        };
    });
});

beforeEach(() => {
    ConsumerManager.mockClear();
    mockProductChannel.mockClear();
});
describe('Check if the channel called new() on ProductionChain', () => {
    it('The channel should be able to call new() on ProductChain', () => {
        //Ensure the constructor created the object:
        const consumer = new ConsumerManager();
        expect(consumer).toBeTruthy();
    });
});

describe('Check', () => {
    it('We can check if the producer called the class constructor', () => {
        const consumer = new ConsumerManager();
        expect(ConsumerManager).toHaveBeenCalledTimes(1);
    });
});


// it('We can check if the producer called a method on the class instance', () => {
//     const producer = new ProductManager();
//     const channelCreate = 'I am a producer';
//     producer.createProductChannel();
//     expect(mockProductChannel.mock.calls[0][0]).toEqual(channelCreate);
// });