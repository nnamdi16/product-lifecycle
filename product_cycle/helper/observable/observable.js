//Observer object uses appendFileSync url, readFileSync url. and check property used as a stopper.
const observer = {
    check: null,
    write: 'product_cycle/data/output-file.txt',
    read: 'product_cycle/data/product-Input.txt'
};



module.exports.observer = observer;