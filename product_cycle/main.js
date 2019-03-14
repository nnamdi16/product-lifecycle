//Export classes  to  main.js to avoid circular dependency
module.exports.Consumer = require('../product_cycle/product_links/consumer/consumer.js');
module.exports.Producer = require('../product_cycle/product_links/producer/producer');
module.exports.Retailer = require('../product_cycle/product_links/retailer/retailer');
module.exports.Recycler = require('../product_cycle/product_links/recycler/recycler');
module.exports.ProductChain = require('./helper/productChain/productChain');
module.exports.ProductFlow = require('./helper/productFlow/productFlow');
module.exports.ProductChainFactory = require('./helper/productChainFactory/productChainFactory');
module.exports.MoveProduct = require('./helper/moveProduct/moveProduct');
module.exports.Observable = require('./helper/observable/observable');



 