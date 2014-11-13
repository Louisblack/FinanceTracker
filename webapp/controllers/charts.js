
exports.allTransactions = function(req, res) {

    req.db.models.transactionItem.find({}, function(err, transactions) {

        if (err) {
            console.log(err);
        }
        console.log(transactions);
        res.send(transactions);
    });

};