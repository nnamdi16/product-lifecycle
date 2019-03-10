const fs = require('fs');
const ExecuteOperation = require('./app');
const Product = require('../product_cycle/app');

describe("Check if the instance of the ExecuteOperation class is created", () => {
    it("Should create an instance of the ExecuteOperation class", () => {
        const executeOperation = new ExecuteOperation();
        const result = {};
        expect(executeOperation).toEqual(result);
    });

    it("Check if the Object created is an instance of the Consumer  Constructor", () => {
        const executeOperation = new ExecuteOperation();
        expect(executeOperation).toBeInstanceOf(ExecuteOperation);
    });


});
describe('Check whether files are read from the directory selected ', () => {
    it('Should check for impunities and remove it ', () => {
        let executeOperation = new ExecuteOperation();
        let url = 'data/read';
        fs.writeFileSync(url, '///Read Shan Consumer//***');
        executeOperation.execute(url);
        expect(executeOperation.execute(url)).toBe('///Read Shan Consumer//***');
        fs.unlinkSync(url);
    });

});

describe('Check whether removeImpunity cleans all impunities', () => {
    it('Should check for impunities and remove it ', () => {
        let executeOperation = new ExecuteOperation();
        let url = 'data/read';
        let result = ['Read Shan Consumer', 'Sample Read Up'];
        fs.appendFileSync(url, '///Read Shan Consumer\\\\\n\nSample Read Up');
        let data = executeOperation.execute(url);
        let output = executeOperation.removeImpunity(data);
        expect(output).toEqual(result);
        fs.unlinkSync(url);
    });

    it('Should check for impunities and remove it ', () => {
        let executeOperation = new ExecuteOperation();
        let url = 'data/read';
        let result = ['Read Shan Producer'];
        fs.writeFileSync(url, '///Read Shan \\\\');
        let data = executeOperation.execute(url);
        let output = executeOperation.removeImpunity(data);
        expect(output).toEqual(result);
        fs.unlinkSync(url);
    });
});




describe('Assigns states to the array of products', () =>{
    it('Should assigns states to the array of products without an assigned state',() =>{   
        let url = 'data/read';
        let executeOperation = new ExecuteOperation();
        fs.writeFileSync(url, '///Read Shan Consumer\\\\');
        let output = executeOperation.assignState(url);
        let result = {state:'Consumer', prop: 'Read Shan'};

        expect(result).toEqual(output);
    });

    // it('Should assigns states to the array of products with an assigned state',() =>{   
    //     let executeOperation = new ExecuteOperation();
    //     let output = executeOperation.assignState(['Back','Right','Consumer'],1);
    //     let result = ['Consumer', '1 Back Right'];

    //     expect(result).toEqual(output);
    // });

});

// describe('Removes impunities from the array of products', () =>{
//     it('Should remove impunities from array of products',() =>{   
//         let executeOperation = new ExecuteOperation();
//         let checkImpunity = executeOperation.removeImpunity(['///\tBack Right']);
//         let result = ['Producer', '1 Back Right'];

//         expect(result).toEqual(checkImpunity);
//     });

//     it('Should assigns states to the array of products with an assigned state',() =>{   
//         let executeOperation = new ExecuteOperation();
//         let output = executeOperation.removeImpunity(['//Back Right   Consumer']);
//         let result = ['Consumer', '1 Back Right'];

//         expect(result).toEqual(output);
//     });

// });