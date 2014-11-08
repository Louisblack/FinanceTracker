var settings = require('../settings'),
    parse = require("csv").parse,
    fs = require('fs');


exports.findTransactions = function(callback) {
    
    fs.readdir(settings.filePath, function(err, files) {
        if (!err) {
            var allTransactions = [];
            var waitingFor = 0;
            files.forEach(function(file) {
                if (file.indexOf('Statement') === 0) {
                    waitingFor++;
                    loadTransactionsFromFile(file, function(transactions) {
                        allTransactions = allTransactions.concat(transactions);
                        waitingFor--;
                        if (!waitingFor) {
                            callback(allTransactions);
                        }
                    });
                }
            })
        }
    }); 
};

var loadTransactionsFromFile = function(fileName, callback) {
    fs.readFile(settings.filePath + '/' + fileName, {encoding: 'utf-8'}, function(err, data) {
        if (!err) {
            
            var withoutHeader = data.substr(data.indexOf('"Date"'));
            parse(withoutHeader, {columns: true}, function(err, data) {
                callback(data);
            })
        }
    });
};
