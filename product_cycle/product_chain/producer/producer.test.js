//Import productChain class from productChain.js
const Producer = require('./producer');
const ProductChain = require('../productChain');
const readFile = require('../entry_point/readData');
const fs = require('fs');



const mockProducer = jest.fn();
jest.mock('./producer', () => {
    return jest.fn().mockImplementation(() => {
        return {
            move: mockProducer
        };
    });
});

beforeEach(() => {
    Producer.mockClear();
    mockProducer.mockClear();
});
describe('Check if the state of the productionChain called new() on Producer', () => {
    it(' should be able to call new() on Producer', () => {
        //Ensure the constructor created the object:
        const producer = new Producer();
        expect(producer).toBeTruthy();
    });
});

describe('Check if the constructor of the Producer class was called', () => {
    it('should check if the class constructor was called', () => {
        const producer = new Producer();
        expect(Producer).toHaveBeenCalledTimes(1);
    });
});


// it('We can check if the producer called a method on the class instance', () => {
//     const producer = new ProductManager();
//     const channelCreate = 'I am a producer';
//     producer.createProductChannel();
//     expect(mockProductChannel.mock.calls[0][0]).toEqual(channelCreate);
// });