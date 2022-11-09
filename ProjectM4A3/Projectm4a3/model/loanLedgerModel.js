const mongoose = require('mongoose');

const loanLedgerSchema = new mongoose.Schema(
  {
    paymentAmount: {
        type: Number,
        required: [true, 'Loan Ledger must have amount']
    },
    interest: {
        type: Number,
        required: [true, 'A loan ledger must have an interest rate']
    },
    principal: {
        type: Number,
        required: [true, 'A loan must have a loan principal']
    },
    customerID:{
        type: Number,
        required: [true, 'A loan ledger must have a corresponding customer ID']
    },
    loanNumber: {
        type: Number,
        required: [true, 'A loan ledger must have a loan number']
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    modifiedDate: {
        type: Date,
        default: Date.now
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

const LoanLedger = mongoose.model('LoanLedger', loanLedgerSchema);

module.exports = LoanLedger;