
var fileReader = require('./fileReader');

fileReader.findTransactions(function(transactions) {
    console.log(transactions);
});
