//Import productChain class from productChain.js
const RecyclerManager = require('./recycler');
const ProductChain = require('../productChain');



const mockProductChannel = jest.fn();
jest.mock('./recycler', () => {
    return jest.fn().mockImplementation(() => {
        return {
            makeChannel: mockProductChannel
        };
    });
});

beforeEach(() => {
    RecyclerManager.mockClear();
    mockProductChannel.mockClear();
});
describe('Check if the channel called new() on ProductionChain', () => {
    it('The channel should be able to call new() on ProductChain', () => {
        //Ensure the constructor created the object:
        const recycler = new RecyclerManager();
        expect(recycler).toBeTruthy();
    });
});

describe('Check', () => {
    it('We can check if the producer called the class constructor', () => {
        const recycler = new RecyclerManager();
        expect(RecyclerManager).toHaveBeenCalledTimes(1);
    });
});


// it('We can check if the producer called a method on the class instance', () => {
//     const producer = new ProductManager();
//     const channelCreate = 'I am a producer';
//     producer.createProductChannel();
//     expect(mockProductChannel.mock.calls[0][0]).toEqual(channelCreate);
// });