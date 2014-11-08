
var fileReader = require('./fileReader'),
    dbWriter = require('./dbWriter');


fileReader.findTransactions(function(transactions) {
    //TODO Dedupe and categorise.
    dbWriter.writeTransactions(transactions);
});

