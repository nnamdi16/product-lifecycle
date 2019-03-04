// const fs = require('../__mocks__/fs');
const fs = require('../__mocks__/fs');
const main = require('../product_cycle/main');

jest.mock('fs');


const mockExecuteOperation= jest.fn();
jest.mock('../product_cycle/app.js', () => {
    return jest.fn().mockImplementation(() => {
        return {
            execute: mockExecuteOperation  
        };
    });
});

beforeEach(() => {
    main.ExecuteOperation.mockClear();
    mockExecuteOperation.mockClear();
});
// jest.mock('fs');
describe('Check if any class called new() on ReadFile', () => {
    it('The channel should be able to call new() on ProductChain', () => {
        //Ensure the constructor created the object:
        const executeOperation = new main.ExecuteOperation();
        expect(executeOperation).toBeTruthy();
    });
});

describe('Check if the constructor was called', () => {
    it('We can check if the class constructor was called', () => {
        const executeOperation = new main.ExecuteOperation();
        expect(main.ExecuteOperation).toHaveBeenCalledTimes(1);
    });
});

// afterAll(() => {
//     mockReadFile.mockClear().restore();
//   });


it('We can check if the producer called a method on the class instance', () => {
    const executeOperation = new main.ExecuteOperation();
    let result = executeOperation.execute();
    expect(result).toEqual(`Calista Na Product processed from Producer`);
});