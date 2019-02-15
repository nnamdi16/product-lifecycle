
const ProductChain = require('../productChain');
class Recycler {
    createChannel () {
        console.log('I am a recycler');
    }
}


class RecyclerManager extends ProductChain {
    makeChannel () {
        return new Recycler();
    }
}

module.exports = RecyclerManager;
