
module.exports = function (orm, db) {
    var TransactionItem = db.define('transactionItem', {
        transactionDate : Date,
        description     : String,
        amount          : Number
    },
    {


      
    });

};