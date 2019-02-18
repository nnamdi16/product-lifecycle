const ReadFile = require('./readData');

const mockReadFile = jest.fn();
jest.mock('./readData.js', () => {
    return jest.fn().mockImplementation(() => {
        return {
            read: mockReadFile
        };
    });
});

beforeEach(() => {
    ReadFile.mockClear();
    mockReadFile.mockClear();
});
describe('Check if any class called new() on ReadFile', () => {
    it('The channel should be able to call new() on ProductChain', () => {
        //Ensure the constructor created the object:
        const readFile = new ReadFile();
        expect(readFile).toBeTruthy();
    });
});

describe('Check if the constructor was called', () => {
    it('We can check if the class constructor was called', () => {
        const readFile = new ReadFile();
        expect(ReadFile).toHaveBeenCalledTimes(1);
    });
});


// it('We can check if the producer called a method on the class instance', () => {
//     const readFile = new ReadFile();
//     const channelCreate = 'I am a producer';
//     readFile.read();
//     expect(mockReadFile.mock.calls[0][0]).toEqual(channelCreate);
// });