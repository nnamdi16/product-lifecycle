//Import productChain class from productChain.js
const fs = require('fs');
const main = require('../../main');



const mockRecycler = jest.fn();
jest.mock('./recycler', () => {
    return jest.fn().mockImplementation(() => {
        return {
            move: mockRecycler
        };
    });
});

beforeEach(() => {
    main.Recycler.mockClear();
    mockRecycler.mockClear();
});
describe('Check if the state of the productionChain called new() on Recycler', () => {
    it(' should be able to call new() on Recycler', () => {
        //Ensure the constructor created the object:
        const recycler = new main.Recycler();
        expect(recycler).toBeTruthy();
    });
});

describe('Check if the constructor of the Recycler class was called', () => {
    it('should check if the class constructor was called', () => {
        const recycler = new main.Recycler();
        expect(main.Recycler).toHaveBeenCalledTimes(1);
    });
});


// it('We can check if the producer called a method on the class instance', () => {
//     const producer = new ProductManager();
//     const channelCreate = 'I am a producer';
//     producer.createProductChannel();
//     expect(mockProductChannel.mock.calls[0][0]).toEqual(channelCreate);
// });