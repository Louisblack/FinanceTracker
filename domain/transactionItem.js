
module.exports = function (orm, db) {
    var TransactionItem = db.define('transactionItem', {
        transactionDate : Date,
        description     : String,
        amount          : Number
    },
    {


      
    });

    TransactionItem.saveTransactions = function(transactions) {
        transactions.forEach(function(transaction) {
            if (transaction['Paid out']) {
                TransactionItem.create({
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

};