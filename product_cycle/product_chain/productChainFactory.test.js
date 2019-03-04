const fs = require('../../__mocks__/fs');
const main = require('../../product_cycle/main');

jest.mock('fs');

const mockProductChainFactory = jest.fn();
jest.mock('./productChainFactory', () => {
    return jest.fn().mockImplementation(() => {
        return {
            register: mockProductChainFactory
            // getProductLink: mockProductChainFactory
        };
    });
});

jest.mock('./producer/producer', () => {
    return jest.fn().mockImplementation(() => {
        return {

        };
    });
});

beforeEach(() => {
    main.ProductChainFactory.mockClear();
    mockProductChainFactory.mockClear();
});
describe('Check if the channel called new() on ProductionChain', () => {
    it('The channel should be able to call new() on ProductChain', () => {
        //Ensure the constructor created the object:
        const product = new main.ProductChainFactory();
        expect(product).toBeTruthy();
    });
});

describe('Check', () => {
    it('We can check if the producer called the class constructor', () => {
        const product = new main.ProductChainFactory();
        expect(main.ProductChainFactory).toHaveBeenCalledTimes(1);
    });
});

describe("Check if an instance of the productChainFactory class was created", () => {
    it("Should create an instance of the productChainFactory class", () => {
        class Producer {
            constructor() {

            }
        }
        const productChainFactory = new main.ProductChainFactory();

        productChainFactory.register('Producer', Producer);
        // productChainFactory.getProductLink('Producer');
        expect(productChainFactory).toEqual({
            "getProductLink": ['Function:mockConstructor'],
            "register": ['Function:mockConstructor']
        });
        //   expect(productChainFactory).toHaveProperty("getProductLink",[Function mockConstructor]);
    });
});
