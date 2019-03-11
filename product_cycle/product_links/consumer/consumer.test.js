const fs = require('fs');
const Consumer = require('./consumer');
const transfer = require('../../helper/moveProduct/moveProduct');
const ExecuteOperation = require('../../app');

describe("Check if the instance of the consumer class is created", () => {
    it("Should create an instance of Consumer class", () => {
        const consumer = new Consumer();
        const result = {};
        expect(consumer).toEqual(result);
    });

    it("Check if the Object created is an instance of the Consumer  Constructor", () => {
        const consumer = new Consumer();
        expect(consumer).toBeInstanceOf(Consumer);
    });


});

// describe('Check whether removeImpunity cleaned all the impunities', () => {
//     it('Should check for impunities and remove it ', () => {
//         let consumer = new Consumer();
      
//        let result = 'Consumer ' 
//         expect(result).toBe(consumer.move('Consumer','Read Shan') );
//     });

// });