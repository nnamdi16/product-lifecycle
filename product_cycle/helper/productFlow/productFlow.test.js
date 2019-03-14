// Import  fs and ExecuteOperation class.
const fs = require('fs');
const ProductFlow = require('./productFlow');

// Test case to check for the instance of ExecuteOperation class
describe('Check if the instance of the ExecuteOperation class is created', () => {
  it('Should create an instance of the ExecuteOperation class', () => {
    const productFlow = new ProductFlow();
    const result = {}
    expect(productFlow).toEqual(result);
  });

  it('Check if the Object created is an instance of the Consumer  Constructor', () => {
    const productFlow = new ProductFlow();
    expect(productFlow).toBeInstanceOf(ProductFlow);
  });
});

// Test case to check if the execute method reads the file based on the url
describe('Check whether files are read from the directory selected ', () => {
  it('Should check for impunities and remove it ', () => {
    let productFlow = new ProductFlow()
    let url = 'product_cycle/data/read'
    fs.writeFileSync(url, '///Read Shan Consumer//***')
    productFlow.execute(url)
    expect(productFlow.execute(url)).toBe('///Read Shan Consumer//***')
    fs.unlinkSync(url)
  })
})

// Test case to check if the removeImpunity method cleans the impunities in the file.
describe('Check whether removeImpunity cleans all impunities', () => {
  it('Should check for impunities and remove it ', () => {
    let productFlow = new ProductFlow()
    let url = 'product_cycle/data/read'
    let result = ['Read Shan Consumer', 'Sample Read Up']
    fs.appendFileSync(url, '///Read Shan Consumer\\\\\n\nSample Read Up')
    let data = productFlow.execute(url)
    let output = productFlow.removeImpunity(data)
    expect(output).toEqual(result)
    fs.unlinkSync(url)
  })

  it('Should check for impunities and remove it ', () => {
    let productFlow = new ProductFlow()
    let url = 'product_cycle/data/read'
    let result = ['Read Shan Producer']
    fs.writeFileSync(url, '///Read Shan \\\\')
    let data = productFlow.execute(url)
    let output = productFlow.removeImpunity(data)
    expect(output).toEqual(result)
    fs.unlinkSync(url)
  })
})

describe('Assigns states to the array of products', () => {
  it('Should assigns states to the array of products without an assigned state', () => {
    let url = 'product_cycle/data/read'
    let productFlow = new ProductFlow()
    fs.writeFileSync(url, '///Read Shan Consumer\\\\')
    let output = productFlow.assignState(url)
    let result = {
      state: 'Consumer',
      prop: '1 Read Shan'
    }
    expect(result).toEqual(output)
    fs.unlinkSync(url)
  })
})
