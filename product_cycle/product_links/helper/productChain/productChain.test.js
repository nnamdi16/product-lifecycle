//Import productChain class from productChain.js
const fs = require('../../../../__mocks__/fs');
const main = require('../../../main');

jest.mock('fs');

const mockProductChain = jest.fn();
jest.mock('./productChain', () => {
    return jest.fn().mockImplementation(() => {
        return {
            start: mockProductChain
        };
    });
});

beforeEach(() => {
    main.ProductChain.mockClear();
    mockProductChain.mockClear();
});
describe('Check if the channel called new() on ProductionChain', () => {
    it('The channel should be able to call new() on ProductChain', () => {
        //Ensure the constructor created the object:
        const product = new main.ProductChain();
        expect(product).toBeTruthy();
    });
});

describe('Check', () => {
    it('We can check if the producer called the class constructor', () => {
        const product = new main.ProductChain();
        expect(main.ProductChain).toHaveBeenCalledTimes(1);
    });
});

describe("Check if an instance of the productChain class was created", () => {
    it("Should create an instance of the productChain class", () => {
      const productChain = new ProductChain('Producer','Calista Na');
      const result = {
        name: "Galvin Belson"
      };
      expect(admin).toEqual(result);
    });
});

// it('works', () => {
//     const produce = new ProductChain('Lucas Menefee', 'Producer');
//     const result = {
//         product:'Lucas Menefee',
//         state: 'Consumer'
//     }
//     expect(result).toBe(produce);
    
//   });
// describe('Check', () => {
//     it('Should create an instance of the ProductChain class', () => {
//         const product = new ProductChain('Calista Na');
//         const result = {'product':'Calista Na'};
//         expect(product).toEqual(result);
//     });
// });


// it('We can check if the producer called a method on the class instance', () => {
//     const producer = new ProductManager();
//     const channelCreate = 'I am a producer';
//     producer.createProductChannel();
//     expect(mockProductChannel.mock.calls[0][0]).toEqual(channelCreate);
// });