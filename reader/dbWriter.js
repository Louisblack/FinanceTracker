
var domain = require('../domain/');

exports.writeTransactions = function(transactions) {
    
    domain(function(err, db) {
        if (!err) {
            writeToDb(transactions, db);
        } else {
            console.log(err);
        }
    });

    
};

var writeToDb = function(transactions, db) {
    transactions.forEach(function(transaction) {
        if (transaction['Paid out']) {
            db.models.transactionItem.create({
            transactionDate: Date.parse(transaction.Date),
            description: transaction['Transaction type'] + transaction['Description'],
            amount: parseFloat(transaction['Paid out'].substr(1)) * 100
        }, function(err, item) {
            if (!err) {
                
            } else {
                console.log(err);
            }
        });
        }
        
    });
};

