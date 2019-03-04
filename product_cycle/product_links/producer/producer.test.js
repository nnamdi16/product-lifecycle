//Import productChain class from productChain.js
const fs = require('fs');
const main = require('../../main');



const mockProducer = jest.fn();
jest.mock('./producer', () => {
    return jest.fn().mockImplementation(() => {
        return {
            move: mockProducer
        };
    });
});

beforeEach(() => {
    main.Producer.mockClear();
    mockProducer.mockClear();
});
describe('Check if the state of the productionChain called new() on Producer', () => {
    it(' should be able to call new() on Producer', () => {
        //Ensure the constructor created the object:
        const producer = new main.Producer();
        expect(producer).toBeTruthy();
    });
});

describe('Check if the constructor of the Producer class was called', () => {
    it('should check if the class constructor was called', () => {
        const producer = new main.Producer();
        expect(main.Producer).toHaveBeenCalledTimes(1);
    });
});

// describe('fs module test', () => {
//     const mockProductAppended = `Calista Na Product processed from Producer`;
//     beforeEach(() =>{
//         require('../../../__mocks__/fs');
//     });
//     it('It appended the exact product when the method move is called', () =>{
//         const producer = require('../producer/producer');

//     });
// })