const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})
BillingCycle.after('post', errorHandler).after('put', errorHandler)

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

// Bug do mongoose com o aggregate resolvido atualizando mongoose para versao 4.13.7
// e inserindo o codigo { useMongoClient: true } na chamada do mongoose no arquivo databse.js

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate({
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}, caixa: {$sum: "$inbox.value"}}
    }, {
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}, caixa: {$sum: "$caixa"}}
    }, {
        $project: {_id: 0, credit: 1, debt: 1, caixa: 1}
    }, (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || { credit: 0, debt: 0, caixa: 0 })
        }
    })
})

module.exports = BillingCycle