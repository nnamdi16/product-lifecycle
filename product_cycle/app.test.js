const ExecuteOperation = require('./app');
const fs = require('fs');
const productInput = require('../data/product-Input.txt');

const mockReadFile = jest.fn();
jest.mock('fs', () => {
    return jest.fn().mockImplementation(() => {
        return {
            execute: mockExecuteOperation  
        };
    });
});

beforeEach(() => {
    ExecuteOperation.mockClear();
    mockExecuteOperation.mockClear();
});
// jest.mock('fs');
describe('Check if any class called new() on ReadFile', () => {
    it('The channel should be able to call new() on ProductChain', () => {
        //Ensure the constructor created the object:
        const executeOperation = new ExecuteOperation();
        expect(executeOperation).toBeTruthy();
    });
});

describe('Check if the constructor was called', () => {
    it('We can check if the class constructor was called', () => {
        const executeOperation = new ExecuteOperation();
        expect(ExecuteOperation).toHaveBeenCalledTimes(1);
    });
});

// afterAll(() => {
//     mockReadFile.mockClear().restore();
//   });


// it('We can check if the producer called a method on the class instance', () => {
//     const readFile = new ReadFile();
//     const channelCreate = 'I am a producer';
//     readFile.read();
//     expect(mockReadFile.mock.calls[0][0]).toEqual(channelCreate);
// });