//Import productChain class from productChain.js
const fs = require('fs');
const main = require('../../main');



const mockConsumer= jest.fn();
jest.mock('./consumer', () => {
    return jest.fn().mockImplementation(() => {
        return {
            move: mockConsumer
        };
    });
});

beforeEach(() => {
    main.Consumer.mockClear();
    mockConsumer.mockClear();
});
describe('Check if the state of the productionChain called new() on Consumer', () => {
    it('The channel should be able to call new() on ProductChain', () => {
        //Ensure the constructor created the object:
        const consumer = new main.Consumer();
        expect(consumer).toBeTruthy();
    });
});

describe('Check if the class constructor was called', () => {
    it('We can check if the class constructor was called', () => {
        const consumer = new main.Consumer();
        expect(main.Consumer).toHaveBeenCalledTimes(1);
    });
});


// it('We can check if the producer called a method on the class instance', () => {
//     const producer = new ProductManager();
//     const channelCreate = 'I am a producer';
//     producer.createProductChannel();
//     expect(mockProductChannel.mock.calls[0][0]).toEqual(channelCreate);
// });