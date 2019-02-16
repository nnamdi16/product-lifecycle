const ProductState = require('./productState');

const mockProductState = jest.fn();
jest.mock('./productState', () => {
    return jest.fn().mockImplementation(() => {
        return {
            change: mockProductState
        };
    });
});

beforeEach(() => {
    ProductState.mockClear();
    mockProductState.mockClear();
});
describe('Check if the channel called new() on ProductionChain', () => {
    it('The channel should be able to call new() on ProductChain', () => {
        //Ensure the constructor created the object:
        const productState = new ProductState();
        expect(productState).toBeTruthy();
    });
});

describe('Check', () => {
    it('We can check if the producer called the class constructor', () => {
        const producer = new ProductState();
        expect(ProductState).toHaveBeenCalledTimes(1);
    });
});


// it('We can check if the producer called a method on the class instance', () => {
//     const producer = new ProductManager();
//     const channelCreate = 'I am a producer';
//     producer.createProductChannel();
//     expect(mockProductChannel.mock.calls[0][0]).toEqual(channelCreate);
// });